const express = require('express');
const app = express();

//body-parser es un middleware de Express que permite analizar los datos del cuerpo 
// de una solicitud HTTP y convertirlos en un formato accesible para node

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


//Configurar un modulo de express -> Middleware

//Middleware: software que esta entre un sistema operativo y las aplicaciones que se ejecutan en el.
//Permite la comunicación y administración de datos en aplicaciones

// Con use declaramos middleware 
app.use((request, response, next) => {
    console.log('Middleware!');

    //Le permite a la petición avanzar hacia el siguiente middleware
    next(); 
});

//Agregar rutas con express
//Este middleware se ejecuta solo desde la ruta
app.use( '/ruta', (request, response, next) => {
    response.send('Respuesta de la ruta "/ruta"');
}); 

const rutasNombres = require('./routes/nombres.routes');
app.use('/nombres', rutasNombres);

app.listen(3000);