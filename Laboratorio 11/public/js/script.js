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