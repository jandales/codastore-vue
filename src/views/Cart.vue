<template>
    <div class="container md:mx-auto">
        <div class="block py-14">
            <h1 class="block text-left text-xl uppercase">Your Cart</h1>
   </div>

        <table class="w-full table">
            <thead>
                <tr>
                    <th class="text-left">Product</th>
                    <th class="text-left">Quantity</th>
                    <th class="text-right">Total</th>
                </tr>
            </thead>
             <tbody>
                <tr>
                    <td>
                        <div class="flex-1 flex align-top">
                            <router-link to='/collections/tshirt/product1'>
                                <figure class="w-32">
                                <img src="../assets/img/collection1.webp" alt="">
                                </figure>
                            </router-link>
                            <div class="ml-4">
                               <router-link to='/collections/tshirt/product1'>
                                     <label for="" class="block capitalize tracking-wider text-base text-dark hover:underline">Pilipinas Baybayin Tees</label>
                               </router-link>
                                <label for="" class="block mt-1 tracking-wider text-base">$500</label>
                                <ul class="block">
                                    <li class="block mt-1 tracking-wider text-base">Size : S</li>
                                    <li class="block mt-1 tracking-wider text-base">Size : S</li>
                                </ul>
                            </div>
                        </div>
                    </td>
                    <td class="text-left align-top">
                         <div class="w-[140px] h-[45px] flex flex-row border border-gray-200">
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
                    </td>
                    <td class="text-right align-top"><span class=" block mt-4 text-dark tracking-wider">$500</span></td>
                </tr>
              
             </tbody>
        </table>    
      
    </div>
</template>