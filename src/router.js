
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import Contact from './views/Contact.vue'
import ShowProduct from './views/ShowProduct.vue'
import Cart from './views/Cart.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import Account from './views/Account.vue'

const router = createRouter({

    history : createWebHistory(),

    routes : [
        { 
            path: '/',

            name : 'home',

            component : Home,
        },  
        
        { 
            path: '/shop',

            name : 'shop',

            component : Shop,
        }, 
        { 
            path: '/collections/tshirt/product1',

            name : 'collections-item',

            component : ShowProduct,
        }, 
        
        { 
            path: '/contact',

            name : 'contact',

            component : Contact,
        }, 
        { 
            path: '/cart',

            name : 'cart',

            component : Cart,
        },
        {
            path : '/login',

            name : 'login',

            component : Login,
        },
        {
            path : '/register',

            name : 'register',

            component : Register,
        },
        {
            path : '/forgot-password',

            name : 'forgotPassword',

            component : ForgotPassword,
        },
        {
            path : '/account',

            name : 'account',

            component : Account,
        }    
    ]

})


export default router