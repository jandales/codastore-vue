<script>
    export default  {  
        created() {            
            this.axios.delete('/user/logout')
            .then(response => { if (response.status === 200){
                    localStorage.removeItem('access_token')
                    localStorage.removeItem('user')
                    this.$router.push({name : 'login'})                   
            }}); 
        }
    }
</script>