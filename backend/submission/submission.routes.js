const express = require('express');
const upload = require('../middlewares/multer.middleware');
const submissionController = require('./submission.controller');
const {authenticate} = require('../middlewares/auth.middleware');
const {setStageParam, verifyProgram} = require('../middlewares/submission.middleware');

const router = express.Router();

// Route dengan event otomatis dari URL, misalnya /submit/bmc
router.post('/:programId/:stage/:type', authenticate, upload.single('file'), verifyProgram, setStageParam,submissionController.submitFile);

router.get('/event/:event', submissionController.listSubmissionsByEvent);

module.exports = router;
