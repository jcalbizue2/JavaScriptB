const letrasdni = 'TRWAGMYFPDXBNJZSQVHLCKE';
let contra1, contra2, dnin, resto;

// Esperamos a que se cargue todo el documento en el DOM (Document Object Model) (Objetos de JavaScript)
document.addEventListener('DOMContentLoaded', function () {
    // Creamos variables que apunten a cada tipo de elemento
    const dni = document.getElementById('dni');
    const dnicomprobacion = document.getElementById('dnicomprobacion');
    const numero = document.getElementById('numero');
    const contrasena1 = document.getElementById('contrasena1');
    const contrasena2 = document.getElementById('contrasena2');

    dni.addEventListener('blur', function(){
        
        if(isNaN(dni.value.slice(0, -1))){
            dnicomprobacion.innerText = 'No es número';
        } else{
            resto = +dni.value.slice(0, -1) % 23;
            

        
        }

        comprobardni();

    });
    
    

});

function comprobardni() {
    

        resto = +dni.value.slice(0, -1) % 23;

        console.log( resto);

       
}