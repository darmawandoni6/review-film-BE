const resSuccess = require("../helpers/response/succes");
const resError = require("../helpers/response/error");

const jwt = require("jsonwebtoken");
const { key } = require("../helpers/jwtKey");

const auth = require("../services/auth");

module.exports = {
  login: async (req, res) => {
    try {
      const { user_id, password } = req.body;

      const data = await auth.login(user_id, password);
      if (!data) {
        return res.status(401).json(resError(401));
      }

      const token = jwt.sign({ userId: user_id }, key);

      data.password = "";
      return res.status(200).json({
        data,
        token,
      });
    } catch (error) {
      console.log(error.toString());
      if (error.name) return res.status(400).json(resError(400, error.name));
      return res.status(400).json(resError(400, error.toString()));
    }
  },
  register: async (req, res) => {
    try {
      const params = req.body;
      if (!params.role) params.role = "user";

      const userID = await auth.showByUser(params.user_id);
      if (userID) return res.status(409).json(resError(409));

      const token = jwt.sign({ userId: params.user_id }, key);
      const saved = await auth.register(params);
      saved.password = "";
      return res.status(200).json({
        message: "",
        data: saved,
        token,
      });
    } catch (error) {
      console.log(error);
      if (error.name) return res.status(400).json(resError(400, error.name));
      return res.status(400).json(resError(400, error.toString()));
    }
  },
};
