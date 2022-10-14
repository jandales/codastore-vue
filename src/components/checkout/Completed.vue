<script>
import currency from '../../libraries/currency'
    export default {
        methods : {
           async getOrderInfo(){
                this.$store.dispatch('isLoading', true);
                try {
                   await this.$store.dispatch('getOrder',this.$route.params.ordernumber) 
                } finally {
                      this.$store.dispatch('isLoading', false);
                }                 
            },
            format(amount){
                return currency.format(amount);
            }
            
        },
        mounted() {
            this.getOrderInfo();        
        },
        computed : {    
      
            order() {
                return this.$store.getters.order;
            }
        }
    }
</script>
<template >  
 <loading v-model:active="this.$store.getters.isLoading"
                    :can-cancel="false"
                    :on-cancel="onCancel"
                    :is-full-page="true"/>
    <div v-if="order" class="w-full min-h-screen bg-white">
        <div class="container md:mx-auto md:px-16">
            <div class="flex">
                <div class="w-3/5 pr-16 py-8">
                    <h1 class="block text-center text-[3rem] font-bold tracking-widest">ETTO APPAREAL</h1>
                    <div v-if="order" class="mt-16">
        <div class="flex w-full items-center mt-8">
            <span class="text-[green]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
        <div class="ml-2">         
            <h1 class="font-bold">Thank You {{order.shipping.firstname}}!</h1>
        </div>
        </div>
        <div class="mt-8">        
            <h1 class="block">Your order is Confirmed</h1>
        </div>
        <ul class="relative block mt-4 " >            
                <li class="flex border border-b-0 p-4 ">
                    <span class="block  min-w-[150px]">Order Number</span>
                    <span>{{ `#${order.order_number}`}}</span>              
                </li>          
        
                <li class="flex border border-b-0  p-4">
                    <span class="block  min-w-[150px]">Shipping Address</span>            
                    <label for="" class="block capitalize">{{ `${order.shipping.street}  ${order.shipping.city}  ${order.shipping.region} ${order.shipping.country}` }}</label>                       
                </li>  
                <li class="flex border p-4">
                    <span class="block  min-w-[150px]">Shiiping Method</span>
                    <span>{{order.shipping_method.name}}</span>              
                </li>          
        </ul>
            <div class="flex justify-center  w-full mt-12">
                <router-link to="/shop/collection/all" class="btn btn-dark">Shop More</router-link>
            </div>
         
    
        </div>
                    
                </div>
                <div class="w-2/5 pl-12 py-8 min-h-screen border-l" >
                <div>
                <ul v-if="order" class="block mt-4">
                    <li  v-for="item in order.items" class="block mb-8">                
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
                                        <li v-for="(attribute,index) in item.properties" class="inline mr-2 tracking-wider capitalize text-sm">{{attribute}}</li>                                    
                                </ul>                   
                            </div>
                        </div>
                    </li>
                </ul>

                <div class="block border-b"></div> 

                <div class="flex justify-between  my-4">
                    <span>Subtotal</span>
                    <span  id="subtotal">{{ format(order.net_total)}}</span>
                </div>

                <div class="flex justify-between  my-4">
                    <span>Shipping</span>
                    <span>{{ format(order.shipping_charge) }}</span>
                
                </div>

                 <div class="flex justify-between  my-4">
                    <span>Tax</span>
                    <span>{{ format(order.tax_total) }}</span>                  
                </div>

                <div class="block border-b"></div>

                <div class="flex justify-between  my-4">
                    <span>Total</span>
                    <span class="text-lg font-bold">{{  format(order.gross_total) }}</span>
                </div> 

                </div> 

            </div>
        </div>
        </div>
     </div>
</template>