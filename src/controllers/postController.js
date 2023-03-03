const con = require('../models/connectionMysql')

module.exports = (req, res)=>{
    const nome = req.body.nome;
    const cpf = req.body.cpf;

    con.connect();
    con.query(`INSERT INTO api_teste ( cpf, nome) VALUES ( '${cpf}' , '${nome}' )` ,  (error, results, fields)=>{
        error ? false : true;
        res.send(
            results
        )
    })
    con.end()
}