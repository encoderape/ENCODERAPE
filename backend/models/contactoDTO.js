const MONGOOSE = require('mongoose');

const CONTACTO = new MONGOOSE.Schema(
    {
        nombre: {
            type: String,
        },
        telefono: {
            type: Number,
            maxlength: 9,
        },
        correo: {
            type: String,
        },
        tipo: {
            type: [String],
        },
        descripcion: {
            type: String,
        },
        terminos: {
            type: Boolean,
            default: false
        }
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('contacto', CONTACTO);
module.exports = MODEL;
