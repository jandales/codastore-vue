<script>
    export default {
        data() {
            return {
                collections : [
                    { name : 'jacket', img : 'collection1.webp'  },
                    { name : 'Tshirt', img : 'collection2.webp' },
                    { name : 'other', img : 'collection3.webp' }, 
                    { name : 'jacket', img : 'collection1.webp'  },
                    { name : 'Tshirt', img : 'collection2.webp' },
                    { name : 'other', img : 'collection3.webp' }, 
                    { name : 'jacket', img : 'collection1.webp'  },
                    { name : 'Tshirt', img : 'collection2.webp' },
                    { name : 'other', img : 'collection3.webp' }, 
                    { name : 'jacket', img : 'collection1.webp'  },
                    { name : 'Tshirt', img : 'collection2.webp' },
                    { name : 'other', img : 'collection3.webp' }, 
                    { name : 'jacket', img : 'collection1.webp'  },
                    { name : 'Tshirt', img : 'collection2.webp' },
                    { name : 'other', img : 'collection3.webp' },              
                ]
            }
        },  
    }
</script>
<template>
  
   <div class="block py-14">
            <h1 class="block text-left text-xl uppercase">ALL COLLECTIONS</h1>
   </div>
   <div class="flex">
            <ul class="flex gap-4">
                <li><a href="#" class="text-sm hover:underline" >Collection 1</a></li>
                <li><a href="#" class="text-sm hover:underline">Collection 2</a></li>
                <li><a href="#" class="text-sm hover:underline">Collection 3</a></li>
                <li><a href="#" class="text-sm hover:underline">Collection 4</a></li>
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
            <div v-for="(item, index)  in collections" class="product-width box-border">
               <router-link to="/collections/tshirt/product1">
                    <div class="relative  overflow-hidden">
                        <img :src="`/src/assets/img/${item.img}`"                   
                        class="full-width transition ease-in-out  hover:scale-110  duration-300"    alt=""/>
                    </div>
                    <div class="flex justify-between py-4">
                        <div>
                            <label  class="block capitalize  text-sm text-black tracking-wide font-bold hover:underline">{{ item.name }}</label>
                            <label  class="block capitalize text-sm text-slate-500 tracking-wide font-semibold">{{ item.name }}</label>
                        </div>
                        <div class="flex justify-center items-center">
                            <span class="capitalize text-sm text-black font-bold">{{ "$500" }}</span>
                        </div>
                    </div>
               </router-link>
            </div>           
        </div>
   </div>
   
</template>