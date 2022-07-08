<script>
import SmallAlert from '../components/alert/SmallAlert.vue';
import Button from '../components/forms/Button.vue';
import AlertSuccessVue from '../components/alert/AlertSuccess.vue';
export default{
    data() {
        return {
            errors : [],
            success : false,
            isLoading : false,
            body : {
                name : null,
                email : null,
                phone : null,
                content : null,
            }
        }
    },
    methods : {
        async send(){
            this.isLoading = true;
            this.success = false;
            try {
                this.errors = [];
                await this.$store.dispatch('sendMessage',this.body);
                this.success = true;
            } catch (error) {
                console.log(error.response.data);
                if(error.response.status == 422){
                    this.errors = error.response.data.errors;
                }
            }
            finally{
                 this.isLoading = false;
            }
        }
    },
    components : { SmallAlert, Button, AlertSuccessVue }
}
</script>
<template>  
      
           <div class="w-full md:w-[768px] px-4 mx-auto container-min-height md:px-0">
                <div class="pt-16">
                    <AlertSuccessVue v-if="success" :message="'Successfully Submitted'"></AlertSuccessVue>
                    <h1 class="text-xl uppercase mb-4">Contact Us</h1>
                    <div class="flex mb-4">
                        <span class="block w-20">Address :</span>
                        <label for="">45F Agoncillo Santa Lucia Novaliches Quezon City </label>
                    </div>
                    <div class="flex mb-4">
                        <span class="block w-20">Lets Talk :</span>
                        <label for="">+639565722152</label>
                    </div>
                    <div class="flex">
                        <span class="block w-20">Email me :</span>
                        <label for="">jesusandales021993@gmail.com</label>
                    </div>



                </div>

             <div class="py-8">
                 <h1 class="text-xl uppercase">Message Us</h1>
            </div>
         
            <div class="flex flex-col gap-4">
                <div class="block">
                    <div class="flex flex-col md:flex-row gap-4">
                        <div class="w-full md:w-[calc(100%_/_2)]">
                            <input type="text" name="name" v-model="body.name" class="px-3 py-2 box-border border w-full    outline-none" placeholder="Name">
                            <SmallAlert :errors="errors.name"></SmallAlert>
                        </div>

                        <div class="w-full md:w-[calc(100%_/_2)]">
                            <input type="text" name="email" v-model="body.email" class="px-3 py-2 box-border  border  w-full md:w-[calc(100%_/_2)] outline-none" placeholder="Email">
                            <SmallAlert :errors="errors.email"></SmallAlert>
                        </div>
                    </div> 
                </div>
                <div class="block">
                    <input type="text" name="name" v-model="body.phone" class="w-full box-border px-3 py-2 border  outline-none" placeholder="Phone (optional)">               
                </div> 
                <div class="block">
                    <textarea col="12" v-model="body.content" class="w-full box-border  px-3 py-2 border outline-none" name="content" placeholder="Message">
                    </textarea> 
                    <SmallAlert :errors="errors.content"></SmallAlert>
                </div>  

                <Button @click="send" :isLoading="isLoading" :btntext="'Send Message'"  class="btn md:max-w-fit uppercase"></Button> 
                <br>
            </div>   
           </div> 
 
</template>