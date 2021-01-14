const CATALOGO = require('../models/catalogoDTO.js');

const CONTROLADOR = {
    async create(req, res) {
        try {
            let catalogo = await CATALOGO.create(req.body);
            res.status(201).send({
                message: "Catalogo añadido correctamente.",
                catalogo,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al añadir el catalogo.",
                e,
            });
        }
    },
    async readAll(req, res) {
        try {
            let catalogos = await CATALOGO.find({ });
            res.status(200).send({
                message: "Catálogos recogidos correctamente.",
                catalogos,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al recoger los catálogos.",
                e,
            });
        }
    },
    async readById(req, res) {
        try {
            let catalogo = await CATALOGO.findById({_id: req.params._id});
            res.status(200).send({
                message: "Catalogo recogido correctamente.",
                catalogo,
            });
        } catch (e) {
            res.status(404).send({
                message: "Error al recoger el catalogo.",
                e,
            });
        }
    },
    async update(req, res) {
        try {
            let catalogo = await CATALOGO.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send({
                message: "Catalogo actualizado correctamente.",
                catalogo,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al actualizar el catalogo.",
                e,
            });
        }
    },
    async delete(req, res) {
        try {
            let catalogo = await CATALOGO.findByIdAndDelete(req.body._id);
            res.status(201).send({
                message: "Catalogo eliminado correctamente.",
                catalogo,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al eliminar el catalogo.",
                e,
            });
        }
    }
};

module.exports = CONTROLADOR;
