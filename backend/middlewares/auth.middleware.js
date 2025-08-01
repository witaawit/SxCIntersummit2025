const prisma = require('../config/db');
const jwt = require("jsonwebtoken");
const { secret } = require("../config/jwt");


async function authenticate(req, res, next) {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }

    // Extract token only (without "Bearer ")
    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ message: 'Authorization header malformed' });
    }

    const token = tokenParts[1];
    console.log('Received token:', token);

    const blacklisted = await prisma.blacklist.findUnique({
      where: { token }
    });

    if (blacklisted) {
      if (new Date() > blacklisted.expiresAt) {
        await prisma.blacklist.delete({ where: { token } });
        return res.status(401).json({ message: 'Token expired and removed from blacklist' });
      }
      // Token masih valid dan ada di blacklist
      return res.status(401).json({ message: 'Token revoked (blacklisted)' });
    }

    // Verifikasi token JWT
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid or expired token' });
      }

      // Simpan data user hasil decode ke request agar bisa diakses di route selanjutnya
      req.user = decoded;

      // Lanjut ke middleware berikutnya / route handler
      next();
    });

  } catch (error) {
    console.error('Authenticate Middleware Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = { authenticate };
