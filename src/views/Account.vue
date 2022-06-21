<template>
    <div class="container md:mx-auto">
        <div class="flex md:mt-8">           
            <div class="account-sidebar">
                <div class="hidden md:flex md:flex-col md:justify-center mb-4">
                    <div class="relative rounded-full w-20 h-20 bg-[#f5f5f5] overflow-hidden mx-auto mb-2">
                        <img src="../assets/avatar.jpg" alt="">
                    </div>
                    <router-link to="/" class="hover:underline text-center">View Profile</router-link>
                </div>
                 <router-link  to="/" class="hover:bg-[#f4f4f4] underline-offset-2" >
                    <div class="account-nav-item md:hidden">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <label>Profile</label>
                    </div>
                </router-link>
                <router-link  to="/" class="hover:bg-[#f4f4f4] underline-offset-2" >
                    <div class="account-nav-item">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </span>
                        <label>Orders</label>
                    </div>
                </router-link>
                <router-link  to="/" class="hover:bg-[#f4f4f4]">
                    <div class="account-nav-item">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </span>
                    <label>Payment Options</label>
                    </div>
                </router-link>
                <router-link  to="/" class="hover:bg-[#f4f4f4]">
                    <div class="account-nav-item">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                            </svg>
                        </span>
                    <label>Shipping Address</label>
                    </div>
                </router-link>
                <router-link  to="/" class="hover:bg-[#f4f4f4]">
                    <div class="account-nav-item">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                           </svg>
                        </span>
                    <label>Logout</label>
                    </div>
                </router-link>
            </div>
            <div class="ml-8 w-full">
                   <div class="flex">
                        <div class="flex flex-col w-50">
                            <div class="relative h-50 w-50">
                                 <img src="../assets/avatar.jpg"  class="w-full h-full" alt=""/>
                                 <router-link to="/" class="absolute bg-white rounded-full p-2 bottom-2 right-2">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </span>
                                 </router-link>
                            </div>
                           
                            <div class="flex flex-col gap-4 mt-4">
                                <router-link to="/" class="block">
                                    <button class="btn  md:w-full">Edit</button>                                   
                                </router-link>                               
                                 <router-link to="/">
                                    <button class="btn md:w-full">Change Password</button>                                   
                                </router-link>
                            </div>
                        </div>
                   </div>
            </div>
        </div>
    </div>
</template>