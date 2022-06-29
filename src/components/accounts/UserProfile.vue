<script>
    import AlertSuccess from '../alert/AlertSuccess.vue';
  
    export default {
    data() {
        return {           
            errors : [], 
            isSuccess : false,          
        };
    },
    methods: {        
        updateProfile() {
            this.errors = [];
            this.isSuccess = false;
            this.$store.dispatch('updateUser',this.user)
            .then(response => {
                    this.isSuccess = true;  
            })
            .catch(errors => {
                if (errors.response.status == 422) {                
                    this.errors = errors.response.data.errors;
                }
            });
        },
        onDateChange(event){                 
           this.user.age = this.calculateAge(event.target.value);
        },
        calculateAge(birthday) { 
            birthday = Date.parse(birthday)
            var ageDifMs = Date.now() - birthday;
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    },
    created() {
        this.$store.dispatch('user'); 
    },
    computed : {
        user(){
            return this.$store.getters.user;
        }
    },
    components: { AlertSuccess }
}
</script>

<template>
   <AlertSuccess v-if="isSuccess" :alert="'danger'" :message="'Successfully Updated'" ></AlertSuccess> 
    <div class="w-full flex gap-8 mb-16" v-if="user">
        <div class="w-4/5">           
             <form @submit.prevent="updateProfile">
                   <div class="relative w-full block mb-4">
                    <label for="" class="block mb-2">Name</label>
                    <input type="text" v-model="user.name" name="name">
                      <div v-if="errors.name" name="password" class="flex flex-col gap-2 mt-2">
                            <small class="block text-rose-400" v-for="error in errors.name"> {{ error }} </small>
                      </div>
                </div>

                <div class="relative w-full block mb-4">
                    <label for="" class="block mb-2">Email (Note: cannot be Change)</label>
                    <input type="email" v-model="user.email" name="email" disabled>
                </div>

                <div class="relative w-full block mb-4">
                    <label for="" class="block mb-2">Phone Number</label>
                    <input type="number" v-model="user.contact" name="contact">
                     <div v-if="errors.contact" name="password" class="flex flex-col gap-2 mt-2">
                            <small class="block text-rose-400" v-for="error in errors.contact"> {{ error }} </small>
                    </div>
                </div>

                <div class="relative w-full block mb-4">
                    <label for="" class="block mb-2">Date Of Birth</label>
                    <input type="date" v-model="user.dateofbirth" @change="onDateChange($event)" name="dateofbirth">
                     <div v-if="errors.dateofbirth" name="password" class="flex flex-col gap-2 mt-2">
                            <small class="block text-rose-400" v-for="error in errors.dateofbirth"> {{ error }} </small>
                      </div>
                </div>

                <div class="relative w-full block mb-4">
                    <label for="" class="block mb-2">Age</label>
                    <input type="number" v-model="user.age" name="age" disabled>
                </div>

                 <div class="relative w-full block mb-4">                   
                    <button  name="name" class="btn">Update Profile</button>
                </div>
             </form>
         </div> 
         <div class="flex flex-col w-1/5">
            <div class="relative h-50 w-50">
                    <img :src="baseApi+user.imagePath"  class="w-full h-full rounded-full" alt=""/>                 
                    <span class="absolute bg-white border rounded-full p-2 bottom-2 right-2 z-10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </span>                                    
            </div>
        </div> 

    </div>
</template>
