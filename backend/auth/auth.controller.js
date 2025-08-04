const {
  findUserByEmail,
  findStaffByEmail,
  createTempUser,
  findTempUserByEmail,
  deleteTempUser,
  verifyReferralCode,
  verifyOTPandCreateUser,
  resendOtpToUser,
  generateToken 
} = require('./auth.service');

const { hashPassword, comparePassword } = require('../utils/hash');
const { validatePassword } = require('../utils/password');
const { sendOtpEmail } = require('../utils/SendEmail');
const MSG = require('../constants/messages');

// Generate 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.register = async (req, res) => {
  try {
    const { name, email, password, referral } = req.body;

    const existingUser = await findUserByEmail(email);
    const existingStaff = await findStaffByEmail(email);
    if (existingUser || existingStaff) {
      return res.status(400).json({ message: MSG.EMAIL_EXISTS });
    }

    const passwordValidation = await validatePassword(password);
    if (!passwordValidation.valid) {
      return res.status(400).json({ message: passwordValidation.message });
    }

    const hashedPassword = await hashPassword(password);
    let referralCode = null;

    if (referral?.trim()) {
      const referralResult = await verifyReferralCode(referral);
      if (!referralResult.valid) {
        return res.status(400).json({ message: referralResult.message });
      }
      referralCode = referralResult.data.code;
    }

    const otp = generateOTP();
    const tempUser = await createTempUser({
      name,
      email,
      password: hashedPassword,
      otp,
      purpose: 'register'
    });

    const result = await sendOtpEmail(email, otp);
    if (!result.success) {
      return res.status(500).json({ message: 'Failed to send OTP email' });
    }

    return res.status(201).json({
      message: MSG.REGISTER_SUCCESS,
      user: { name: tempUser.name, email: tempUser.email },
      note: 'OTP has been sent to your email'
    });

  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({ message: error.message || "Internal Server Error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: MSG.INVALID_CREDENTIALS });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: MSG.INVALID_CREDENTIALS });
    }

    const token = generateToken({
      id: user.id,
      role: user.role,
      accountType: 'user'
    });

    return res.status(200).json({
      message: MSG.LOGIN_SUCCESS,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'An error occurred on the server' });
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await findTempUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: MSG.USER_NOT_FOUND });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: MSG.OTP_INVALID });
    }

    const newUser = await verifyOTPandCreateUser(user);
    await deleteTempUser(email);

    return res.status(200).json({
      message: MSG.REGISTER_VERIFIED,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name
      }
    });

  } catch (error) {
    console.error('Verify OTP error:', error);
    return res.status(500).json({ message: 'An error occurred on the server' });
  }
};

exports.sendNewOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const tempUser = await findTempUserByEmail(email);
    if (!tempUser) {
      return res.status(404).json({ message: MSG.USER_NOT_FOUND });
    }

    const newOtp = generateOTP();
    const result = await resendOtpToUser(email, newOtp);

    if (!result.success) {
      return res.status(500).json({ message: 'Failed to send OTP email' });
    }

    return res.status(200).json({
      message: MSG.OTP_SENT,
      note: 'New OTP has been sent to your email'
    });
  } catch (error) {
    console.error('Send new OTP error:', error);
    return res.status(500).json({ message: 'An error occurred on the server' });
  }
};

exports.getTokenData = async (req, res) => {
  try {
    const user = req.user;
    return res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  } catch (error) {
    console.error('Get token data error:', error);
    return res.status(500).json({ message: 'An error occurred on the server' });
  }
};
