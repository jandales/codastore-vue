<script>
export default {
    data() {
        return {
            collections : [
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
        <div class="md:h-screen ">
            <div class="block text-center">
                <hi class="inline-block text-[2rem] py-16">Collections</hi>
            </div>
            <div class="flex gap-8 mb-8">
                <div v-for="(item, index)  in collections" class="w-[calc(((100%_+_2rem)_/_3)-_2rem)] border rounded-sm shadow-md">
                   <a href="#" >
                        <div class="relative  overflow-hidden">
                            <img :src="`/src/assets/img/${item.img}`"                   
                            class="object-cover full-width transition ease-in-out  hover:scale-110  duration-300"    alt=""/>
                        </div>
                        <div class="flex  justify-center items-center py-4 bg-white z-10">
                            <a href="http://" class="uppercase text-[1.2rem] text-slate-500 tracking-widest font-semibold">{{ item.name }}</a>
                            <span class="ml-2 text-slate-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                   </a>
                </div>  
            </div>
        </div>
    </div>
</template>