<script></script>
<template>  
      
           <div class="w-full md:w-[400px] px-4 mx-auto md:px-0">
             <div class="p-8">
                 <h1 class="block text-[2rem] text-center">Login</h1>
                 <small class="block text-center mt-2">Dont have an account yet? 
                    <router-link to="/register" class="ml-2 text-sky-400">Signup here</router-link>
                 </small>
            </div>
            <div class="flex flex-col gap-4">
                 
                <div class="block">
                    <input type="text" name="email" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Email">               
                </div> 
                <div class="block">
                    <input type="text" name="password" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Password">               
                </div>   
                <button class="btn md:w-full" >Submit</button> 
                   <router-link to="/forgot-password" class="text-center text-sky-400">Forgot Password?</router-link>
                </div>   
           </div> 
 
</template>