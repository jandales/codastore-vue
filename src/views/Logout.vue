<script>
    export default  { 
        methods : {
            async logout(){
                this.$store.dispatch('isLoading', true); 
                try {
                   await this.axios.delete('/user/logout')
                    .then(response => { if (response.status === 200){
                            localStorage.removeItem('access_token')
                            localStorage.removeItem('user')
                            this.$router.push({name : 'login'})                   
                    }}); 
                } finally {
                    this.$store.dispatch('isLoading', false); 
                } 
            }
        } ,
        created() {            
            this.logout();
        }
    }
</script>
<template>
    <div class="container-min-height">
         <loading v-model:active="this.$store.getters.isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="true"/>
    </div>
</template>