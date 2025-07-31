const prisma = require('../config/db');
const verif = prisma.PendingUserVerification;

const { sendEmail } = require("../utils/SendEmail");

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
  await prisma.user.update({
    where: { email },
    data: { password: hashedPassword },
  });
};

module.exports = { findUserByEmail, createTempUser, createUser, findTempEmail, 
  sendOtpEmail, incrementAttempt, deleteTempUser, updateTempUser, findStaffByEmail, updateUserPassword };
