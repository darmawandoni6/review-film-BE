"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("list_genres", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_film: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "films",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      id_genre: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "genres",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
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
    return queryInterface.dropTable("list_genres");
  },
};
