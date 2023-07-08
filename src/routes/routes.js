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
route.get('/fotos/:id?', fotoController.get);
route.put('/fotos/:id', fotoController.update);
route.delete('/fotos/:id', fotoController.delete);

module.exports = route;
