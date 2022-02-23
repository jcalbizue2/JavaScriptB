'use strict';

let objetivo, intentos, minimo, maximo;

document.addEventListener('DOMContentLoaded', function () {
    const numero = document.getElementById('numero');
    const probar = document.getElementById('probar');
    const respuesta = document.getElementById('respuesta');
 

    objetivo = resetear();
    console.log(objetivo);

    probar.addEventListener('click', function () {
        if (objetivo > +numero.value) {
            // respuesta.innerText = 'El objetivo es mayor ' + numero.value;
            minimo = numero.value;
            indicarintentos();

        } else if (objetivo < +numero.value) {
            // respuesta.innerText = 'El objetivo es menor ' + numero.value;
            maximo = numero.value;
            indicarintentos();
        } else {
            respuesta.innerText = 'Acertaste';
            objetivo = resetear();
            console.log(objetivo);
        }
    });
});

function resetear() {
    intentos = 0;
    numero.value = "";
    minimo = 1;
    maximo = 100;
    return parseInt(Math.random() * 100) + 1;    
}

function indicarintentos(){
    numero.value = "";
    intentos += 1;
    respuesta.innerText = 'El objetivo es mayor ' + minimo + ' y menor que ' + maximo +' y llevas ' + intentos + ' intentos';
    numero.focus();
}