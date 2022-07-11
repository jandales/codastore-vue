<script>
     export default {    
        props : {
            isOpen : Boolean,
        }, 
        methods : {             
          setAsDefault(id) {
            this.$store.dispatch('setDefaulAddress',id).then(response => {         
                this.$store.dispatch('updateShippingAddress',response.data[0]); 
            });    
            this.$emit('close');                  
          },
          close(){
             this.$emit('close');
          }          
        },     
        computed : {
            addressList() {
               return this.$store.getters.addresses;
            }
        }
    }
</script>
<template>
    <div id="modalCart" class="hidden w-full fixed top-0 left-0 min-h-full bg-black bg-opacity-50 z-10" :class="{'!flex' : isOpen}">
        <div class="flex flex-col w-full md:w-1/3 right-[-33.333%] overflow-auto  min-h-screen border-l bg-[#f0f0f0]  fixed top-0  p-8 z-30  ease-in-out" :class="{'!right-0 ease-in-out ' : isOpen}">
            <div class="flex mb-8">
                <h1 class="block text-center text-xl uppercase">Your Shipping Address</h1>
                <span class="block ml-auto" @click="close">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
            </div>
            <div class="w-full">
                <ul class="flex flex-col gap-4">
                    <li v-for="address in addressList" class="flex bg-white p-2">
                        <input @change="setAsDefault(address.id)" type="radio" name="radio" id="" :checked="address.status== true">
                        <span class="ml-2">{{ `${address.street} ${address.city} ${address.region} ${address.country} ${address.phone}`  }}</span>                                            
                    </li>
                </ul>
            </div>       
         </div>
    </div>
</template>