'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate({ PhotoProject }) {
      // this.hasMany(PhotoProject, { foreignKey: 'projectId' });

      // НОВОЕ
      this.hasMany(PhotoProject, { foreignKey: 'projectId', as: 'photos' }); 
    }
  }
  Project.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    floor: DataTypes.STRING,
    size: DataTypes.INTEGER,
    material: DataTypes.STRING,
    about: DataTypes.TEXT,
    wardrobe: DataTypes.INTEGER,
    bathroom: DataTypes.INTEGER,
    bedroom: DataTypes.INTEGER,
    plan: DataTypes.STRING,
    // allowNull: true
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};