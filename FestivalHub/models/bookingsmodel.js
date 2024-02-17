// models/Booking.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Booking = sequelize.define('Booking', {
  booking_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  number_of_tickets: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  booking_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  ticket_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
});

module.exports = Booking;
