<script>
import Button from '../components/forms/Button.vue'

import currency from '../libraries/currency'
    export default {
        data(){
            return {
                isLoading : false,
                coupon_code : null,
            }
        },
        methods : {
            fetch(){          
                this.$store.dispatch('cart')
            },
            getCheckoutInformation(){
               if(this.$route.name != 'checkout.information'){
                    this.$store.dispatch('checkoutShipping');
               }
            },
            async applyCoupon(){   
                try{
                     this.isLoding= true;
                     await this.$store.dispatch('applyCoupon', {coupon_code : this.coupon_code });
                }finally{
                    this.isLoding= false;
                }
               
            }, 
            async removeCoupon(){
                try {
                    this.isLoding= true;
                    await this.$store.dispatch('removeCoupon');
                } finally {
                    this.isLoding= false;
                }              
            },  
            format(amount){
                return currency.format(amount);
            }
            
        },
        mounted() {
            this.fetch();
            this.$store.dispatch('getCoupon');
            this.getCheckoutInformation();
          
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
                const shippingMethod = this.$store.getters.activeShippingMethod;  

                if(this.$route.name == 'checkout.information' || shippingMethod ==  null)  return 0;            
               
                return shippingMethod.amount;
            },  
            coupon(){
                const data = this.$store.getters.coupon;
                if(data){
                    return data;
                }
                return null;
            }, 
            total(){
                const discount  = this.coupon != null ? this.coupon.amount : 0;
                const subtotal = this.subtotal;
                const shippingCharge = this.shippingAmount;
                return (subtotal + shippingCharge) - discount;
                
            }   
        },
        components : { Button }   
    }
</script>
<template>
   <div class="w-full min-h-screen bg-white">
     <div class="container md:mx-auto md:px-16">
          <div class="flex">
            <div class="w-3/5 pr-16 py-8">
                <h1 class="block text-center text-[3rem] font-bold tracking-widest">ETTO APPAREAL</h1>
                <ul  class="flex justify-center gap-2  my-8">
                    <li>Cart</li>
                    <li>></li>
                    <li :class="{'font-bold' : this.$route.name == 'checkout.information'}">Information</li>
                    <li>></li>
                    <li :class="{'font-bold' : this.$route.name == 'checkout.shipping'}">Shipping</li>
                    <li>></li>
                    <li :class="{'font-bold' : this.$route.name == 'checkout.payment'}">Payment</li>           
                </ul>
                <router-view></router-view> 
            </div>
            <div class="w-2/5 pl-12 py-8 border-l min-h-screen" >
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
               <div v-if="!coupon" class="flex gap-4 my-6">
                    <input type="text" id="coupon_code" v-model="coupon_code" name="coupon_code" placeholder="Coupon Code">
                    <Button @click="applyCoupon" :isLoading="isLoading" :btntext="'Apply'"  class="btn btn-dark md:w-max"></Button>                               
                </div>
                <div  v-else class="flex gap-4 my-6">
                    <input type="text" id="coupon_code" v-model="coupon.name" name="coupon_code" placeholder="Coupon Code" disabled>
                    <Button @click="removeCoupon(coupon.id)" :isLoading="isLoading" :btntext="'Remove'"  class="btn !bg-rose-500 w-3"></Button>                                  
                </div>
                <div class="block border-b"></div>
                <div class="flex justify-between  my-4">
                    <span>Subtotal</span>
                    <span  id="subtotal">{{ format(subtotal)}}</span>
                </div>
                <div v-if="coupon" class="flex justify-between  my-4">
                    <span>Discount</span>
                    <span  id="subtotal">{{ format(coupon.amount)}}</span>
                </div>
                <div class="flex justify-between  my-4">
                    <span>Shipping</span>
                    <span v-if="this.$route.name != 'checkout.information'">{{ format(shippingAmount) }}</span>
                    <span v-else class="span-shipping-fee">{{ 'Shipping charge caclulated Next step' }}</span>
                </div>
                <div class="block border-b"></div>
                <div class="flex justify-between  my-4">
                    <span>Total</span>
                    <span class="text-lg font-bold">{{  format( total) }}</span>
                </div>
               </div>
              
            </div>
       </div>
     </div>
   </div>

</template>