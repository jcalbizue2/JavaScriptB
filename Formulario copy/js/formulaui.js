const letrasdni = 'TRWAGMYFPDXBNJZSQVHLCKE';
let contra1, contra2, dniok, resto, numerook, contrasenaok;

// Esperamos a que se cargue todo el documento en el DOM (Document Object Model) (Objetos de JavaScript)
document.addEventListener('DOMContentLoaded', function () {
    // Creamos variables que apunten a cada tipo de elemento
    const dni = document.getElementById('dni');
    const dnicomprobacion = document.getElementById('dnicomprobacion');
    const numero = document.getElementById('numero');
    const numeromensaje = document.getElementById('numeromensaje');
    const contrasena1 = document.getElementById('contrasena1');
    const contrasena2 = document.getElementById('contrasena2');
    const contrasenamensaje = document.getElementById('contrasenamensaje');
    const aceptar = document.getElementById('aceptar');


    dni.addEventListener('blur', function(){

        dniok = 0;
        dniok = comprobardni();
        if(dniok == 1){
            dnicomprobacion.innerText = 'Introduzca dni correcto';
            dni.focus;   
        }

    });

    dni.addEventListener('click', function(){

            dnicomprobacion.innerText = '';

    });

    numero.addEventListener('click', function(){

               numeromensaje.innerText = '';

    });

    numero.addEventListener('blur', function(){

        numerook = 0;
        console.log('hola');
        numerook = comprobarnumero();
        if(numerook == 1){
            numeromensaje.innerText = 'Error, Introduzca un número par';
            numero.focus;

        }

    });    


    aceptar.addEventListener('click', function(){

        dniok = 0;
        numerook = 0;
        contrasenaok = 0;

        dniok = comprobardni();
        if(dniok == 1){
            dnicomprobacion.innerText = 'Introduzca dni correcto';
            dni.focus;   
        }
        numerook = comprobarnumero();

        if(numerook == 1){
            numeromensaje.innerText = 'Error, Introduzca un número par';
        }
        
        contrasenaok = comprobarcontraseña();
        switch (contrasenaok){
            case 1:
                contrasenamensaje.innerText = "Debe introducuir las dos contraseñas";
                break;
            case 2:
                alert('Las contraseñas no son iguales');
                break;
            default:
                break;
        }

    });

});

function comprobardni() {

    if(dni.value.length != 9){
        return 1;
    };

    if(isNaN(dni.value.slice(0, -1))){
        return 1;
    } else{
        resto = +dni.value.slice(0, -1) % 23;
        console.log(resto);
    };

    if(letrasdni[+resto].toUpperCase() != dni.value.substr(-1).toUpperCase() ){
        return 1;

    };
       
}

function comprobarnumero() {

    console.log(+numero.value % 2);
    if( +numero.value % 2 != 0){
        return 1;
    };
       
}

function comprobarcontraseña() {

    if(contrasena1.value.length === 0 || contrasena2.value.length === 0){
        return 1;
    };

    if(contrasena1.value != contrasena2){
        return 2;
    }
       
}
