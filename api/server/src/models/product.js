'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' })
      Product.belongsToMany(models.Provider, { through: 'ProductProvider', foreignKey: 'productId', as: 'providers' })
    }
  };
  Product.init({
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};