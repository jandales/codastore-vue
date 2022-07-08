<script>
    import currency from '../libraries/currency'
    import Item from './Item.vue';
 


    export default {
        props: {
            collectionName : String
        },
        data() {
            return {  
                isLoading : false,    
                optionsSelected : this.$route.params.keyword,                
            }
        },
        methods : {         
           async getProducts(collectionName, sortBy, link){
                this.isLoading = true;
                try {
                    await this.$store.dispatch('collection');             
                    await this.$store.dispatch('getProducts', { collection : collectionName  , sort : sortBy, link : link }); 
                } catch (error) {
                    
                }finally {
                    this.isLoading = false;
                }
               
            },           
            onChange(event){
                 let name = this.$route.params.name;
                 let sort = event.target.value;
                 this.getProducts(name,sort) ;
                 this.optionsSelected = sort;            
                 this.$router.push(`/shop/collection/${name}/sort-by=${sort}`)
            }, 
        },
        
        mounted() {        
            this.getProducts(this.collectionName, this.$route.params.keyword);
        },
        computed : {
            products(){
                return this.$store.getters.products.filter(product => {
                    return product.regular_price = currency.format(product.regular_price);
                })
            },
            pagination(){
                return this.$store.getters.pagination
            },
            collection(){               
                const list = this.$store.getters.collection;          
                list.unshift({id:0, name : 'All Collection', slug : 'all'})               
                return list;
            },
            links() {
               return this.pagination.links
                        .filter( (link) => {
                            if(!isNaN(link.label))                                                       
                            return link;                          
                        })
            }

           
        },
        components : { Item }
    
   
       
        
    }
</script>
<template>

    <loading v-model:active="isLoading"               
                 :is-full-page="true"/>

  <div v-if="!isLoading">
     <div class="block py-14">
         <h1 class="block text-left text-xl uppercase">{{collectionName == 'all' || null ? 'All Collection' : collectionName }}</h1>           
   </div>
   <div class="flex"> 
            <ul class="flex gap-4">
                <li v-for="item in collection" :key="item.id"><router-link :to="`/shop/collection/${item.slug}`" @click="getProducts(item.slug)" class="text-sm capitalize hover:underline" >{{item.name}} </router-link></li>
            </ul>
            <div class="flex justify-center items-center ml-auto">
                <span class="text-sm">Sort By :</span>
                <div class="flex">            
                    <select name="sort_by" @change="onChange($event)"  class="pr-6 text-sm bg-transparent" id="SortBy">
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
            <Item v-for="item in products" :product="item"></Item> 
        </div>
   </div>
   <div class="flex gap-2 justify-center mb-8">
        <button v-for="(link, index) in links" :key="index"  @click="getProducts(null, null, link.url)"   class="px-3 py-1 border text-sm bg-lightGray border-[#333] cursor-pointer hover:bg-dark hover:text-white" :class="{'bg-dark text-white' : link.active}">            
            {{ link.label }}
        </button>     
   </div>
  </div>

</template>