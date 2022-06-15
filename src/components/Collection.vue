<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
export default {
    data() {
        return {
            collections : [
                { name : 'jacke1t', img : 'collection1.webp'  },
                { name : 'Tshirt', img : 'collection2.webp' },
                { name : 'other', img : 'collection3.webp' },  
                 { name : 'other1', img : 'collection3.webp' }, 
                 { name : 'Tshirt', img : 'collection2.webp' },             
            ]
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
}

</script>

<template>
    <div class="container px-4 md:mx-auto lg:px-0">
        <div class="md:min-h-screen ">
            <div class="block text-center">
                <h1 class="inline-block text-[2rem] py-8 pb-0">Collections</h1>
            </div>
             <Splide :options="options" aria-label="My Favorite Images">              
                    <SplideSlide  v-for="item  in collections">                        
                     <div class="border rounded-sm shadow-md"> 
                            <a href="#" >
                                    <div class="relative  overflow-hidden">
                                        <img :src="`/src/assets/img/${item.img}`"                   
                                        class="object-cover full-width transition ease-in-out  hover:scale-110  duration-300"    alt=""/>
                                    </div>
                                    <div class="flex  justify-center items-center py-4 bg-white z-10">
                                        <a href="http://" class="uppercase text-[1.2rem] text-slate-500 tracking-widest font-semibold">{{ item.name }}</a>
                                        <span class="ml-2 text-slate-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                </div>
                            </a>
                        </div> 
                    </SplideSlide> 
             </Splide>  
 
           
        </div>
    </div>
</template>