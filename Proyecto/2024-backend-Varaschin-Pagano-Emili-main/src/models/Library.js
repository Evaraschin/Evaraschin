const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Library = sequelize.define('Library', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  gameId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Games',
      key: 'id'
    }
  },
  purchaseDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  playTime: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  lastPlayed: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

module.exports = Library; 