const { file } = require("../models");

module.exports = {
  create: async (data) => {
    try {
      const saved = file.create(data);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
};
