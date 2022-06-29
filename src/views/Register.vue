<script>
    export default {
        data()  {
            return {
                errors : [],
                user : {
                    name     : null,
                    email    : null,
                    password : null,
                }
            }
        },
        methods : {
            register(){
                this.errors = [];
                this.$store.dispatch('register', this.user) 
                // let success = this.$store.getters.success;   
                // this.errors = this.$store.getters.errors; 
                // console.log(success);
                // if(success){
                //     this.$router.push({ name : 'login' })
                //     return;
                // }          
               
            }
        }
    }
</script>
<template>  
      
           <div class="w-full md:w-[400px] px-4 mx-auto md:px-0 mb-16">
             <div class="p-8">
                 <h1 class="block text-[2rem] text-center">Register</h1>
                 <small class="block text-center mt-2">Already have an account? 
                    <router-link to="/login" class="ml-2 text-sky-400">Signin</router-link>
                 </small>
            </div>
            <form id="form"  @submit.prevent="register">
                <div class="flex flex-col gap-4">
                    <div class="block">
                        <input type="text" v-model="user.name" name="name" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Name">               
                        <div v-if="errors.name" class="mt-2">
                            <small class="block text-rose-400"> {{ errors.name[0] }} </small>
                        </div> 
                       
                    </div>
                    <div class="block">
                        <input type="text" v-model="user.email" name="email" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Email">               
                        <div v-if="errors.email" class="mt-2">
                            <small class="block text-rose-400"> {{ errors.email[0] }} </small>
                        </div>
                    </div> 
                    <div class="block">
                        <input type="password" v-model="user.password" name="password" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Password">               
                        <div v-if="errors.password" class="mt-2">
                            <small class="block text-rose-400"> {{ errors.password[0] }} </small>
                        </div>
                    </div>   
                    <button class="btn md:w-full" >Sign In</button> 
                    
                </div> 
            </form>  
           </div> 
 
</template>