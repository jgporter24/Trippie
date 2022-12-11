const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Playlist extends Model { }

Playlist.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        artist: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        album: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        song: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }