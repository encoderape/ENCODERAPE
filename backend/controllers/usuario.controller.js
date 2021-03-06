const USUARIO = require('../models/usuario.dto.js');

const CONTROLADOR = {
    async create(req, res) {
        try {
            let usuario = await USUARIO.create(req.body);
            res.status(201).send({
                message: "Usuario añadido correctamente.",
                usuario,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al añadir el usuario.",
                e,
            });
        }
    },
    async readAll(req, res) {
        try {
            let usuarios = await USUARIO.find({ });
            res.status(200).send(usuarios);
        } catch (e) {
            res.status(500).send(e);
        }
    },
    async readById(req, res) {
        try {
            let usuario = await USUARIO.findById({_id: req.params._id});
            res.status(200).send(usuario);
        } catch (e) {
            res.status(404).send(e);
        }
    },
    async update(req, res) {
        try {
            let usuario = await USUARIO.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send({
                message: "Usuario actualizado correctamente.",
                usuario,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al actualizar el usuario.",
                e,
            });
        }
    },
    async delete(req, res) {
        try {
            let usuario = await USUARIO.findByIdAndDelete(req.body._id);
            res.status(201).send({
                message: "Usuario eliminado correctamente.",
                usuario,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al eliminar el usuario.",
                e,
            });
        }
    }
};

module.exports = CONTROLADOR;
