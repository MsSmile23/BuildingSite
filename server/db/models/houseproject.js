'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HouseProject extends Model {
    static associate({ House }) {
      this.belongsTo(House, { foreignKey: 'houseId' });
    }
  }
  HouseProject.init({
    photo: DataTypes.STRING,
    houseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HouseProject',
  });
  return HouseProject;
};