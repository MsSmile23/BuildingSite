const multer = require('multer');
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/image');
  },
  filename(req, file, cb) {
    cb(null, `${new Date().getMinutes()}-${file.originalname}`); // имя картинки под которым она сохранится на сервере
  },
});
const types = ['image/png', 'image/jpeg', 'image/jpg'];
const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
module.exports = multer({ storage, fileFilter });