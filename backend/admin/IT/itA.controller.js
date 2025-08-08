const service = require('./itA.service');

// === STAFF ===
exports.createStaff = async (req, res) => {
  try {
    const staff = await service.createStaff(req.body);
    res.json({ message: 'Staff berhasil dibuat', staff });
  } catch (err) {
    res.status(500).json({ message: 'Gagal membuat staff', error: err.message });
  }
};

exports.getAllStaff = async (req, res) => {
  try {
    const staffList = await service.getAllStaff();
    res.json(staffList);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil data staff' });
  }
};

exports.updateStaff = async (req, res) => {
  try {
    const updated = await service.updateStaff(+req.params.id, req.body);
    res.json({ message: 'Staff berhasil diperbarui', updated });
  } catch (err) {
    res.status(500).json({ message: 'Gagal memperbarui staff' });
  }
};

exports.deleteStaff = async (req, res) => {
  try {
    const deleted = await service.deleteStaff(+req.params.id);
    res.json({ message: 'Staff berhasil dihapus', deleted });
  } catch (err) {
    res.status(500).json({ message: 'Gagal menghapus staff' });
  }
};

// === REFERRAL ===
exports.createReferral = async (req, res) => {
  try {
    const referral = await service.createReferral(req.body);
    res.json({ message: 'Referral code berhasil dibuat', referral });
  } catch (err) {
    res.status(500).json({ message: 'Gagal membuat referral', error: err.message });
  }
};

exports.getAllReferral = async (req, res) => {
  try {
    const referrals = await service.getAllReferral();
    res.json(referrals);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengambil referral code' });
  }
};

exports.deleteReferral = async (req, res) => {
  try {
    const deleted = await service.deleteReferral(+req.params.id);
    res.json({ message: 'Referral berhasil dihapus', deleted });
  } catch (err) {
    res.status(500).json({ message: 'Gagal menghapus referral' });
  }
};
