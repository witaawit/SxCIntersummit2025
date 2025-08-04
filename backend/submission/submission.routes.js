const express = require("express");
const router = express.Router();
const controller = require("./submission.controller");
const upload = require("../middlewares/multer.middleware");
const { authenticate } = require("../middlewares/auth.middleware");
const { authorizeRoles } = require("../middlewares/role.middleware");

// Upload submission file
router.post(
  '/upload',
  authenticate,
  authorizeRoles('USER'),
  upload.single("file"),
  controller.upload
);

module.exports = router;
