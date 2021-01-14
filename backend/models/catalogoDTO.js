const MONGOOSE = require('mongoose');

const CATALOGO = new MONGOOSE.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        video: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        comentario: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('catalogo', CATALOGO);
module.exports = MODEL;
