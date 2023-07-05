const express = require('express');

const route = express.Router();

const getController = require('../controllers/getController');
const deleteController = require('../controllers/deleteController');
const postController = require('../controllers/postController');
const putController = require('../controllers/putController');
const fotoController = require('../controllers/fotoController');

// Rotas API
route.post('/', postController);
route.get('/:id?', getController);
route.put('/:id', putController);
route.delete('/:id', deleteController);
route.post('/fotos', fotoController);

module.exports = route;
