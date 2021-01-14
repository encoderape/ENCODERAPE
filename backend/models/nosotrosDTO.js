const MONGOOSE = require('mongoose');

const NOSOTROS = new MONGOOSE.Schema(
    {
        habilidades: [
            {
                titulo: {
                    type: String,
                    required: true,
                },
                texto: {
                    type: String,
                    required: true,
                }
            }
        ],
        caracteristicas: [
            {
                titulo: {
                    type: String,
                    required: true,
                },
                texto: {
                    type: String,
                    required: true,
                }
            }
        ],
        trabajadores: [
            {
                imagen: {
                    type: String,
                    required: true,
                },
                nombreCompleto: {
                    type: String,
                    required: true,
                }
            }
        ]
    }
);

const MODEL = MONGOOSE.model('nosotros', NOSOTROS);
module.exports = MODEL;
