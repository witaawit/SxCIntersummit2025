const router = require('express').Router();
const controller = require('./users.controller');
const { authenticate, verifyProfile } = require('../middlewares/auth.middleware');
const {authorizeInstitution} = require('../middlewares/role.middleware');

router.get('/profile',authenticate, controller.getProfile);
router.patch('/profile/update',authenticate, controller.updateProfile);
router.use('/bmc', [verifyProfile, authorizeInstitution('HSC')], require('./bmc/bmcU.routes'));


module.exports = router;