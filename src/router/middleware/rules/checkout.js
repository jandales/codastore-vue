
import store  from   '../../../store/index'
import router from '../../router';


export default async(to, from, next) => {   

   await store.dispatch('cart'); 

   const cart = store.getters['cart']  
   
   if(cart == null || cart.items.length === 0){       
        next({ name: 'cart' });     
   } else {
        next()
   }

  

 
}