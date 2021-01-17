const MONGOOSE = require('mongoose');

const USUARIO = new MONGOOSE.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        apellido1: {
            type: String,
            required: true,
        },
        apellido2: {
            type: String,
            required: true,
        },
        nombreUsuario: {
            type: String,
            required: true,
        },
        correo: {
            type: String,
            required: true,
        },
        contrasenya: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('usuario', USUARIO);
module.exports = MODEL;
