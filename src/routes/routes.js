const express = require('express');

const route = express.Router();

const pessoaController = require('../controllers/pessoaController');
const fotoController = require('../controllers/fotoController');

// Rotas Pessoa
route.post('/', pessoaController.store);
route.get('/:id?', pessoaController.get);
route.put('/:id', pessoaController.update);
route.delete('/:id', pessoaController.delete);

// Rotas Fotos
route.post('/fotos', fotoController.store);

module.exports = route;
