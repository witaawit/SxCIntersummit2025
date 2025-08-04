const prisma = require('../../config/db');

exports.getAllBMCTeams = async (page, limit) => {
  return await prisma.team.findMany({
    where: { program: { name: 'BMC' } },
    include: {
      submission: true,
      payment: true,
      status: true
    },
    skip: (page - 1) * limit,
    take: limit
  });
};

exports.updateTeamStatus = async (teamId, status) => {
  return await prisma.team.update({
    where: { id: teamId },
    data: {
      status: { update: { value: status } }
    }
  });
};

exports.postAnnouncementToTeamMembers = async (teamId, message) => {
  const members = await prisma.teamMember.findMany({
    where: { teamId },
    include: { user: true }
  });

  await Promise.all(members.map(member =>
    prisma.notification.create({
      data: {
        userId: member.userId,
        content: message,
        type: 'announcement'
      }
    })
  ));
};

exports.postNotificationToAll = async (message) => {
  const users = await prisma.user.findMany();
  await Promise.all(users.map(user =>
    prisma.notification.create({
      data: {
        userId: user.id,
        content: message,
        type: 'notification'
      }
    })
  ));
};

exports.searchTeam = async (keyword) => {
  return await prisma.team.findMany({
    where: {
      OR: [
        { name: { contains: keyword, mode: 'insensitive' } },
        { code: { contains: keyword, mode: 'insensitive' } }
      ],
      program: { name: 'BMC' }
    },
    include: {
      submission: true,
      status: true
    }
  });
};