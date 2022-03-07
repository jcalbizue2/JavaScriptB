class Boton extends HTMLElement {
    constructor() {
        super();
        
        
        const texto = this.getAttribute('texto');
        
        this.innerHTML = `
            <div class="row mb-3">
                <div class="offset-sm-2 col-sm-10">
                    <button type="submit" class="btn btn-primary">${texto}</button>
                </div>
            </div>`
    }
}

document.addEventListener('DOMContentLoaded', function () {
    customElements.define('jl-boton', Boton);
});