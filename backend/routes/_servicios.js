const EXPRESS = require('express');

const SERVICIOS = require('../controllers/serviciosController.js');

const ROUTER = EXPRESS.Router();

ROUTER.post('/create', SERVICIOS.create);
ROUTER.get('/read', SERVICIOS.readAll);
ROUTER.get('/read/:id', SERVICIOS.readById);
ROUTER.put('/update', SERVICIOS.update);
ROUTER.delete('/delete', SERVICIOS.delete);

module.exports = ROUTER;
