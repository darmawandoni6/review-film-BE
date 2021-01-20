'use strict';
module.exports = (sequelize, DataTypes) => {
  const file = sequelize.define('file', {
    name: DataTypes.STRING,
    path: DataTypes.STRING
  }, {});
  file.associate = function(models) {
    // associations can be defined here
  };
  return file;
};