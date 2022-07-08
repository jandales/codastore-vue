<script>
    export default {    
      methods : {
        async loadData(){  
            this.$store.dispatch('isLoading', true); 
           try {
               await this.$store.dispatch('user'); 
               await this.$store.dispatch('getDefaultAddress');
               await this.$store.dispatch('getDefaultPaymentCard');
            } finally {
                 this.$store.dispatch('isLoading', false); 
            }
         }
      },
      created(){
           this.loadData();
      },
      computed :{
         user(){
            return this.$store.getters.user;
         },         
         address(){
            return this.$store.getters.address;
         },
         option(){
            return this.$store.getters.card;
         }

      
      } 

    }
</script>
<template>
    <div class="flex gap-8">

        <loading v-model:active="this.$store.getters.isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="false"/>

         <div v-if="option"  class="flex flex-col w-full md:w-[calc(((100%_+_1rem)_/_3)_-_1rem)] border bg-lightGray   py-2 px-4">  
         
            <div class="flex items-center gap-2 mb-2">             
               <label for="" class="capitalize font-semibold">Personal Profile</label>
               <label for="" class="capitalize">|</label>
               <router-link to="/account/profile" class="text-sky-500 hover:underline">Edit</router-link>
            </div>

            <div class="flex items-center mb-1">              
                 <label for="" class="capitalize">{{ user.name }}</label>
            </div> 
            
            <div class="flex items-center mb-1">             
               <label for="" class="capitalize">{{ user.email }}</label>
            </div>    
            <div class="flex items-center mb-1">             
               <label for="" class="capitalize">{{ user.contact }}</label>
            </div>           
        
            <div class="flex gap-2 mt-auto">
              
            </div>

        </div>
         
        <div v-if="option" class="flex flex-col w-full md:w-[calc(((100%_+_1rem)_/_3)_-_1rem)] border bg-lightGray   py-2 px-4"> 

            <div class="flex items-center gap-2 mb-2">             
               <label for="" class="capitalize font-semibold">Default Shipping Address</label>
               <label for="" class="capitalize">|</label>
              <router-link :to="{ name : 'address.edit', params : {id : address.id } }" class="text-sky-500 hover:underline">Edit</router-link>            
            </div>
            
            <div class="flex items-center mb-1">             
               <label for="" class="capitalize">{{ `${address.firstname} ${address.lastname}` }}</label>
            </div>

            <div class="flex items-center mb-1">              
                 <label for="" class="capitalize">{{ `${address.street} ${address.city} ${address.region} ${address.zipcode}`  }}</label>
            </div>   


            <div class="flex items-center mb-1">             
               <label for="" class="capitalize">{{ address.country }}</label>
            </div>    
            <div class="flex items-center mb-1">             
               <label for="" class="capitalize">{{ address.phone }}</label>
            </div>           
        
          

        </div>

        <div v-if="option" class="w-full md:w-[calc(((100%_+_1rem)_/_3)_-_1rem)] border bg-lightGray  py-2 px-4"> 

             <div class="flex items-center gap-2 mb-2">             
               <label for="" class="capitalize font-semibold">Default Payment Card</label>
               <label for="" class="capitalize">|</label>
              <router-link :to="{ name : 'payment-option.edit', params : { id : option.id } }" class="text-sky-500 hover:underline">Edit</router-link>           
            </div>

            <div class="flex items-center mb-2">               
                 <label for="" class="capitalize">{{ option.card_number }}</label>
            </div>   

            <div class="flex items-center mb-2">              
               <label for="" class="capitalize">{{ option.card_name }}</label>
            </div>

            <div class="flex items-center mb-2">              
               <label for="" class="capitalize">{{ option.card_expire_date }}</label>
            </div>           
        
            

        </div>


       
        
    </div>
</template>