const EXPRESS = require('express');
const MORGAN = require('morgan');

const BD = require('./config/dbconnect.js');

const CORS = require('./middlewares/cors.js');

const CATALOGO = require('./routes/_catalogo.js');
const CONTACTO = require('./routes/_contacto.js');
const USUARIO = require('./routes/_usuario.js');
const NOSOTROS = require('./routes/_nosotros.js');
const PORTFOLIO = require('./routes/_portfolio.js');
const SERVICIOS = require('./routes/_servicios.js');

const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

// MIDDLEWARES
APP.use(MORGAN("combined"));
APP.use(EXPRESS.urlencoded({
        extended: true
    })
);
APP.use(EXPRESS.json());
APP.use(CORS);

// ENDPOINTS
APP.use('/catalogo', CATALOGO);
APP.use('/contacto', CONTACTO);
APP.use('/usuario', USUARIO);
APP.use('/nosotros', NOSOTROS);
APP.use('/portfolio', PORTFOLIO);
APP.use('/servicios', SERVICIOS);

// LISTENER
APP.listen(PORT, () => {
    console.log("SERVIDOR CORRIENDO EN EL PUERTO " + PORT);
    console.log("PARA ACCEDER AL SERVIDOR " + "http://localhost:3000");
});
