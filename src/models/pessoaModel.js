const Sequelize = require('sequelize');
const database = require( './database');

const Pessoa = database.define('Pessoa', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Pessoa ;