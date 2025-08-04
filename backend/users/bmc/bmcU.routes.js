const express = require('express');
const router = express.Router();
const bmcUController = require('./bmcU.controller');
const authMiddleware = require('../../middlewares/auth.middleware'); 


router.post('/team/create', bmcUController.createTeam);
router.post('/team/join', bmcUController.joinTeam);
router.get('/team/member', bmcUController.teamMembers );

module.exports = router;