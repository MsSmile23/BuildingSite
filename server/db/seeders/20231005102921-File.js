'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('Files', [
    //   {
    //     file: 'http://localhost:5173/files/User3/fasadSmeta.jpg',
    //     stageId: 1,
    //     documentId: 1,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     file: 'http://localhost:5173/files/file2.pdf',
    //     stageId: 1,
    //     documentId: 1,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     file: 'http://localhost:5173/files/file3.pdf',
    //     stageId: 2,
    //     documentId: 2,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     file: 'http://localhost:5173/files/file4.pdf',
    //     stageId: 2,
    //     documentId: 2,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     file: 'http://localhost:5173/files/file5.pdf',
    //     stageId: 3,
    //     documentId: 3,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     file: 'http://localhost:5173/files/file6.pdf',
    //     stageId: 3,
    //     documentId: 3,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     file: 'http://localhost:5173/files/file7.pdf',
    //     stageId: 4,
    //     documentId: 4,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     file: 'http://localhost:5173/files/file8.pdf',
    //     stageId: 1,
    //     documentId: 2,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     file: 'http://localhost:5173/files/file9.pdf',
    //     stageId: 1,
    //     documentId: 2,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    //   {
    //     file: 'http://localhost:5173/files/file10.pdf',
    //     stageId: 1,
    //     documentId: 2,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   },
    // ], {});
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('Files', null, {});
  }
};
