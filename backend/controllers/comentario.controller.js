const COMENTARIO = require('../models/comentario.dto.js');

const CONTROLADOR = {
    async create(req, res) {
        try {
            let comentario = await COMENTARIO.create(req.body);
            res.status(201).send({
                message: "Comentario añadido correctamente.",
                comentario,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al añadir el comentario.",
                e,
            });
        }
    },
    async readAll(req, res) {
        try {
            let comentarios = await COMENTARIO.find({ });
            res.status(200).send(comentarios);
        } catch (e) {
            res.status(500).send(e);
        }
    },
    async readById(req, res) {
        try {
            let comentario = await COMENTARIO.findById({_id: req.params._id});
            res.status(200).send(comentario);
        } catch (e) {
            res.status(404).send(e);
        }
    },
    async update(req, res) {
        try {
            let comentario = await COMENTARIO.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send({
                message: "Comentario actualizado correctamente.",
                comentario,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al actualizar el comentario.",
                e,
            });
        }
    },
    async delete(req, res) {
        try {
            let comentario = await COMENTARIO.findByIdAndDelete(req.body._id);
            res.status(201).send({
                message: " Comentario eliminado correctamente.",
                comentario
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al eliminar el comentario.",
                e,
            });
        }
    }
};

module.exports = CONTROLADOR;
