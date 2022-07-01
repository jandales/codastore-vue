<script>
import AlertSuccess from '../../alert/AlertSuccess.vue';
    export default {
       data() {
            return {               
                errors : [],
                isSuccess : false,                                
            }         
       }, 

        methods : {        
           async updateAddress() {
                this.errors = [];
                this.isSuccess = false;
                try {
                    await this.$store.dispatch('updateAddress',{ id: this.$route.params.id, address : this.address })
                    this.isSuccess = true;
                } catch (e) {
                    this.errors = e.response.data.errors;
                }             
                     
            }
        },
        created() {
             this.$store.dispatch('getAddress', this.$route.params.id);  
        },
        computed : {
            address() {
                return this.$store.getters.address;
            }
        },            
         components: { AlertSuccess }
      
    }
</script>
<template>
    <div class="w-full mb-16">
         <AlertSuccess v-if="isSuccess" :alert="'danger'" :message="'Successfully Added'" ></AlertSuccess> 
        <h1 class="block mb-4 font-bold">Edit Address</h1>
        
        <form @submit.prevent="updateAddress" v-if="address">
            <div class="flex flex-col md:flex-row gap-0 md:gap-4">
                <div class="relative w-full block mb-4">
                    <label for="" class="block mb-2">First Name*</label>
                    <input type="text" v-model="address.firstname" name="firstname">
                    <div v-if="errors.firstname"  class="flex flex-col gap-2 mt-2">
                        <small class="block text-rose-400" v-for="error in errors.firstname"> {{ error }} </small>
                    </div>
                </div>

                <div class="relative w-full block mb-4">
                    <label for="" class="block mb-2">Last Name*</label>
                    <input type="text"   v-model="address.lastname" name="lastname">
                    <div v-if="errors.lastname" class="flex flex-col gap-2 mt-2">
                        <small class="block text-rose-400" v-for="error in errors.lastname"> {{ error }} </small>
                    </div>
                </div>

            </div>
           
            <div class="relative w-full block mb-4">
                        <label for="" class="block mb-2">Phone Number*</label>
                        <input type="text"  v-model="address.phone" name="card_expired_date">
                        <div v-if="errors.phone"  class="flex flex-col gap-2 mt-2">
                            <small class="block text-rose-400" v-for="error in errors.phone"> {{ error }} </small>
                        </div>
             </div>

            <div class="flex flex-col md:flex-row gap-0 md:gap-4">
                <div class="relative w-full block mb-4">
                    <label for="" class="block mb-2">Street*</label>
                    <input type="text"  v-model="address.street" name="card_cvc">
                    <div v-if="errors.street" class="flex flex-col gap-2 mt-2">
                        <small class="block text-rose-400" v-for="error in errors.street"> {{ error }} </small>
                    </div>
                </div>
                <div class="relative w-full block mb-4">
                    <label for="" class="block mb-2">City*</label>
                    <input type="text"  v-model="address.city" name="card_cvc">
                    <div v-if="errors.city"  class="flex flex-col gap-2 mt-2">
                        <small class="block text-rose-400" v-for="error in errors.city"> {{ error }} </small>
                    </div>
                </div>                
            </div>
            

      

            
            <div class="flex flex-col md:flex-row gap-0 md:gap-4">
                <div class="relative w-full block mb-4">
                    <label for="" class="block mb-2">Region*</label>
                    <input type="text"  v-model="address.region" name="card_cvc">
                    <div v-if="errors.region"  class="flex flex-col gap-2 mt-2">
                        <small class="block text-rose-400" v-for="error in errors.region"> {{ error }} </small>
                    </div>
                </div>
                   <div class="relative w-full md:w-1/5 block mb-4">
                    <label for="" class="block mb-2">Zip Code*</label>
                    <input type="text"  v-model="address.zipcode" name="card_cvc">
                    <div v-if="errors.zipcode" class="flex flex-col gap-2 mt-2">
                        <small class="block text-rose-400" v-for="error in errors.zipcode"> {{ error }} </small>
                    </div>
                </div>
            </div>
          
            <div class="relative w-full block mb-4">
                <label for="" class="block mb-2">Country*</label>
                <input type="text"  v-model="address.country" name="card_cvc">
                 <div v-if="errors.country" name="password" class="flex flex-col gap-2 mt-2">
                    <small class="block text-rose-400" v-for="error in errors.country"> {{ error }} </small>
                </div>
            </div>
            
            <div class="relative w-full block mb-4">
                <button class="btn btn-dark">Save</button>
            </div>

        </form>

    </div>
</template>

