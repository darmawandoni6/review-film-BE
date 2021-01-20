"use strict";
module.exports = (sequelize, DataTypes) => {
  const list_genre = sequelize.define(
    "list_genre",
    {
      id_film: DataTypes.INTEGER,
      id_genre: DataTypes.INTEGER,
    },
    {}
  );
  list_genre.associate = function (models) {
    // associations can be defined here
    list_genre.belongsTo(models.genre, {
      foreignKey: "id_genre",
      as: "list_genre",
    });
  };
  return list_genre;
};
