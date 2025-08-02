const router = require('express').Router();
const controller = require('./users.controller');
const { authenticate } = require('../middlewares/auth.middleware');
const {authorizeInstitution} = require('../middlewares/role.middleware');

router.get('/Profile', controller.getProfile);
router.patch('/updateProfile', controller.updateProfile);
router.use("/bmc",[authorizeInstitution('HSC')], require('./bmc/bmcU.routes'));


module.exports = router;