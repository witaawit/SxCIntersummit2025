const express = require("express");
const router = express.Router();
const controller = require("./submission.controller");
const upload = require("../middlewares/multer.middleware");
const { authenticate } = require("../middlewares/auth.middleware");

router.post('/upload', authenticate, upload.single("file"), controller.upload);

module.exports = router;
