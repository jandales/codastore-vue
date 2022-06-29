<template>
    <div class="flex justify-between items-center mb-4">
        <h1 class="block tracking-widest font-bold">Address</h1>
        <router-link  to="/account/address/create" class="relative btn btn-dark sm:w-max">Add Address</router-link>
    </div>

    <div class="flex flex-wrap gap-4 mt-8 mb-16">
        <div v-for="address in addressList" class="flex flex-col w-full md:w-[calc(((100%_+_1rem)_/_3)_-_1rem)] border bg-lightGray  hover:border-[#d4edda]  py-2 px-4" :class="{'border-[#d4edda]' : address.status }"> 
 
            
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
        
            <div class="flex gap-2 mt-auto">
              <router-link :to="{ name : 'address.edit', params : {id : address.id } }" class="text-sky-500 hover:underline">Edit</router-link>            
              
              <span @click="destroy(address.id)" class="text-rose-500 cursor-pointer hover:underline" >Delete</span>
              <span v-if="address.status" class="flex items-center  text-sky-500  cursor-pointer ml-auto">
                <span class="bg-[green] block rounded-full p-[2px]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                </span>              
                <label for="default" class="ml-2 text-[green]">Default</label>
              </span>
              <span v-else="address.status" @click="setAsDefault(address.id)" class="text-sky-500 cursor-pointer ml-auto hover:underline" >Set as  Default</span>
            </div>

        </div>
       
       
    </div>
</template>
<script>
    export default {
        data(){
           return {
              addressList : [],   
           }
        },
        methods : {
          getAddressList() {
            this.$store.dispatch('getAddresses');       
          },
          destroy(id) {
            this.$store.dispatch('deleteAddeess',id);
            this.getAddressList(); 
          },
          setAsDefault(id) {
            this.$store.dispatch('setDefaulAddress',id);
            this.getAddressList();             
          }
        },
        created() {
          this.getAddressList();
        },
        computed : {
            addressList() {
               return this.$store.getters.addresses;
            }
        }
    }
</script>