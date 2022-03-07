class Modal extends HTMLElement {
    constructor() {
        super();

        const id = this.getAttribute('jl-id');
        const titulo = this.getAttribute('titulo');
        const cuerpo = this.getAttribute('cuerpo');

        this.innerHTML = `
            <div class="modal fade" data-bs-keyboard="false" data-bs-backdrop="static" id="${id}" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${titulo}</h5>
                        </div>
                        <div class="modal-body">
                            ${cuerpo}
                        </div>
                        <div class="modal-footer">
                            <a id="modal-aceptar" href="#" class="btn btn-primary">Aceptar</a>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    customElements.define('jl-modal', Modal);
});