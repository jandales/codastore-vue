<script>
    export default {
        props : {
            links : Array,
        },
   
        methods : {
            changePage(link, active){
                this.active = parseInt(active);               
                this.$emit('page',null,null,link);
            },
            prev(){  

                if(this.isPrevDisabled) return;

                let active = 0;   

                if(this.active > 0){
                    active = this.active -= 1;
                }  

                const link = this.links[active - 1] 
                this.$emit('page',null,null,link.url);

            },
            next(){  
               if (this.isNextDisabled) return 
               const link = this.links[this.active]               
               this.$emit('page',null,null,link.url);
            }
        },
        computed : {
            active(){
                let active = 0;
                this.links.forEach(link => {
                   if(link.active === true){
                        active = parseInt(link.label);                     
                   }
                });  
                return active;  
            },
            isNextDisabled(){
                return this.links.length === this.active  ? true : false;
            },
            isPrevDisabled(){
                return  this.active === 1  ? true : false;
            }
        }
    }
</script>
<template>
    <div class="flex items-center gap-2 justify-center mb-8">
        <span  class="hover:text-dark" @click="prev" :disabled="isPrevDisabled" :class="{'text-gray-500 hover:text-gray-500' : isPrevDisabled }" >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </span>
        <span v-for="(link, index) in links" :key="index"  @click="changePage(link.url, link.label)" class="px-3 py-1  text-sm  cursor-pointer  hover:text-dark" :class="{'text-dark font-bold' : link.active}">            
            {{ link.label }}
        </span>  
        <button class="hover:text-dark" @click="next" :disabled="isNextDisabled" :class="{'text-gray-500 hover:text-gray-500' : isNextDisabled}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </button>   
   </div>
</template>