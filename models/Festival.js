const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Festival extends Model {}

Festival.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    starting_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    ending_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      ticket_price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },

      background_img: {
        type: DataTypes.STRING,
        allowNull: true,
      },


  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'festival',
  }
);

module.exports = Festival;
