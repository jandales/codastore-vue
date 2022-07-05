<script>
import currency from '../../libraries/currency'
import Heading from './Heading.vue';
export default {
    data() {
        return {
            shippingMethod: null,
        };
    },
    methods: {
        changeShippingMethod(data) {
            this.$store.dispatch("updateShippingMethod", data);
        },
        async updateShippingMethod() {
            try {
                await this.$store.dispatch("checkoutUpdateShippingMethod");
                this.$router.push({ name: "checkout.payment" });
            }
            catch (error) {
                alert(error);
            }
        },
        format(amount) {
            return currency.format(amount);
        }
    },
    mounted() {
        this.$store.dispatch("getShippingMethods");
    },
    computed: {
        shippingMethods() {
            return this.$store.getters.shippingMethods;
        },    
        shippingmethod() {
            return this.$store.getters.activeShippingMethod;
        }
    },
    components: { Heading }
}

</script>
<template>
 
    <div>
      <Heading></Heading>
        <div class="mt-8">
            <ul v-if="shippingMethods">
                <li v-for="(method, index) in shippingMethods"  class="flex border p-4 border-b-0" :class="{'!border-b': index == (shippingMethods.length -1)}">
                    <div class="flex" v-if="method">
                        <input type="radio" @click="changeShippingMethod(method)" name="method" :checked="method.id == shippingmethod.id">
                        <label for="" class="ml-2">{{ method.name }}</label>
                    </div>
                    <label for="" class="ml-auto">{{format(method.amount)}}</label>
                </li>               
            </ul>
        </div>
          <div class="flex items-center w-full mt-8">  
                    <router-link to="/checkout" class="flex items-center">
                         <span >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                        </span>
                       <label for="" class="ml-2 cursor-pointer"> Return Information</label>
                    </router-link>
               
                <span  @click="updateShippingMethod(shippingMethod)" class="block btn ml-auto">Continue</span>
            </div>
    </div>
</template>