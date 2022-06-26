<template>
    <div class="flex justify-between items-center mb-4">
        <h1 class="block  font-bold">Card List</h1>
        <router-link  to="/account/payment-options/create" class="relative btn btn-dark">Add Card</router-link>
    </div>
    
    <div class="flex flex-wrap gap-4 mt-8 mb-16">
        <div v-for="option in paymentOptions" class="w-full md:w-[calc(((100%_+_1rem)_/_3)_-_1rem)] border bg-lightGray  hover:bg-[#f9f9f9]  py-2 px-4" :class="{'bg-[#d4edda]' : option.status }"> 

            <div class="flex items-center mb-2">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </span>
                 <label for="" class="ml-2 font-bold">{{ option.card_number }}</label>
            </div>   

            <div class="flex items-center mb-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
               <label for="" class="ml-2 capitalize">{{ option.card_name }}</label>
            </div>

            <div class="flex items-center mb-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
               <label for="" class="ml-2 capitalize">{{ option.card_expire_date }}</label>
            </div>           
        
            <div class="flex gap-2">
              <router-link :to="{ name : 'payment-option.edit', params : { id : option.id } }" class="text-sky-500 hover:underline">Edit</router-link>
              <span @click="setAsDefault(option.id)" class="text-sky-500 cursor-pointer hover:underline" >Set as Default</span>
              <span @click="destroy(option.id)" class="text-rose-500 cursor-pointer hover:underline" >Delete</span>
            </div>

        </div>
       
       
    </div>
</template>
<script>
    export default {
        data(){
           return {
              paymentOptions : null,   
           }
        },
        methods : {
          getPaymentOptions() {
            this.axios.get('/v1/user/1/paymentOption')
                .then(response => {
                  this.paymentOptions = response.data;
                })            
          },
          destroy(id) {
             this.axios.delete(`/v1/user/1/paymentOption/${id}`)
                .then(response => {
                  if (response.status == 200){
                     this.getPaymentOptions();
                  }                 
                })  
          },
          setAsDefault(id) {
             this.axios.patch(`/v1/user/1/paymentOption/${id}`)
                .then(response => {
                  if (response.status == 200){
                     this.getPaymentOptions();
                  }                 
                })  
          }
        },
        created() {
          this.getPaymentOptions();
        }
    }
</script>