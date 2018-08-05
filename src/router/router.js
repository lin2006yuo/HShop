import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../views/Msite/Msite.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile'
import Search from '../views/Search/Search'
import Login from '../views/Login/Login'
import Shop from '../views/Shop/Shop'
import ShopGoods from '../views/Shop/ShopGoods/ShopGoods'
import ShopRating from '../views/Shop/ShopRating/ShopRating'
import ShopInfo from '../views/Shop/ShopInfo/ShopInfo'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/msite',
            component: Msite,
            meta: {
                showFooter: true,
                keepAlive : true
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
        },
        {
            path: '/shop',
            component: Shop,
            children: [
                { path: 'goods', component: ShopGoods },
                { path: 'rating', component: ShopRating },
                { path: 'info', component: ShopInfo },
                { path: '', redirect: 'goods' }
            ]
        }
    ]
})