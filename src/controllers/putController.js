const con = require('../models/connectionMysql')

module.exports = (req, res)=>{
    const id = req.body.id
    const cpf = req.body.cpf
    const nome = req.body.nome


    con.connect();
    con.query(`UPDATE api_teste SET cpf = ${nome}, nome = ${cpf} WHERE id = ${id}` ,  (error, results, fields)=>{
        error ? false : true;
        res.send(
            `!! id: ${id} atualizado !!`
        )
    })
    con.end()
}