'use strict';

const url = 'http://localhost:3000/alumnos/';
let listado, id, nombre, apellido, email, password, formulario, estasSeguro;

document.addEventListener('DOMContentLoaded', async function () {
    estasSeguro = document.getElementById('estasSeguro');

    listado = document.querySelector('#listado tbody');

    formulario = document.getElementById('formulario');

    id = document.getElementById('id');
    nombre = document.getElementById('nombre');
    apellido = document.getElementById('apellido');
    email = document.getElementById('email');
    password = document.getElementById('password');

    formulario.addEventListener('submit', aceptar);

    activarModal();

    listar();
});

async function aceptar(e) {
    e.preventDefault();

    formulario.classList.add('was-validated');
    if (!formulario.checkValidity()) {
        return;
      } 

        let metodo;

        const alumno = { nombre: nombre.value, apellido: apellido.value, email: email.value, password: password.value };

        if (id.value) {
            alumno.id = id.value;
            metodo = 'PUT';
        } else {
            metodo = 'POST';
        }

        console.log(alumno);

        const respuesta = await fetch(url + id.value, {
            method: metodo,
            body: JSON.stringify(alumno),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(respuesta);

        id.value = '';
        nombre.value = '';
        apellido.value = '';
        email.value = '';
        password.value = '';

        formulario.classList.remove('was-validated');
        
        listar();
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
            <td>${alumno.apellido}</td>
            <td>${alumno.email}</td>
            <td> 
                <a class="btn btn-primary" href="javascript:editar(${alumno.id})">Editar</a>
                <a class="btn btn-danger" data-id="${alumno.id}" data-bs-toggle="modal" data-bs-target="#estasSeguro" href="javascript:borrar(${alumno.id})">Borrar</a>
            </td>`;
        listado.appendChild(tr);
    });
}

async function editar(idSeleccionado) {
    console.log(idSeleccionado);

    const respuesta = await fetch(url + idSeleccionado);
    const alumno = await respuesta.json();

    id.value = alumno.id;
    nombre.value = alumno.nombre;
    apellido.value = alumno.apellido;
    email.value = alumno.email;
    password.value = alumno.password;
}

async function borrar(id) {
    console.log(id);

    // if(!confirm(`¿Estás seguro de que quieres borrar el registro id=${id}?`)) {
    //     return;
    // }

    const respuesta = await fetch(url + id, { method: 'DELETE' });

    console.log(respuesta);

    const modal = bootstrap.Modal.getInstance(estasSeguro);

    modal.hide();

    listar();
}


function activarModal() {
    estasSeguro.addEventListener('show.bs.modal', function (event) {
        console.log(event);
        // Button that triggered the modal
        const boton = event.relatedTarget
        // Extract info from data-bs-* attributes
        const id = boton.getAttribute('data-id')
        // Update the modal's content.
        const cuerpo = estasSeguro.querySelector('.modal-body');

        cuerpo.innerText = `¿Estás seguro de que quieres borrar el id ${id}?`;

        const aceptar = estasSeguro.querySelector('#modal-aceptar');
        aceptar.href = boton.href;
    });
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
