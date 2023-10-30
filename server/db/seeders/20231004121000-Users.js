'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashPassword111 = await bcrypt.hash('111', 10);
    const hashPasswordAdmin = await bcrypt.hash('admin', 10);
    const hashPassword788 = await bcrypt.hash('788', 10);
    const hashPassword785 = await bcrypt.hash('785', 10);
    const hashPassword193 = await bcrypt.hash('193', 10);
    
    await queryInterface.bulkInsert('Users', [
      {
      name: '111',
      password: hashPassword111.toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'admin',
      password: hashPasswordAdmin.toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'АС103788',
      password: hashPassword788.toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'AD123785',
      password: hashPassword785.toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'BE840193',
      password: hashPassword193.toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
