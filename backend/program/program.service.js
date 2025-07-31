const prisma = require('../config/db');

async function getAllPrograms() {
  return await prisma.program.findMany();
}

module.exports = { getAllPrograms };
