<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Header from "./components/Header.vue";
import Footer from './components/Footer.vue';
import CartModal from './components/CartModal.vue'; 

 export default {
  data(){
    return {
      ischeckout : false,
    }
  },
  watch : {
      $route(to, from) {
            this.ischeckout = to.name == 'checkout.information' || to.name == 'checkout.shipping'  || to.name == 'checkout.payment' ? true : false;  
      },
  },
  components : { Header, Footer, CartModal}
       
 }


</script>

<template>   
    <Header v-if="!ischeckout"></Header>
    <router-view></router-view>
    <Footer  v-if="!ischeckout"></Footer>
    <CartModal></CartModal>
</template>

<style>



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f0f0f0;

}
</style>
