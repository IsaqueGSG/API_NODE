const path = require('path')
const database = require('../models/database');
const Pessoa = require('../models/pessoaModel');
database.sync();

module.exports = async (req, res)=>{
    const pessoa = await Pessoa.create({
        nome: req.body.nome,
        cpf: req.body.cpf
    })
    res.json( {msg: 'registo inserido', pessoa} )
}
