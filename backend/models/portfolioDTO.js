const MONGOOSE = require('mongoose');

const PORTFOLIO = new MONGOOSE.Schema(
    {
        telefono: {
            type: Number,
            maxlength: 9,
            required: true,
        },
        correo: {
            type: String,
            required: true,
        },
        linkedin: {
            type: String,
            required: true,
        },
        github: {
            type: String,
            required: true,
        },
        presentacion: {
            type: String,
            required: true,
        },
        trabajos: [
            {
                fechaInicio: {
                    type: Date,
                    required: true,
                },
                fechaFin: {
                    type: Date,
                },
                empresa: {
                    type: String,
                    required: true,
                },
                rango: {
                    type: String,
                    required: true,
                },
                tareas: {
                    type: String,
                    required: true,
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
                    required: true,
                },
                institucion: {
                    type: String,
                    required: true,
                },
                aprendizaje: {
                    type: String,
                    required: true,
                },
                ciudad: {
                    type: String,
                    required: true,
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
                    required: true,
                },
                aprendizaje: {
                    type: String,
                    required: true,
                },
            },
        ],
        tecnologias: [
            {
                nombre: {
                    type: String,
                    required: true,
                },
                progreso: {
                    type: Number,
                    min: 0,
                    max: 100,
                    required: true,
                },
            },
        ],
        idiomas: [
            {
                idioma: {
                    type: String,
                    required: true,
                },
                nivel: {
                    type: String,
                    required: true,
                },
            },
        ],
        habilidades: {
            type: String,
            required: true,
        },
        
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('portfolio', PORTFOLIO);
module.exports = MODEL;
