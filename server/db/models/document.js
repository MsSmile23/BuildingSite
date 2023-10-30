'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ StageConstruction, File }) {
      // this.hasMany(File, {foreignKey: 'documentId'});
      this.belongsTo(StageConstruction, {foreignKey: 'stageConstructionId'});
    }
  }
  Document.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    date: DataTypes.STRING,
    executor: DataTypes.STRING,
    stageConstructionId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    payment: DataTypes.STRING,
    files: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Document',
  });
  return Document;
};