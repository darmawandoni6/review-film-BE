const { list_genre } = require("../models");

module.exports = {
  create: async (data) => {
    try {
      const saved = list_genre.bulkCreate(data);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
  update: async (id_film, params) => {
    try {
      const saved = list_genre.update(params, {
        where: {
          id_film,
        },
      });
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
  destroy: async (id_film) => {
    try {
      const destroy = list_genre.destroy({
        where: {
          id_film,
        },
      });
      return destroy;
    } catch (err) {
      console.log(err.message);
    }
  },
};
