import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './MainApp';
import * as serviceWorker from './serviceWorker';

(function() {
    
    class Product extends HTMLElement {
      
        get _state() {
            return this._statePrivate;
        }

        set _state(value) 
        {
            this._statePrivate = value;
        }

        get _mountPoint() {
            return this._mountPointPrivate;
        }

        set _mountPoint(value) {
            this._mountPointPrivate = value;
        }

        get state() {
            return this.getAttribute('state');
        }

        set state(value) {
            this.setAttribute('state', value);
        }

        connectedCallback() {
            console.log('Inside Product connected callback');
            this.attachShadow({mode:'open'});
            if (!this.shadowRoot) return;
            // eslint-disable-next-line import/no-webpack-loader-syntax
            const appCss = require('!to-string-loader!css-loader!./App.css');
            // eslint-disable-next-line import/no-webpack-loader-syntax
            const detailsCss = require('!to-string-loader!css-loader!./Details.css');
            this.shadowRoot.innerHTML = `
                <style>${appCss}</style>
                <style>${detailsCss}</style>
                
                <div id="root"></div>
            `;

            this._mountPoint = this.shadowRoot.getElementById('root');
            //this.renderMainComponent;
            this.onMessageReceived.bind(this);
            this.renderMainComponent();
        }

        renderMainComponent() {
            if (this._mountPoint) {
                ReactDOM.render(<MainApp state={this._state} onInit={this.onMessageReceived.bind(this)}/>, this._mountPoint);
            }
        }

        onMessageReceived(message) {
            let evt = new CustomEvent("message", {bubbles : true, cancelable: true, detail : message});
            this.dispatchEvent(evt);
        }

        static get observedAttributes() {
            return ['state'];
        }

        attributeChangedCallback(attrName, oldVal, newVal) {
            if (attrName === 'state') {
                console.log("Product element received state", newVal);
                this._state = newVal;
            }
            this.renderMainComponent();
        }
    }

    console.log('Creating product-element');
    customElements.define('product-element', Product);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
})();
