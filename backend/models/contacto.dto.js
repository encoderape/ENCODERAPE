const MONGOOSE = require('mongoose');

const CONTACTO = new MONGOOSE.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        telefono: {
            type: Number,
            maxlength: 9,
            required: true
        },
        correo: {
            type: String,
            required: true
        },
        tipo: {
            type: [String],
            enum: ['', 'Aplicación Web', 'Aplicación Móvil', 'UX/UI Design', 'Análisis de Proyectos', 'Consultoría'],
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        prioridad: {
            type: [String],
            enum: ['', 'Ninguna', 'Baja', 'Alta'],
            required: true
        },
        terminos: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('contacto', CONTACTO);
module.exports = MODEL;
