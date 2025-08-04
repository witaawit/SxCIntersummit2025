const prisma = require('../../config/db');

// PO bisa lihat semua submission dari semua program
async function getAllSubmissions() {
  return await prisma.submission.findMany({
    include: {
      registration: {
        include: {
          user: true,
          program: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

module.exports = { getAllSubmissions };