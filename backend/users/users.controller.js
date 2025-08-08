const messages = require('../constants/messages');
const { getProfile, updateProfile, checkProfile, updateStatus } = require('./users.service');

exports.getProfile = async (req, res) => {
    try {
        const user = await getProfile(req.user.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve profile data'});
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const { name,email,birthdate, domicile, institution, institution_name, major, wa_number, line_id, insta_acc } = req.body;
            // Ubah birthdate ke DateTime lengkap, misalnya tambahkan jam 00:00:00 di server
        let birthdateWithTime = null;
        if (birthdate) {
        birthdateWithTime = new Date(birthdate + "T00:00:00.000Z");
        }

        // Siapkan objek data yang akan dikirim ke updateProfile
        const dataToUpdate = {
        name,
        email,
        birthdate: birthdateWithTime,
        domicile,
        institution,
        institution_name,
        major,
        wa_number,
        line_id,
        insta_acc,
        };

        // Panggil fungsi updateProfile dengan userId dan data objek
        const updated = await updateProfile(userId, dataToUpdate);
        const profileCheck = await checkProfile(userId);

         // Jika semua data sudah lengkap (semua field tidak null/undefined)
        const allFilled = Object.values(profileCheck).every(value => value !== null && value !== undefined && value !== '');

        if (allFilled) {
        const code = "1"
        const statusUpdate = await updateStatus(userId,code)
        if (!statusUpdate){
            res.status(400).json({message:'Failed to update status'})
        }
        };
        

        res.status(200).json(updated);
    } catch (error) {
        console.error("Error upadte Profile :", error);
        res.status(500).json({ message: 'Failed to update profile'});
    }
};


