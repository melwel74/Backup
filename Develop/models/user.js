const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model{}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail: true
        }

    },
)