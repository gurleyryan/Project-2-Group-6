const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Performer extends Model {}

Performer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    performer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  

    festival_id: {
        type: DataTypes.INTEGER,
      references: {
        model: 'festival',
        key: 'id',
      },
      },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'performer',
  }
);

module.exports = Performer;

