
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import Contact from './views/Contact.vue'
import ShowProduct from './views/ShowProduct.vue'

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
    ]

})


export default router