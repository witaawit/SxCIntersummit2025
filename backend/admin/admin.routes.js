    const router = require('express').Router();
    const controller = require('./admin.controller');
    const { authenticate, isAdmin } = require('../middlewares/auth.middleware');

    router.get('/users', authenticate, isAdmin, controller.getAllUsers);
    router.get('/staffs', authenticate, isAdmin, controller.getAllStaff);

    module.exports = router;