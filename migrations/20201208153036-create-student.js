'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Students', {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id: {
        type: Sequelize.INTEGER,
      },
      id: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.STRING,
      },
      toan: {
        type: Sequelize.FLOAT,
      },
      vatli: {
        type: Sequelize.FLOAT,
      },
      nguvan: {
        type: Sequelize.FLOAT,
      },
      sinhhoc: {
        type: Sequelize.FLOAT,
      },
      tienganh: {
        type: Sequelize.FLOAT,
      },
      tiengnga: {
        type: Sequelize.FLOAT,
      },
      lichsu: {
        type: Sequelize.FLOAT,
      },
      nguvan: {
        type: Sequelize.FLOAT,
      },
      tiengduc: {
        type: Sequelize.FLOAT,
      },
      tiengphap: {
        type: Sequelize.FLOAT,
      },
      tiengtrung: {
        type: Sequelize.FLOAT,
      },
      hoahoc: {
        type: Sequelize.FLOAT,
      },
      tiengnhat: {
        type: Sequelize.FLOAT,
      },
      diali: {
        type: Sequelize.FLOAT,
      },
      gdcd: {
        type: Sequelize.FLOAT,
      },
      khxh: {
        type: Sequelize.FLOAT,
      },
      khtn: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Students');
  },
};
