const EXPRESS = require('express');
const MORGAN = require('morgan');
const MONGOOSE = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT;
const URI = process.env.ATLAS_URI;
const MONGO_MSG = process.env.MONGO_CONNECTION_OK_MSG;
const SERVER_MSG = process.env.SERVER_ONLINE_MSG;
const URL_MSG = process.env.SERVER_URL_MSG;
const LOCALHOST_URL = process.env.LOCALHOST_URL;

MONGOOSE.connect(URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    }
)
    .then(() => console.log(MONGO_MSG))
    .catch(console.error);

// CORS IMPORT
const CORS = require('./middlewares/cors.js');
// ROUTER IMPORTS
const _AYUDA = require('./routes/ayuda.router.js');
const _COMENTARIO = require('./routes/comentario.router.js');
const _CONTACTO = require('./routes/contacto.router.js');
const _LOG = require('./routes/log.router.js');
const _NOSOTROS = require('./routes/nosotros.router.js');
const _NUESTROS_CLIENTES = require('./routes/nuestros-clientes.router.js');
const _PORTFOLIO = require('./routes/portfolio.router.js');
const _SERVICIOS = require('./routes/servicios.router.js');
const _USUARIO = require('./routes/usuario.router.js');

const APP = EXPRESS();

// MIDDLEWARES
APP.use(MORGAN("combined"));
APP.use(EXPRESS.urlencoded({
        extended: true
    })
);
APP.use(EXPRESS.json());
APP.use(CORS);

// ENDPOINTS
APP.use('/ayuda', _AYUDA);
APP.use('/comentario', _COMENTARIO);
APP.use('/contacto', _CONTACTO);
APP.use('/log', _LOG);
APP.use('/nosotros', _NOSOTROS);
APP.use('/clientes', _NUESTROS_CLIENTES);
APP.use('/portfolio', _PORTFOLIO);
APP.use('/servicios', _SERVICIOS);
APP.use('/usuario', _USUARIO);

// LISTENER
APP.listen(PORT, () => {
    console.log(SERVER_MSG + PORT);
    console.log(URL_MSG + LOCALHOST_URL);
});
