const MONGOOSE = require('mongoose');

const SERVICIOS = new MONGOOSE.Schema(
    {
        steps: [
            {
                imagen: {
                    type: String,
                },
                titulo: {
                    type: String,
                },
                caracteristicas: [
                    {
                        imagen: {
                            type: String,
                        },
                        titulo: {
                            type: String,
                        },
                        texto: {
                            type: String,
                        }
                    }
                ]
            }
        ],

        tecnologias: [
            {
                imagen: {
                    type: String,
                },
                nombre: {
                    type: String,
                }
            }
        ],

        servicios: [
            {
                imagen: {
                    type: String,
                },
                titulo: {
                    type: String,
                },
                texto: {
                    type: String,
                }
            }
        ]
    }
);

const MODEL = MONGOOSE.model('servicios', SERVICIOS);
module.exports = MODEL;