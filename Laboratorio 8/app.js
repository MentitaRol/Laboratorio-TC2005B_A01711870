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