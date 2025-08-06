// sudah ada auth routes di folder auth, jadi tidak perlu membuat ulang

const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");
const { body } = require("express-validator");
const { authenticate, isAdmin } = require("../middlewares/auth.middleware");
const validate = require("../middlewares/validation.middleware");

const passport = require("passport");
const jwt = require("jsonwebtoken");
const { secret, expiresIn } = require("../config/jwt");

// =====================
// Register User (via OTP)
// =====================
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name must be filled in"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 6 }).withMessage("Password >=6 char"),
  ],
  validate,
  authController.register
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().withMessage("Password must be filled in"),
  ],
  validate,
  authController.login
);

router.post(
  "/verifyOtp",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("otp")
      .isLength({ min: 6, max: 6 })
      .withMessage("OTP must be 6 digits"),
  ],
  validate,
  authController.verifyOTP
);

router.post(
  "/sendnewOTP",
  [
    // Kirim ulang OTP
    body("email").isEmail().withMessage("Invalid email"),
  ],
  validate,
  authController.sendNewOtp
);

router.get("/me", authenticate, authController.getTokenData);
// router.get("/me", authController.getTokenData);

// Google OAuth Login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = jwt.sign(
      {
        id: req.user.id,
        role: req.user.role,
        accountType: "user",
      },
      secret,
      { expiresIn }
    );

    res.redirect(`https://your-frontend.com/oauth?token=${token}`);
  }
);

module.exports = router;
