const CONTACTO = require('../models/contacto.dto.js');

const CONTROLADOR = {
    async create(req, res) {
        try {
            let contacto = await CONTACTO.create(req.body);
            res.status(201).send({
                message: "Contacto añadido correctamente.",
                contacto,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al añadir el contacto.",
                e,
            });
        }
    },
    async readAll(req, res) {
        try {
            let contactos = await CONTACTO.find({ });
            res.status(200).send(contactos);
        } catch (e) {
            res.status(500).send(e);
        }
    },
    async readById(req, res) {
        try {
            let contacto = await CONTACTO.findById({_id: req.params._id});
            res.status(200).send(contacto);
        } catch (e) {
            res.status(404).send(e);
        }
    },
    async delete(req, res) {
        try {
            let contacto = await CONTACTO.findByIdAndDelete(req.body._id);
            res.status(201).send({
                message: "Contacto eliminado correctamente.",
                contacto,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al eliminar el contacto.",
                e,
            });
        }
    }
}

module.exports = CONTROLADOR;
