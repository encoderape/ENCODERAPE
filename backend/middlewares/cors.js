const CORS = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "DELETE, GET, OPTIONS, PATCH, POST, PUT");
    res.header("Allow", "DELETE, GET, OPTIONS, PATCH, POST, PUT");
    next();
};

module.exports = CORS;
