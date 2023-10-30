'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('StageConstructions', [
      {
        name: 'Фундамент',
        userId: 1,
        totalPrice: 1200000,
        files: 'Столько то файлов',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фундамент',
        userId: 2,
        totalPrice: 1200000,
        files: 'Столько то файлов',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фундамент',
        userId: 3,
        totalPrice: 1200000,
        files: 'Столько то файлов',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фундамент',
        userId: 4,
        totalPrice: 1200000,
        files: 'Столько то файлов',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фундамент',
        userId: 5,
        totalPrice: 1200000,
        files: 'Столько то файлов',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('StageConstructions', null, {});
  }
};
