'use strict';

const url = 'http://localhost:3000/alumnos/';

var $formulario;

// let listado, id, nombre, apellido, email, password, formulario, estasSeguro;

$(function () {

    $formulario = $('#formulario');
    
    $formulario.on('submit', aceptar);


    activarModal();

    listar();

});


 function aceptar(e) {
    e.preventDefault();

    $formulario.addClass('was-validated');

    if (!$formulario[0].checkValidity()) {
        return;
    }

    var metodo;

    var alumno = { nombre: nombre.value, apellido: apellido.value, email: email.value, password: password.value };

    var id = +$('#id').val();
    id='';
    console.log(id);
        if (id) {
            alumno.id = id;
            metodo = 'PUT';
        } else {
            metodo = 'POST';
        }

        console.log(alumno);


        $.ajax({
            url: url + id,
            method: metodo,
            data: alumno
        }).then(function (datos, estado, objeto) {
            console.log(datos, estado, objeto);
    
            $('#id, #email, #password, #nombre, #apellido').val('');
            $formulario.removeClass('was-validated');
    
            listar();
        });
    }


function listar() {

    $.getJSON(url, function (alumnos) {
        console.log(alumnos);

        $('#listado tbody').empty();

        $(alumnos).each(function () {
            $('<tr>' +
                '<th>' + this.id + '</th>' +
                '<td>' + this.nombre + '</td>' +
                '<td>' + this.apellido + '</td>' +
                '<td>' + this.email + '</td>' +
                '<td>' +
                '    <a class="btn btn-primary" href="javascript:editar(' + this.id + ')">Editar</a>' +
                '    <a class="btn btn-danger" data-id="' + this.id + '" data-bs-toggle="modal" data-bs-target="#estasSeguro" href="javascript:borrar(' + this.id + ')">Borrar</a>' +
                '</td>' +
                '</tr>').appendTo('#listado tbody');
        });

        $('table').DataTable({
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json'
            }
        });
    });

}


function editar(idSeleccionado) {
    console.log(idSeleccionado);

    $.getJSON(url + idSeleccionado, function (alumno) {
        $('#id').val(alumno.id);
        $('#email').val(alumno.email);
        $('#password').val(alumno.password);
        $('#nombre').val(alumno.nombre);
        $('#apellido').val(alumno.apellido);
    });
}


function borrar(id) {
    console.log(id);

    $.ajax({
        url: url + id,
        method: 'DELETE'
    }).then(function (datos, estado, objeto) {
        console.log(datos, estado, objeto);

        var modal = bootstrap.Modal.getInstance(estasSeguro);

        modal.hide();

        listar();
    });
}


function activarModal() {
    $('#estasSeguro').on('show.bs.modal', function (event) {
        console.log(event);
        // Button that triggered the modal
        var boton = event.relatedTarget;
        // Extract info from data-bs-* attributes
        var id = boton.dataset.id; // boton.getAttribute('data-id');
        // Update the modal's content.
        $('#estasSeguro .modal-body').text('¿Estás seguro de que quieres borrar el id ' + id + '?');

        $('#modal-aceptar').attr('href', boton.href);
    });
};
// Example starter JavaScript for disabling form submissions if there are invalid fields
