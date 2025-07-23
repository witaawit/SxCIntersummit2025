const express = require('express');
const router = express.Router();

router.use('/auth', require('../auth/auth.routes'));
// router.use('/users', require('../users/users.routes'));
// router.use('/admin', require('../admin/admin.routes'));

module.exports = router;
