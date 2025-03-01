//Si los archivos comienzan a crecer, es importante reestructurarlos semánticamente en módulos para que sean más fáciles de mantener.

const express = require('express');

const router = express.Router();

const fileSystem = require('fs');

const html_content = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratorio 11: Express</title>
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

const nombres = [];

//Cuando se registra un middleware con app.get(), 
//el middleware sólo se registra para el método HTTP GET
router.get('/agregar', (request, response, next) => {
    response.send(html_content);
});

//Cuando se registra un middleware con app.post(), 
//el middleware sólo se registra para el método HTTP POST
router.post('/agregar', (request, response, next) => {
    //request.body es un objeto que contiene los datos enviados en el cuerpo de la solicitud HTTP
    console.log(request.body);
    nombres.push(request.body.nombre);
    console.log(nombres);

    fileSystem.writeFile('nombres.txt', nombres.join('\n'),(err) => {
        if(err) console.error("Error al escribir en el archivo:", err);
    });

    let html = html_content;
    for(let nombre of nombres){
        html += nombre;
    }
    response.send(html);
});

module.exports = router;