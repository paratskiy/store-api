'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Provider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Provider.belongsToMany(models.Product, {through: 'ProductProvider', foreignKey: 'providerId', as: 'products'})
    }
  };
  Provider.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Provider',
  });
  return Provider;
};