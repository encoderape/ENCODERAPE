const MONGOOSE = require('mongoose');

const LOG = new MONGOOSE.Schema(
    {
        code: {
            type: Number,
            required: true,
        },
        error: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

const MODEL = MONGOOSE.model('log', LOG);
module.exports = MODEL;
