import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import login from '../components/login/Login'
import signup from '../components/login/Signup'
import mainPage from '../components/main/Main'
import cal from '../components/calculation/Cal'
import logout from '../components/login/Logout'
import readq from '../components/main/readq'
import makequestion from "../components/main/MakeQuestion";

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

    },
    {
        path: '/question/:slug',
        component: readq,

    }, {
        path: '/question',
        component: makequestion,

    }
]
const router = new VueRouter({
    routes
})

export default router
