'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Houses', [
      {
        name: 'Готовый проект 1',
        size: 120,
        material: 'Кирпич',
        pointX: '55.46407838',
        pointY: '37.44329246',
        about: 'Описание проекта 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Готовый проект 2',
        size: 150,
        material: 'Дерево',
        pointX: '55.45588505',
        pointY: '37.50234397',
        about: 'Описание проекта 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Готовый проект 3',
        size: 160,
        material: 'Кирпич',
        pointX: '55.46680912',
        pointY: '37.48449119',
        about: 'Описание проекта 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Готовый проект 4',
        size: 100,
        material: 'Дерево',
        pointX: '55.42387564',
        pointY: '37.52912315',
        about: 'Описание проекта 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Готовый проект 5',
        size: 170,
        material: 'Кирпич',
        pointX: '55.42582818',
        pointY: '37.61083396',
        about: 'Описание проекта 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Готовый проект 6',
        size: 150,
        material: 'Дерево',
        pointX: '55.42699966',
        pointY: '37.49685081',
        about: 'Описание проекта 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Готовый проект 7',
        size: 150,
        material: 'Кирпич',
        pointX: '55.46251788',
        pointY: '37.50646384',
        about: 'Описание проекта 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Готовый проект 8',
        size: 150,
        material: 'Дерево',
        pointX: '55.44144501',
        pointY: '37.60568412',
        about: 'Описание проекта 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Готовый проект 9',
        size: 170,
        material: 'Кирпич',
        pointX: '55.43285652',
        pointY: '37.62697013',
        about: 'Описание проекта 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Готовый проект 10',
        size: 150,
        material: 'Дерево',
        pointX: '55.42973297',
        pointY: '37.62662681',
        about: 'Описание проекта 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Houses', null, {});
  }
};
