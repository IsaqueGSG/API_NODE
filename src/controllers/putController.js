const Pessoa = require('../models/pessoaModel');
module.exports = async(req, res)=>{
    try{

        const pessoa = await Pessoa.findByPk( req.params.id )
        pessoa.nome = req.body.nome
        pessoa.cpf = req.body.cpf
        await pessoa.save()
        res.json(
            {
                msg: 'registro atualizado',
                pessoa
            }
        )
    }catch(e){
        console.log(e)
    }
}