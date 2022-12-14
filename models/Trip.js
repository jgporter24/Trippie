const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model { }

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        Start: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        End: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        Duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Trip',
    }
);

module.exports = Trip;