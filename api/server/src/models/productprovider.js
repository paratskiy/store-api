'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductProvider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ProductProvider.init({
    productId: DataTypes.INTEGER,
    providerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductProvider',
  });
  return ProductProvider;
};