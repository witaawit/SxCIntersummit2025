const service = require('./bmcA.service');
exports.getAllBMCTeams = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const teams = await service.getAllBMCTeams(+page, +limit);
    res.json(teams);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil tim BMC' });
  }
};

exports.updateTeamStatus = async (req, res) => {
  try {
    const teamId = parseInt(req.params.id);
    const { status } = req.body;
    const updated = await service.updateTeamStatus(teamId, status);
    res.json({ message: 'Status tim diperbarui', updated });
  } catch (err) {
    res.status(500).json({ message: 'Gagal memperbarui status tim' });
  }
};

exports.postAnnouncementToTeamMembers = async (req, res) => {
  try {
    const teamId = parseInt(req.params.id);
    const { message } = req.body;
    await service.postAnnouncementToTeamMembers(teamId, message);
    res.json({ message: 'Pengumuman dikirim ke anggota tim' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengirim pengumuman' });
  }
};

exports.postNotificationToAll = async (req, res) => {
  try {
    const { message } = req.body;
    await service.postNotificationToAll(message);
    res.json({ message: 'Notifikasi dikirim ke semua user' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengirim notifikasi' });
  }
};

exports.searchTeam = async (req, res) => {
  try {
    const { keyword } = req.query;
    const result = await service.searchTeam(keyword);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mencari tim' });
  }
};