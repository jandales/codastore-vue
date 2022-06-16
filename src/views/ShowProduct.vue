<script></script>
<template>
    <div class="w-[900px] mx-auto">
         <div class="flex mb-8">
            <div class="basis-6/12">
               <div class="block">
                     <div class="w-[80%] flex flex-col">
                        <figure class="mb-4">
                            <img src="../assets/img/collection1.webp" class="w-100"  alt="">
                        </figure>
                        <ul class="flex w-full  gap-4">
                            <li class="w-[calc(((100%_+_1rem)_/_4)_-_1rem)]">
                                <img src="../assets/img/collection1.webp" class="w-full h-full aspect-square"  alt="">
                            </li >
                            <li class="w-[calc(((100%_+_1rem)_/_4)_-_1rem)]">
                                <img src="../assets/img/collection2.webp" class="w-full h-full aspect-square"  alt="">
                            </li>
                            <li class="w-[calc(((100%_+_1rem)_/_4)_-_1rem)]">
                                <img src="../assets/img/collection3.webp" class="w-full h-full aspect-square"  alt="">
                            </li>
                            <li class="w-[calc(((100%_+_1rem)_/_4)_-_1rem)]">
                                <img src="../assets/img/collection1.webp" class="w-full h-full aspect-square"  alt="">
                            </li>                      
                         </ul>
                     </div>
                    
               </div>
            </div>
            <div class="basis-6/12">
                <div class="block">
                    <h1 class="block mb-2">Product Name</h1>
                    <ul>
                        <li></li>
                    </ul>
                    <span class="block mb-2">$50.00</span>
                    <p class="block mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <ul class="mt-4">
                        <li class="flex items-center gap-2"><span>Color :</span>
                            <ul class="flex gap-2">
                                <li><span class="border border-gray-300 p-2 text-xs" >Red</span></li>
                                <li><span class="border border-gray-300 p-2 text-xs" >Gray</span></li>
                                <li><span class="border border-gray-300 p-2 text-xs" >BLue</span></li>
                                <li><span class="border border-gray-300 p-2 text-xs" >Red</span></li>
                            </ul>
                        </li>                        
                    </ul>
                    <div class="w-[140px] h-[45px] flex flex-row border border-gray-200 mt-4">
                        <div class="w-[45px] flex justify-center items-center p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                            </svg>
                        </div>
                        <input type="text" class="w-[calc(100%_-_90px)]  text-center px-2 bg-[#eee] border-l  border-r border-gray-200" value="1"  alt="">
                        <div class="w-[45px] flex justify-center items-center">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                    </div>
                    <br>
                    <button class="px-8 py-2 bg-black text-[#f5f5f5] uppercase">Add to Cart</button>

                </div>
            </div>
        </div>
    </div>
</template>