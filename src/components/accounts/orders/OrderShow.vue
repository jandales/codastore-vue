<script>
import Button from '../../forms/Button.vue';
 export default {
    methods: {
        async getOrder() {
           await this.$store.dispatch("getOrder", this.$route.params.id);
        },
        async cancel() {
            await this.$store.dispatch("isLoading", true);
            try {
                await this.$store.dispatch("cancelOrder", this.$route.params.id);
            } 
            finally {
               await this.$store.dispatch("isLoading", false);
            }
        }
    },
    created() {
        this.getOrder();
    },
    computed: {
        order() {
            return this.$store.getters.order;
        }
    },
    components: { Button }
}

</script>
<template>
    <div class="mb-16">
        <div class="flex justify-between items-center mb-4">
            <h1 class="block  font-bold">Order Details</h1>       
        </div>
       
    <div class="flex flex-col md:flex-row gap-8" v-if="order">
        <div class="w-full">
        <div class="order bg-white" >           
            <div v-for="item in order.items" class="order-item">
                <div class="w-[300px] flex">
                    <div class="relative w-20">
                        <img :src="baseApi+item.product.imagePath" alt="">
                    </div>
                    <div class="ml-4">
                        <h1 class="block text-sm capitalize">{{ item.product.name }}</h1>
                        <span class="block capitalize" v-for="attribute in item.properties">{{ attribute }}</span>
                    </div>
                </div> 

                <div class="column">            
                    <span class="block text-center">{{ 500 }}</span>
                </div>

                <div class="column">            
                    <span class="block text-center">Qty :  {{ 2 }}</span>
                </div>

                <div class="column">            
                    <span class="block text-center">{{  1000 }}</span>
                </div>

            </div> 
        </div>
        <div class="block">
            <h1 class="block font-semibold">Shipping Address</h1>
            <div class="w-full bg-lightGray p-4 mt-4">          
                <label for="" class="block">{{ order.shipping.firstname + order.shipping.lastname }}</label>
                <label for="" class="block">{{ order.shipping.street + order.shipping.city + order.shipping.region + order.shipping.country }}</label>
                <label for="" class="block">{{ order.shipping.phone }}</label>
            </div>
        </div>
        </div>
        <div class="order-details  p-2">
            <div class="row items-center justify-between mb-2">
                <span class="font-semibold">Status</span>
                 <span class="capitalize font-semibold bg-lightGray p-1">{{ order.status }}</span>
            </div>
            <div class="row justify-between mb-2">
                <span class="font-semibold">Order Number</span>
                 <span>{{ order.order_number }}</span>
            </div>

            <div class="border border-dashed mt-2 mb-2"></div>

            <h1 class="block font-semibold mb-4">Summary</h1>

            <div class="row justify-between mb-2">
                <span class="font-semibold">Subtotal ({{order.items_count}} items)</span>
                 <span>₱{{order.net_total}}</span>
            </div>

            <div class="row justify-between mb-2">
                <span class="font-semibold">Shipping Fee</span>
                 <span>₱{{ order.shipping_charge }}</span>
            </div>

             <div class="row justify-between mb-2">
                <span class="font-semibold">Tax</span>
                 <span>₱{{ order.tax_total }}</span>
            </div>
        
            <div class="row justify-between mb-2">
                <span class="font-semibold">Discount</span>
                 <span>₱ {{ order.coupon_amount }}</span>
            </div>

            <div class="border border-dashed mt-2 mb-2"></div>

            <div class="row justify-between mb-2">
                <span class="font-semibold">Total</span>
                 <span>₱{{order.gross_total}}</span>
            </div>
           
           <div v-if="order.status == 'confirmed'" class="row justify-between mt-8">
                <Button @click="cancel"  :isLoading="this.$store.getters.isLoading" :btntext="'Cancel Order'" class="btn !w-full !bg-rose-500"></Button>
           </div>

        </div>
    </div>
    </div>
</template>