const { genre, sequelize } = require("../models");

module.exports = {
  show: async () => {
    try {
      // const result = genre.findAll();
      const result = sequelize.query("select id,name from genres");
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  create: async (data) => {
    try {
      const saved = genre.create(data);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
  bulkCreate: async (data) => {
    try {
      const saved = genre.bulkCreate(data);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
  update: async (id, params) => {
    try {
      const update = genre.update(params, {
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
      const destroy = genre.destroy({
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
