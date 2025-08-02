const service = require('./bmcA.service');

// Handler langsung didefinisikan di sini
exports.getBMCSubmissions = async (req, res) => {
  try {
    const submissions = await service.getSubmissionsByProgramName('BMC');
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil submission BMC' });
  }
}

exports.verifySubmission = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await service.verifySubmissionById(id);
    res.json({ message: 'Submission diverifikasi' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal verifikasi submission' });
  }
}

exports.deleteSubmission = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await service.deleteSubmissionById(id);
    res.json({ message: 'Submission dihapus' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal hapus submission' });
  }
}

// Routes
// router.get('/submission', authenticate, isProjectOfficer, getBMCSubmissions);
// router.put('/submission/:id/verify', authenticate, isBMCAdmin, verifySubmission);
// router.delete('/submission/:id', authenticate, isSuperAdmin, deleteSubmission);


