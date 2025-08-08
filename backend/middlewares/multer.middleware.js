const multer = require('multer');

// Setup penyimpanan sementara di memory (bisa disesuaikan)
const storage = multer.memoryStorage();

// Filter jenis file yang diijinkan
const fileFilter = (req, file, cb) => {
  // Contoh: batasi hanya pdf dan image saja
  const allowedMimeTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('File type not allowed!'), false);
  }
};

// Buat instance multer dengan batas ukuran file 5MB
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

module.exports = upload;