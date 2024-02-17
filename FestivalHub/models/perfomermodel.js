// models/Performer.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Performer = sequelize.define('Performer', {
  performer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  performer_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  image_file: {
    type: DataTypes.STRING
  }
});

module.exports = Performer;
