const prisma = require('../../config/db');

exports.getAllBMCTeams = async (page, limit) => {
  const program = 1;
  return await prisma.team.findMany({
    where: { programId: program },
    include: {
      leader: {
        select:{
          name:true
        },
      },
      submissionTeam: {
        select:{
          type:true,
          Files:{
            select:{
              filePath: true,
            },
            },
        },
      },
      statuscode: {
        select:{
          code: true
        },
      },
    },
    skip: (page - 1) * limit,
    take: limit
  });
};

exports.updateTeamStatus = async (teamIds, status) => {
  const statusID = await prisma.status.findUnique({
    where:{code : status}
  })
  if (!statusID) {
      return res.status(404).json({ message: `Status dengan code ${status} tidak ditemukan` });
    }
  return await prisma.team.updateMany({
    where: { id: { in: teamIds } },
    data: {
      status: statusID.id 
    }
  });
};

exports.getAllBMCParticipants = async (page, limit) =>{
  const program = 1;
  const type = "IDCARD"
  const team = await prisma.team.findMany({
    where: { programId: program },
    select:{
      id: true,
    }
  }); 
  const teamIds = team.map(t => t.id);
  return await prisma.TeamMember.findMany({
    where:{teamId : { in : teamIds}},
    include:{
      user: {
        select:{
          name: true, 
          email:true,
          birthdate: true, 
          domicile: true , 
          institution: true, 
          institution_name: true, 
          wa_number: true, 
          line_id: true, 
          insta_acc: true,
          Submission:{
          where:{type: type,},
          select:{
            Files:{
            select:{
              filePath: true,
            },
            },

          },
        },
        },
      },
    },
    skip: (page - 1) * limit,
    take: limit,

  });
};

exports.updateParticipantStatus = async (userIds, status) =>{
  const statusID = await prisma.status.findUnique({
    where:{code : status}
  })
  if (!statusID) {
      return res.status(404).json({ message: `Status dengan code ${status} tidak ditemukan` });
    }
  const result = await prisma.User.updateMany({
    where: {
      id: { in: userIds },
    },
    data: {
      status: statusID.id,
    },
  });

  return result; // Berisi jumlah yang diupdate
};


exports.postAnnouncementToTeamMembers = async (status, message, title, staffId) => {
  const team = await prisma.team.findMany({
    where: { status }
  });

  const teamId = team.teamId;
  const members = await prisma.TeamMember.findMany({
    where: {teamId : teamId}
  })

  await Promise.all(members.map(member =>
    prisma.notification.create({
      data: {
        userId: member.userId,
        title: title,
        message: message,
        purpose: 'ANNOUNCEMENT',
        staffId: staffId,

      }
    })
  ));
};

exports.postNotificationToAll = async (message, title, staffId) => {
  const users = await prisma.user.findMany();
  await Promise.all(users.map(user =>
    prisma.notification.create({
      data: {
        userId: user.id,
        title: title,
        message: message,
        purpose: 'NOTIFICATION',
        staffId: staffId,
      }
    })
  ));
};

exports.searchTeam = async (keyword) => {
  return await prisma.team.findMany({
    where: {
      OR: [
        { name: { contains: keyword} },
        { code: { contains: keyword} }
      ],
      programcode: { name: 'BMC' }
    },
    include: {
      Submission: true,
      statuscode: true
    }
  });
};