const express = require('express');
const router = express.Router();

router.use('/auth', require('../auth/auth.routes'));
// router.use('/admin/bmc', require('../admin/bmc/routes'));
router.use('/users', require('../users/users.routes'));
router.use('/submission', require('../submission/submission.routes'));

// router.use('/programs', require('../program/program.routes'));

module.exports = router;
