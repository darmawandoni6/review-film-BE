const resSuccess = require("../helpers/response/succes");
const resError = require("../helpers/response/error");

const film = require("../services/film");
const genre = require("../services/list_genre");

module.exports = {
  show: async (req, res) => {
    try {
      const show = await film.show(req.query);
      const { page, limit } = req.query;

      const last_page = Math.ceil(show.count / parseInt(limit));
      const pagination = {
        current_page: parseInt(page),
        last_page,
        total: show.count,
        per_page: parseInt(limit),
      };

      return res.status(200).json(resSuccess(show.rows, pagination));
      // return res.status(200).json(resSuccess(show));
    } catch (error) {
      if (error.name) return res.status(200).json(resError(400, error.name));
      return res.status(200).json(resError(400, error.toString()));
    }
  },
  create: async (req, res) => {
    try {
      const params = req.body;

      const saved = await film.create(params);
      const lg = params.list_genre;
      const list_genre = [];

      for (let index = 0; index < lg.length; index++) {
        list_genre.push({
          id_film: saved.id,
          id_genre: lg[index],
        });
      }
      await genre.create(list_genre);
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
      await film.update(id, params);
      await genre.destroy(id);

      const lg = params.list_genre;
      const list_genre = [];
      for (let index = 0; index < lg.length; index++) {
        list_genre.push({
          id_film: id,
          id_genre: lg[index],
        });
      }
      await genre.create(list_genre);

      return res.status(200).json(resSuccess(""));
    } catch (error) {
      if (error.name) return res.status(400).json(resError(400, error.name));
      return res.status(400).json(resError(400, error.toString()));
    }
  },
  destroy: async (req, res) => {
    try {
      const id = req.params.id;
      const deleted = await film.destroy(id);
      if (!deleted)
        return res.status(200).json(resError(400, "ParallelSaveError"));
      return res.status(200).json(resSuccess(""));
    } catch (error) {
      if (error.name) return res.status(400).json(resError(400, error.name));
      return res.status(400).json(resError(400, error.toString()));
    }
  },
};
