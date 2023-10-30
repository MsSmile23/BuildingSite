'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PhotoUnderConstructions', [
      {
        photo: 'http://localhost:5173/img/Стройка1.jpg',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/5_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/6_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/7_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/8_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/9_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/10_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/12_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/13_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/17_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/18_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/19_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/20_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/21_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/23_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/24_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/25_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/26_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/28_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/29_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/30_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/31_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/32_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/34_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/36_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/38_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/41_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/42_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/45_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/46_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        photo: 'http://localhost:5173/img/User3/47_Lebyz.jpg',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PhotoUnderConstructions', null, {});
  }
};
