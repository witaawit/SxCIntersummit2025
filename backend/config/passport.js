const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const prisma = require('../prisma/db'); 
const { StaffRole } = require('@prisma/client');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const email = profile.emails[0].value;

    // Cek apakah user sudah ada
    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      // Buat user baru
      user = await prisma.user.create({
        data: {
          name: profile.displayName,
          email,
          password: 'google',         // placeholder
          role: 'USER',               // default role
        }
      });
    }

    return done(null, user); // JWT akan diproses di /google/callback
  } catch (error) {
    return done(error, null);
  }
}));

module.exports = passport;
