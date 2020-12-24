const MONGOOSE = require('mongoose');

const USUARIO = new MONGOOSE.Schema(
    {
        nombre: {
            type: String,
        },
        apellido1: {
            type: String,
        },
        apellido2: {
            type: String,
        },
        nombreUsuario: {
            type: String,
        },
        correo: {
            type: String,
        },
        contrasenya: {
            type: String,
        }
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('usuario', USUARIO);
module.exports = MODEL;
