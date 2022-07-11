<script>
    import ProductList from "../components/ProductList.vue";
    import Item from "../components/Item.vue";

    export default {
        data() {
            return {
                keyword : this.$route.params.keyword,
            }
        },
        methods : {
            async search(event = null){   
                 this.keyword = event == null ? this.keyword : event.target.value;                           
                 await this.$store.dispatch('searchProducts',{keyword : this.keyword});
                 this.$router.push({name : 'search' , params : { keyword : this.keyword }});
             
               
            } 
               
        },
        created(){
            this.search()
        },
        computed : {          
            products(){ return this.$store.getters.products }
        },
        components : { Item }
    }
</script>

<template>
    <div class="container md:mx-auto container-min-height"> 
        <div class="block py-14">
            <h1 class="block text-center text-xl tracking-widest uppercase">Search</h1> 
            
            <div v-if="products">
                <span v-if="products.length > 0" class="block text-center pt-4">{{`${products.length} results for "${keyword.toUpperCase()}" `}}</span>  
                <div  v-else >
                     <span class="block text-center py-8">No results could be found for {{ keyword }}</span>
                     <div class="w-full flex items-center justify-center">
                        <input @keyup.enter="search($event)" type="text" class="w-full md:!w-1/4"  placeholder="Search..."/>
                     </div>
                </div>
            </div>
                
        </div>
        <div class="flex flex-wrap gap-4 mb-16"> 
            <Item v-for="item in products" :product="item"></Item> 
        </div>
    </div>
</template>