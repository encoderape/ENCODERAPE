const MONGOOSE = require('mongoose');

const NOSOTROS = MONGOOSE.Schema(
    {
        tituloHabilidades:{
            type: String,
        },
        habilidades: [
            {
                icono: {
                    type: String,
                },
                titulo: {
                    type: String,
                },
                texto: {
                    type: String,
                }
            }
        ],
        
        tituloCaracteristicas: {
            type: String,
        },
        caracteristicas: [
            {
                icono: {
                    type: String,
                },
                titulo: {
                    type: String,
                },
                texto: {
                    type: String,
                }
            }
        ],
        trabajadores: [
            {
                imagen: {
                    type: String
                },
                nombreCompleto: {
                    type: String,
                }
            }
        ]
    }
);

const MODEL = MONGOOSE.model('nosotros', NOSOTROS);
module.exports = MODEL;