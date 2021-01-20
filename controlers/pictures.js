const resSuccess = require("../helpers/response/succes");
const resError = require("../helpers/response/error");

module.exports = {
  uploadData: async (req, res) => {
    try {
      const fileName = "/file-v1/" + req.file.fileName;
      const saved = await auth.register(params);
      return res.status(200).json({
        file: req.file,
      });
    } catch (error) {
      console.log(error.toString());
      if (error.name) return res.status(400).json(resError(400, error.name));
      return res.status(400).json(resError(400, error.toString()));
    }
  },
};
