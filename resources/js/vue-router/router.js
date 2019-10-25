import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import login from '../components/login/Login'
import signup from '../components/login/Signup'
import mainPage from '../components/main/Main'


const routes = [{
        path: '/login',
        component: login
    },
    {
        path: '/signup',
        component: signup
    },
    {
        path: '/main',
        component: mainPage,
        name: 'mainPage'
    }
]
const router = new VueRouter({
    routes
})

export default router
