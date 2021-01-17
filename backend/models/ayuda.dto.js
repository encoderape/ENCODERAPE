const MONGOOSE = require('mongoose');

const AYUDA = new MONGOOSE.Schema(
    {
        pregunta: {
            type: String,
            required: true,
        },
        respuesta: {
            type: String
        }
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('ayuda', AYUDA);
module.exports = MODEL;
