const prisma = require('../../config/db');

async function getSubmissionsByProgramName(programName) {
  return await prisma.submission.findMany({
    where: {
      registration: {
        program: {
          name: programName
        }
      }
    },
    include: {
      registration: {
        include: {
          user: true,
          program: true
        }
      }
    }
  });
}

async function verifySubmissionById(id) {
  return await prisma.submission.update({
    where: { id },
    data: {
      validated: true
    }
  });
}

async function deleteSubmissionById(id) {
  return await prisma.submission.delete({
    where: { id }
  });
}

module.exports = { getSubmissionsByProgramName, verifySubmissionById, deleteSubmissionById };
