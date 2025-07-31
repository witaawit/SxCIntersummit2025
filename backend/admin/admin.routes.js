    const router = require('express').Router();
    const controller = require('./admin.controller');
    const { authenticate } = require('../middlewares/auth.middleware');
    const { authorizeRoles } = require('../middlewares/role.middleware');
    const { AllAdminRoles } = require('../constants/roles');

    router.get('/users', authenticate, authorizeRoles(...AllAdminRoles), controller.getAllUsers);
    router.get('/staffs', authenticate, authorizeRoles(...AllAdminRoles), controller.getAllStaff);

    module.exports = router;