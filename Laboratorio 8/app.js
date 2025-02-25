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
    } else if (request.method == "POST"){
        const datos = [];
        request.on('data', (dato) => {
            // console.log(dato);
            datos.push(dato);
        });

        request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            nombres.push(datos_completos.split('=')[1]);
            response.setHeader('Content-Type','text/html');
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
        response.write("La página no existe");
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
    <title>Lab 6: Programación orientada a eventos</title>
    <!-- Booststrap link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section class="container">

        <div id="contenido">
            <article>
                <h4 class="h4">Laboratorio 6: Programación orientada a eventos</h4>

                <h5 class="h5">¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?</h5>
                <p>
                    La validación del lado del servidor actúa como una capa adicional de protección, ya que valida los datos en el servidor antes de procesarlos . 
                    Esto evita posibles manipulaciones en la validación del lado del cliente y garantiza que solo se acepten datos válidos y seguros .
                </p>

                <small>Robin, E. (2024, 1 febrero). Why JavaScript form data validation is not secure? - Newsoftwares.net blog. Newsoftwares.net Blog.
                    <a class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    href= "https://www.newsoftwares.net/blog/why-javascript-form-data-validation-is-not-secure/#What_is_JavaScript_Form_Data_Validation">
                    https://www.newsoftwares.net/blog/why-javascript-form-data-validation-is-not-secure/#What_is_JavaScript_Form_Data_Validation
                </a></small><br><br>

                <h5 class="h5">¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?</h5>
                <p>
                    Los usuarios pueden desactivar JavaScript en la configuración de su navegador o usar herramientas que bloqueen los scripts. 
                    Si su única línea de defensa es la validación de JavaScript, los usuarios pueden desactivar JavaScript y enviar los datos que deseen.
                </p>

                <small>Robin, E. (2024, 1 febrero). Why JavaScript form data validation is not secure? - Newsoftwares.net blog. Newsoftwares.net Blog.
                    <a class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    href= "https://www.newsoftwares.net/blog/why-javascript-form-data-validation-is-not-secure/#What_is_JavaScript_Form_Data_Validation">
                    https://www.newsoftwares.net/blog/why-javascript-form-data-validation-is-not-secure/#What_is_JavaScript_Form_Data_Validation
                </a></small><br><br>

                <h5 class="h5">Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces 
                    ¿por qué la primera pregunta dice que es una buena práctica?
                </h5>
                <p>
                    En la primer pregunta se dice que es una buena practica implementar la validación del lado del servidor.
                    La validación que se puede saltar y burlar facilmente es la validación del lado del cliente por JavaScript.

                    No importa cuán exhaustiva sea la validación del lado del cliente, siempre implemente la validación del lado del servidor. 
                    Esto garantiza que, incluso si alguien omite la validación de JavaScript, el servidor detectará datos maliciosos o malformados.
                </p>

                <small>Robin, E. (2024, 1 febrero). Why JavaScript form data validation is not secure? - Newsoftwares.net blog. Newsoftwares.net Blog.
                    <a class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    href= "https://www.newsoftwares.net/blog/why-javascript-form-data-validation-is-not-secure/#What_is_JavaScript_Form_Data_Validation">
                    https://www.newsoftwares.net/blog/why-javascript-form-data-validation-is-not-secure/#What_is_JavaScript_Form_Data_Validation
                </a></small><br><br>
            </article>
        </div>

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
