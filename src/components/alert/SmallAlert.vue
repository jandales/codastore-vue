<script>
export default{
    props : {
       errors : Array,
    }    
}
</script>
<template>
    <div v-if="errors" v-for="error in errors" class="mt-2">
        <small class="block text-rose-400">{{ error }} </small>
    </div>
</template>