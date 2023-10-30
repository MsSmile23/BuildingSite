'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StageConstruction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Document, File }) {
      this.belongsTo(User, {foreignKey: 'userId'});
      this.hasMany(Document, {foreignKey: 'stageConstructionId'});
      // this.hasMany(File, {foreignKey: 'stageId'});
    }
  }
  StageConstruction.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    files: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StageConstruction',
  });
  return StageConstruction;
};