// Attributes for SQL - mapped corresp. to name, location, date, StartDate, endDate
// file exports the festival model for use in other parts of the app

// models/Festival.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Festival = sequelize.define('Festival', {
  festival_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
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
