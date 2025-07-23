const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token Not Found" });

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    return res.status(401).json({ message: "Invalid Token" });
  }
};

// Middleware otorisasi berdasarkan role
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: Role not allowed" });
    }
    next();
  };
};

// Middleware otorisasi berdasarkan divisi (opsional untuk ADMIN)
const authorizeDivisions = (...allowedDivisions) => {
  return (req, res, next) => {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Forbidden: Admins only" });
    }

    if (!allowedDivisions.includes(req.user.division)) {
      return res.status(403).json({ message: `Forbidden: Only for divisions: ${allowedDivisions.join(", ")}` });
    }

    next();
  };
};

const isAdmin = (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ message: "Forbidden: Admins only" });
  }
  next();
};

module.exports = {
  authenticate,
  isAdmin,
  authorizeRoles,
  authorizeDivisions
};
