<script></script>
<template>  
      
           <div class="w-full md:w-[400px] px-4 mx-auto md:px-0">
             <div class="p-8">
                 <h1 class="block text-[2rem] text-center">Register</h1>
                 <small class="block text-center mt-2">Already have an account? 
                    <router-link to="/login" class="ml-2 text-sky-400">Signin</router-link>
                 </small>
            </div>
            <div class="flex flex-col gap-4">
                <div class="block">
                    <input type="text" name="name" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Name">               
                </div> 
                <div class="block">
                    <input type="text" name="email" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Email">               
                </div> 
                <div class="block">
                    <input type="text" name="password" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Password">               
                </div>   
                <button class="btn md:w-full" >Sign In</button> 
                  
            </div>   
           </div> 
 
</template>