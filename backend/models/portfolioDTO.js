const MONGOOSE = require('mongoose');

const PORTFOLIO = new MONGOOSE.Schema(
    {
        foto: {
            type: String,
        },
        nombre: {
            type: String,
        },
        apellido1: {
            type: String,
        },
        apellido2: {
            type: String,
        },
        telefono: {
            type: Number,
            maxlength: 9,
        },
        correo: {
            type: String,
        },
        linkedin: {
            type: String,
        },
        github: {
            type: String,
        },
        expliacionPersonal: {
            type: String,
        },
        trabajos: [
            {
                fechaInicio: {
                    type: Date,
                },
                fechaFin: {
                    type: Date,
                },
                empresa: {
                    type: String,
                },
                rango: {
                    type: String,
                },
                tareasRealizadas: {
                    type: String,
                },
            },
        ],
        estudios: [
            {
                fechaFin: {
                    type: Date,
                },
                nombre: {
                    type: String,
                },
                institucion: {
                    type: String,
                },
                aprendizaje: {
                    type: String,
                },
                ciudad: {
                    type: String,
                },
            },
        ],
        cursos: [
            {
                fechaFin: {
                    type: Date,
                },
                nombre: {
                    type: String,
                },
                aprendizaje: {
                    type: String,
                },
            },
        ],
        tecnologias: [
            {
                imagen: {
                    type: String,
                },
                nombre: {
                    type: String,
                },
                progreso: {
                    type: Number,
                },
            },
        ],
        idiomas: [
            {
                idioma: {
                    type: String,
                },
                nivel: {
                    type: String,
                },
            },
        ],
        habilidades: {
            type: String,
        },
        
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('portfolio', PORTFOLIO);
module.exports = MODEL;