const express = require('express');
const router = express.Router();
const bmcUController = require('./bmcU.controller');
const authMiddleware = require('../../middlewares/auth.middleware'); 


router.post('/team/create', bmcUController.createTeam);

module.exports = router;