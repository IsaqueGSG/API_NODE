const Sequelize = require('sequelize');

const sequelize = new Sequelize('api_teste', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
});
module.exports = sequelize;
