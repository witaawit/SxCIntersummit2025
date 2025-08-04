const express = require('express');
const router = express.Router();
const authController = require('../auth/auth.controller');
const { body } = require('express-validator');
const { authenticate } = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validation.middleware');
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { secret, expiresIn } = require("../config/jwt");

// =====================
// Register User (via OTP)
// =====================
router.post('/register', [
  body('name').notEmpty().withMessage('Name must be filled in'),
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], validate, authController.register);

router.post('/login', [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').notEmpty().withMessage('Password must be filled in')
], validate, authController.login);

router.post('/verifyOtp', [ 
  body('email').isEmail().withMessage('Invalid email'),
  body('otp').isLength({ min: 6, max: 6 }).withMessage('OTP must be 6 digits')
], validate, authController.verifyOTP);

router.post('/sendnewOTP', [
  body('email').isEmail().withMessage('Invalid email')
], validate, authController.sendNewOtp);

// =====================
// Get Token Info (Authenticated User)
// =====================
router.get('/me', authenticate, authController.getTokenData);

// =====================
// Google OAuth2
// =====================
router.get("/google", passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get("/google/callback", 
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const token = jwt.sign({ 
      id: req.user.id, 
      role: req.user.role, 
      accountType: 'user' 
    }, secret, { expiresIn });

    res.redirect(`https://your-frontend.com/oauth?token=${token}`);
});

module.exports = router;
