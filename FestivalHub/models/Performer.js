// models/Performer.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Performer extends Model { }

Performer.init(
  {
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
    modelName: 'performer',
  }
);

module.exports = Performer;
