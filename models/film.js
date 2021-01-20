"use strict";
module.exports = (sequelize, DataTypes) => {
  const film = sequelize.define(
    "film",
    {
      name: DataTypes.STRING,
      id_picture: DataTypes.INTEGER,
      type: DataTypes.STRING,
      status: DataTypes.STRING,
      skor: DataTypes.FLOAT,
      tgl_rilis: DataTypes.DATE,
      sinopsis: DataTypes.TEXT,
      review_penulis: DataTypes.TEXT,
    },
    {}
  );
  film.associate = function (models) {
    // associations can be defined here
    film.hasMany(models.list_genre, {
      foreignKey: "id_film",
      as: "genre",
    });
  };
  return film;
};
