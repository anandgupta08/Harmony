class Support extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <div style="border: darkkhaki 2px dashed; padding: 20px">
            <p>
                <img src="assets/js.png" height=50px">
            </p>
            <h1>support works!</h1>
        </div>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
}

customElements.define('support-element', Support);