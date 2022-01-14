

const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.backend, process.env.root, process.env.Sevenfour74, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3301,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
