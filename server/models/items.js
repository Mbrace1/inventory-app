const { db } = require('../db');
const { DataTypes } = require('sequelize')

const Item = db.define('item', {
  title: DataTypes.STRING,
  price: DataTypes.INTEGER,
  description: DataTypes.STRING,
  category: DataTypes.STRING,
  image: DataTypes.STRING
});


module.exports = { Item }






