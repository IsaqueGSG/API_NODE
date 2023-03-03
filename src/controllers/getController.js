const con = require('../models/connectionMysql')

module.exports = (req, res)=>{

    const id = req.params.id

    con.connect();

    con.query('SELECT * FROM api_teste' ,  (error, results, fields)=>{
        error ? false : true;
        res.send(
            results
        )
    })
    con.end()
}