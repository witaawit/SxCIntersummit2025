    const router = require('express').Router();
    const controller = require('./admin.controller');
    const { authenticate } = require('../middlewares/auth.middleware');
    const { authorizeRoles } = require('../middlewares/role.middleware');
    const { AllAdminRoles } = require('../constants/roles');
    const { staff_role } = require('@prisma/client');

    // Routes untuk IT, PO, BMC
    router.get('/users', authenticate, authorizeRoles(...AllAdminRoles), controller.getAllUsers);
    router.get('/staffs', authenticate, authorizeRoles(...AllAdminRoles), controller.getAllStaff);
   
    // Nest BMC routes
    router.use('/BMC', authenticate, authorizeRoles(staff_role.BMC_ADMIN), require("../admin/bmc/bmcA.routes"));
    
    module.exports = router;