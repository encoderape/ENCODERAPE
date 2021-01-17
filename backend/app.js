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
const AYUDA = require('./routes/_ayuda.js');
const COMENTARIO = require('./routes/comentario.router.js');
const CONTACTO = require('./routes/_contacto.js');
const LOG = require('./routes/_log.js');
const NOSOTROS = require('./routes/_nosotros.js');
const NUESTROS_CLIENTES = require('./routes/nuestros-clientes.router.js');
const PORTFOLIO = require('./routes/_portfolio.js');
const SERVICIOS = require('./routes/_servicios.js');
const USUARIO = require('./routes/_usuario.js');

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
APP.use('/ayuda', AYUDA);
APP.use('/comentario', COMENTARIO);
APP.use('/contacto', CONTACTO);
APP.use('/log', LOG);
APP.use('/nosotros', NOSOTROS);
APP.use('/clientes', NUESTROS_CLIENTES);
APP.use('/portfolio', PORTFOLIO);
APP.use('/servicios', SERVICIOS);
APP.use('/usuario', USUARIO);

// LISTENER
APP.listen(PORT, () => {
    console.log(SERVER_MSG + PORT);
    console.log(URL_MSG + LOCALHOST_URL);
});
