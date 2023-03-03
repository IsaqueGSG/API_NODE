const express = require('express')
const App = express(); 
const routes = require('./routes')
const path = require('path')

App.use( express.urlencoded( {extended: true} )) //para receber parametros via post, put

App.use( express.static( path.resolve( __dirname, 'public')))

App.use(routes)// usando rotes.js

App.listen(port = 3000, ()=>{
    console.log('acessar: http://localhost:'+ port);
    console.log('Servidor iniciado na porta: '+ port);
});