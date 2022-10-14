<script>
export default {
    props: {
            message : String
    },
   
}
</script>
<template>
    <div class="w-full p-3 bg-[#f8d7da] border border-[#f5c6cb] mb-4">
       <label for="" class="text-[#721c24] text-sm">{{ message }}</label> 
    </div >
</template>
