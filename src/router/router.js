import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../views/Msite/Msite.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile'
import Search from '../views/Search/Search'
import Login from '../views/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/msite',
            component: Msite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/',
            redirect: '/msite',
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            component: Login
        }
    ]
})