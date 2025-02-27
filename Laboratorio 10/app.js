//Practica en clase 24/2/2025

const http = require('http');

const server = http.createServer((request, response) => {
    // request recibe la solicitud del cliente
    // respond envia una respuesta al cliente
    if(request.url == "/" && request.method == "GET"){
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(html);
        response.end();
    } else if (request.url == "/ruta2" && request.method == "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write(html2);
        response.end();
    }else if (request.url == "/otraRuta" && request.method == "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write(`<h2 class="h4">Otra ruta :0</h2><br><br></br>`);
        response.end();
    }
    else if (request.method == "POST"){
        const datos = [];
        request.on('data', (dato) => {
            // console.log(dato);
            datos.push(dato);
        });

        request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            nombres.push(datos_completos.split('=')[1]);
            response.setHeader('Content-Type', 'text/html');
            response.write('<div class="row align-items-start">');
            for(const nombre of nombres){
                response.write('<div class="col">');
                response.write(nombre);
            }
            response.end();
        });
    }else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("La pagina no existe");
        response.end();
    }
});

server.listen(3000);

const nombres = [];

const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratorio 10: Rutas y formas</title>
    <!-- Booststrap link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section class="container">

        <div id="contenido">
            <article>
                <br><br><h4 class="h4">Laboratorio 10: Rutas y formas</h4><br><br>

        <div class="row align-items-start">
            <div class="col">
                <form action="/" method="POST">
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

const html2 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratorio 10: Rutas y formass</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section class="container">

        <div id="contenido">
            <article>
                <br><br><h4 class="h4">Laboratorio 10: Rutas y formas</h4><br><br>

                <h2 class="h4">Nueva rutaaaa :D</h2><br><br>
            </article>
        </div>
    </section>

</body>
</html>`;