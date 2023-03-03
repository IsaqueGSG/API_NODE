const express = require('express');
const route = express.Router();


const getController = require('./src/controllers/getController');
const deleteController = require('./src/controllers/deleteController');
const postController = require('./src/controllers/postController');
const putController = require('./src/controllers/putController');

// Rotas Home
route.get( '/get', getController )
route.delete( '/del/:id?', deleteController )
route.post( '/post', postController )
route.put( '/put', putController )


module.exports = route;