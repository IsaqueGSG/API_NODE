const Pessoa = require('../models/pessoaModel');

module.exports = async (req, res)=>{
    await Pessoa.destroy( {where: { id: req.params.id } })
    res.json( { msg: `Registro de id ${ req.params.id } excluido` } )
}