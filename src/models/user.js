'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  };
  user.init({
    username: DataTypes.STRING,
    fullname: DataTypes.STRING,
    img: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    password: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};