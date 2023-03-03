const con = require('../models/connectionMysql')

module.exports = (req, res)=>{
    const id = parseInt( req.params.id)

    con.connect();
    con.query(`DELETE FROM api_teste WHERE id= ${id}` ,  (error, results, fields)=>{
        error ? false : true;
        res.send(
            results
        )
    })
    con.end()
}