const multer = require('multer');
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/file');
  },
  filename(req, file, cb) {
    cb(null, `${new Date().getMinutes()}-${file.originalname}`); // имя картинки под которым она сохранится на сервере
  },
});
const types = ['file/pdf', 'file/docx', 'file/txt', 'file/xlsx'];
const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
module.exports = multer({ storage });