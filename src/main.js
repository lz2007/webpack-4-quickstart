import Vue from 'vue';
import store from './store';

import {
    Button,
    Select
} from 'element-ui';

import App from './App.vue';

import VueRouter from 'vue-router';
import routes from './router/index';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Button)
Vue.use(Select)

const router = new VueRouter({
    routes
});

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')