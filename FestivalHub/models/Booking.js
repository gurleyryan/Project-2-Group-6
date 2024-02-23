// models/Booking.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Booking extends Model { }

Booking.init(
  {
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
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    ticket_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  },
  {
    hooks: {
      // beforeCreate: async (newUserData) => {
      //   newUserData.password = await bcrypt.hash(newUserData.password, 10);
      //   return newUserData;
      // },
      // beforeUpdate: async (updatedUserData) => {
      //   updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
      //   return updatedUserData;
      // },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'booking',
  }
);

module.exports = Booking;
