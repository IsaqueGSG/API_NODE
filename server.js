const express = require('express');

const App = express();
const routes = require('./src/routes/routes');

App.use(express.urlencoded({ extended: true })); // para receber parametros via post, put

App.use(routes);// usando rotes.js

const port = 3000;
App.listen(port, () => {
  console.log(`acessar: http://localhost:${port}`);
  console.log(`Servidor iniciado na porta: ${port}`);
});
