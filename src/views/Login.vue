<script>
    export default {
        data() {
            return {
              errors : [],
            }
        },
        
        methods : {
            Login() {
               

                this.axios.get('http://127.0.0.1:3000/sanctum/csrf-cookie').then(response => {
                    console.log(response);
                     let form = new FormData(document.getElementById('form'));
                        this.axios.post(`http://127.0.0.1:3000/api/v1/login`, form)
                            .then(response => { 
                                console.log(response);
                        });
                
                    });
               
            },
            setToken(token) {
                    localStorage.setItem('access_token',token)
            },
        }
    }
</script>
<template>  
      
           <div class="w-full md:w-[400px] px-4 mx-auto md:px-0">
             <div class="p-8">
                 <h1 class="block text-[2rem] text-center">Login</h1>
                 <small class="block text-center mt-2">Dont have an account yet? 
                    <router-link to="/register" class="ml-2 text-sky-400">Signup here</router-link>
                 </small>
            </div>

            <form id="form" @submit.prevent="Login">
                <div class="flex flex-col gap-4">  
                               
                <div class="block">
                    <input type="text" name="email" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Email">               
                     <div v-if="errors.email" class="flex flex-col gap-2 mt-2">
                            <small class="block text-rose-400" v-for="error in errors.email"> {{ error }} </small>
                    </div>
                </div>

                <div class="block">
                    <input type="text" name="password" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Password">               
                     <div v-if="errors.password" class="mt-2">
                             <small class="block text-rose-400" v-for="error in errors.password"> {{ error }} </small>
                    </div>
                </div> 

                <button class="btn md:w-full" >Submit</button> 
                   <router-link to="/forgot-password" class="text-center text-sky-400">Forgot Password?</router-link>
                </div>   
               
            </form>

           </div> 
 
</template>