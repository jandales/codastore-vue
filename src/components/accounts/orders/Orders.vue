<script>
 export default {
    data() {
        return {
            orders : null,
        }        
    },
    methods : {
       async getOrders() {
            this.$store.dispatch('isLoading', true); 
            try {
                 await this.$store.dispatch('getOrders'); 
            } finally {
                this.$store.dispatch('isLoading', false); 
            }        
        },
        ordersCount(orders, status){
            let count = 0;
            orders.filter(order => {              
                if(order.status == status) count++;
            })
            return count;
        }
    },
    created()  {
        this.getOrders();
    },
    computed : {    
        orders() {            
            const orders = this.$store.getters.orders;
            const status = this.$route.params.status;

            if(this.$route.name === 'orders' || status === 'all') return orders;

            return  orders.filter(order => {              
                if(order.status == status) return order;
            })
        },       
        shippedCount() {
            const orders = this.$store.getters.orders;
            const status = 'shipped';
            return this.ordersCount(orders,status);
        },
        confirmedCount(){
            const orders = this.$store.getters.orders;
            const status = 'confirmed';
            return this.ordersCount(orders,status);
        },
        completedCount(){
            const orders = this.$store.getters.orders;
            const status = 'completed';
            return this.ordersCount(orders,status);
        },
        cancelledCount() {
            const orders = this.$store.getters.orders;
            const status = 'cancelled';
            return this.ordersCount(orders,status);
        }
        
       

    }
 }
</script>
<template>
   <loading v-model:active="this.$store.getters.isLoading"               
                 :is-full-page="true"/>


   <div v-if="orders" class="relative mb-16">
     <div class="flex justify-between items-center mb-4">
        <h1 class="block tracking-widest font-bold">Order History</h1> 
        <ul class="flex gap-4">
            <router-link to="/account/orders/sort=all" class="tracking-widest cursor-pointer hover:underline">All</router-link>
            <router-link to="/account/orders/sort=confirmed" class="tracking-widest cursor-pointer hover:underline">Confirmed <span v-if="confirmedCount">({{confirmedCount }})</span></router-link>
            <router-link to="/account/orders/sort=shipped"  class="tracking-widest cursor-pointer hover:underline">Shipped <span v-if="shippedCount">({{shippedCount}})</span></router-link>
            <router-link to="/account/orders/sort=completed" class="tracking-widest cursor-pointer hover:underline">Completed <span v-if="completedCount">({{ completedCount }})</span></router-link>
            <router-link to="/account/orders/sort=cancelled" class="tracking-widest cursor-pointer hover:underline">Cancelled <span v-if="cancelledCount">({{cancelledCount}})</span> </router-link>
        </ul>      
    </div>
    <div v-for="order in orders" class="order">
        <div class="flex items-center mb-4">
            <span>Order #: <router-link :to="{name : 'order', params : {id: order.id}}">{{order.order_number}}</router-link></span>
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

   <div v-if="orders.length == 0">
        <h1 class="block">No Order Found</h1>
   </div>
</template>