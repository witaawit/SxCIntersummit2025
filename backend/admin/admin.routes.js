    const router = require('express').Router();
    const controller = require('./admin.controller');
    const { authenticate } = require('../middlewares/auth.middleware');
    const { authorizeRoles } = require('../middlewares/role.middleware');
    const { AllAdminRoles } = require('../constants/roles');
    const { StaffRole } = require('@prisma/client');

    // Routes untuk IT, PO, BMC
    router.get('/users', authenticate, authorizeRoles(...AllAdminRoles), controller.getAllUsers);
    router.get('/staffs', authenticate, authorizeRoles(...AllAdminRoles), controller.getAllStaff);
    router.use('/bmc', authenticate, authorizeRoles(StaffRole.BMC_ADMIN), require("./bmc/bmcA.routes"));
    router.use('/po', authenticate, authorizeRoles(StaffRole.PO), require("./po/poA.routes"));
    router.use('/it', authenticate, authorizeRoles(StaffRole.ADMIN), require("./IT/itA.routes") )
    module.exports = router;