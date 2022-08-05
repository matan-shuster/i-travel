"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Trip.init({
    name: {
      type:DataTypes.STRING,
        allowNull:false
    },
    startDate: {
      type:DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type:DataTypes.DATE,
      allowNull: false
    },
    userID: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Trip',
  });

  return Trip;
};
