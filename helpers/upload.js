const multer = require("multer");
const path = require("path");

function fieldName(val) {
  const ext = path.extname(val);
  const name = path.basename(val, ext);
  return `${name}-${Date.now()}${ext}`;
}

const file = multer.diskStorage({
  destination: path.join(__dirname + "./../file"),
  filename: function (req, file, cb) {
    cb(null, fieldName(file.originalname));
  },
});

exports.file = multer({ storage: file });
