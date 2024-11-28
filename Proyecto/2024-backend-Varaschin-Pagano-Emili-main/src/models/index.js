const User = require('./User');
const Game = require('./Game');
const Order = require('./Order');
const OrderDetail = require('./OrderDetail');
const Review = require('./Review');
const Category = require('./Category');
const GameCategory = require('./GameCategory');
const Wishlist = require('./Wishlist');
const Library = require('./Library');

// Relaciones
User.hasMany(Review);
Review.belongsTo(User);

Game.hasMany(Review);
Review.belongsTo(Game);

Game.belongsToMany(Category, { through: GameCategory });
Category.belongsToMany(Game, { through: GameCategory });

User.belongsToMany(Game, { through: Wishlist });
Game.belongsToMany(User, { through: Wishlist });

User.belongsToMany(Game, { through: Library });
Game.belongsToMany(User, { through: Library });

module.exports = {
  User,
  Game,
  Order,
  OrderDetail,
  Review,
  Category,
  GameCategory,
  Wishlist,
  Library
}; 