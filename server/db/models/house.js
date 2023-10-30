'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    static associate({ HouseProject }) {
      this.hasMany(HouseProject, { foreignKey: 'houseId' });
    }
  }
  House.init({
    name: DataTypes.STRING,
    size: DataTypes.INTEGER,
    material: DataTypes.STRING,
    pointX: DataTypes.INTEGER,
    pointY: DataTypes.INTEGER,
    about: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'House',
  });
  return House;
};