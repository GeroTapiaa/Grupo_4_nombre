'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product, {
        as: 'products',
        foreignKey : 'sizeId'
      })
    }
  }
  Size.init({
    size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};