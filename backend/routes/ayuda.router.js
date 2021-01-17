const EXPRESS = require('express');

const AYUDA = require('../controllers/ayuda.controller.js');

const ROUTER = EXPRESS.Router();

ROUTER.post('/create', AYUDA.create);
ROUTER.get('/read', AYUDA.readAll);
ROUTER.get('/read/:id', AYUDA.readById);
ROUTER.put('/update', AYUDA.update);
ROUTER.delete('/delete', AYUDA.delete);

module.exports = ROUTER;
