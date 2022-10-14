<script>
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide,SplideTrack } from '@splidejs/vue-splide';
import { defineComponent, onMounted, ref } from 'vue';
export default defineComponent( {
    props : {
        photos : Array,
    },
  components: {
    Splide,
    SplideSlide,
    SplideTrack
  },
  setup() {
     const main = ref();
     const thumbs = ref();
    const options = {
        type      : 'fade',
        rewind    : true,
        pagination: false,
        arrows    : true,
    };

    const thumbsOptions = {
        fixedWidth  : 70,    
        gap         : 20,
        rewind      : true,
        pagination  : false,
        isNavigation: true,
        arrows    : false,
        breakpoints : {
            600: {
                fixedWidth : 60, 
               

            },
        },
    };

   

    onMounted(() => {
        const thumbsSplide = thumbs.value?.splide;
        console.log(thumbs)
      if ( thumbsSplide ) {
        main.value?.sync( thumbsSplide );
      }
    })

    return {   main,thumbs,options,thumbsOptions };
  },
});
</script>
<template>
    <div class="flex flex-col md:flex-row">
        <Splide id="thumbs" :options="thumbsOptions"   ref="thumbs">  
            <SplideSlide  v-for="photo in photos">
                <img :src="baseApi+photo.path" class="w-[70px] h-[70px]" alt="Sample 1">
            </SplideSlide>    
        </Splide> 
        <Splide  :options="options"  ref="main">
            <SplideSlide v-for="photo in photos">
                <img :src="baseApi+photo.path" alt="Sample 1">
            </SplideSlide>   
        </Splide>
       
    </div>
</template>