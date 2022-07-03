<script>
export default {
    computed :{
        isAuth(){              
             return this.$store.getters.authenticated;
        } 
    }
}
</script>
<template>
                <div class="flex items-center mb-4">
                    <h1 class="capitalize text-lg tracking-wider">Contact information</h1>              
                    <label v-if="!isAuth"  class="block ml-auto" >Already have an account? <router-link to="/login">Log in</router-link></label>
                </div>
                <div class="block mb-4">
                    <input type="text" name="name" class="w-full box-border px-3 py-2 border  outline-none" placeholder="Country">               
                </div> 
                <div class="flex flex-col md:flex-row gap-4 mb-4">
                    <input type="text" name="name" class="px-3 py-2 box-border border w-full   md:w-[calc(100%_/_2)] outline-none" placeholder="Name">
                    <input type="text" name="email" class="px-3 py-2 box-border  border  w-full md:w-[calc(100%_/_2)] outline-none" placeholder="Email">
                </div>  
                <div class="block mb-4">
                    <input type="text" name="name" class="w-full box-border px-3 py-2 border  outline-none" placeholder="Sreet">               
                </div> 
                <div class="flex flex-col md:flex-row gap-4 mb-4">
                    <input type="text" name="name" class="px-3 py-2 box-border border w-full   md:w-[calc(100%_/_2)] outline-none" placeholder="Postal">
                    <input type="text" name="email" class="px-3 py-2 box-border  border  w-full md:w-[calc(100%_/_2)] outline-none" placeholder="City">
                </div>  
                <div class="block mb-4">
                    <input type="text" name="name" class="w-full box-border px-3 py-2 border  outline-none" placeholder="Region">               
                </div> 
                <div class="block mb-4">
                    <input type="text" name="name" class="w-full box-border px-3 py-2 border  outline-none" placeholder="Phone">               
                </div> 
            <div class="flex items-center w-full">
          
                   
                    <router-link to="/cart" class="flex items-center">
                         <span >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                        </span>
                       <label for="" class="ml-2 cursor-pointer"> Return Cart</label>
                    </router-link>
               
                <router-link  to="/fasf" class="block btn ml-auto">Continue</router-link>
            </div>
</template>