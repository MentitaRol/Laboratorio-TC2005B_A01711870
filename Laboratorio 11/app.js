const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab 6: Programación orientada a eventos</title>
    <!-- Booststrap link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section class="container">
        <div class="row align-items-start">
            <div class="col">
                <form action="/nombres/agregar" method="POST">
                    <h1 class="h3 mb-3 fw-normal">Escribe algo</h1>

                    <div class="form-floating">
                    <input type="text" class="form-control" id="floatingPassword" placeholder="Nombre" name="nombre">
                    <label for="floatingPassword">Nombre</label>
                    </div><br>

                    <input type="submit" id="boton_submit" class="btn btn-primary w-100 py-2" value="enviar"><br><br>
                </form>
            </div>
        </div>
    </section>

</body>
</html>`;


const express = require('express');
const app = express();

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

//Cuando se registra un middleware con app.get(), 
//el middleware sólo se registra para el método HTTP GET
app.get('/nombres/agregar', (request, response, next) => {
    response.send(html);
});

//Cuando se registra un middleware con app.post(), 
//el middleware sólo se registra para el método HTTP POST
app.post('/nombres/agregar', (request, response, next) => {
    response.send(html);
});

app.use((request, response, next) => {
    console.log('Otro middleware!');

    //Manda la respuesta
    response.send('¡Hola mundo!'); 
});

app.listen(3000);