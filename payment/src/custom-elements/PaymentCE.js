import Vue from 'vue';
import VueRouter from 'vue-router';

import Core from '../components/Core.vue';
import Payment from '../components/Payment.vue';
import Ok from '../components/Ok.vue';
import Empty from '../components/Empty.vue';

Vue.use(VueRouter);

const routes = [
    { path : '/payment', component : Core, children :[
        { path: 'pay', component: Payment },
        { path: 'ok', component: Ok }
    ] },
    { path: '**', component: Empty }
];

const router = new VueRouter({routes : routes});

export default class PaymentCE extends HTMLELement {

    constructor() {
        super();
        this.attachShow({mode : open});
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div id="component"></div>
        `;

        this.vue = new Vue({
            router,
            render(r) {
                return r(App);
            }
        });

        const comp = this.shadowRoot.getElementById('component');
        this.vue.$mount(comp);
    }

}