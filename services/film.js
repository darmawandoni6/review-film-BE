const { Op, QueryTypes } = require("sequelize");
const { film, genre, list_genre, sequelize } = require("../models");

module.exports = {
  show: async (params) => {
    try {
      const { page, limit, seacrh, order } = params;

      const lm = parseInt(limit);
      const of = parseInt(0 + (page - 1) * limit);

      const result = film.findAndCountAll({
        limit: lm,
        offset: of,
        where: {
          name: {
            [Op.like]: "%" + seacrh + "%",
          },
        },
        order: [["createdAt", order]],
        include: [
          {
            model: list_genre,
            as: "genre",
            attributes: ["id"],
            include: [
              {
                model: genre,
                as: "list_genre",
                attributes: ["name"],
              },
            ],
          },
        ],
      });

      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  create: async (data) => {
    try {
      const saved = film.create(data);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
  bulkCreate: async (data) => {
    try {
      const saved = film.bulkCreate(data);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
  update: async (id, params) => {
    try {
      const update = film.update(params, {
        where: {
          id,
        },
      });
      return update;
    } catch (err) {
      console.log(err.message);
    }
  },
  destroy: async (id) => {
    try {
      const destroy = film.destroy({
        where: {
          id,
        },
      });
      return destroy;
    } catch (err) {
      console.log(err.message);
    }
  },
};
