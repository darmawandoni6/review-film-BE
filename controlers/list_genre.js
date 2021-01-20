const resSuccess = require("../helpers/response/succes");
const resError = require("../helpers/response/error");

const list_genre = require("../services/list_genre");

module.exports = {
  bulkCreate: async (req, res) => {
    try {
      const params = req.body;
      await genre.bulkCreate(params);
      return res.status(200).json(resSuccess(""));
    } catch (error) {
      if (error.name) return res.status(200).json(resError(400, error.name));
      return res.status(200).json(resError(400, error.toString()));
    }
  },
  update: async (req, res) => {
    try {
      const params = req.body;
      params.updatedAt = new Date();

      const id = req.params.id;

      await list_genre.update(id, params);
      return res.status(200).json(resSuccess(""));
    } catch (error) {
      if (error.name) return res.status(400).json(resError(400, error.name));
      return res.status(400).json(resError(400, error.toString()));
    }
  },
};
