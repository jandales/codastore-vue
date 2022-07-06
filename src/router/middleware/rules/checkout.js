
import store  from   '../../../store/index'
import router from '../../router';


export default(to, from, next) => {  
 

    const cart = store.getters['cart']    
    if(cart == null || cart.items.length == 0){
        router.push({ name: 'cart' });
        return next();     
    } 
    return  next()

 
}