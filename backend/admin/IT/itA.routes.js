const express = require('express');
const router = express.Router();
const controller = require('./itA.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const { isSuperAdmin } = require('../../middlewares/role.middleware');

router.post('/staff', authenticate, isSuperAdmin, controller.createStaff);
router.get('/staff', authenticate, isSuperAdmin, controller.getAllStaff);
router.patch('/staff/:id', authenticate, isSuperAdmin, controller.updateStaff);
router.delete('/staff/:id', authenticate, isSuperAdmin, controller.deleteStaff);

router.post('/referral', authenticate, isSuperAdmin, controller.createReferral);
router.get('/referral', authenticate, isSuperAdmin, controller.getAllReferral);
router.delete('/referral/:id', authenticate, isSuperAdmin, controller.deleteReferral);

module.exports = router;
