const resSuccess = require("../helpers/response/succes");
const resError = require("../helpers/response/error");

const genre = require("../services/genre");

module.exports = {
  show: async (req, res) => {
    try {
      const show = await genre.show();

      return res.status(200).json(resSuccess(show));
    } catch (error) {
      if (error.name) return res.status(200).json(resError(400, error.name));
      return res.status(200).json(resError(400, error.toString()));
    }
  },
  create: async (req, res) => {
    try {
      const params = req.body;
      await genre.create(params);

      return res.status(200).json(resSuccess(""));
    } catch (error) {
      if (error.name) return res.status(200).json(resError(400, error.name));
      return res.status(200).json(resError(400, error.toString()));
    }
  },
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
      await genre.update(id, params);
      return res.status(200).json(resSuccess(""));
    } catch (error) {
      if (error.name) return res.status(400).json(resError(400, error.name));
      return res.status(400).json(resError(400, error.toString()));
    }
  },
  destroy: async (req, res) => {
    try {
      const id = req.params.id;
      const deleted = await genre.destroy(id);
      if (!deleted)
        return res.status(200).json(resError(400, "ParallelSaveError"));
      return res.status(200).json(resSuccess(""));
    } catch (error) {
      if (error.name) return res.status(400).json(resError(400, error.name));
      return res.status(400).json(resError(400, error.toString()));
    }
  },
};
