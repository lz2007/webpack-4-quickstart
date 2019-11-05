import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import products from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {
        products
    }
})