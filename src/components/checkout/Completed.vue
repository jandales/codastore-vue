<script>
    export default {
        mounted() {
            this.$store.dispatch('getOrder',5)           
        },
        computed : {     
      
            order() {
                return this.$store.getters.order;
            }
        }
    }
</script>
<template >
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
     <ul class="mt-4" >
         
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
     <div  v-if="order.items" v-for="item in order.items" class="order-item">
                <div class="flex">
                        <figure class="bg-lightGray flex items-center  w-16  ">
                            <img :src="baseApi+item.product.imagePath"  class="img" alt="">
                        </figure>
                        <div class="w-full ml-4">
                            <div class="w-full flex items-center justify-between">
                                <label for="" class="block text-xs bg-theme uppercase tracking-widest font-semibold text-dark">{{ item.product.name }}</label>
                                <label for="" class="block text-xs bg-theme uppercase tracking-widest font-semibold text-dark">{{ item.qty * item.product.regular_price }}</label>                               
                            </div>
                            <label for="" class="block mt-1">{{ `${item.qty}  x  ${item.product.regular_price}` }}</label>
                             <ul class="block mt-1">
                                    <li v-for="(attribute,index) in item.properties" class="inline mr-2 tracking-wider capitalize text-sm">{{attribute}}</li>                                    
                             </ul>                   
                        </div>
                    </div>
     </div>  
   
    </div>
     
    
 
</template>