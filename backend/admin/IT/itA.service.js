const prisma = require('../../config/db');

// === STAFF ===
exports.createStaff = async (data) => {
  return await prisma.staff.create({ data });
};

exports.getAllStaff = async () => {
  return await prisma.staff.findMany();
};

exports.updateStaff = async (id, data) => {
  return await prisma.staff.update({
    where: { id },
    data,
  });
};

exports.deleteStaff = async (id) => {
  return await prisma.staff.delete({
    where: { id },
  });
};

// === REFERRAL ===
exports.createReferral = async (data) => {
  return await prisma.referral.create({ data });
};

exports.getAllReferral = async () => {
  return await prisma.referral.findMany();
};

exports.deleteReferral = async (id) => {
  return await prisma.referral.delete({
    where: { id },
  });
};
