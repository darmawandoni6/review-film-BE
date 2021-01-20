const express = require("express");
const router = express.Router();
const uploadFile = require("../helpers/upload");

const upload = require("../controlers/file");

router.post("/file", uploadFile.file.single("file"), upload.uploadData);

module.exports = router;
