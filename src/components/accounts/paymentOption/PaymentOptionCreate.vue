<script>
import AlertSuccess from '../../alert/AlertSuccess.vue';
    export default {
       data() {
            return {
                card : {
                    name : null,
                    number : null,
                    expire_date : null,
                    code : null,
                },
                errors : [],
                isSuccess : false,                                
            }         
       }, 

        methods : {
            addCard() {
                this.axios.post('/v1/user/1/paymentOption', {
                    card_name : this.card.name,
                    card_number : this.card.number,
                    card_expire_date : this.card.expire_date,
                    card_cvc : this.card.code
                })
                .then(response => { 
                    if (response.status == 200) { 
                        this.isSuccess = true;
                        this.errors = []
                    }
                 })
                .catch(errors => {
                    this.errors = errors.response.data.errors;
                })
            }
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
                <input type="text" v-model="card.name" name="card_name">
                <div v-if="errors.card_name" name="password" class="flex flex-col gap-2 mt-2">
                    <small class="block text-rose-400" v-for="error in errors.card_name"> {{ error }} </small>
                </div>
            </div>

            <div class="relative w-full block mb-4">
                <label for="" class="block mb-2">Card Number</label>
                <input type="text"   v-model="card.number" name="card_number">
                 <div v-if="errors.card_number" name="password" class="flex flex-col gap-2 mt-2">
                    <small class="block text-rose-400" v-for="error in errors.card_number"> {{ error }} </small>
                </div>
            </div>

            <div class="relative w-full block mb-4">
                <label for="" class="block mb-2">Expired Date</label>
                <input type="text"  v-model="card.expire_date" name="card_expired_date">
                 <div v-if="errors.card_expire_date" name="password" class="flex flex-col gap-2 mt-2">
                    <small class="block text-rose-400" v-for="error in errors.card_expire_date"> {{ error }} </small>
                </div>
            </div>

            <div class="relative w-full block mb-4">
                <label for="" class="block mb-2">Code</label>
                <input type="text"  v-model="card.code" name="card_cvc">
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

