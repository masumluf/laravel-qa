import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import login from '../components/login/Login'
import signup from '../components/login/Signup'
import mainPage from '../components/main/Main'
import cal from '../components/calculation/Cal'
import logout from '../components/login/Logout'

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
    },
    {
        path: '/calculation',
        component: cal,
        name: 'cal'
    },
    {
        path: '/logout',
        component: logout,

    }
]
const router = new VueRouter({
    routes
})

export default router
