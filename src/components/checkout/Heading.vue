<script>
export default {
    mounted() {
        this.$store.dispatch('checkoutShipping');
    },
    computed : {      
        shipping(){
            return this.$store.getters.shipping;
        },
        address(){
            if(this.shipping){
                return `${this.shipping.firstname} ${this.shipping.lastname}  ${this.shipping.street} ${this.shipping.city} ${this.shipping.region} ${this.shipping.country}`; 
            }           
        },
        email(){
            return this.$store.getters.email;
        },
        shippingmethod(){
             return this.$store.getters.activeShippingMethod;
        },
        isPaymentPage(){
            return this.$route.name == 'checkout.payment' ? true :  false;
        }
    }
}
</script>
<template>
        <ul >
            <li class="flex border p-4 border-b-0">
                <span class="block  min-w-[150px]">Contact</span>
                <span>{{ email }}</span>           
                <router-link :to="{ name : 'checkout.information' }" class="ml-auto text-cyan-500 cursor-pointer  hover:underline">Change</router-link>
            </li>
            <li class="flex border  p-4" :class="{'border-b-0' : isPaymentPage}">
                <span class="block  min-w-[150px]">Shipping Address</span>
                <span class="break-words">{{ address }}</span>
                <router-link  :to="{ name : 'checkout' }" class=" ml-auto text-cyan-500 cursor-pointer hover:underline">Change</router-link>
            </li>  
            <li v-if="isPaymentPage" class="flex border p-4">
                <span class="block  min-w-[150px]">Shiiping Method</span>
                <span>{{shippingmethod.name}}</span>
                <router-link  :to="{ name : 'checkout.shipping' }" class="ml-auto text-cyan-500 cursor-pointer hover:underline">Change</router-link>
            </li>          
        </ul>
</template>