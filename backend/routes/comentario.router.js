const EXPRESS = require('express');

const COMENTARIO = require('../controllers/comentario.controller.js');

const ROUTER = EXPRESS.Router();

ROUTER.post('/create', COMENTARIO.create);
ROUTER.get('/read', COMENTARIO.readAll);
ROUTER.get('/read/:id', COMENTARIO.readById);
ROUTER.put('/update', COMENTARIO.update);
ROUTER.delete('/delete', COMENTARIO.delete);

module.exports = ROUTER;
