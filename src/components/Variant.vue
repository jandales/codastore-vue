<script>
export default {
    props :{
        key : String,
        name : String, 
    },
    data() {
        return {          
            isActive : false,
        }
    },
    methods: {
        active(){
            this.$root.inactiveAllButtons();
            this.isActive = true;
        }
    },
}
</script>
<template>
        <li :key="index"  @click="active">                              
                <span class="flex items-center justify-center border border-gray-300  text-xs capitalize p-5 w-8 h-8" :class="{'border border-dark' : isActive}"><label for="">{{name}}</label></span>
        </li>  
</template>