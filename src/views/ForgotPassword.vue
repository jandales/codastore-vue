<script></script>
<template>  
    <div class="flex  items-center justify-center h-[calc(100vh_-_100px)]">
           <div class="w-full md:w-[420px] px-4 mx-auto md:px-0">
             <div class="p-8">
                 <h1 class="block text-[2rem] text-center">Recover your password</h1>
                 <small class="block text-center mt-2">Please Enter your email address to recover your account</small>
            </div>
            <div class="flex flex-col gap-4">
                 
                <div class="block">
                    <input type="text" name="email" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Email">               
                </div>                  
                <button class="btn md:w-full" >Submit</button> 
                   <small class="block text-center mt-2">Already have an account? 
                    <router-link to="/login" class="text-sky-400">Signin</router-link>
                 </small>
                </div>   
           </div> 
      </div>
 
</template>