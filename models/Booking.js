const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Booking extends Model {}

Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    festival_id: {
        type: DataTypes.INTEGER,
      references: {
        model: 'festival',
        key: 'id',
      },
      },

    user_id: {
        type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
      },

    number_ofticket: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },

    bookingDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },

    // ticketPurchased_price: {
    //     type: DataTypes.DOUBLE,
    //     allowNull: true,
    //   },

  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'booking',
  }
);

module.exports = Booking;

