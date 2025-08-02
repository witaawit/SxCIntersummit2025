const prisma = require('../../config/db');
const { generateTeamCode, isCodeUnique, findProgramByName,checkLeader } = require('./bmcU.service');

exports.createTeam = async (req, res) => {
  try {
    const userId =  req.user.id; // Ambil ID user dari token yang sudah di-verify
    const {name} = req.body;
    const programBMC = await findProgramByName('BMC');
    let code;

    if (!programBMC) {
      return res.status(400).json({ message: 'Program BMC not found' });
    }

    const isLeader = await checkLeader(userId, programBMC.id);
    if (isLeader) {
      return res.status(400).json({ message: 'You are already a leader in this program' });
    }
    // Generate unique team code
    do {
      code = generateTeamCode();
    } while (!(await isCodeUnique(code)));


    const newTeam = await prisma.team.create({
      data: {
        leaderId: userId,
        name,
        code,
        programId: programBMC.id
      }
    });


    await prisma.teammembers.create({
      data: {
        teamId: newTeam.id,
        userId: userId,
      }
    });

    return res.status(201).json({
      message: 'Team created successfully',
      data: {
        id: newTeam.id,
        name: newTeam.name,
        leaderId: newTeam.leaderId,
        code: newTeam.code,
        programId: newTeam.programId
      }
    });

  } catch (error) {
    console.error('Create Team error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};