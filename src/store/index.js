import { createStore } from 'vuex'
import address from './modules/address';
import app from './modules/app';
import Cart from './modules/Cart';
import checkout from './modules/checkout';
import collections from './modules/collections';
import counter from './modules/counter';
import coupon from './modules/coupon';
import LoginModules from './modules/login';
import orders from './modules/orders';
import paymentOptions from './modules/paymentOptions';
import ProductModules from './modules/products'
import register from './modules/register';
import shippingMethod from './modules/shippingMethod';
import user from './modules/user';


export default createStore ({    
    modules : {
       login :  LoginModules,
       product : ProductModules,
       collection : collections,
       paymentCards : paymentOptions,
       address : address,
       orders : orders,
       user : user,
       register : register,
       counter : counter,
       cart : Cart,
       checkout : checkout,
       shippingMethod : shippingMethod,
       coupon : coupon,
       app : app
    },
});