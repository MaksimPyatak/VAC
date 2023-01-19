<script>
   import Header from "../components/Header.vue";
   import Footer from "../components/Footer.vue";
   export default {
      components: {
         Header, Footer
      }
   }
</script>

<template>   
   <Header />
   <div class="wrapper">
      <div class="main">
         <RouterView />
         Main Layout
         lorem300
         <router-link to="/404">404</router-link>
      </div>
   </div>
   <Footer />
</template>


<style scoped lang="scss">
.header {}

.main {
   width: 100%;
   /*height: 100%;*/
   margin: 80px 0 133px;
   flex: 1 1 auto;

   @media(max-width: 850px) {      
      margin: 80px 0 200px;
   }

   @media(max-width: 650px) {      
      margin: 80px 0 176px;
   }

   @media(max-width: 425px) {      
      margin: 55px 0 176px;
   }
}


</style>