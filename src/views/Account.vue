<script>
    export default  { 
        methods : {
            async logout(){
                this.$store.dispatch('isLoading', true); 
                try {
                   await this.axios.delete('/user/logout')
                    .then(response => { if (response.status === 200){
                            localStorage.removeItem('access_token')
                            localStorage.removeItem('user')
                            this.$router.push({name : 'login'})                   
                    }}); 
                } finally {
                    this.$store.dispatch('isLoading', false); 
                } 
            }
        } ,      
    }
</script>
<template>
    <div class="container min-h-[calc(100vh_-_100px)] md:mx-auto">
        <div class="flex flex-col  md:flex-row gap-8 md:gap-0 md:mt-8">           
            <div class="account-sidebar h-max">
                <div class="hidden md:flex gap-4 px-4 py-4">
                    <div class="relative rounded-full w-16 h-16 bg-[#f5f5f5] overflow-hidden">
                        <img src="../assets/avatar.jpg" alt="">
                    </div>
                    <div class="flex flex-col  justify-center">
                        <label for="" class="font-semibold tracking-widest">Jesus Andales</label>
                         <router-link to="/account/profile" class="text-xs tracking-widest hover:underline">Edit Profile</router-link>
                    </div>
                   
                </div>
                 <router-link  to="/account"  class="hover:bg-[#f4f4f4] underline-offset-2" >
                    <div class="account-nav-item">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                         </span>
                    <label class="tracking-widest">Dashboard</label>
                    </div>
                </router-link>
                  <router-link  to="/account/profile"  class="hover:bg-[#f4f4f4] underline-offset-2" >
                    <div class="account-nav-item md:hidden">
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <label class="tracking-widest">Profile</label>
                    </div>
                </router-link>
                <router-link  to="/account/orders"  class="hover:bg-[#f4f4f4] underline-offset-2" >
                    <div class="account-nav-item">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </span>
                        <label  class="tracking-widest">Orders</label>
                    </div>
                </router-link>
                <router-link to="/account/payment-options"  class="hover:bg-[#f4f4f4]">
                    <div class="account-nav-item">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </span>
                    <label class="tracking-widest">Payment Options</label>
                    </div>
                </router-link>
                <router-link  to="/account/address"  class="hover:bg-[#f4f4f4]">
                    <div class="account-nav-item">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                            </svg>
                        </span>
                    <label class="tracking-widest">Shipping Address</label>
                    </div>
                </router-link>
                <span  @click="logout"  class="hover:bg-[#f4f4f4]">
                    <div class="account-nav-item">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                           </svg>
                        </span>
                    <label class="tracking-widest">Logout</label>
                    </div>
                </span>
            </div>
            <div class="ml-0 md:ml-8 w-full">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>