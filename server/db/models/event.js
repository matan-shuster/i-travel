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
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        reviewRating: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        openingHours: {
            type: DataTypes.JSON,
            allowNull: true
        },
        picture: {
            type: DataTypes.JSON,
            allowNull: false
        },
        eventStart: {
            type: DataTypes.DATE,
            allowNull: false
        },
        eventEnd: {
            type: DataTypes.DATE,
            allowNull: false
        },
        tripID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Event',
    });
    return Event;
};