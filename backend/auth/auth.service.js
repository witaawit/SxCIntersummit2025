const prisma = require('../config/db');
const messages = require('../constants/messages');
const verif = prisma.pendinguserverification;
const jwt = require('jsonwebtoken');
const { sendEmail } = require("../utils/SendEmail");

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}


async function findUserByEmail(email) {
  return await prisma.user.findUnique({ where: { email } });
}

async function findStaffByEmail(email) {
  return await prisma.staff.findUnique({ where: { email } });
}

async function findTempEmail(email) {
  return await verif.findUnique({ where: { email } });
}

async function createTempUser(data) {
  return await verif.create({ data });
}

async function createUser(data) {
  return await prisma.user.create({ data });
};

async function sendOtpEmail(email, otp) {
  const html = `<p>Kode OTP Anda adalah: <strong>${otp}</strong></p>`;
  const result = await sendEmail(email, 'Kode OTP Anda', html);
  return result;
}

async function incrementAttempt(email) {
  return await verif.update({
    where: { email },
    data: {
      otpTries: { increment: 1 }
    }
  });
}

async function deleteTempUser(email) {
  return await verif.delete({
    where: { email }
  });
}

async function updateTempUser(email, data) {
  return await verif.update({
    where: { email },
    data
  });
}

async function updateUserPassword(email, hashedPassword) {
  return await prisma.user.update({
    where: { email },
    data: { password: hashedPassword },
  });
};

async function verifyReferralCode(code) {
  const referralCode = await prisma.referral.findUnique({ where: { code } });
  if (!referralCode) {
    return { valid: false, message: messages.INVALID_REFERRAL };
  }
  return { valid: true, data: referralCode };
}

async function findReferralByCode(code) {
  const referral= await prisma.referral.findUnique({ where: { code } });
  return referral;
}

async function addTokenToBlacklist(token) {
  try {
    const decoded = jwt.decode(token);
    if (!decoded || !decoded.exp) {
      throw new Error('Invalid token: cannot find exp claim');
    }
    const existToken = await prisma.blacklist.findUnique({ where: { token } });
    if (existToken) {
      return { success: false, message: 'Token already blacklisted' };
    }
    const expiresAt = new Date(Date.now() + 60 * 1000);
    await prisma.blacklist.create({ data: { token, expiresAt } });
  } catch (error) {
    console.error('Failed to add token to blacklist:', error);
  }
}


module.exports = {
  findUserByEmail,
  createTempUser,
  createUser,
  findTempEmail,
  sendOtpEmail,
  incrementAttempt,
  deleteTempUser,
  updateTempUser,
  findStaffByEmail,
  updateUserPassword,
  verifyReferralCode,
  findReferralByCode,
  addTokenToBlacklist,
  generateToken,
  verifyToken
};
