
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import Contact from './views/Contact.vue'


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
            path: '/contact',

            name : 'contact',

            component : Contact,
        },  
    ]

})


export default router