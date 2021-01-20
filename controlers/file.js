const resSuccess = require("../helpers/response/succes");
const resError = require("../helpers/response/error");
const file = require("../services/file");

module.exports = {
  uploadData: async (req, res) => {
    try {
      const name = req.file.filename;
      const path = "/file-v1/" + name;
      const saved = await file.create({ name, path });
      return res.status(200).json(resSuccess(saved));
    } catch (error) {
      console.log(error.toString());
      if (error.name) return res.status(400).json(resError(400, error.name));
      return res.status(400).json(resError(400, error.toString()));
    }
  },
};
