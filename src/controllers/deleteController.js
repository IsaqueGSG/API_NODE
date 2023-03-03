const con = require('../models/connectionMysql')

module.exports = (req, res)=>{
    const id = req.params.id

    con.connect();
    con.query(`DELETE FROM api_teste WHERE id= ${id}` ,  (error, results, fields)=>{
        error ? false : true;
        res.send(
            `!! id: ${id} excluido !!`
        )
    })
    con.end()
}