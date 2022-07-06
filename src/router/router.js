
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
import Address from '../components/accounts/address/Address.vue'
import PaymentOptions from '../components/accounts/paymentOption/PaymentOptions.vue'
import PaymentOptionCreate from '../components/accounts/paymentOption/PaymentOptionCreate.vue'
import PaymentOptionEdit from '../components/accounts/paymentOption/PaymentOptionEdit.vue'
import Orders from '../components/accounts/orders/Orders.vue'
import OrderShow from '../components/accounts/orders/OrderShow.vue'
import AddressCreate from '../components/accounts/address/AddressCreate.vue'
import AddressEdit from '../components/accounts/address/AddressEdit.vue'
import Logout from '../views/Logout.vue'
import Dashboard from '../components/accounts/Dashboard.vue'
import Checkout from '../views/Checkout.vue'
import About from '../views/About.vue'
import Information from '../components/checkout/Information.vue'
import Shipping from '../components/checkout/Shipping.vue'
import Payment from '../components/checkout/Payment.vue'
import Completed from '../components/checkout/Completed.vue'

import middleware  from './middleware'

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
            path: '/about',

            name : 'about',

            component : About,
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

            beforeEnter : middleware.guest,
        },

        {
            path : '/register',

            name : 'register',

            component : Register,

            beforeEnter : middleware.guest,
        },

        {
            path : '/forgot-password',

            name : 'forgotPassword',

            component : ForgotPassword,

            beforeEnter : middleware.guest,
        },

        {
            path : '/checkout',

            name : 'checkout',

            component : Checkout,

            beforeEnter:  [middleware.user,  middleware.checkout],
            
            children : [

                { path : '', name : 'checkout.information', component : Information},

                { path : 'shipping', name : 'checkout.shipping', component : Shipping },
                
                { path : 'payment', name : 'checkout.payment', component : Payment },

               
            ]

        },

        {   
            path : '/logout',
        
            name : 'logout', 

            component : Logout },
        
        {
            path : '/account',

            name : 'account',

            component : Account,

            beforeEnter : middleware.user,

            children : [

                { path : '', name : 'dashboard', component: Dashboard },

                { path : 'profile', component: UserProfile },

                { path : 'orders', component : Orders },

                { path : 'orders/:id/show', component : OrderShow },

                { path : 'payment-options', component : PaymentOptions },

                { path : 'payment-options/create', component : PaymentOptionCreate },

                { path : 'payment-options/:id/edit', name : 'payment-option.edit', component : PaymentOptionEdit },

                { path : 'address', component : Address },

                { path : 'address/create', component : AddressCreate },

                { path : 'address/:id/edit', name:'address.edit', component : AddressEdit },               
                
            ]
        },

        { path : '/order/:ordernumber/confirmed', name : 'order.confirmed', component : Completed }
       

    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
      },

})


export default router