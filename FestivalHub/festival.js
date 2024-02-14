// models/Festival.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Festival = sequelize.define('Festival', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Festival;
