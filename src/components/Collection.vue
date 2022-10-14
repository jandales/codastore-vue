<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
    data() {
        return {
            apiBase : 'http://127.0.0.1:8000',
            collection : null,
        }
    }, 
    components: {
        Splide,
        SplideSlide,
    }, 
    setup() {
    const options = {
      type   : 'loop',
      gap   : '2rem',
      perPage : 3,
      
      breakpoints : {
            640 : {
                gap : '1rem',
                perPage : 2,
            }
      },

    };

    return { options };
  },
   mounted() {
        this.axios
            .get('http://127.0.0.1:8000/api/v1/collection')
            .then(response => {  this.collection = response.data.collection });                                 
    }
}

</script>

<template>
    <div class="container px-4 md:mx-auto lg:px-0">
        <div class="md:min-h-screen ">
         
                <h1 class="page-heading">Collections</h1>
      
             <!-- <Splide :options="options">               -->
                    <!-- <SplideSlide  >                         -->
                <div class="flex justify-center flex-wrap gap-4">
                         <div v-for="item  in collection" class="flex flex-col bg-[#f2f2f2] p-4 md:p-8 collectoion-width"> 
                            <h1 class="text-left capitalize text-slate-500 font-semibold">
                                 <a href="http://">{{ item.name }}</a>
                            </h1>
                            <figure class="relative overflow-hidden p-2">
                                <img :src="apiBase+item.image"                   
                                class="object-cover full-width  duration-300"    alt=""/>
                            </figure>
                            <p class="text-right uppercase text-slate-500 text-sm md:text-base font-[700] tracking-widest  hover:underline">                                
                                <router-link :to="{name : 'shop.collection.name', params : { name : item.name} }" class="cursor-pointer">Shop Now</router-link>
  
                            </p>
                           
                        </div> 
                </div>
                    <!-- </SplideSlide> 
             </Splide>  
  -->
           
        </div>
    </div>
</template>