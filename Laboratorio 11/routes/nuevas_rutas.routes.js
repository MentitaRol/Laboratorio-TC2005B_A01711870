const express = require('express');
const router = express.Router();

const html = `<!DOCTYPE html>
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
        <div class="container">
            <h2>Preguntas a resolver</h2><br><br>

            <h5>Describe el archivo package.json.</h5><br>
            <p>
                JSON o JavaScript Object Notation, es un formato usado para estructurar datos en forma de texto y trasmitirlo de un sistema a otro, 
                como en aplicaciones cliente-servidor o en aplicaciones móviles.<br>

                El archivo package.json es un documento con formato JSON que almacena información crucial del proyecto. En el podemos encontrar
                detalles como la versión del proyecto, dependecias, compatibilidades, licencias entre otros.
                Su propósito principal es reunir y centralizar toda la información relevante sobre las dependencias del proyecto, 
                asegurando así que la aplicación funcione de manera adecuada al ser ejecutada.<br><br>
                <small>Esteban, D. (2024, 31 enero). NPM y package.json en Node.js - Diego Esteban 🧑‍💻🧢 - Medium. Medium.
                    <a class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    href= "https://medium.com/@diego.coder/npm-y-package-json-en-nodejs-87d101c8856e">
                    https://medium.com/@diego.coder/npm-y-package-json-en-nodejs-87d101c8856e
                </a></small><br><br>
                
            </p>

        </div>

</body>
</html>`;


router.get('/preguntas_a_resolver', (requiere, response) => {
    response.send(html);
});

router.get('/hola_mundo', (requiere, response) => {
    response.send(`<h1>Hola mundo!</h1>`);
});

router.get('/awa', (requiere, response) => {
    response.send(`<h1>Página que dice "awa"</h1>`);
});

router.get('/pilon', (require, response) => {
    response.send(`<h1>Una más, por si acaso</h1>`)
});


module.exports = router;