class Input extends HTMLElement {
    constructor() {
        super();

        const id = this.getAttribute('jl-id');
        const tipo = this.getAttribute('tipo');
        const atributos = this.getAttribute('atributos');
        const error = this.getAttribute('error');
        const texto = this.getAttribute('texto');

        console.log(id, tipo, atributos, error, texto);

        const div = document.createElement('div');
        div.className = 'row mb-3';

        const label = document.createElement('label');
        label.for = id;
        label.className = 'col-sm-2 col-form-label';
        label.innerText = id[0]?.toUpperCase() + id?.substring(1);

        const divInterno = document.createElement('div');
        divInterno.className = 'col-sm-10';

        divInterno.innerHTML =
            `<input type="${tipo}" class="form-control" id="${id}" ${atributos} />
             <div class="invalid-feedback">${error}</div>`;

        div.appendChild(label);
        div.appendChild(divInterno);
        this.appendChild(div);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    customElements.define('jl-input', Input);
});
