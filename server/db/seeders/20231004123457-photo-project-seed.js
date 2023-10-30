'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'PhotoProjects',
      [
        {
          photo: 'http://localhost:5173/projectsImg/Black187.jpg',
          projectId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: 'http://localhost:5173/projectsImg/Ektor257.jpg',
          projectId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: 'http://localhost:5173/projectsImg/Elba164.jpg',
          projectId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: 'http://localhost:5173/projectsImg/Erikka303.jpg',
          projectId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: 'http://localhost:5173/projectsImg/Fora205-2.jpg',
          projectId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: 'http://localhost:5173/projectsImg/Karelia163.jpg',
          projectId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: 'http://localhost:5173/projectsImg/Lorry145-2.jpg',
          projectId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: 'http://localhost:5173/projectsImg/Modo264.jpg',
          projectId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: 'http://localhost:5173/projectsImg/Norv251.jpg',
          projectId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: 'http://localhost:5173/projectsImg/Rieti180.jpg',
          projectId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          photo: 'http://localhost:5173/projectsImg/Scandy149.jpg',
          projectId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          photo: 'http://localhost:5173/projectsImg/Scandy182.jpg',
          projectId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          photo: 'http://localhost:5173/projectsImg/Shale244.jpg',
          projectId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          photo: 'http://localhost:5173/projectsImg/Stone292.jpg',
          projectId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          photo: 'http://localhost:5173/projectsImg/Suomi204.jpg',
          projectId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },{
          photo: 'http://localhost:5173/projectsImg/Viking197.jpg',
          projectId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PhotoProjects', null, {});
  },
};
