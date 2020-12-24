const MONGOOSE = require('mongoose');

const CATALOGO = new MONGOOSE.Schema(
    {
        nombre: {
            type: String,
        },
        descripcion: {
            type: String,
        },
        video: {
            type: String,
        },
        url: {
            type: String,
        },
        comentario: {
            type: String,
        },
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('catalogo', CATALOGO);
module.exports = MODEL;
