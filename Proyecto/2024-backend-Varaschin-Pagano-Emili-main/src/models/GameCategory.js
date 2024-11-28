const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const GameCategory = sequelize.define('GameCategory', {
  gameId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Games',
      key: 'id'
    }
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Categories',
      key: 'id'
    }
  }
});

module.exports = GameCategory; 