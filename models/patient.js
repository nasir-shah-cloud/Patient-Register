const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Patient = sequelize.define('Patient', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /\d{10,}$/ // Validate phone number format
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 15], // Password length between 8 and 15 characters
            isAlphanumeric: true // Password contains only alphanumeric characters
        }
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Patient;
