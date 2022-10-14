<script>
    import { mapGetters } from 'vuex';
    import Item from './Item.vue';
    export default {
        data() {
            return {
              
            }
        },            
        mounted() {
           this.$store.dispatch('getFearureProducts', 12);                                
        },
        computed : {
            ...mapGetters(['products'])
        },
        components : { Item }
    }
</script>
<template>
    <div class="container px-4 md:mx-auto lg:px-0">
    <div class="block text-center">               
            <h1 class="page-heading text-left">Featured Product</h1>
<<<<<<< HEAD
        <div class="flex flex-wrap gap-4">        
            <div v-for="(item, index)  in products" class="product-width box-border">
               <router-link :to="{ name: 'collections-item', params: { item : item.slug }}">
                    <div class="relative  overflow-hidden">                
                            <img :src="apiBase+item.imagePath"                                      
                        class="full-width transition ease-in-out  hover:scale-110  duration-300"  alt=""/>
                    </div>
                    <div class="flex justify-between py-4">
                        <div>
                            <label  class="block capitalize text-sm text-left text-black tracking-wide font-bold hover:underline">{{ item.name }}</label>
                            <label  class="block capitalize text-sm text-left text-slate-500 tracking-wide font-semibold">{{ item.category.name }}</label>
                        </div>
                        <div class="flex justify-center items-center">
                            <span class="capitalize text-sm text-black font-bold">{{ "$500" }}</span>
                        </div>
                    </div>
               </router-link>
            </div>           
=======
        <div class="flex flex-wrap gap-4">    

            <Item v-for="(item, index)  in products" :product="item"></Item>
                 
>>>>>>> ee8800ffcfde0e6afc9c33bc7bbb1edba5467f2a
        </div>

        <div class="p-8  md:mb-12">
             <router-link to="/shop/collection/all" class=" inline-block  py-2 px-8 bg-black text-white tracking-widest"> View All</router-link>
        </div>
       
    </div>
    </div>  
</template>