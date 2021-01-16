const AYUDA = require('../models/ayudaDTO.js');

const CONTROLADOR = {
    async create(req, res) {
        try {
            let ayuda = await AYUDA.create(req.body);
            res.status(201).send({
                message: "Ayuda añadida correctamente.",
                ayuda,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al añadir la ayuda.",
                e,
            });
        }
    },
    async readAll(req, res) {
        try {
            let ayudas = await AYUDA.find({ });
            res.status(200).send({
                message: "Ayudas recogidas correctamente.",
                ayudas,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al recoger las ayudas.",
                e,
            });
        }
    },
    async readById(req, res) {
        try {
            let ayuda = await AYUDA.findById({_id: req.params._id});
            res.status(200).send({
                message: "Ayuda recogida correctamente.",
                ayuda,
            });
        } catch (e) {
            res.status(404).send({
                message: "Error al recoger la ayuda.",
                e,
            });
        }
    },
    async update(req, res) {
        try {
            let ayuda = await AYUDA.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send({
                message: "Ayuda actualizada correctamente.",
                ayuda,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al actualizar la ayuda.",
                e,
            });
        }
    },
    async delete(req, res) {
        try {
            let ayuda = await AYUDA.findByIdAndDelete(req.body._id);
            res.status(201).send({
                message: "Ayuda eliminada correctamente.",
                ayuda,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al eliminar la ayuda.",
                e,
            });
        }
    }
};

module.exports = CONTROLADOR;
