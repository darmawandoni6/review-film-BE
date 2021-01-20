"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("films", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      id_picture: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "files",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      type: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      skor: {
        type: Sequelize.FLOAT,
      },
      tgl_rilis: {
        type: Sequelize.DATE,
      },
      sinopsis: {
        type: Sequelize.TEXT,
      },
      review_penulis: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("films");
  },
};
