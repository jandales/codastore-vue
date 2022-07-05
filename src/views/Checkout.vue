<script>

import currency from '../libraries/currency'
    export default {
        methods : {
            fetch(){
                if(this.$route.name == 'checkout.completed'){
                      this.$store.dispatch('getOrder',5)
                      return;
                }
                this.$store.dispatch('cart')
            },  
            format(amount){
                return currency.format(amount);
            }
            
        },
        mounted() {
            this.fetch();
            this.$store.dispatch('checkoutShipping');
          
        },
        computed : {
            cartItems() {
                return this.$store.getters.cartItems;
            },
            subtotal(){
                return this.$store.getters.subtotal;
            },
            isAuth(){              
                return this.$store.getters.authenticated;
            },
            shippingAmount(){       
                if(this.$route.name == 'checkout.information')  return 0;
                return this.$store.getters.activeShippingMethod.amount;
            },
            isCompleted(){
                return this.$route.name == 'checkout.completed' ? true : false;
            },
            summary(){
                 return this.$route.name == 'checkout.completed' ? this.$store.getters.order :  null;   
               
            }
             
            
        }   
    }
</script>
<template>

   <div class="w-full min-h-screen bg-white">
     <div class="container md:mx-auto md:px-16">
          <div class="flex">
            <div class="w-3/5 pr-16 py-8">
                <h1 class="block text-center text-[3rem] font-bold tracking-widest">ETTO APPAREAL</h1>
                <ul v-if="!isCompleted" class="flex justify-center gap-2  my-8">
                    <li class="cursor-pointer"><router-link to="/cart">Cart</router-link></li>
                    <li>></li>
                    <li class="cursor-pointer" :class="{'font-bold' : this.$route.name == 'checkout.information'}"><router-link to="/checkout">Information</router-link></li>
                    <li>></li>
                    <li class="cursor-pointer" :class="{'font-bold' : this.$route.name == 'checkout.shipping'}"><router-link to="/checkout/shipping">Shipping</router-link></li>
                    <li>></li>
                    <li class="cursor-pointer" :class="{'font-bold' : this.$route.name == 'checkout.payment'}"><router-link to="/checkout/payment">Payment</router-link></li>           
                </ul>
                <router-view></router-view> 
            </div>
            <div class="w-2/5 pl-12 py-8 border-l" >
               <div>
                    <ul class="block mt-4">
                   <li  v-for="item in cartItems" class="block mb-8">
               
                    <div class="flex">
                        <figure class="bg-lightGray flex items-center  w-16  ">
                            <img :src="baseApi+item.product.imagePath"  class="img" alt="">
                        </figure>
                        <div class="w-full ml-4">
                            <div class="w-full flex items-center justify-between">
                                <label for="" class="block text-xs bg-theme uppercase tracking-widest font-semibold text-dark">{{ item.product.name }}</label>
                                <label for="" class="block text-xs bg-theme uppercase tracking-widest font-semibold text-dark">{{ format( item.qty * item.product.regular_price) }}</label>                               
                            </div>
                            <label for="" class="block mt-1">{{ `${item.qty}  x  ${format(item.product.regular_price)}` }}</label>
                             <ul class="block mt-1">
                                    <li v-for="(attribute,index) in item.attributes" class="inline mr-2 tracking-wider capitalize text-sm">{{attribute}}</li>                                    
                             </ul>                   
                        </div>
                    </div>
                </li>
               </ul>
               <div class="block border-b"></div>
               <div class="flex gap-4 my-6">
                    <input type="text" id="coupon_code" validator-input="coupon_code" name="coupon_code" placeholder="Coupon Code">
                    <button id="btn-coupon-apply" class="btn btn-dark w-3">Apply</button>   
                </div>
                <div class="block border-b"></div>
                <div class="flex justify-between  my-4">
                    <span>Subtotal</span>
                    <span  id="subtotal">{{ format(subtotal)}}</span>
                </div>
                <div class="flex justify-between  my-4">
                    <span>Shipping</span>
                    <span v-if="this.$route.name != 'checkout.information'">{{ format(shippingAmount) }}</span>
                    <span v-else class="span-shipping-fee">{{ 'Shipping charge caclulated Next step' }}</span>
                </div>
                <div class="block border-b"></div>
                <div class="flex justify-between  my-4">
                    <span>Total</span>
                    <span class="text-lg font-bold">{{  format((subtotal + parseInt(shippingAmount))) }}</span>
                </div>
               </div>
               {{summary}}
               <div v-if="summary">
 
               </div>
            </div>
       </div>
     </div>
   </div>
</template>