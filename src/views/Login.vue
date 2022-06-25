<script>
import Alert from "../components/Alert.vue";
    export default {
        
    data() {
        return {
            errors: [],
            user: {
                email: null,
                password: null,
            }
        };
    },
    methods: {
        Login() {              
            this.axios.post(`/v1/login`, {
                email: this.user.email,
                password: this.user.password
            })
            
            .then(response => {
                localStorage.setItem("access_token", response.data.token);
            })

            .catch(error => {
                if (error.response.status == 422) {
                    console.log(error);
                    this.errors = error.response.data.errors;
                }
            });                  
        },
    },
    components: { Alert }
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
            <Alert v-if="errors.message" :message="errors.message"></Alert>
            <form id="form" class="mb-16" @submit.prevent="Login">
                <div class="flex flex-col gap-4">  
                               
                <div class="block">
                    <input type="text"  v-model="user.email" name="email"  class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Email">               
                     <div v-if="errors.email" name="password" class="flex flex-col gap-2 mt-2">
                            <small class="block text-rose-400" v-for="error in errors.email"> {{ error }} </small>
                    </div>
                </div>

                <div class="block">
                    <input type="password"  v-model="user.password"  class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Password">               
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