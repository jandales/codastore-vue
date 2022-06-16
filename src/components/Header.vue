<script>
import Hero from '../components/Hero.vue'
import HeroVue from './Hero.vue'
export default {
    data() {
        return {
            navigations: [
                { name: "home", url: "/" },
                { name: "shop", url: "/shop" },
                { name: "contact", url: "/contact" },
                { name: "about", url: "/about" },
            ],
            isHomePage : this.isHomePage = this.$route.name == 'home' ? true : false
         
        };
    },
    methods: {
        toggleMenu() {
            const listNavWrapper = document.getElementById("list-nav-wrapper");
            if (listNavWrapper.classList.contains("left-[-80%]")) {
                listNavWrapper.classList.remove("left-[-80%]");
                listNavWrapper.classList.add("left-[0]");
                return;
            }
            listNavWrapper.classList.remove("left-[0]");
            listNavWrapper.classList.add("left-[-80%]");
        },
    }, 
    
      
    components: { HeroVue }
}



</script>

<template>

    <div class="bg-white" :class="{ 'isHome' : isHomePage }"> 

        <div class="container relative px-4 md:mx-auto lg:px-0" :class="{'min-h-screen' : isHomePage}">
            <!--Navigation-->
        
            <div class="flex items-center justify-between">               
                <div class="flex items-center gap-4">
                     <span class="md:hidden" @click="toggleMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </span>
                    <img src="../assets/logo.png"  height="100" width="100" alt="">
                    <ul id="list-nav-wrapper" class="absolute top-0  left-[-80%] h-screen w-[80%] bg-white flex flex-col gap-4  items-start p-8
                               md:flex md:flex-row md:relative md:h-auto md:bg-transparent md:left-0 z-10
                               ">
                        <div class="flex justify-between items-center w-full
                                    md:hidden">
                            <label for="menu" class="text-[2rem]">Menu</label>
                             <span @click="toggleMenu">                          
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>
                        </div>
                        
                        <li class="w-full" v-for='nav in navigations'>
                                <a :href="nav.url" class="block md:text-xs font-semibold text-left uppercase tracking-widest text-gray-500">{{ nav.name }}</a>
                        </li>
                        
                        
                    </ul>
                </div>
             
               <div class="flex gap-4">
                    <span class="md:text-xs">
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                    <span class="md:text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>  
                    </span>
                    <span class="md:text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </span>
               </div>
            </div>

            <!-- hero Image-->
            <div v-if="isHomePage" class="flex flex-col items-center justify-center absolute top-[50%] w-full translate-y-[-50%]">
                <h1 class="text-white text-[3rem] md:text-[4rem]">Wear your Best Moments</h1>
                <a href="#" class="font-semibold tracking-wide px-8 py-4 mt-8  rounded-sm bg-white text-slate-500 shadow-sm hover:text-slate-400">START SHOPPING NOW</a>
            </div>
        </div>
        
    </div>
</template>



