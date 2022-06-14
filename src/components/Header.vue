<script>


export default {
  data() {
    return {
        navigations : [
            { name : 'home' , url : '#' },
            { name : 'shop', url : '#'},
            { name : 'contact', url : '#'},
            { name : 'about', url : '#' }
        ]
    }
  },  
  methods: {
    toggleMenu() {
        const listNavWrapper = document.getElementById('list-nav-wrapper');
        if (listNavWrapper.classList.contains('left-[-80%]')) {
            listNavWrapper.classList.remove('left-[-80%]')
            listNavWrapper.classList.add('left-[0]')
            return;
        }
        listNavWrapper.classList.remove('left-[0]')
        listNavWrapper.classList.add('left-[-80%]') 
    }
  }
}
</script>

<template>
    <div class="bg-white">
        <div class="container px-4 md:mx-auto lg:px-0">
            <div class="flex items-center justify-between  h-32">               
                <div class="flex items-center gap-4">
                     <span class="md:hidden" @click="toggleMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </span>
                    <img src="../assets/logo.png"  height="100" width="100" alt="">
                    <ul id="list-nav-wrapper" class="absolute top-0  left-[-80%] h-screen w-[80%] bg-white flex flex-col gap-4  items-start p-8
                               md:flex md:flex-row md:relative md:h-auto md:bg-transparent md:left-0
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
                                <a :href="nav.url" class="block font-semibold text-left uppercase tracking-widest text-gray-500">{{ nav.name }}</a>
                        </li>
                        
                        
                    </ul>
                </div>
             
               <div class="flex gap-4">
                    <span>
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </span>
               </div>
            </div>
        </div>
        
    </div>
</template>




