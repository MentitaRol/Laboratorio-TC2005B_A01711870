// 1: 
// Entrada: un número pedido con un prompt.
// Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos.

let numero_1 =  prompt("Ingresa un número: ");

const respuesta_1 = document.getElementById("respuesta_1");

let tablaHTML = `<table border="1">
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>Cuadrado</th>
                            <th>Cubo</th>
                        </tr>
                    </thead>
                    <tbody>`;

    for (let i = 1; i <= numero_1; i++) {
        tablaHTML += `<tr>
                        <td>${i}</td>
                        <td>${i**2}</td>
                        <td>${i**3}</td>
                    </tr>`;
    }

    tablaHTML += `</tbody></table>`;

    respuesta_1.innerHTML = tablaHTML;
// 2: 
// Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria.
// Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.

let numero_2 = Math.floor(Math.random() * 11);
let numero_2_2 = Math.floor(Math.random() * 11);

let suma = numero_2 + numero_2_2;

const respuesta_2 = document.getElementById("respuesta_2");

let inicio = performance.now();
let respuesta = Number(prompt(`¿Cuál es la suma de ${numero_2} + ${numero_2_2}?`));
let fin = performance.now();

let tiempo = ((fin - inicio) / 1000);

if(respuesta == suma){
    respuesta_2.innerHTML = `Correcto. <br> Tiempo: ${tiempo} segundos.`;
}else{
    respuesta_2.innerHTML = `Inorrecto`;
};

// 3: 
// Función: contador.
// Parámetros: Un arr15eglo de números.
// Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.

const respuesta_3 = document.getElementById("respuesta_3");

function contador_array (array_3){
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;
    for(let i = 0; i < array_3.length; i++){
        if(array_3[i] == 0){
            ceros++
        }if(array_3[i] < 0){
            negativos++;
        }if(array_3[i] > 0){
            positivos++;
        }
    }

    respuesta_3.innerHTML = `
                                Arreglo: [-7, 42, 5, -19, 0, 99, 26, -42, 0, -25, 33, 15, 0, 77, -13, 58, 0, 3, -10, 4, -5] <br><br>
                                Negativos: ${negativos} <br>
                                Ceros: ${ceros} <br>
                                Positivos: ${positivos}`;

    return [negativos,ceros,positivos];
};

console.assert(
    contador_array([-1, -2, -3, -4, -99, -50, -1000])[0] === 7 && contador_array([-1, -2, -3, -4, -99, -50, -1000])[1] === 0 &&
    contador_array([-1, -2, -3, -4, -99, -50, -1000])[2] === 0, "Error en el caso 1"
);

console.assert(
    contador_array([1, 2, 3, 4, 5, 100, 250, 999, 42])[0] === 0 && contador_array([1, 2, 3, 4, 5, 100, 250, 999, 42])[1] === 0 &&
    contador_array([1, 2, 3, 4, 5, 100, 250, 999, 42])[2] === 9, "Error en el caso 2"
);

console.assert(
    contador_array([0, 0, 0, 0, 0])[0] === 0 && contador_array([0, 0, 0, 0, 0])[1] === 5 &&
    contador_array([0, 0, 0, 0, 0])[2] === 0, "Error en el caso 3"
);

console.assert(
    contador_array([-10, 0, 5, -20, 0, 15, 30, -5, 0])[0] === 3 && contador_array([-10, 0, 5, -20, 0, 15, 30, -5, 0])[1] === 3 &&
    contador_array([-10, 0, 5, -20, 0, 15, 30, -5, 0])[2] === 3, "Error en el caso 4"
);

contador_array([-7, 42, 5, -19, 0, 99, 26, -42, 0, -25, 33, 15, 0, 77, -13, 58, 0, 3, -10, 4, -5]);

// 4: 
// Función: promedios.
// Parámetros: Un arreglo de arreglos de números.
// Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.

const respuesta_4 = document.getElementById("respuesta_4");

function matrix_promedios (matrix_4){
    const array_promedios = new Array(matrix_4.length).fill(0);

    for(let i = 0; i < matrix_4.length; i++){
        let suma = 0;
        let cantidad = matrix_4[i].length;
        for(let j = 0; j < matrix_4.length; j++){
            suma += matrix_4[i][j]
        }

        const promedio = (suma / cantidad).toFixed(2);

        array_promedios[i] = promedio;
    }

    respuesta_4.innerHTML = array_promedios;

    return array_promedios;
}

console.assert(
    matrix_promedios([[26, 33, 42], [58, 77, 99], [5, 15, 2]])[0] === "33.67" &&
    matrix_promedios([[26, 33, 42], [58, 77, 99], [5, 15, 2]])[1] === "78.00" &&
    matrix_promedios([[26, 33, 42], [58, 77, 99], [5, 15, 2]])[2] === "7.33", "Error en el caso 1");

console.assert(
    matrix_promedios([[1, 2, 3], [4, 5, 6], [7, 8, 9]])[0] === "2.00" &&
    matrix_promedios([[1, 2, 3], [4, 5, 6], [7, 8, 9]])[1] === "5.00" &&
    matrix_promedios([[1, 2, 3], [4, 5, 6], [7, 8, 9]])[2] === "8.00", "Error en el caso 2");

    console.assert(
        matrix_promedios([[10, 20, 30], [30, 40, 50], [50, 60, 70]])[0] === "20.00" &&
        matrix_promedios([[10, 20, 30], [30, 40, 50], [50, 60, 70]])[1] === "40.00" &&
        matrix_promedios([[10, 20, 30], [30, 40, 50], [50, 60, 70]])[2] === "60.00", "Error en el caso 3");
    

console.assert(
    matrix_promedios([[1]])[0] === "1.00", "Error en el caso 4");

matrix_promedios([[26, 33, 42],[58, 77, 99],[5,15,2]]);

// 5:
// Función: inverso.
// Parámetros: Un número.
// Regresa: El número con sus dígitos en orden inverso.

const respuesta_5 = document.getElementById("respuesta_5");

function inverso(numero_5){
    let numero_original = numero_5;
    let resultado_5 = 0;

    while(numero_5 != 0){  
        resultado_5 = resultado_5*10 + (numero_5 % 10);
        numero_5 = Math.floor(numero_5/10);
    }

    respuesta_5.innerHTML = `
    Numero original: ${numero_original} <br><br>
    Numero invertido: ${resultado_5}`;

    return resultado_5;
}

console.assert(inverso(123) === 321, "Error en el caso 1");
console.assert(inverso(49) === 94, "Error en el caso 2");
console.assert(inverso(9876) === 6789, "Error en el caso 3");
console.assert(inverso(1) === 1, "Error en el caso 4");

inverso(7943);

// 6:
// Swap the values of two objects.
// We'll provide name, number, and height for two objects.

const respuesta_6 = document.getElementById("respuesta_6");

class Persona{
    constructor(nombre, numero, altura){
        this.nombre = nombre;
        this.numero = numero;
        this.altura = altura;
    }

    static swapPersonas(persona1, persona2){
        const cambioNombre = persona1.nombre;
        const cambioNumero = persona1.numero;
        const cambioAltura = persona1.altura;

        persona1.nombre = persona2.nombre;
        persona1.numero = persona2.numero;
        persona1.altura = persona2.altura;

        persona2.nombre = cambioNombre;
        persona2.numero = cambioNumero;
        persona2.altura = cambioAltura;
    }

    imprimir(){
        respuesta_6.innerHTML +=  `${this.nombre} ${this.numero} ${this.altura} <br>`;
    }
}

const objeto1 = new Persona("Morty", 1234, 6);
const objeto2 = new Persona("Rick", 5678, 5);

objeto1.imprimir();
objeto2.imprimir();

Persona.swapPersonas(objeto1, objeto2);

objeto1.imprimir();
objeto2.imprimir();