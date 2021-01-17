const EXPRESS = require('express');

const NOSOTROS = require('../controllers/nosotros.controller.js');

const ROUTER = EXPRESS.Router();

ROUTER.post('/create', NOSOTROS.create);
ROUTER.get('/read', NOSOTROS.readAll);
ROUTER.get('/read/:id', NOSOTROS.readById);
ROUTER.put('/update', NOSOTROS.update);
ROUTER.delete('/delete', NOSOTROS.delete);

module.exports = ROUTER;
