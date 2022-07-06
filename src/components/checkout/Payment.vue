<script>
import SmallAlert from '../alert/smallAlert.vue';
import Heading from './Heading.vue';

export default {
    data() {
        return {
            errors : [],
            model : null,
        }
    },
    methods : { 
        async placeOrder() {
            const body = {
               is_new_billing : 0,
               card_cvc: this.card.card_cvc,
               card_expire_date: this.card.card_expire_date,
               card_name: this.card.card_name,
               card_number: this.card.card_number,
            }

            this.errors = [];
            try {                
                const res = await this.$store.dispatch('placeOrder',body);        
                const order = res.data.order;
                window.location.href = `/order/${order.order_number}/confirmed`       
            } catch (e) {
                if (e.response.status == 422){
                    this.errors = e.response.data.errors;
                } 
            }
           
        },       
    },
    mounted() {  
        this.$store.dispatch('getDefaultPaymentCard');
    },
    computed : { 
        card() {              
            return this.$store.getters.card;
        },  
    },
    components : {  SmallAlert,  Heading } 
}

</script>
<template>
    <div>
        <Heading></Heading>  
        <div class="mt-8" v-if="card">
            <h1 class="block capitalize text-lg tracking-wider mb-4">Payment</h1>        
            <div class="credit-card mt-1 p-4 border">
                <div class="flex justify-between mb-4">
                  <span class="block mt10">All Transactiion are secure and encrypted</span>
                    <span id="payment-option-change"  class="ml-auto text-cyan-500 cursor-pointer hover:underline">Change</span>       
                </div>
                <div class="credit-card-body">                    
                    <div class="form-block mb-4">    
                        <label for="" class="block mb-2">Cardholder Name</label>                  
                        <input type="text"  v-model="card.card_name" name="card_name"  placeholder="Name"/>
                        <SmallAlert :errors="errors.card_name"></SmallAlert>
                    </div> 
                    <div class="form-block">  
                        <label for="" class="block mb-2">Card Data</label>                        
                        <div class="flex gap-2 items-center border border-[#d0d0d0]">
                            <span class="pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </span>
                            <input type="text" v-model="card.card_number" class="!border-0" name="card_number" placeholder="Card number"/>
                            <input type="text" v-model="card.card_expire_date" class="!w-16 !border-0" name="card_expire_date"  placeholder="MM/YY" />
                            <input type="text" v-model="card.card_cvc" class="!w-16 !border-0" name="card_cvc"   placeholder="CVC"/>                              
                        </div>
                        <SmallAlert :errors="errors.card_number"></SmallAlert>
                        <SmallAlert :errors="errors.card_expire_date"></SmallAlert>
                        <SmallAlert :errors="errors.card_cvc"></SmallAlert>
                    </div>
                </div>
            </div>
        </div> 
        <div class="flex items-center w-full mt-8">
            <router-link to="/checkout/shipping" class="flex items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                </span>
                <label for="" class="ml-2 cursor-pointer"> Return Shipping</label>
            </router-link>               
            <button @click="placeOrder" class="block btn ml-auto">Place Order</button>
        </div>
    </div>
</template>