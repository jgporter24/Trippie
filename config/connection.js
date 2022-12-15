const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    try {
        
        sequelize = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                host: '127.0.0.1',
                dialect: 'mysql',
                port: 3306
            }
        );
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = sequelize;