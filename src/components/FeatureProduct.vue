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
    <div class="container px-4 md:mx-auto lg:px-0">
    <div class="block text-center">        
       
            <h1 class="page-heading">Featured Product</h1>
      

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

        <div class="p-8  md:mb-12">
             <a href="#" class=" inline-block  py-2 px-8 bg-black text-white tracking-widest"> View All</a>
        </div>
       
    </div>
    </div>  
</template>