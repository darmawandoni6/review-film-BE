"use strict";
module.exports = (sequelize, DataTypes) => {
  const auth = sequelize.define(
    "auth",
    {
      user_id: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {}
  );
  auth.associate = function (models) {
    // associations can be defined here
  };
  return auth;
};
