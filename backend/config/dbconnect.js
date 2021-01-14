const MONGOOSE = require('mongoose');

MONGOOSE.connect("mongodb+srv://ape:Encoderape97)@crustaceo.xjtpy.mongodb.net/encoderape?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    }
)
    .then(() => console.log("PASO 3 -> CONEXIÓN A LA BASE DE DATOS REALIZADA CORRECTAMENTE"))
    .catch(console.error);
