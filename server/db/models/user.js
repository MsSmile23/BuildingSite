'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ PhotoUnderConstruction, StageConstruction, File }) {
      this.hasMany(PhotoUnderConstruction, {foreignKey: 'userId'});
      this.hasMany(StageConstruction, {foreignKey: 'userId'});
      this.hasMany(File, {foreignKey: 'userId'});
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};