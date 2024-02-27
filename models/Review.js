const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
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

    review: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    reviewDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;

