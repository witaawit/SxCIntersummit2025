const prisma = require('../../config/db');
const crypto = require('crypto');

function generateTeamCode() {
  return crypto.randomBytes(3).toString('hex').toUpperCase();
}

async function isCodeUnique(code) {
  const exists = await prisma.team.findUnique({
    where: { code }
  });
  return !exists;
}

const findProgramByName = async (name) => {
  return await prisma.program.findFirst({
    where: { name }
  });
}

const checkUserInTeam = async (userId, teamId) => {
  const teamMember = await prisma.teammembers.findUnique({
    where: {
      userId_teamId: {
        userId,
        teamId
      }
    }
  });
  return !!teamMember;
}

const checkLeader = async (userId, programId) => {
  const existingteam = await prisma.team.findFirst({
    where: { 
        leaderId: userId,
        programId: programId
    }
  });
  return existingteam ? true : false;
}

module.exports = {
  generateTeamCode,
  isCodeUnique,
  findProgramByName,
  checkUserInTeam,
  checkLeader,
  findProgramByName,
};