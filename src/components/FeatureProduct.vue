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
        <div class="flex flex-wrap gap-4">    

            <Item v-for="(item, index)  in products" :product="item"></Item>
                 
        </div>

        <div class="p-8  md:mb-12">
             <a href="#" class=" inline-block  py-2 px-8 bg-black text-white tracking-widest"> View All</a>
        </div>
       
    </div>
    </div>  
</template>