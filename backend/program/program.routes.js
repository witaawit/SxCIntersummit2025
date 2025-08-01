const express = require('express');
const router = express.Router();
const { getPrograms } = require('./program.controller');
const { authenticate } = require('../middlewares/auth.middleware');

router.get('/',authenticate, getPrograms);

module.exports = router;