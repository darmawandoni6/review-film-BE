"use strict";
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// import route
const auth = require("./routes/auth");
const genre = require("./routes/genre");
const file = require("./routes/file");
const film = require("./routes/film");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/file-v1", express.static(path.join(__dirname, "file")));

// use route
app.get("/", (req, res) => {
  //res means, response, and it send string "Hello Express!" to the API
  res.send("Hello Express!");
});
app.use("/api-v1", auth);
app.use("/api-v1", genre);
app.use("/api-v1", file);
app.use("/api-v1", film);

module.exports = app;
