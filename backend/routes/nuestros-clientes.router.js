const EXPRESS = require('express');

const NUESTROS_CLIENTES = require('../controllers/nuestros-clientes.controller.js');

const ROUTER = EXPRESS.Router();

ROUTER.post('/create', NUESTROS_CLIENTES.create);
ROUTER.get('/read', NUESTROS_CLIENTES.readAll);
ROUTER.get('/read/:id', NUESTROS_CLIENTES.readById);
ROUTER.put('/update', NUESTROS_CLIENTES.update);
ROUTER.delete('/delete', NUESTROS_CLIENTES.delete);

module.exports = ROUTER;
