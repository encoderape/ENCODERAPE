const MONGOOSE = require('mongoose');

const NUESTROS_CLIENTES = new MONGOOSE.Schema(
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

const MODEL = MONGOOSE.model('nuestros-clientes', NUESTROS_CLIENTES);
module.exports = MODEL;
