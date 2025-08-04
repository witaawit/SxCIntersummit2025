const service = require('./poA.service');

exports.getAllSubmissions = async (req, res) => {
  try {
    const submissions = await service.getAllSubmissions();
    res.status(200).json(submissions);
  } catch (err) {
    console.error('Error fetching submissions:', err);
    res.status(500).json({ message: 'Gagal mengambil seluruh submission' });
  }
};