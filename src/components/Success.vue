<template>
   <div class="success">
      <div class="success__criss-cross" @click="$emit('close')">
         <img src="../img/icons/Close.svg" alt="Close">
      </div>
      <div class="success__ok">
         <img class="success__ok-img" src="../img/icons/OK.svg" alt="">
      </div>
      <!--<div class="success__content">-->
         <h3 class="success__title">
            Application Successful!
         </h3>
         <div class="success__text">
            Our manager will contact you in the nearest time.
         </div>
      <!--</div>-->
   </div>
</template>

<script>
</script>

<style scoped lang="scss">
.success {
   width: 100%;
   height: 100%;

   &__criss-cross {
      width: 22px;
      height: 22px;      
      cursor: pointer;

      @media(max-width: 768px) {
         width: 24px;
         height: 24px;
      }
      img {
         width: 100%;
      }
   }

   &__ok {
      width: 70px;
      height: 70px;
      margin: 60px 0 0;
      border: 2px solid var(--color-accent);
      border-radius: 50%;
      position: relative;

      @media(max-width: 425px) {
         width: 50px;
         height: 50px;
         margin: 136px 0 0;
      }
   }

   &__ok-img {
      position: absolute;
      top: 21px;
      left: 21px; 
      width: 29.4px;
      @media(max-width: 425px) {
         top: 15px;
         left: 15px;
         width: 19px;
      }
   }

   &__content {}

   &__title {
      margin: 40px 0 5px;
      @media(max-width: 425px) {
       margin: 10px 0 5px;
      }
   }

   &__text {
      width: 229px;
      @include regular_16;
   }
}
</style>