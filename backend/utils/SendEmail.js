const mail = require('nodemailer');


const transporter = mail.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,       // email kamu, ex: 'you@gmail.com'
    pass: process.env.GMAIL_APP_PASS    // password dari App Password (bukan password biasa!)
  }
});

async function sendEmail(to, subject, html) {
  try {
    const info = await transporter.sendMail({
      from: `"OTP System" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      html
    });

    console.log('Email terkirim: %s', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('Gagal kirim email:', error);
    return { success: false, error };
  }
}

module.exports = { sendEmail };