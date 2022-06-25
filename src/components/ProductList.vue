<script>
    export default {
        props: {
            collectionName : String
        },
        data() {
            return {
                apiBase : 'http://127.0.0.1:8000', 
                products : null,
                collection : null,
               
                optionsSelected : this.$route.params.keyword,
                pagination : {
                    links : [],
                    currentPage : null, 
                    lastPage : null,
                    disabled : this.currentPage === this.lastPage,
                    
                }
            }
        },
        methods : {
            getCollection() {
                 this.axios
                .get('http://127.0.0.1:8000/api/v1/collection')
                .then(response => {  this.collection = response.data.collection });    
            },
            getProducts(collectionName,sortBy, link){                 
                let api = `http://127.0.0.1:8000/api/v1/products/collection/${collectionName}`;

                if(sortBy != null){
                    collectionName = this.$route.params.name
                    api = `http://127.0.0.1:8000/api/v1/products/collection/${collectionName}/sort-by=${sortBy}`
                }  

                if(link != null){
                    api = link;
                }

                this.axios
                .get(api)
                .then(response => {  
                    let productsData = response.data.products;
                    this.products = productsData.data;
                    this.pagination.links = productsData.links;
                    this.pagination.currentPage = productsData.current_page;
                    this.pagination.lastPage = productsData.last_page;
                });  


            },
            getSort(name){
                this.$router.push(`/shop/collection/${name}`)
            },
            onChange(event){
                 let name = this.$route.params.name;
                 let sort = event.target.value;
                 this.getProducts(name,sort);
                 this.optionsSelected = sort;
                 this.$router.push(`/shop/collection/${name}/sort-by=${sort}`)
            },
        
            
        },
        
        mounted() {
            this.getCollection();
            this.getProducts(this.collectionName, this.$route.params.keyword);
        },
        computed : {
            pages() {
               return this.pagination.links
                        .filter((link) => {
                            if(link.label == '&laquo; Previous')                    
                                link.label = "Previous";
                        
                            if (link.label == 'Next &raquo;')
                                link.label = "Next";
                            
                            return  link;
                          
                        })
            }

           
        },
    
   
       
        
    }
</script>
<template>
  
   <div class="block py-14">
            <h1 class="block text-left text-xl uppercase">{{collectionName == 'all' || null ? 'All Collection' : collectionName }}</h1>           
   </div>
   <div class="flex">
            <ul class="flex gap-4">
                <li><router-link  to="/shop/collection/all" class="text-sm capitalize hover:underline" @click="getProducts('all')">All Collection</router-link></li>
                <li v-for="item in collection" :key="item.id"><router-link :to="`/shop/collection/${item.name}`" @click="getProducts(item.name)" class="text-sm capitalize hover:underline" >{{item.name}} </router-link></li>

                
            </ul>
            <div class="flex justify-center items-center ml-auto">
                <span class="text-sm">Sort By :</span>
                <div class="flex">            
                    <select name="sort_by" @change="onChange($event)"  class="pr-6 text-sm" id="SortBy">
                        <option value="featured" :selected="optionsSelected == 'featured'">Featured</option>                
                        <option value="title-ascending" :selected="optionsSelected == 'title-ascending'" >Alphabetically, A-Z</option>
                        <option value="title-descending" :selected="optionsSelected == 'title-descending'" >Alphabetically, Z-A</option>
                        <option value="price-ascending" :selected="optionsSelected == 'price-ascending'">Price, low to high</option>
                        <option value="price-descending" :selected="optionsSelected == 'price-descending'">Price, high to low</option>
                        <option value="created-ascending" :selected="optionsSelected == 'created-ascending'">Date, old to new</option>
                        <option value="created-descending" :selected="optionsSelected == 'created-descending'">Date, new to old</option>
                    </select>                  
                </div>
                <ul></ul>
            </div>
   </div>
   <div class="block mt-8">    
        <div class="flex flex-wrap gap-4">        
            <div v-for="item in products" class="product-item">
               <router-link  :to="{ name: 'collections-item', params: { item : item.slug }}">
                    <div class="relative  overflow-hidden">
                        <img :src="baseApi+item.imagePath"                   
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
   <div class="flex gap-2 justify-center mb-8">

        <button v-for="(link, index) in pages" :key="index"  @click="getProducts(null, null, link.url)"   class="px-4 py-2 border bg-lightGray border-[#333] cursor-pointer font-semibold" :class="{'bg-dark text-white' : link.active}">            
            {{ link.label }}
        </button>     
   </div>

</template>