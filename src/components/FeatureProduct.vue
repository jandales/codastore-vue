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
        <div class="mb-16  mt-16 md:mt-0">
            <hi class="text-[2rem]">Featured Product</hi>
        </div> 

        <div class="flex flex-wrap  gap-4 md:gap-8 mb-8">        
            <div v-for="(item, index)  in collections" class="w-[calc(((100%_+_1rem)_/_2)_-_1rem)] md:w-[calc(((100%_+_2rem)_/_3)_-_2rem)] lg:w-[calc(((100%_+_2rem)_/_4)_-_2rem)]  border rounded-sm shadow-md">
               <a href="#">
                    <div class="relative  overflow-hidden">
                        <img :src="`/src/assets/img/${item.img}`"                   
                        class="object-cover full-width transition ease-in-out  hover:scale-110  duration-300"    alt=""/>
                    </div>
                    <div class="flex justify-between  p-4 bg-white z-10">
                        <div>
                            <label  class="block capitalize  text-[1rem] text-black tracking-widest font-bold ">{{ item.name }}</label>
                            <label  class="block capitalize text-[1rem] text-slate-500 tracking-widest font-semibold">{{ item.name }}</label>
                        </div>
                        <div class="flex justify-center items-center">
                            <span class="capitalize text-black font-bold">{{ "$500" }}</span>
                        </div>
                    </div>
               </a>
            </div>           
        </div>

        <div>
             <a href="#" class=" inline-block mt-4 py-4 px-8 bg-black text-white tracking-widest"> View All</a>
        </div>
       
    </div>
    </div>  
</template>