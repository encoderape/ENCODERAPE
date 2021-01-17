const EXPRESS = require('express');

const LOG = require('../controllers/log.controller.js');

const ROUTER = EXPRESS.Router();

ROUTER.post('/create', LOG.create);

module.exports = ROUTER;
