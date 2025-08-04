const prisma = require('../config/db');
const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");

async function authenticate(req, res, next) {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }

    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ message: 'Authorization header malformed' });
    }

    const token = tokenParts[1];

    const blacklisted = await prisma.blacklist.findUnique({ where: { token } });

    if (blacklisted) {
      if (new Date() > blacklisted.expiresAt) {
        await prisma.blacklist.delete({ where: { token } });
        return res.status(401).json({ message: 'Token expired and removed from blacklist' });
      }
      return res.status(401).json({ message: 'Token revoked (blacklisted)' });
    }

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid or expired token' });
      }
      req.user = decoded;
      next();
    });
  } catch (error) {
    console.error('Authenticate Middleware Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { authenticate };