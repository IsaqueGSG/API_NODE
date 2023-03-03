const express = require('express');
const route = express.Router();

const getController = require('./src/controllers/getController');
const deleteController = require('./src/controllers/deleteController');
const postController = require('./src/controllers/postController');
const putController = require('./src/controllers/putController');

// Rotas API
route.post( '/', postController )
route.get( '/:id?', getController )
route.put( '/:id', putController )
route.delete( '/:id', deleteController )

module.exports = route;