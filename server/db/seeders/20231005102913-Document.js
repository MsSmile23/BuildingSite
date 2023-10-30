'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Documents', [
      {
        name: 'Окна, двери',
        status: 'В работе',
        date: '',
        executor: 'Иванов А.А.',
        stageConstructionId: 3,
        price: 630000,
        payment: 'Не оплачено',
        files: 'http://localhost:5173/files/User3/oknaSmeta.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фасад',
        status: 'В работе',
        date: '',
        executor: 'Иванов А.А.',
        stageConstructionId: 3,
        price: 990000,
        payment: 'Не оплачено',
        files: 'http://localhost:5173/files/User3/fasadSmeta.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Кровля',
        status: 'Выполнен',
        date: '27.07.2023',
        executor: 'Смирнов Ф.Д.',
        stageConstructionId: 3,
        price: 1150000,
        payment: 'Оплачено',
        files: 'http://localhost:5173/files/User3/schetOplata.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Стеновой комплект',
        status: 'Выполнен',
        date: '05.05.2023',
        executor: 'Яковлев П.С.',
        stageConstructionId: 3,
        price: 2600000,
        payment: 'Оплачено',
        files: 'http://localhost:5173/files/User3/stenySmeta.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фундамент',
        status: 'Выполнен',
        date: '11.03.2023',
        executor: 'Петров В.А.',
        stageConstructionId: 3,
        price: 1500000,
        payment: 'Оплачено',
        files: 'http://localhost:5173/files/User3/fundSmeta.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Documents', null, {});
  }
};
