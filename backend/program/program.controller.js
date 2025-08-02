const { getAllPrograms } = require('./program.service');

exports.getPrograms = async (req, res) => {
  try {
    const programs = await getAllPrograms();
    res.status(200).json(programs);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil data program' });
  }
};
