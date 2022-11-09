'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class User extends Model {}
  User.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize, 
  });
  return User;
};