<script>
import currency from '../libraries/currency'
export default {
    data(){
        return {
            DISPLAY_FLEX : 'flex',
            DISPLAY_HIDDEN : 'hidden',
        }
    },
    methods: {
        close() {
            const modal = document.getElementById('modalCart');
            modal.classList.replace(this.DISPLAY_FLEX, this.DISPLAY_HIDDEN);           
        },
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
    mounted(){
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
    <div id="modalCart" class="hidden w-full fixed top-0 left-0 min-h-screen  bg-black bg-opacity-50">
        <div class="flex flex-col w-1/3 min-h-screen border-l bg-[#f0f0f0] fixed top-0 right-0 p-8 z-20">
            <div class="flex mb-8">
                <h1 class="block text-center text-xl uppercase">Your Cart</h1>
                <span class="block ml-auto" @click="close()">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
            </div>

            <ul v-if="cart" class="mt-4 relative overflow-y-auto">
                <li  v-for="item in cart.items" class="block mb-8 border-b border-[#f5f5f5]">
                    <div class="flex">
                        <figure class="bg-lightGray flex items-center  w-32  ">
                            <img :src="baseApi+item.product.imagePath"  class="img" alt="">
                        </figure>
                        <div class="w-full ml-4">
                            <div class="w-full flex items-center justify-between">
                                <label for="" class="block bg-theme uppercase tracking-widest">{{ item.product.name }}</label>
                                <span @click="deleteItem(item.id)"  class="cursor-pointer text-xs hover:underline" >
                                   REMOVE
                                </span>
                            </div>
                            <label for="" class="block mt-2">{{format(item.product.regular_price)}}</label>
                             <ul class="block mt-2">
                                    <li v-for="(attribute,index) in item.attributes" class="inline mr-2 tracking-wider capitalize text-sm">{{attribute}}</li>                                    
                             </ul>
                            <div class="w-[100px] h-[30px] flex flex-row border border-gray-200 mt-2">
                                <div @click="updateQty(item.id, 'subtract')"  class="w-[30px] flex justify-center items-center p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                    </svg>
                                </div>
                                <input @keyup.enter="updateQty(item.id, 'enter', $event)" type="text" class="!w-[calc(100%_-_60px)] text-center !text-xs px-2 bg-[#eee]   text-dark  !border-0" value="1"  alt="">
                                <div @click="updateQty(item.id, 'add')" class="w-[30px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <div class="flex flex-col md:flex-row w-full mt-auto gap-4 ">
                <router-link to="/cart" class="sm:w-full w-1/2"><button class="btn !w-full">View Cart</button></router-link>
                <router-link to="/cart" class="sm:w-full w-1/2"><button class="btn !w-full">Checkout</button></router-link>
         
            </div>
         </div>
    </div>
</template>