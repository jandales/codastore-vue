<script>
export default {
    props: {
            alert : String,
            message : String
    },
   
}
</script>
<template>
    <div class="w-full p-3 bg-[#d4edda] border border-[#c3e6cb] mb-4">
       <label for="" class="text-[#155724] text-sm">{{ message }}</label> 
    </div >
</template>
