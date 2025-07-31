const { getProfile, updateProfile } = require('./users.service');

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
        const updated = await updateProfile(req.user.id, req.body);
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update profile'});
    }
};


