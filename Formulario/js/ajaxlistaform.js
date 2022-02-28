'use strict';

const url = 'http://localhost:3000/alumnos/';
let listado, id, nombre, apellidos, email, password, formulario, estasSeguro;

document.addEventListener('DOMContentLoaded', async function () {
    // estasSeguro = document.getElementById('estasSeguro');

    listado = document.querySelector('#listado tbody');

    formulario = document.getElementById('formulario');

    // id = document.getElementById('id');
    // email = document.getElementById('email');
    // password = document.getElementById('password');

    formulario.addEventListener('submit', aceptar);

    // activarModal();

    listar();
});

// async function aceptar(e) {
//     e.preventDefault();

//     let metodo;

//     const usuario = { email: email.value, password: password.value };

//     if (id.value) {
//         usuario.id = id.value;
//         metodo = 'PUT';
//     } else {
//         metodo = 'POST';
//     }

//     console.log(usuario);

//     const respuesta = await fetch(url + id.value, {
//         method: metodo,
//         body: JSON.stringify(usuario),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     console.log(respuesta);

//     id.value = '';
//     email.value = '';
//     password.value = '';

//     listar();
// }


async function aceptar(event) {
       
    
        if (!formulario.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        formulario.classList.add('was-validated')
      
    }



async function listar() {
    const respuesta = await fetch(url);
    const alumnos = await respuesta.json();

    console.log(alumnos);

    listado.innerHTML = '';

    let tr;

    alumnos.forEach(function (alumno) {
        tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${alumno.id}</th>
            <td>${alumno.nombre}</td>
            <td>${alumno.apellidos}</td>
            <td>${alumno.email}</td>
            <td> 
                <a class="btn btn-primary" href="javascript:editar(${alumno.id})">Editar</a>
                <a class="btn btn-danger" data-id="${alumno.id}" data-bs-toggle="modal" data-bs-target="#estasSeguro" href="javascript:borrar(${alumno.id})">Borrar</a>
            </td>`;
        listado.appendChild(tr);
    });
}

// async function editar(idSeleccionado) {
//     console.log(idSeleccionado);

//     const respuesta = await fetch(url + idSeleccionado);
//     const usuario = await respuesta.json();

//     id.value = usuario.id;
//     email.value = usuario.email;
//     password.value = usuario.password;
// }

// async function borrar(id) {
//     console.log(id);

//     // if(!confirm(`¿Estás seguro de que quieres borrar el registro id=${id}?`)) {
//     //     return;
//     // }

//     const respuesta = await fetch(url + id, { method: 'DELETE' });

//     console.log(respuesta);

//     const modal = bootstrap.Modal.getInstance(estasSeguro);

//     modal.hide();

//     listar();
// }
// function activarModal() {
//     estasSeguro.addEventListener('show.bs.modal', function (event) {
//         console.log(event);
//         // Button that triggered the modal
//         const boton = event.relatedTarget
//         // Extract info from data-bs-* attributes
//         const id = boton.getAttribute('data-id')
//         // Update the modal's content.
//         const cuerpo = estasSeguro.querySelector('.modal-body');

//         cuerpo.innerText = `¿Estás seguro de que quieres borrar el id ${id}?`;

//         const aceptar = estasSeguro.querySelector('#modal-aceptar');
//         aceptar.href = boton.href;
//     });
// }
// Example starter JavaScript for disabling form submissions if there are invalid fields
