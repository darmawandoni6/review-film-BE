const express = require("express");
const router = express.Router();
const { authenticated } = require("../helpers/jwtKey");
const genre = require("../controlers/genre");

router.get("/genre", authenticated, genre.show);
router.post("/genre", authenticated, genre.create);
router.post("/genre-bulk", authenticated, genre.bulkCreate);
router.put("/genre/:id", authenticated, genre.update);
router.delete("/genre/:id", authenticated, genre.destroy);

module.exports = router;
