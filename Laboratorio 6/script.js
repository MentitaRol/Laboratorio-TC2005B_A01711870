function validarContraseña(contraseña){
    const min_longitud = /^.{8,}$/;
    const mayusculas = /[A-Z]/;
    const minusculas = /[a-z]/;
    const numeros = /\d/;
    const caracteres = /[!@#$%^&*(),.?":{}|<>]/;

    if(!min_longitud.test(contraseña)){
        return 'La contraseña debe tener al menos 8 caracteres';
    }

    if(!mayusculas.test(contraseña)){
        return 'La contraseña debe tener al menos una letra mayuscula';
    }

    if(!minusculas.test(contraseña)){
        return 'La contraseña debe tener al menos una letra minuscula';
    }

    if(!numeros.test(contraseña)){
        return 'La contraseña debe tener al menos un numero';
    }

    if(!caracteres.test(contraseña)){
        return 'La contraseña debe tener al menos un caracter especial';
    }

    return 'La contraseña es valida';
}   

const formulario = document.querySelector('#formularioContraseña');
const mensaje = document.querySelector('#mensaje');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const contraseña = document.querySelector('#floatingPassword').value;
    const resultado = validarContraseña(contraseña);

    if(resultado === 'La contraseña es valida'){
        mensaje.textContent = resultado;
        mensaje.className = 'mensaje-valido';
    }else{
        mensaje.textContent = resultado;
        mensaje.className = 'mensaje-error';
    }
})


document.getElementById("titulo").addEventListener("mouseover", function() {
    this.classList.add("resaltar");
});

document.getElementById("titulo").addEventListener("mouseout", function() {
    this.classList.remove("resaltar");
});

document.getElementById("campoTexto").addEventListener("keydown", function() {
    document.getElementById("parrafo").classList.add("resaltar");
});

document.getElementById("campoTexto").addEventListener("blur", function() {
    document.getElementById("parrafo").classList.remove("resaltar");
});


const drop = document.getElementById("drop-down");
const ver_mas = document.getElementById("ver_mas");
const contenido = document.getElementById("contenido");

ver_mas.addEventListener("click", () => {
    if (contenido.style.display === "none" || contenido.style.display === "") {
        contenido.style.display = "block"; // Mostrar
    } else {
        contenido.style.display = "none"; // Ocultar
    }

    // Rotar el icono
    drop.classList.toggle("rotado");
});