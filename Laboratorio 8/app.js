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