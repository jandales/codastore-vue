<script>
    export default {
        props: {
            filter : String
        },
        data() {
            return {
                apiBase : 'http://127.0.0.1:8000', 
                products : null,
                collection : null,
            }
        },
        methods : {
            getCollection() {
                 this.axios
                .get('http://127.0.0.1:8000/api/v1/collection')
                .then(response => {  this.collection = response.data.collection });    
            },
            getProducts(filter){         
                 this.axios
                .get(`http://127.0.0.1:8000/api/v1/products/collection/${filter}`)
                .then(response => {  this.products = response.data.products.data });  
            }
        },
        mounted() {
            this.getCollection();
            this.getProducts(this.filter);
        },
       
        
    }
</script>
<template>
  
   <div class="block py-14">
            <h1 class="block text-left text-xl uppercase">{{filter == 'all' || null ? 'All Collection' : filter }}</h1>
   </div>
   <div class="flex">
            <ul class="flex gap-4">
                <li><router-link  to="/shop/collection/all" class="text-sm capitalize hover:underline">All Collection</router-link></li>
                <li v-for="item in collection" :key="item.id"><router-link :to="`/shop/collection/${item.name}`" @click="getProducts(item.name)" class="text-sm capitalize hover:underline" >{{item.name}} </router-link></li>

                
            </ul>
            <div class="flex justify-center items-center ml-auto">
                <span class="text-sm">Sort By :</span>
                <div class="flex">            
                    <select name="sort_by" class="pr-6 text-sm" id="SortBy">
                        <option value="manual" selected="selected">Featured</option>
                        <option value="best-selling">Best selling</option>
                        <option value="title-ascending">Alphabetically, A-Z</option>
                        <option value="title-descending">Alphabetically, Z-A</option>
                        <option value="price-ascending">Price, low to high</option>
                        <option value="price-descending">Price, high to low</option>
                        <option value="created-ascending">Date, old to new</option>
                        <option value="created-descending">Date, new to old</option>
                    </select>                  
                </div>
                <ul></ul>
            </div>
   </div>
   <div class="block mt-8">    
        <div class="flex flex-wrap gap-4">        
            <div v-for="item in products" class="product-item">
               <router-link to="/collections/tshirt/product1">
                    <div class="relative  overflow-hidden">
                        <img :src="apiBase+item.imagePath"                   
                        class="full-width transition ease-in-out  hover:scale-110  duration-300"    alt=""/>
                    </div>
                    <div class="flex justify-between py-4">
                        <div>
                            <label  class="name">{{ item.name }}</label>
                            <label  class="collection">{{ item.category.name }}</label>
                        </div>
                        <div class="flex justify-center items-center">
                            <span class="capitalize text-sm text-black font-bold">{{ item.regular_price }}</span>
                        </div>
                    </div>
               </router-link>
            </div>           
        </div>
   </div>
   
</template>