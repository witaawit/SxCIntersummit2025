const prisma = require('../config/db');

async function getProfile(id) {
    return await prisma.user.findUnique({ where: {id} });    
}

async function updateProfile(id, data) {
    return await  prisma.user.update({
        where: { id },
        data
    });    
}

async function createTeam(){
    
}

module.exports = { getProfile, updateProfile };