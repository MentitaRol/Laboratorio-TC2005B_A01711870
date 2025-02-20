//require nos permite obtener los modulos de js
//fs accede a los archivos del sistema
const filesystem = require('fs');

//crea un archivo .txt y escribe en el 'Hola desde node'
filesystem.writeFileSync('hola.txt', 'Hola desde node');


//sort asincrono
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 500];

for(let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
}

//crear servidor web desde node
const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    //     response.setHeader('Content-Type', 'text/html');
    //     response.write("");
    //     response.end();
});

server.listen(3000);