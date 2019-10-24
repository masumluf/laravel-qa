require('./bootstrap');

import Vue from 'vue';
//import VueRouter from 'vue-router';
//import routes from './routes';
import Vuetify from 'vuetify';
Vue.use(Vuetify);

import axios from 'axios';

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


//Vue.use(VueRouter);

let app = new Vue({
    el: '#app',
    vuetify: new Vuetify({})
    //router: new VueRouter(routes)
});
