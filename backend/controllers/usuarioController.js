const USUARIO = require('../models/usuarioDTO.js');

const CONTROLADOR = {
    async create(req, res) {
        try {
            let usuario = await USUARIO.create(req.body);
            res.status(201).send({
                message: "Usuario añadido correctamente",
                usuario,
            });
        } catch (e) {
            res.status(400).send({
                message: "Error al añadir el usuario",
                e,
            });
        }
    },
    async readAll(req, res) {
        try {
            let usuarios = await USUARIO.find({ });
            res.status(200).send({
                message: "Usuarios recogidos correctamente",
                usuarios,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al recoger los usuarios",
                e,
            });
        }
    },
    async readById(req, res) {
        try {
            let usuario = await USUARIO.findById({_id: req.params._id});
            res.status(200).send({
                message: "Usuario recogido correctamente",
                usuario,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al recoger el usuario",
                e,
            });
        }
    },
    async update(req, res) {
        try {
            let usuario = await USUARIO.findByIdAndUpdate(req.body._id, req.body);
            res.status(200).send({
                message: "Usuario actualizado correctamente",
                usuario,
            });
        } catch (e) {
            res.status(400).send({
                message: "Error al actualizar el usuario",
                e,
            });
        }
    },
    async delete(req, res) {
        try {
            let usuario = await USUARIO.findByIdAndDelete(req.body._id);
            res.status(200).send({
                message: "Usuario eliminado correctamente",
                usuario,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al eliminar el usuario",
                e,
            });
        }
    }
};

module.exports = CONTROLADOR;
