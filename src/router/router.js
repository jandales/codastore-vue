
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Contact from '../views/Contact.vue'
import ShowProduct from '../views/ShowProduct.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Account from '../views/Account.vue'
import UserProfile from '../components/accounts/UserProfile.vue'
import UserAddress from '../components/accounts/UserAddress.vue'
import PaymentOptions from '../components/accounts/paymentOption/PaymentOptions.vue'
import PaymentOptionCreate from '../components/accounts/paymentOption/PaymentOptionCreate.vue'
import PaymentOptionEdit from '../components/accounts/paymentOption/PaymentOptionEdit.vue'
import Orders from '../components/accounts/Orders.vue'

const router = createRouter({

    history : createWebHistory(),

    routes : [
        { 
            path: '/',

            name : 'home',

            component : Home,
        },  
        
   

        {
            path : '/shop/collection/:name',

            name : 'shop.collection.name',

            component : Shop,
        },

        {
            path : '/shop/collection/:name/sort-by=:keyword',

            name : 'shop.collection.sort',

            component : Shop,
        },


        { 
            path: '/products/:item',

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

            children : [
                
                { path : 'profile', component: UserProfile },

                { path : 'address', component : UserAddress },

                { path : 'orders', component : Orders },

                { path : 'payment-options', component : PaymentOptions },

                { path : 'payment-options/create', component : PaymentOptionCreate },

                { path : 'payment-options/:id/edit', name : 'payment-option.edit', component : PaymentOptionEdit },
                
            ]
        },
       

    ]

})


export default router