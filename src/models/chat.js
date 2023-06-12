'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // chat.hasMany(models.managecars, { foreignKey: "chatId", });
      // chat.hasMany(models.consignments, { foreignKey: "chatId", });
      // chat.hasMany(models.bookingseats, { foreignKey: "chatId", });


      // define association here
    }
  };
  chat.init({
    incoming_msg_id: DataTypes.STRING,
    outcoming_msg_id: DataTypes.STRING,
    content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'chat',
  });
  return chat;
};