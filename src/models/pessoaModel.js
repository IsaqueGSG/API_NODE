const Sequelize = require('sequelize');
const database = require('../config/database');

const Pessoa = database.define('pessoa', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Pessoa;
