const { auth } = require("../models");

module.exports = {
  showByUser: async (user_id) => {
    try {
      const result = auth.findOne({
        where: { user_id },
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  login: async (user_id, password) => {
    try {
      const result = auth.findOne({
        where: { user_id, password },
      });
      return result;
    } catch (err) {
      console.log(err.message);
    }
  },
  register: async (data) => {
    try {
      const saved = auth.create(data);
      return saved;
    } catch (err) {
      console.log(err.message);
    }
  },
};
