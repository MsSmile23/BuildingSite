'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Documents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      executor: {
        type: Sequelize.STRING
      },
      stageConstructionId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'StageConstructions',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      price: {
        type: Sequelize.INTEGER
      },
      payment: {
        type: Sequelize.STRING
      },
      files: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Documents');
  }
};