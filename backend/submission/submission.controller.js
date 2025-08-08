const submissionService = require('./submission.service');

async function submitFile(req, res) {
  try {
    const programId = req.programId || null;
    const teamId = req.teamId || null;
    const seminarId = req.seminarId || null;
    const type = req.type || req.body.type;
    const event = req.event
    const userId = req.user.id
    const stage = req.body.stage
    
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'File is required' });
    }

    const submission = await submissionService.createSubmission({
      data: {
      seminarId,
      teamId,
      programId,
      userId,
      stage,
      event,
      type,
      file, 
      }
    });

    return res.status(201).json({
      message: 'Submission created successfully',
      data: submission,
    });
  } catch (error) {
    console.error('Error creating submission:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function listSubmissionsByEvent(req, res) {
  try {
    const { event } = req.params;

    const allowedEvents = ['BMC', 'BCL', 'IBCC', 'IBPC', 'CHAMBERS', 'COMPANY_VISIT', 'IC'];

    if (!allowedEvents.includes(event)) {
      return res.status(400).json({ message: 'Invalid event' });
    }

    const submissions = await submissionService.getSubmissionsByEvent(event);
    return res.json(submissions);
  } catch (error) {
    console.error('Error retrieving submissions:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  submitFile,
  listSubmissionsByEvent,
};
