const MONGOOSE = require('mongoose');

const COMENTARIO = new MONGOOSE.Schema(
    {
        nombreEmpresa: {
            type: String,
            required: true,
        },
        comentario: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('comentario', COMENTARIO);
module.exports = MODEL;
