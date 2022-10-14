<script setup>
    import ProductList from "../components/ProductList.vue";
</script>

<template>
<<<<<<< HEAD
    <div class="container md:mx-auto">  
=======
    <div class="container md:mx-auto container-min-height">  
>>>>>>> ee8800ffcfde0e6afc9c33bc7bbb1edba5467f2a
        <ProductList :collectionName="$route.params.name"></ProductList>
    </div>
</template>