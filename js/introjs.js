// consola (log, info, warm, error, assert)

console.log("Hola mundo!"); //Hola mundo desde consola
console.info("Aqui andamos aprendiendo");
console.warn("Esta es una advertencia");
console.error("kjaksjkasjkdjskdjskads");
console.assert(1 == 1);
console.assert(1 === 1);
console.assert(1 == "1");
console.assert(1 === "1"); //Tripe igual compara valores y tipo de dato -> 1 === "1" es falso
console.assert(1 == true);
console.assert(1 === true);

// variables, constantes

var wookie = "Cheewbaca"; //Forma antigua, no es tan segura
let otro_wookie = "Tarful"; //Forma moderna, tiene mayor alcance

const precio = 99.99;

//Alcance de las variables

// Utilizando "let" es más seguro ya que fuera del ciclo for la variable ya no existe
for(let i = 0; i < 10; i++){
    console.log(i);
}
// Ya no imprime "i"
// console.log(i);

// Utilizando "var" fuera del ciclo for la variable sigue existiendo
for(var i = 0; i < 10; i++){
    console.log(i);
}
// Imprime "i"
console.log(i);


//alert, prompt, confirm

alert("aadkakdmsakdksamd");
const nombre = prompt("¿Como te llamas?");
const is_hambre = confirm("¿Tienes hambre?");

// funciones tradicionales

function imprimir_status(){
    let respuesta = "";
    if(is_hambre){
        respuesta = "tiene hambre";
    }
    console.log(nombre + respuesta);
}

// funciones modernas

() => {}