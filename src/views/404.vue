<script>
import Button from "../components/Button.vue"
export default {
   components: { Button }
}
</script>

<template>
   <div class="error404">
      <div class="error404__container">
         <div class="error404__icon-box">
            <img src="../img/icons/SedanIconForCatalogPage.svg" alt="Sedan icon" class="error404__icon">
         </div>
         <h2 class="error404__title">
            404 page
         </h2>
         <div class="error404__text">
            Page not found or such pages do not exist.
         </div>
         <div class="error404__button">
            <Button @click="$router.push('/')" text="Go home" :width="165" :hight="45" :mobileWidth="130"
               :mobileHight="35" />
         </div>
      </div>
   </div>
</template>



<style scoped lang="scss">
.error404 {
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   &__icon-box {
      width: 88.84px;
      height: 29.62px;
   }

   &__icon {
      width: 100%;
   }

   &__title {
      margin: 20px 0 5px;
   }

   &__text {
      @include regular_16;
      margin: 0 80px 40px;

      @media(max-width: 768px) {
         margin-bottom: 30px;
      }
   }

   &__button {}
}
</style>