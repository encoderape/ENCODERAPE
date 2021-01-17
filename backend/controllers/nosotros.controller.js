const NOSOTROS = require('../models/nosotros.dto.js');

const CONTROLADOR = {
    async create(req, res) {
        try {
            let nosotros = await NOSOTROS.create(req.body);
            res.status(201).send({
                message: "Nosotros añadido correctamente.",
                nosotros,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al añadir nosotros.",
                e,
            });
        }
    },
    async readAll(req, res) {
        try {
            let nosotros = await NOSOTROS.find({ });
            res.status(200).send({
                message: "Nosotros recogidos correctamente.",
                nosotros,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al recoger nosotros.",
                e,
            });
        }
    },
    async readById(req, res) {
        try {
            let nosotros = await NOSOTROS.findById({_id: req.params._id});
            res.status(200).send({
                message: "Nosotros recogido correctamente.",
                nosotros,
            });
        } catch (e) {
            res.status(404).send({
                message: "Error al recoger nosotros.",
                e,
            });
        }
    },
    async update(req, res){
        try{
            let nosotros = await NOSOTROS.findByIdAndUpdate(req.body._id, req.body);
            res.status(201).send({
                message: "Nosotros actualizado correctamente.",
                nosotros,
            });
        }catch(e){
            res.status(500).send({
                message: "Error al actualizar nosotros.",
                e
            });
        }
    },
    async delete(req, res) {
        try {
            let nosotros = await NOSOTROS.findByIdAndDelete(req.body._id);
            res.status(201).send({
                message: "Nosotros eliminado correctamente.",
                nosotros,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al eliminar nosotros.",
                e,
            });
        }
    }
}

module.exports = CONTROLADOR;
