const express = require("express");
const router = express.Router();
const { authenticated } = require("../helpers/jwtKey");
const auth = require("../controlers/auth");

router.post("/register", auth.register);
router.post("/login", auth.login);

module.exports = router;
