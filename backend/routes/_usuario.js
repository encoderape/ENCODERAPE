const EXPRESS = require('express');

const USUARIO = require('../controllers/usuarioController.js');

const ROUTER = EXPRESS.Router();

ROUTER.post('/create', USUARIO.create);
ROUTER.get('/read', USUARIO.readAll);
ROUTER.get('/read/:id', USUARIO.readById);
ROUTER.put('/update', USUARIO.update);
ROUTER.delete('/delete', USUARIO.delete);

module.exports = ROUTER;
