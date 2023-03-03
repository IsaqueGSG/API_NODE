const con = require('../models/connectionMysql')

module.exports = (req, res)=>{
    const id = parseInt( req.params.id)
    const cpf = req.body.cpf
    const nome = req.body.nome

    con.connect();
    con.query(`UPDATE api_teste SET Nome= '${nome}', CPF= '${cpf}' WHERE ID= ${id}`,  (error, results, fields)=>{
        error ? false : true;
        res.send(
            results
        )
    })
    con.end()
}