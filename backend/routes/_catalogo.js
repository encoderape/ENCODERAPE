const EXPRESS = require('express');

const CATALOGO = require('../controllers/catalogoController.js');

const ROUTER = EXPRESS.Router();

ROUTER.post('/create', CATALOGO.create);
ROUTER.get('/read', CATALOGO.readAll);
ROUTER.get('/read/:id', CATALOGO.readById);
ROUTER.put('/update', CATALOGO.update);
ROUTER.delete('/delete', CATALOGO.delete);

module.exports = ROUTER;
