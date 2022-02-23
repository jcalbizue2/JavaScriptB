let op1, op2, op, num, num2;

// Esperamos a que se cargue todo el documento en el DOM (Document Object Model) (Objetos de JavaScript)
document.addEventListener('DOMContentLoaded', function () {
    // Creamos variables que apunten a cada tipo de elemento
    const numeros = document.getElementsByClassName('numero');
    const operaciones = document.querySelectorAll('.operacion');
    const igual = document.querySelector('.igual');
    const display = document.getElementById('display');
    const resetear = document.querySelector('.resetear');
    const corregir = document.querySelector('.corregir');
    const resetearnumero = document.querySelector('.resetearnumero');

    console.log(numeros, operaciones, igual, display);

    // Por cada uno de los botones de número...
    for (let numero of numeros) {
        // ... agregamos un gestor de click
        numero.addEventListener('click', function () {
            // Añadimos al display el número pulsado
            // this = el elemento que ha lanzado el evento
            // Los cuadros de texto tienen una propiedad value para su contenido
            // Los botones y otras etiquetas contienen un innerText
            // display.value += this.innerText;
            if (display.value == 0) {
                display.value = this.innerText;
             } else
                display.value += this.innerText;
        });
    }

    // Por cada uno de los botones de operación...
    operaciones.forEach(function(operacion) {
        // ...asignamos cuando se pulse...
        operacion.addEventListener('click', function() {
            // ...que guarde el valor en pantalla, convertido a número (+) en la variable op1
            op1 = +display.value;
            // Vaciamos el display
            display.value = '';
            // Guardamos el texto del botón en la variable op
            op = this.innerText;

            console.log(op1, op);
        });
    });

    // Cuando se pulse al botón de igual
    igual.addEventListener('click', function() {
        // Guardamos el valor de la pantalla convertido en número (+) en la variable op2
        op2 = +display.value;

        console.log(op1, op, op2);

        // Ejecutamos la operación como un texto que se evalúa y devolvemos el resultado
        // en el display
        display.value = eval(op1 + op + op2);
    })

       // Cuando se pulse al botón de resetear
       resetear.addEventListener('click', function() {
        // Reseteamos todos los valores op1, op2 y op
        op1 = 0;
        op2 = 0;
        op = ''; 

        console.log(op1, op, op2);

        // Se pone el display a cero
        display.value = 0;
    })

       // Cuando se pulse al botón de corregir
       corregir.addEventListener('click', function() {
        // Eliminamos el último numero que se ha añadido 
        display.value = display.value.slice(0,-1);
        
    })

       // Cuando se pulse al botón de resetearnumero
       resetearnumero.addEventListener('click', function() {
        // Se pone el display a cero 
        display.value = 0;
        
    })
});
