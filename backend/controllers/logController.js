const LOG = require('../models/logDTO.js');

const CONTROLADOR = {
    async create(req, res) {
        try {
            let log = await LOG.create(req.body);
            res.status(202).send({
                message: "Log añadido correctamente.",
                log,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al añadir el log.",
                e,
            });
        }
    }
};

module.exports = CONTROLADOR;
