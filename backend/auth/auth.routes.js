const express = require('express');
const router = express.Router();
const authController = require('../auth/auth.controller');
const { body } = require('express-validator');
const validate = require('../middlewares/validation.middleware');
const { authenticate } = require('../middlewares/auth.middleware');

// Register
router.post('/register', [
  body('name').notEmpty().withMessage('Name must be filled in'),
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], validate, authController.register);

// Login
router.post('/login', [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').notEmpty().withMessage('Password must be filled in')
], validate, authController.login);

// OTP Verification
router.post('/verifyOtp', [ 
  body('email').isEmail().withMessage('Invalid email'),
  body('otp').isLength({ min: 6, max: 6 }).withMessage('OTP must be 6 digits')
], validate, authController.verifyOTP);

// Send New OTP
router.post('/sendnewOTP', [
  body('email').isEmail().withMessage('Invalid email')
], validate, authController.sendNewOtp);

// Get Authenticated User Data
router.get('/me', authenticate, authController.getTokenData);

module.exports = router;
