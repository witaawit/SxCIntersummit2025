const prisma = require('../../config/db');
const { generateTeamCode, isCodeUnique, findProgramByName,checkLeader, findMember, findTeamByCode, teamLimitCheck, joinTeam, checkTeamName, createTeam, getTeamMembers} = require('./bmcU.service');


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

    const teamExist = await checkTeamName(name);
    if (teamExist){
        return res.status(400).json({ message: 'Team name is already exist' });
    }
    // Generate unique team code
    do {
      code = generateTeamCode();
    } while (!(await isCodeUnique(code)));


    const newTeam = await createTeam({
        leaderId: userId,
        name,
        code: code,
        programId: programBMC.id
      });
    if (!newTeam){
        return res.status(400).json({ message: 'Error Team is not created' });
    }


    const relations = await prisma.TeamMember.create({
      data: {
        teamId: newTeam.id,
        userId: userId
      }
    });

    if(!relations){
        return res.status(400).json({ message: 'relations is not generate' });
    }

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

exports.joinTeam = async (req, res) => {
    try{
        const userId = req.user.id; // Ambil ID user dari token yang sudah di-verify
        const { code } = req.body;

        const team = await findTeamByCode(code);
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        const isMember = await findMember(userId, team.id);
        if (isMember) {
            return res.status(400).json({ message: 'You are already a member of this team' });
        }
        const capacity = team.capacity || 5; // Default capacity is 5 if not set
        const canJoin = await teamLimitCheck(team.id, capacity);
        if (!canJoin) {
            return res.status(400).json({ message: 'Team is full' });
        }
        // Bergabung dengan tim
        await joinTeam(userId, team.id);
        return res.status(200).json({ message: 'Successfully joined the team' });
    } catch (error) {
        console.error('Join Team error:', error);
        return res.status(500).json({ message: 'Server error' });
    }
}

exports.teamMembers = async(req, res) => {
    try{ 
        const userId = req.user.id

        const getMember = await getTeamMembers(userId);
        if (!getMember){
            return res.status(404).json({ message: 'member not found' });
        }
        return res.json(getMember);
    } catch(error) {
        console.error('Get all Member error:', error);
        return res.status(500).json({ message: 'Server error' });
    }
    
}