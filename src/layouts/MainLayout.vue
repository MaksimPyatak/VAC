<template>
   <Header />
   <div class="wrapper">
      <div class="main">
         <RouterView />
      </div>
   </div>
   <Footer />
</template>


<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
   components: {
      Header, Footer
   }
}
</script>

<style scoped lang="scss">
.main {
   width: 100%;
   /*height: 100%;*/
   margin: 80px 0 0;

   @media(max-width: 850px) {
      margin: 80px 0 0;
   }

   @media(max-width: 650px) {
      margin: 80px 0 0;
   }

   @media(max-width: 425px) {
      margin: 55px 0 0;
   }

}

.wrapper {
   position: relative;
   //min-height: 100%;
   //margin: 0 auto;
   display: flex;
   flex-direction: column;
   //background-color: #e5e5e5;
   flex: 1 1 auto;
}
</style>