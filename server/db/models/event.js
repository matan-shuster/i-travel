'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    priceLevel: DataTypes.INTEGER,
    reviewRating: DataTypes.DOUBLE,
    openingHours: DataTypes.JSON,
    about: DataTypes.STRING,
    picture: DataTypes.JSON,
    eventStart: DataTypes.TIME,
    eventEnd: DataTypes.TIME,
    tripID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};