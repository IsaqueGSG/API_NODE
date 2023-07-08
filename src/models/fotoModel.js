const Sequelize = require('sequelize');

const database = require('../config/database');
const Pessoa = require('./pessoaModel');

const Foto = database.define('foto', {

  originalname: {
    type: Sequelize.STRING,
    defaultValue: '',
    validate: {
      notEmpty: {
        msg: 'Campo n pode estar vazio',
      },
    },
  },
  filename: {
    type: Sequelize.STRING,
    defaultValue: '',
    validate: {
      notEmpty: {
        msg: 'Campo n pode estar vazio',
      },
    },
  },
  url: {
    type: Sequelize.VIRTUAL,
    get() {
      return `http://localhost:3000/images/${this.getDataValue('filename')}`;
    },
  },
});

Foto.belongsTo(Pessoa, {
  constraint: true,
  foreignKey: 'pessoaId',
  onDelete: 'CASCADE',
});

module.exports = Foto;
