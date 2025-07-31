const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
const { body } = require('express-validator');
const { authenticate, isAdmin } = require('../middlewares/auth.middleware');
const validate = require('../middlewares/validation.middleware');

router.post('/register', [
  body('name').notEmpty().withMessage('Name must be filled in'),
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 6 }).withMessage('Password >=6 char')
], validate, authController.register);

router.post('/login', [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').notEmpty().withMessage('Password must be filled in')
], validate, authController.login);

router.post('/verifyOtp', [
  body('email').isEmail().withMessage('Invalid email'),
  body('otp').isLength({ min: 6, max: 6 }).withMessage('OTP must be 6 digits')
], validate, authController.verifyOTP);

router.post('/forgotPassword', [
  body('email').isEmail().withMessage('Invalid email')
], validate, authController.forgotPassword);

router.post('/resetPassword', [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], validate, authController.resetPassword);

router.post('/sendnewOTP', [
  body('email').isEmail().withMessage('Invalid email')
], validate, authController.sendNewOtp);

router.get('/me',[
  authenticate
], authController.getTokenData);

module.exports = router;
