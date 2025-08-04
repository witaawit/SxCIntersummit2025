const express = require('express');
const router = express.Router();
const controller = require('./bmcA.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const { isBMCAdmin, isSuperAdmin } = require('../../middlewares/role.middleware');

router.get('/teams', authenticate, isBMCAdmin, controller.getAllBMCTeams);
router.patch('/teams/:id/status', authenticate, isBMCAdmin, controller.updateTeamStatus);
router.post('/announcement/team/:id', authenticate, isBMCAdmin, controller.postAnnouncementToTeamMembers);
router.post('/announcement/all', authenticate, isSuperAdmin, controller.postNotificationToAll);
router.get('/search', authenticate, isBMCAdmin, controller.searchTeam);

module.exports = router;