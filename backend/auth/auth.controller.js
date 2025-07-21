const { findUserByEmail, createUser } = require("./auth.service");
const { hashPassword, comparePassword } = require("../utils/hash");
const jwt = require("jsonwebtoken");
const { secret, expiresIn } = require("../config/jwt");
const MSG = require("../constants/messages");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await findUserByEmail(email);

  if (existingUser) return res.status(400).json({ message: MSG.EMAIL_EXISTS });

  const hashed = await hashPassword(password);
  const user = await createUser({ name, email, password: hashed });

  res.status(201).json({ message: MSG.REGISTER_SUCCESS, user });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user) return res.status(404).json({ message: MSG.EMAIL_NOT_FOUND });

  const valid = await comparePassword(password, user.password);
  if (!valid) return res.status(401).json({ message: MSG.INVALID_PASSWORD });

  const token = jwt.sign({ id: user.id }, secret, { expiresIn });
  res.json({ message: MSG.LOGIN_SUCCESS, token });
  try {
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
