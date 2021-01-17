const SERVICIOS = require('../models/servicios.dto.js');

const CONTROLADOR = {
    async create(req, res) {
        try {
            let servicios = await SERVICIOS.create(req.body);
            res.status(201).send({
                message: "Servicio añadido correctamente.",
                servicios,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al añadir el servicio.",
                e,
            });
        }
    },
    async readAll(req, res) {
        try {
            let servicios = await SERVICIOS.find({ });
            res.status(200).send(servicios);
        } catch (e) {
            res.status(500).send(e);
        }
    },
    async readById(req, res) {
        try {
            let servicios = await SERVICIOS.findById({_id: req.params._id});
            res.status(200).send(servicios);
        } catch (e) {
            res.status(404).send(e);
        }
    },
    async update(req, res){
        try{
            let servicios = await SERVICIOS.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send({
                message: "Servicios actualizados correctamente.",
                servicios,
            });
        }catch(e){
            res.status(500).send({
                message: "Error al actualizar los servicios.",
                e
            });
        }
    },
    async delete(req, res) {
        try {
            let servicios = await SERVICIOS.findByIdAndDelete(req.body._id);
            res.status(201).send({
                message: "Servicios eliminados correctamente.",
                servicios,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al eliminar los servicios.",
                e,
            });
        }
    }
}

module.exports = CONTROLADOR;
