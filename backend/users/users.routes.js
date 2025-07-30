const router = require('express').Router();
const controller = require('./users.controller');
const { authenticate } = require('../middlewares/auth.middleware');

router.get('/Profile', authenticate, controller.getProfile);
router.patch('/updateProfile', authenticate, controller.updateProfile);

module.exports = router;