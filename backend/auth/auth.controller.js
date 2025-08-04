// ini controller untuk autentikasi (login, register, verifikasi OTP, dan forgot-password)
const { findUserByEmail, createUser, createTempUser, findTempEmail, sendOtpEmail, incrementAttempt, deleteTempUser, updateTempUser, findStaffByEmail, updateUserPassword, verifyReferralCode, findReferralByCode, addTokenToBlacklist } = require("./auth.service");
const { hashPassword, comparePassword } = require("../utils/hash");
const {validatePassword} = require("../utils/password")
const jwt = require("jsonwebtoken");
const { secret, expiresIn } = require("../config/jwt");
const MSG = require("../constants/messages");
const { referral } = require("../config/db");

// const prisma = require("../config/db");



const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
}; // Generates a 6-digit OTP

// untuk register 
exports.register = async (req, res) => {
  const { name, email, password, referral } = req.body;
  const existingUser = await findUserByEmail(email);
  const existingStaff = await findStaffByEmail(email);
  if (existingUser || existingStaff) {
    return res.status(400).json({ message: MSG.EMAIL_EXISTS });
  }
  const passwordError = await validatePassword(password);
  if (passwordError.valid == false) {
    return res.status(400).json({ message: passwordError.message });
  }
  const hashed = await hashPassword(password);
  let referralData = null;

  if (referral && referral.trim() !== "") {
    referralData = await verifyReferralCode(referral);
    if (!referralData.valid) {
      return res.status(400).json({ message: referralData.message });
    }
  }

  const referralCode = referralData ? referralData.data.code : null;
  const OTP = generateOTP();
  const user = await createTempUser({ name, email, password: hashed, referral: referralCode, otp: OTP, purpose: 'register' }); // insert temp user dengan field name, email, password, dan otp

  const result = await sendOtpEmail(email, OTP);
  if (!result.success) {
    return res.status(500).json({ message: "Gagal mengirim OTP ke email" });
  }

  res.status(201).json({
    message: MSG.REGISTER_SUCCESS,
    user,
    note: "OTP terkirim ke email"
  });
};


// untuk login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  const staff = await findStaffByEmail(email);

  if (!user && !staff) return res.status(404).json({ message: MSG.EMAIL_NOT_FOUND });

  const valid = await comparePassword(password, user?.password || staff?.password);
  if (!valid) return res.status(401).json({ message: MSG.INVALID_PASSWORD });

  let id, role, accountType, division = null;
  if (staff) {
    ({ id, role, division } = staff);
    accountType = 'staff';
  }else {
   ({ id, role, institution } = user);
    accountType = 'user';
    division = null;
  }
  const token = jwt.sign({ id, role, accountType, division, institution }, secret, { expiresIn });
  res.json({ message: MSG.LOGIN_SUCCESS, token });
  try {
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// untuk forgot password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await findUserByEmail(email);

  if (!user) return res.status(404).json({ message: MSG.EMAIL_NOT_FOUND });

  const Otp = generateOTP();
  await createTempUser({ email,otp: Otp, purpose: 'forgot_password' });

  const result = await sendOtpEmail(email, Otp);
  if (!result.success) {
    return res.status(500).json({ message: "Gagal mengirim OTP ke email" });
  }
  res.status(200).json({ message: "OTP untuk reset password telah dikirim ke email Anda" });
};

exports.resetPassword = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user) return res.status(404).json({ message: MSG.EMAIL_NOT_FOUND });

  const hashed = await hashPassword(password);
  await updateUserPassword(email, hashed);
  res.status(200).json({ message: "Password berhasil direset" });
};

// untuk verifikasi OTP ketika register
exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  const tempUser = await findTempEmail(email);

  if (!tempUser) return res.status(404).json({ message: MSG.EMAIL_NOT_FOUND });

  if (tempUser.otp !== otp) {
    await incrementAttempt(email);

    if (tempUser.otpTries + 1 >= 3) {
      await deleteTempUser(email);
      return res.status(400).json({ message: 'OTP salah 3 kali. Data registrasi dihapus.' });
    }

    return res.status(400).json({
      message: MSG.OTP_INVALID,
      attemptsLeft: 3 - (tempUser.otpTries + 1)
    });
  }

  const otpAge = Date.now() - new Date(tempUser.otpSentAt).getTime();
  if (otpAge > 1 * 60 * 1000) { // 1 menit
    return res.status(400).json({ message: MSG.OTP_EXPIRED });
  }

  if (tempUser.purpose === 'register') { 
    const user = await createUser({
      name: tempUser.name,
      email: tempUser.email,
      password: tempUser.password,
      referralId: tempUser.referral
    });

    await deleteTempUser(email);
    return res.status(201).json({ message: MSG.OTP_VERIFIED, user });
  } 
  
  if (tempUser.purpose === 'forgot_password') {
    await deleteTempUser(email);
    return res.status(200).json({ message: MSG.OTP_VERIFIED, user: { email } });
  }

  return res.status(400).json({ message: 'Invalid purpose for OTP verification' });
};

// untuk send otp baru ketika user ingin mengirim ulang OTP
exports.sendNewOtp = async (req, res) => {
  const { email } = req.body;
  const tempUser = await findTempEmail(email);

  if (!tempUser) return res.status(404).json({ message: MSG.EMAIL_NOT_FOUND });

  const newOtp = generateOTP();
  await updateTempUser(email, { otp: newOtp, otpTries: 0, otpSentAt: new Date() });

  const result = await sendOtpEmail(email, newOtp);
  if (!result.success) {
    return res.status(500).json({ message: "Gagal mengirim OTP ke email" });
  }

  res.status(200).json({ message: "OTP baru telah dikirim ke email Anda" });
};

exports.logout = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(400).json({ message: 'No token provided' });
    
    const token = authHeader.split(' ')[1];
    
    await addTokenToBlacklist(token);
       
    return res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// testing jwt token di postman untuk cek id dan role
exports.getTokenData = (req, res) => {
  // req.user diisi dari middleware setelah verifikasi JWT
  const { id, role, accountType, division, institution } = req.user;

  res.status(200).json({
    message: 'Data user dari token JWT',
    user: { id, role, accountType, division, institution }
  });
}