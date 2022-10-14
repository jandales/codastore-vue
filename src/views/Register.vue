<script>
    export default {
        data()  {
            return {
                errors : [],
<<<<<<< HEAD
            }
        },
        methods : {
            register(){
                let form = new FormData(document.getElementById('form'));
                this.axios.post(`${this.baseApi}/api/v1/register`, form)
                    .then(response => { 
                        if(response.status === 200){
                            this.$router.push({ name : 'login' })
                        }
                      
                    })
                    .catch(error => {                        
                        if(error.response.status == 422){
                            this.errors = error.response.data.errors;
                            console.log(this.errors)
                        }
                    })
=======
                user : {
                    name     : null,
                    email    : null,
                    password : null,
                }
            }
        },
        methods : {
            async register(){
                this.errors = [];
                try {
                   await  this.$store.dispatch('register', this.user) 
                   this.$router.push({ name : 'login' });
                } catch(e) {
                     if(e.response.status == 422){
                        this.errors = e.response.data.errors;
                     }
                } 
               
>>>>>>> ee8800ffcfde0e6afc9c33bc7bbb1edba5467f2a
            }
        }
    }
</script>
<template>  
      
<<<<<<< HEAD
           <div class="w-full md:w-[400px] px-4 mx-auto md:px-0 mb-16">
=======
    <div class="flex  items-center justify-center h-[calc(100vh_-_100px)]">
         <div class="w-full md:w-[400px] px-4 mx-auto md:px-0 mb-16">
>>>>>>> ee8800ffcfde0e6afc9c33bc7bbb1edba5467f2a
             <div class="p-8">
                 <h1 class="block text-[2rem] text-center">Register</h1>
                 <small class="block text-center mt-2">Already have an account? 
                    <router-link to="/login" class="ml-2 text-sky-400">Signin</router-link>
                 </small>
            </div>
            <form id="form"  @submit.prevent="register">
                <div class="flex flex-col gap-4">
                    <div class="block">
<<<<<<< HEAD
                        <input type="text" v-model="name" name="name" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Name">               
=======
                        <input type="text" v-model="user.name" name="name" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Name">               
>>>>>>> ee8800ffcfde0e6afc9c33bc7bbb1edba5467f2a
                        <div v-if="errors.name" class="mt-2">
                            <small class="block text-rose-400"> {{ errors.name[0] }} </small>
                        </div> 
                       
                    </div>
                    <div class="block">
<<<<<<< HEAD
                        <input type="text" v-model="email" name="email" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Email">               
=======
                        <input type="text" v-model="user.email" name="email" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Email">               
>>>>>>> ee8800ffcfde0e6afc9c33bc7bbb1edba5467f2a
                        <div v-if="errors.email" class="mt-2">
                            <small class="block text-rose-400"> {{ errors.email[0] }} </small>
                        </div>
                    </div> 
                    <div class="block">
<<<<<<< HEAD
                        <input type="text" v-model="password" name="password" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Password">               
=======
                        <input type="password" v-model="user.password" name="password" class="w-full box-border px-3 py-2 border border-black outline-none" placeholder="Password">               
>>>>>>> ee8800ffcfde0e6afc9c33bc7bbb1edba5467f2a
                        <div v-if="errors.password" class="mt-2">
                            <small class="block text-rose-400"> {{ errors.password[0] }} </small>
                        </div>
                    </div>   
                    <button class="btn md:w-full" >Sign In</button> 
                    
                </div> 
            </form>  
           </div> 
    </div>          
 
</template>