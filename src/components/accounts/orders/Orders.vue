<script>
 export default {
    data() {
        return {
            orders : null,
        }        
    },
    methods : {
        getOrders() {
            this.axios('/v1/user/1/orders')
            .then(response => {   this.orders = response.data  });
        }
    },
    created()  {
        this.getOrders();
    }
 }
</script>
<template>
   <div class="relative mb-16">
     <div class="flex justify-between items-center mb-4">
        <h1 class="block tracking-widest font-bold">Order History</h1> 
        <ul class="flex gap-4">
            <li class="tracking-widest cursor-pointer hover:underline">Confirmed</li>
            <li class="tracking-widest cursor-pointer hover:underline">Shipped</li>
            <li class="tracking-widest cursor-pointer hover:underline">Cancelled</li>
            <li class="tracking-widest cursor-pointer hover:underline">Completed</li>
        </ul>      
    </div>
    <div v-for="order in orders" class="order">
        <div class="flex items-center mb-4">
            <span>Order #: <router-link to="/account/orders/1/show">{{order.order_number}}</router-link></span>
            <span class="inline-block p-1 bg-slate-500 text-white ml-auto capitalize">{{ order.status }}</span>
        </div>
        <div v-for="item in order.items" class="order-item">
            <div class="column flex">
                <div class="relative w-20">
                    <img :src="baseApi+item.product.imagePath" alt="">
                </div>
                <div class="ml-4">
                    <h1 class="block text-sm capitalize">{{ item.product.name }}</h1>
                    <span class="block capitalize" v-for="attribute in item.properties">{{attribute}}</span>
                </div>
            </div> 

            <div class="column">            
                <span class="block text-center">{{ item.price }}</span>
            </div>

            <div class="column">            
                <span class="block text-center">Qty :  {{ item.qty}}</span>
            </div>

            <div class="column">            
                <span class="block text-center">{{  item.qty * item.price }}</span>
            </div>

        </div> 
    </div>
   </div>
</template>