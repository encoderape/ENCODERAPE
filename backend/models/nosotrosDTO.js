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
        
        tituloNosotros: {
            type: String,
        },
        nosotros: [
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
        ]
    }
);

const MODEL = MONGOOSE.model('nosotros', NOSOTROS);
module.exports = MODEL;