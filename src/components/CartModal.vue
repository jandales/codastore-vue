<template>
    <div class="w-full fixed top-0 left-0 min-h-screen bg-black bg-opacity-50">
        <div class="bg-white w-1/3 min-h-screen border-l  fixed top-0 right-0 z-10 p-4">
            <span class="block px-4 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </span>
            <h1 class="block text-center text-2xl">Your Cart</h1>

            <ul class="mt-4">
                <li>
                    <div class="flex">
                        <figure>
                            <img src="../assets/collection1.jpg" width="75px" alt="">
                        </figure>
                        <div class="w-full">
                            <div class="w-full flex items-center justify-between">
                                <label for="" class="block">Product 1</label>
                                <span for="" >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </span>
                            </div>
                            <label for="" class="block">$500</label>
                            <ul>
                                <li class="block">Color : Red</li>
                                <li class="block">Size : S</li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
         </div>
    </div>
</template>