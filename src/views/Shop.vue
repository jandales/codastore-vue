<script setup>
    import ProductList from "../components/ProductList.vue";
</script>
<template>
    <div class="container md:mx-auto">        
        <ProductList :filter="$route.params.filter"></ProductList>
    </div>
</template>