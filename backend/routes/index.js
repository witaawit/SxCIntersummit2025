const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/auth.middleware');
const { authorizeRoles } = require('../middlewares/role.middleware');
const {AllAdminRoles} = require('../constants/roles');

router.use('/auth', require('../auth/auth.routes'));
// router.use('/admin/bmc', require('../admin/bmc/routes'));
router.use('/users', authenticate, authorizeRoles('USER'), require('../users/users.routes'));
router.use('/admin', authenticate, authorizeRoles(...AllAdminRoles), require('../admin/admin.routes'));
router.use('/submission', authenticate, authorizeRoles('USER'), require('../submission/submission.routes'));

// router.use('/programs', require('../program/program.routes'));

module.exports = router;
