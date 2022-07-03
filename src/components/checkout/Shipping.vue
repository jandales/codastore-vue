<template>
    <div>
        <ul >
            <li class="flex border p-4 border-b-0">
                <span class="block  min-w-[100px]">Contact</span>
                <span>jesusandales@gmail.com</span>
                <span class="font-semibold ml-auto text-dark cursor-pointer  hover:underline">Change</span>
            </li>
            <li class="flex border p-4 border-b-0">
                <span class="block  min-w-[100px]">Shipping</span>
                <span>jesusandales@gmail.com</span>
                <span class="font-semibold ml-auto text-dark cursor-pointer hover:underline">Change</span>
            </li>
            <li class="flex border p-4">
                <span class="block  min-w-[100px]">Method</span>
                <span>jesusandales@gmail.com</span>
                <span class="font-semibold ml-auto text-dark cursor-pointer hover:underline">Change</span>
            </li>
        </ul>
        <div class="mt-8">
            <ul>
                <li class="flex border p-4 border-b-0">
                    <div class="flex">
                        <input type="radio" name="name" id="">
                        <label for="" class="ml-2">Shiipind Method 1</label>
                    </div>
                    <label for="" class="ml-auto">150</label>
                </li>
                <li class="flex border p-4 border-b">
                    <div class="flex">
                        <input type="radio" name="name" id="">
                        <label for="" class="ml-2">Shiipind Method 2</label>
                    </div>
                    <label for="" class="ml-auto">150</label>
                </li>
            </ul>
        </div>
          <div class="flex items-center w-full mt-8">
          
                   
                    <router-link to="/cart" class="flex items-center">
                         <span >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                        </span>
                       <label for="" class="ml-2 cursor-pointer"> Return Cart</label>
                    </router-link>
               
                <router-link  to="/fasf" class="block btn ml-auto">Continue</router-link>
            </div>
    </div>
</template>