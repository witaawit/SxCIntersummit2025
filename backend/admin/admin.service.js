const prisma = require('../config/db');

async function getAllUsers() {
    return await prisma.user.findMany();
}

async function getAllStaff() {
    return await prisma.staff.findMany();
}

module.exports = { getAllUsers, getAllStaff };