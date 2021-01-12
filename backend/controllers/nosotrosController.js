const NOSOTROS = require('../models/nosotrosDTO.js');

const CONTROLADOR = {
    async create(req, res) {
        try {
            let nosotros = await NOSOTROS.create(req.body);
            res.status(201).send({
                message: "Textos de nosotros añadidos correctamente.",
                nosotros,
            });
        } catch (e) {
            res.status(400).send({
                message: "Error al añadir los textos de nosotros.",
                e,
            });
        }
    },
    async readAll(req, res) {
        try {
            let nosotros = await NOSOTROS.find({ });
            res.status(201).send({
                message: "Textos de nosotros recogidos correctamente.",
                nosotros,
            });
        } catch (e) {
            res.status(400).send({
                message: "Error al recoger los textos de nosotros.",
                e,
            });
        }
    },
    async readById(req, res) {
        try {
            let nosotros = await NOSOTROS.findById({_id: req.params._id});
            res.status(200).send({
                message: "Textos de nosotros recogidos correctamente.",
                nosotros,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al recoger los textos de nosotros.",
                e,
            });
        }
    },
    async update(req, res){
        try{
            let nosotros = await NOSOTROS.findByIdAndUpdate(req.body._id, req.body);
            res.status(200).send({
                message: "Textos de nosotros actualizados correctamente.",
                nosotros,
            });
        }catch(e){
            res.status(400).send({
                message: "Error al actualizar los textos de nosotros.",
                e
            });
        }
    },
    async delete(req, res) {
        try {
            let nosotros = await NOSOTROS.findByIdAndDelete(req.body._id);
            res.status(200).send({
                message: "Textos de nosotros eliminados correctamente.",
                nosotros,
            });
        } catch (e) {
            res.status(500).send({
                message: "Error al eliminar los textos de nosotros.",
                e,
            });
        }
    }
}

module.exports = CONTROLADOR;