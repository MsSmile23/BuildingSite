'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhotoProject extends Model {
    static associate({ Project }) {
      this.belongsTo(Project, { foreignKey: 'projectId' });
    }
  }
  PhotoProject.init({
    photo: DataTypes.STRING,
    projectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PhotoProject',
  });
  return PhotoProject;
};