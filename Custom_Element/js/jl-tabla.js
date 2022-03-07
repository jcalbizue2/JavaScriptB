class Tabla extends HTMLElement {
    constructor() {
        super();

        const id = this.getAttribute('jl-id');
        const cabeceras = this.getAttribute('cabeceras');

        const table = document.createElement('table');
        table.id = id;
        table.className = 'table table-hover table-striped table-bordered';

        const thead = document.createElement('thead');
        thead.className = 'table-success';
        
        const theadTr = document.createElement('tr');
        
        let th;

        cabeceras.split(' ').forEach(function(cabecera) {
            th = document.createElement('th');
            th.innerText = cabecera;
            theadTr.appendChild(th);
        });
        
        const tbody = document.createElement('tbody');
        
        const tr = document.createElement('tr');

        table.appendChild(thead);
        table.appendChild(tbody);

        thead.appendChild(theadTr);

        tbody.appendChild(tr);

        this.appendChild(table);
    }


}

document.addEventListener('DOMContentLoaded', function() {
    customElements.define('jl-tabla', Tabla);
});