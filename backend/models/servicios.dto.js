const MONGOOSE = require('mongoose');

const SERVICIOS = new MONGOOSE.Schema(
    {
        steps: [
            {
                titulo: {
                    type: String,
                },
                caracteristicas: [
                    {
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
                nombre: {
                    type: String,
                }
            }
        ],
        nuestrosServicios: [
            {
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
