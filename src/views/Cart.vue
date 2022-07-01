<script>
import { mapGetters } from 'vuex';
import currency from '../libraries/currency'
export default { 
    methods :{       
        updateQty(id, type, event = null){  
                 
            let currentQty = this.getCurrentQty(id);  
            
            if (type == 'add') {
                currentQty += 1;
            } 
            else if (type == 'enter') {                
                currentQty = event.target.value;              
            } 
            else {
                if (currentQty > 1) {
                    currentQty -= 1;
                }
            }  

            this.$store.dispatch('updateCartQty', { id : id, quantity : currentQty });
            this.$store.dispatch('cart');  

        },
        getCurrentQty(id){
             let currentQty = 0;
            this.cart.items.forEach(item => {
                if (item.id === id) {
                    return currentQty = item.qty;
                }
            });
            return currentQty;
        },
        deleteItem(id){
            this.$store.dispatch('cartItemDelete',id);
            this.$store.dispatch('cart'); 
        },
        format(amount){
            return currency.format(amount);
        }
    },
   created(){
        this.$store.dispatch('cart');
   },
   computed : {
      cart(){
         return this.$store.getters.cart;
      }, 
      items(){
         return this.cart.items.filter(item => {       
            item.product.regular_price = currency.format(item.product.regular_price);
         })
      }    
   }
}
</script>
<template>

    <div class="container md:min-h-[calc(100vh_-_100px)] md:mx-auto">
      <div class="w-[900px] mx-auto">
          <div class="block py-14">
            <h1 class="block text-center text-xl uppercase" :class="{'text-left':cart.items.length}">Your Cart</h1>
         </div>

        <table v-if="cart.items.length" class="w-full table">
            <thead>
                <tr>
                    <th class="text-left">Product</th>
                    <th class="text-left">Quantity</th>
                    <th class="text-right">Total</th>
                </tr>
            </thead>
             <tbody>
                <tr v-for="item in cart.items">
                    <td>
                        <div class="flex-1 flex align-top">
                            <router-link :to="{ name: 'collections-item', params: { item : item.product.slug }}">
                                <figure class="w-24">
                                <img :src="baseApi+item.product.imagePath" alt="">
                                </figure>
                            </router-link>
                            <div class="ml-4">
                               <router-link  :to="{ name: 'collections-item', params: { item : item.product.slug }}">
                                     <label for="" class="block capitalize tracking-wider text-sm text-dark hover:underline">{{item.product.name}}</label>
                               </router-link>
                                <label for="" class="block mt-1 tracking-wider text-sm">{{format(item.product.regular_price)}}</label>
                                <ul class="block">
                                    <li v-for="(attribute,key) in item.attributes" class="block mt-1 tracking-wider capitalize text-sm">{{attribute}}</li>                                    
                                </ul>
                            </div>
                        </div>
                    </td>
                    <td class="text-left align-top w-[160px]">
                        <div class="w-[140px] h-[45px] flex flex-row border border-darkGray">
                            <span @click="updateQty(item.id, 'subtract')"  class="w-[45px] text-dark  flex justify-center items-center p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                </svg>
                            </span>
                            <input @keyup.enter="updateQty(item.id, 'enter', $event)" type="text" class="!w-[calc(100%_-_90px)]  text-center px-2 text-dark  !border-0 " v-model="item.qty"  alt="">
                            <span @click="updateQty(item.id, 'add')"  class="w-[45px] text-dark  flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </span>
                        </div>  
                        <span @click="deleteItem(item.id)" class="text-dark block text-center tracking-widest text-xs mt-4 cursor-pointer hover:underline">REMOVE</span>                  
                    </td>
                    <td class="text-right align-top"><span class=" block mt-4 text-dark tracking-wider">{{ format(item.qty * item.product.regular_price) }}</span></td>
                </tr>
              
             </tbody>
        </table>
        <div v-else class="block text-center tracking-widest">
            <label for="" class="block uppercase">Your Cart Is Empty</label>
            <router-link :to="{ name : 'shop.collection.name', params : { name : 'all' } }" class="btn  !block mx-auto mt-8">Continue Shopping</router-link>
        </div>
      </div>    
      
    </div>
</template>