import Vue from 'vue';
import VueRouter from 'vue-router';

import Payment from './components/Payment.vue';
import Ok from './components/Ok.vue';
import Empty from './components/Empty.vue';

let initialized = false;

export default function() {
    if (initialized) return;
    Vue.use(VueRouter);

    const routes = [
        { path : '/payment/pay', component : Payment },
        { path: '/payment/ok', component: Ok },
        { path: '/', component : Empty },
        { path: '*', component: Empty }
    ];

    const router = new VueRouter({routes : routes});
    Vue.mixin({router});
    initialized = true;
}