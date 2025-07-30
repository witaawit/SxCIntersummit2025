const ROLES = require('../constants/roles');
if (req.user.role !== ROLES.ADMIN) return res.status(403).json({ message: MSG.FORBIDDEN });

module.exports = {
    ADMIN: 'ADMIN',  //super admin
    USER: 'USER',
    BMC_ADMIN: 'BMC_ADMIN',
    PO:'PO'
};