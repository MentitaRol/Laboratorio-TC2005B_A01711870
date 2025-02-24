//Practica en clase 20/2/2025

//require nos permite obtener los modulos de js
//fs accede a los archivos del sistema

// const filesystem = require('fs');

//crea un archivo .txt y escribe en el 'Hola desde node'

// filesystem.writeFileSync('hola.txt', 'Hola desde node');


//sort asincrono

// const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 500];

// for(let item of arreglo){
//     setTimeout(() => {
//         console.log(item);
//     }, item);
// }

//crear servidor web desde node

// const http = require('http');

// const server = http.createServer((request, response) => {
//     console.log(request.url);
//     response.setHeader('Content-Type', 'text/html');
//     response.write("");
//     response.end();
// });

// server.listen(3000);

//Una función que reciba un arreglo de números y devuelva su promedio.

const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let suma = 0;
let promedio = 0;

for(let i of arreglo){
    suma += i;
}

promedio = suma/arreglo.length;

console.log(promedio);

// Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.

const filesystem = require('fs');

function escribirCadena(cadena){;
    filesystem.writeFile('string_Node.txt', cadena, (err) =>{
        if(err) throw "Algo salio mal";
    } );
};

escribirCadena('Escribir un string en un archivo de texto usando writeFile');

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.

const nums = [-1, 0, 3, 5, 9, 12];
const target = 5;

function binarySearch(nums, target){
    let inicio = 0;
    let final = nums.length - 1

    while (inicio <= final){
        let mitad = Math.floor((inicio + final) / 2);
        let num = nums[mitad];

        if(num == target){
            return mitad;
        }
        if(num < target){
            inicio = mitad + 1;
        }
        if(num > target){
            final = mitad - 1;
        }
    }

    return - 1;
}

console.log(binarySearch(nums, target));

// Crea una pequeña aplicación web que al enviar una petición al servidor, devuelva una de las páginas que creaste anteriormente en tus laboratorios.

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

        <form action="/" method="POST">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
            </div><br>

            <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
            </div><br>

            <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button><br><br>
        </form>
    </section>

</body>
</html>`;

const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
});

server.listen(3000);
