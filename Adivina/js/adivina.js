'use strict';

let objetivo, nintentos;

document.addEventListener('DOMContentLoaded', function () {
    const numero = document.getElementById('numero');
    const probar = document.getElementById('probar');
    const respuesta = document.getElementById('respuesta');
    const intentos = document.getElementById('intentos');

    objetivo = resetear();

    probar.addEventListener('click', function () {
        if (objetivo > +numero.value) {
            respuesta.innerText = 'El objetivo es mayor ' + numero.value;
            indicarintentos();

        } else if (objetivo < +numero.value) {
            respuesta.innerText = 'El objetivo es menor ' + numero.value;
            indicarintentos();
        } else {
            respuesta.innerText = 'Acertaste';
            objetivo = resetear();
        }
    });
});

function resetear() {
    nintentos = 0;
    numero.value = "";
    intentos.innerText = '';
    return parseInt(Math.random() * 100) + 1;    
}

function indicarintentos(){
    numero.value = "";
    nintentos += 1;
    intentos.innerText = 'Lleva ' + nintentos + ' intentos';
    numero.focus();
}