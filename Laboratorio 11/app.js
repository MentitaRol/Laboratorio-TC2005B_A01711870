const express = require('express');
const app = express();

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

app.use((request, response, next) => {
    console.log('Otro middleware!');

    //Manda la respuesta
    response.send('¡Hola mundo!'); 
});

app.listen(3000);