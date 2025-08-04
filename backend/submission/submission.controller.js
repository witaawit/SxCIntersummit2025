const prisma = require('../config/db');
const MSG = require('../constants/messages');

exports.upload = async (req, res) => {
  try {
    const file = req.file;
    const registrationId = parseInt(req.body.registrationId);

    if (!file || !registrationId) {
      return res.status(400).json({ success: false, message: MSG.VALIDATION_ERROR });
    }

    const fileName = `bmc/${Date.now()}-${file.originalname}`;
    const { error: uploadError } = await supabase.storage
      .from('submissions')
      .upload(fileName, file.buffer, { upsert: true });

    if (uploadError) {
      return res.status(500).json({ success: false, message: MSG.SUBMIT_FAILED, error: uploadError });
    }

    const fileUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/submissions/${fileName}`;

    const submission = await prisma.submission.create({
      data: {
        registrationId,
        fileUrl,
        uploadedAt: new Date()
      }
    });

    return res.status(201).json({
      success: true,
      message: MSG.SUBMIT_SUCCESS,
      data: submission
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: MSG.INTERNAL_ERROR });
  }
};
