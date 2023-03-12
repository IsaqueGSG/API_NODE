const Pessoa = require('../models/pessoaModel');

module.exports = async (req, res)=>{
    try{

        await Pessoa.destroy( {where: { id: req.params.id } })
        res.json( { msg: `Registro de id ${ req.params.id } excluido` } )
    }catch(e){
        console.log(e)
    }
}