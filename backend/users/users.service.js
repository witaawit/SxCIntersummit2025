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

async function checkProfile(id){
    const user = id;
    const existUser = await prisma.user.findUnique({ 
      where: {id: user},
      select: {
        name: true,
        email: true,
        birthdate: true,
        domicile: true,
        institution: true,
        institution_name: true,
        major: true,
        wa_number: true,
        line_id: true,
        insta_acc: true,
        Submission: {
          where:{type: "IDCARD"},
          select:{
            Files:{
              select:{
                filePath: true,
              },
            },
          },
        },
      },
    });

    if(!existUser){
      res.status(404).json({message: 'user not found'});
    }
    
    return existUser;
};

async function updateStatus(userId,code) {
    const statusID = await prisma.status.findUnique({
            where:{code : code}
        })
        if (!statusID) {
            return res.status(404).json({ message: `Status dengan code 1 tidak ditemukan` });
            }
    return   await prisma.user.update({
            where: { id: userId },
            data: { status: statusID.id } // ganti sesuai nama field dan kode status yang Anda inginkan
        });


}

module.exports = { getProfile, updateProfile, checkProfile, updateStatus };