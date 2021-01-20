const express = require("express");
const router = express.Router();
const { authenticated } = require("../helpers/jwtKey");
const film = require("../controlers/film");

router.get("/film", authenticated, film.show);
router.post("/film", authenticated, film.create);
router.put("/film/:id", authenticated, film.update);
router.delete("/film/:id", authenticated, film.destroy);

module.exports = router;
