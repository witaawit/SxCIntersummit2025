const express = require('express');
const router = express.Router();

const poController = require('./poA.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const { isProjectOfficer } = require('../../middlewares/role.middleware');

// Route: GET /api/admin/po/submissions
router.get(
  '/submissions',
  authenticate,
  isProjectOfficer,
  poController.getAllSubmissions
);

module.exports = router;
