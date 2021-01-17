const NUESTROS_CLIENTES = require('../models/nuestros-clientes.dto.js');

const CONTROLADOR = {
    async create(req, res) {
        try {
            let cliente = await NUESTROS_CLIENTES.create(req.body);
            res.status(201).send({
                message: "Cliente añadido correctamente.",
                cliente,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al añadir el cliente.",
                e,
            });
        }
    },
    async readAll(req, res) {
        try {
            let clientes = await NUESTROS_CLIENTES.find({ });
            res.status(200).send(clientes);
        } catch (e) {
            res.status(500).send(e);
        }
    },
    async readById(req, res) {
        try {
            let cliente = await NUESTROS_CLIENTES.findById({_id: req.params._id});
            res.status(200).send(cliente);
        } catch (e) {
            res.status(404).send(e);
        }
    },
    async update(req, res) {
        try {
            let cliente = await NUESTROS_CLIENTES.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send({
                message: "Cliente actualizado correctamente.",
                cliente,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al actualizar el cliente.",
                e,
            });
        }
    },
    async delete(req, res) {
        try {
            let cliente = await NUESTROS_CLIENTES.findByIdAndDelete(req.body._id);
            res.status(201).send({
                message: " Cliente eliminado correctamente.",
                cliente,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al eliminar el cliente.",
                e,
            });
        }
    }
};

module.exports = CONTROLADOR;
