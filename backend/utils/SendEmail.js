const mail = require('nodemailer');

const transporter = mail.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASS
  }
});

/**
 * Fungsi umum kirim email
 */
async function sendEmail(to, subject, html) {
  try {
    const info = await transporter.sendMail({
      from: `"SxC OTP System" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      html
    });

    console.log('Email sent: %s', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('Gagal kirim email:', error);
    return { success: false, error };
  }
}

/**
 * Fungsi kirim OTP email
 */
async function sendOtpEmail(email, otp) {
  const html = `<p>Kode OTP Anda adalah: <strong>${otp}</strong></p>`;
  return await sendEmail(email, 'Kode OTP Anda', html);
}

module.exports = {
  sendEmail,
  sendOtpEmail
};
