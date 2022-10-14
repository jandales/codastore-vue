<script>
    export default {
        props: {
            product : null
        },
       
    }
</script>
<template>
    <div class="product-item">
        <router-link  :to="{ name: 'collections-item', params: { item : product.slug }}">
            <div class="relative  overflow-hidden">
                <img :src="baseApi+product.imagePath"                   
                class="full-width transition ease-in-out  hover:scale-110  duration-300"    alt=""/>
            </div>
            <div class="flex justify-between py-4">
                <div class="flex flex-col items-start">
                    <label  class="name">{{ product.name }}</label>
                    <label  class="collection">{{ product.category.name }}</label>
                </div>
                <div class="flex">
                    <span class="capitalize text-sm tracking-widest text-black">{{ product.regular_price }}</span>
                </div>
            </div>
        </router-link>
    </div>  
</template>