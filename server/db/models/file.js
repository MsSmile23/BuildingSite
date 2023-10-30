'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Document }) {
      this.belongsTo(User, {foreignKey: 'userId'});
      // this.belongsTo(Document, {foreignKey: 'documentId'});
    }
  }
  File.init({
    file: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    // documentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'File',
  });
  return File;
};