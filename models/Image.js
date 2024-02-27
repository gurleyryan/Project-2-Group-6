const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model {}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    image_file: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    performer_id: {
        type: DataTypes.INTEGER,
        references: {
        model: 'performer',
        key: 'id',
      },
      },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'image',
  }
);

module.exports = Image;

