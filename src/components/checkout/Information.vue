<script>
import SmallAlert from '../alert/smallAlert.vue';
export default {
    data(){
        return {
            errors : [],
        }
    },
    methods : {
        async getInformation(){
              this.$store.dispatch('isLoading', true); 
           try {
                await this.$store.dispatch('checkoutInformation');
           } finally  {
                this.$store.dispatch('isLoading', false);
           }
        },  
       async continueToShipping() { 
            this.errors = [];
            const body =  {
                email : this.email,
                city: this.shipping.city,
                country:  this.shipping.country,         
                firstname: this.shipping.firstname,             
                lastname:  this.shipping.lastname,
                phone: this.shipping.phone,
                region: this.shipping.region,           
                street: this.shipping.street,              
                zipcode: this.shipping.zipcode
            } 

           try {                      
                const res = await this.$store.dispatch('storeCheckoutInformation', body);
                this.$router.push({name: 'checkout.shipping'});
                
           } catch (e) {
                if (e.response.status == 422){
                    this.errors = e.response.data.errors;
                }  
           }
        },
    },
    created() {
        this.getInformation();
    },
    computed :{
        isAuth(){              
             return this.$store.getters.authenticated;
        },
        email(){
            return this.$store.getters.email;
        },  
        shipping(){
            return this.$store.getters.shipping;
        },
       
    },
    components : { SmallAlert }
}
</script>
<template>

     <loading v-model:active="this.$store.getters.isLoading"
                    :can-cancel="false"
                    :on-cancel="onCancel"
                    :is-full-page="true"/>
    <form v-if="shipping">
                   <div class="flex items-center mb-4">
                    <h1 class="capitalize text-lg tracking-wider">Contact information</h1>              
                    <label v-if="!isAuth"  class="block ml-auto" >Already have an account? <router-link to="/login">Log in</router-link></label>
                </div>
                <div class="block mb-4">
                    <input type="text" name="email" v-model="email" class="w-full box-border px-3 py-2 border  outline-none" placeholder="Country">               
                      <SmallAlert :errors="errors.email"></SmallAlert>
                </div> 
                <div class="flex items-center mt-2 mb-4">
                    <h1 class="capitalize text-lg tracking-wider">Shipping Address</h1>              
                    <label v-if="!isAuth"  class="block ml-auto" >Already have an account? <router-link to="/login">Log in</router-link></label>
                </div>

                <div class="block mb-4">
                    <input type="text" v-model="shipping.country" name="country" class="w-full box-border px-3 py-2 border  outline-none" placeholder="Country">               
                    <SmallAlert :errors="errors.country"></SmallAlert>
                </div> 
                <div class="flex flex-col md:flex-row gap-4 mb-4">
                   <div class="w-full  md:w-[calc(100%_/_2)]">
                     <input type="text" v-model="shipping.firstname" name="firstname" class="px-3 py-2 box-border border w-full  outline-none" placeholder="Name">
                    <SmallAlert :errors="errors.firstname"></SmallAlert>
                   </div>
                   <div class="w-full  md:w-[calc(100%_/_2)]">
                    <input type="text" v-model="shipping.lastname" name="lastname" class="px-3 py-2 box-border  border  w-full md:w-[calc(100%_/_2)] outline-none" placeholder="Email">
                        <SmallAlert :errors="errors.lastname"></SmallAlert>
                   </div>
                  
                </div>  
                <div class="block mb-4">
                    <input type="text" v-model="shipping.street" name="street" class="w-full box-border px-3 py-2 border  outline-none" placeholder="Sreet">               
                     <SmallAlert :errors="errors.street"></SmallAlert>
                </div> 
                <div class="flex flex-col md:flex-row gap-4 mb-4">
                    <div class="w-full  md:w-[calc(100%_/_2)]">
                        <input type="text" v-model="shipping.zipcode" name="zipcode" class="px-3 py-2 box-border border w-full   md:w-[calc(100%_/_2)] outline-none" placeholder="Postal">
                         <SmallAlert :errors="errors.zipcode"></SmallAlert>
                    </div>  
                    <div class="w-full  md:w-[calc(100%_/_2)]"> 
                         <input type="text" v-model="shipping.city" name="city" class="px-3 py-2 box-border  border  w-full md:w-[calc(100%_/_2)] outline-none" placeholder="City">
                          <SmallAlert :errors="errors.city"></SmallAlert>
                    </div>
                   
                </div>  
                <div class="block mb-4">
                    <input type="text" v-model="shipping.region" name="region" class="w-full box-border px-3 py-2 border  outline-none" placeholder="Region">               
                      <SmallAlert :errors="errors.region"></SmallAlert>
                </div> 
                <div class="block mb-4">
                    <input type="text" v-model="shipping.phone" name="name" class="w-full box-border px-3 py-2 border  outline-none" placeholder="Phone">               
                    <SmallAlert :errors="errors.phone"></SmallAlert>
                </div> 
    </form>
    <div class="flex items-center w-full">  
            <router-link to="/cart" class="flex items-center">
                    <span >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                </span>
                <label for="" class="ml-2 cursor-pointer"> Return Cart</label>
            </router-link>
        
        <button  @click="continueToShipping" to="/fasf" class="block btn ml-auto">Continue</button>
    </div>
</template>