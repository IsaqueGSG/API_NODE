const con = require('../models/connectionMysql')

module.exports = (req, res)=>{

    const id = parseInt( req.params.id)
    let sql = 'SELECT * FROM api_teste'

    if(id) sql = "SELECT * FROM api_teste where id= " + id 
        
    con.connect();
    con.query( sql ,  (error, results, fields)=>{
        error ? false : true;
        res.send(
            results
        )
    })
    con.end()
}