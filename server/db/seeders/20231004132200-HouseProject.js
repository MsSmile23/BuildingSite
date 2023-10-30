'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('HouseProjects', [
      {
        photo: 'http://localhost:5173/img/Дом1.jpg',
        houseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/Дом2.jpg',
        houseId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/Дом3.jpg',
        houseId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/Дом4.jpg',
        houseId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/Дом5.jpg',
        houseId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/Дом6.jpg',
        houseId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/Дом7.jpg',
        houseId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/Дом8.jpg',
        houseId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/Дом9.jpg',
        houseId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/Дом10.jpg',
        houseId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HouseProjects', null, {});
  }
};
