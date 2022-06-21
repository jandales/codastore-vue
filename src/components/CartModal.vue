<script>
export default {
    data(){
        return {
            DISPLAY_FLEX : 'flex',
            DISPLAY_HIDDEN : 'hidden',
        }
    },
    methods: {
        close() {
            const modal = document.getElementById('modalCart');
            modal.classList.replace(this.DISPLAY_FLEX, this.DISPLAY_HIDDEN);           
        }
    },
}
</script>
<template>
    <div id="modalCart" class="hidden w-full fixed top-0 left-0 min-h-screen bg-black bg-opacity-50">
        <div class="flex flex-col bg-white w-1/3 min-h-screen border-l fixed top-0 right-0 p-8 z-20">
            <div>
                <span class="block px-4 py-4" @click="close()">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </span>
            <h1 class="block text-center text-2xl">Your Cart</h1>
            </div>

            <ul class="mt-4 relative overflow-y-auto">
                <li v-for="n in 3" class="block mb-8 border-b border-[#f5f5f5]">
                    <div class="flex">
                        <figure class="bg-lightGray flex items-center  h-[95px] ">
                            <img src="../assets/collection1.jpg"  class="img" alt="">
                        </figure>
                        <div class="w-full ml-4">
                            <div class="w-full flex items-center justify-between">
                                <label for="" class="block bg-theme font-semibold">Product 1</label>
                                <span class="cursor-pointer hover:text-black" >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </div>
                            <label for="" class="block">$500</label>
                            <ul class="flex gap-2">
                                <li class="block">Color : Red</li>
                                <li class="block">Size : S</li>
                            </ul>
                            <div class="w-[100px] h-[30px] flex flex-row border border-gray-200 mt-2">
                                <div class="w-[30px] flex justify-center items-center p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                    </svg>
                                </div>
                                <input type="text" class="w-[calc(100%_-_60px)]  text-center px-2 bg-[#eee] border-l  border-r border-gray-200" value="1"  alt="">
                                <div class="w-[30px] flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <div class="flex flex-col md:flex-row w-full mt-auto gap-4">
                <router-link to="/cart" class="sm:w-full w-1/2"><button class="btn w-full">View Cart</button></router-link>
                <router-link to="/cart" class="sm:w-full w-1/2"><button class="btn w-full">Checkout</button></router-link>
         
            </div>
         </div>
    </div>
</template>