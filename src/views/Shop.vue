<script setup>
    import ProductList from "../components/ProductList.vue";
</script>

<template>
    <div class="container md:mx-auto">  
        <ProductList :collectionName="$route.params.name"></ProductList>
    </div>
</template>