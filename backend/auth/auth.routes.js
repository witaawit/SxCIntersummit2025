const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
const { body } = require('express-validator');
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

module.exports = router;