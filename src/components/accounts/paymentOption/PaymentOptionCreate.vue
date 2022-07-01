<script>
import AlertSuccess from '../../alert/AlertSuccess.vue';
    export default {
       data() {
            return {
                input : {
                    card_name : null,
                    card_number : null,
                    card_expire_date : null,
                    card_card_cvc : null,
                },
                errors : [],
                isSuccess : false,                                
            }         
       }, 

        methods : {
           async addCard() {
                this.errors = [];
                this.isSuccess = false;
                try {
                    await  this.$store.dispatch('addCard', this.input)
                    this.isSuccess = true 
                } catch (e) {
                    this.errors = e.response.data.errors; 
                }                      
            },
        },
         components: { AlertSuccess }
      
    }
</script>
<template>
    <div class="w-full mb-16">
         <AlertSuccess v-if="isSuccess" :alert="'danger'" :message="'Successfully Added'" ></AlertSuccess> 
        <h1 class="block mb-4 font-bold">Add new Card</h1>
        
        <form @submit.prevent="addCard">
            <div class="relative w-full block mb-4">
                <label for="" class="block mb-2">Name</label>
                <input type="text" v-model="input.card_name" name="card_name">
                <div v-if="errors.card_name" name="password" class="flex flex-col gap-2 mt-2">
                    <small class="block text-rose-400" v-for="error in errors.card_name"> {{ error }} </small>
                </div>
            </div>

            <div class="relative w-full block mb-4">
                <label for="" class="block mb-2">Card Number</label>
                <input type="text"   v-model="input.card_number" name="card_number">
                 <div v-if="errors.card_number" name="password" class="flex flex-col gap-2 mt-2">
                    <small class="block text-rose-400" v-for="error in errors.card_number"> {{ error }} </small>
                </div>
            </div>

            <div class="relative w-full block mb-4">
                <label for="" class="block mb-2">Expired Date</label>
                <input type="text"  v-model="input.card_expire_date" name="card_expired_date">
                 <div v-if="errors.card_expire_date" name="password" class="flex flex-col gap-2 mt-2">
                    <small class="block text-rose-400" v-for="error in errors.card_expire_date"> {{ error }} </small>
                </div>
            </div>

            <div class="relative w-full block mb-4">
                <label for="" class="block mb-2">Code</label>
                <input type="text"  v-model="input.card_cvc" name="card_cvc">
                 <div v-if="errors.card_cvc" name="password" class="flex flex-col gap-2 mt-2">
                    <small class="block text-rose-400" v-for="error in errors.card_cvc"> {{ error }} </small>
                </div>
            </div>

            <div class="relative w-full block mb-4">
                <button class="btn btn-dark">Save</button>
            </div>

        </form>

    </div>
</template>

