const Pessoa = require('../models/pessoaModel');
module.exports = async (req, res)=>{
    try{

        const id = parseInt( req.params.id)
        const result_get =  id ?  await Pessoa.findByPk(id) : await Pessoa.findAll()
        res.json( result_get )
    }catch(e){
        console.log(e)
    }
}
