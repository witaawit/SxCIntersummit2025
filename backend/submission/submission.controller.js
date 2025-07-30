const supabase = require('../config/supabase');
const prisma = require('../config/db');

exports.upload = async (req, res) => {
  try {
    const file = req.file;
    const registrationId = parseInt(req.body.registrationId);

    const path = `bmc/${Date.now()}-${file.originalname}`;
    const { error } = await supabase.storage.from('submissions').upload(path, file.buffer, { upsert: true });
    if (error) return res.status(500).json({ message: 'Upload gagal', error });

    const fileUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/submissions/${path}`;

    const submission = await prisma.submission.create({
      data: { registrationId, fileUrl }
    });

    res.status(201).json({ message: 'Upload berhasil', submission });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Terjadi kesalahan saat upload' });
  }
};
