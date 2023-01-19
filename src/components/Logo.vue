<template>
   <router-link class="logo" to="/">
      <img src="../img/logo img.svg" alt="logo image">
      <div class="logo__title">VAC</div>
   </router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.logo {
   width: 112px;
   height: 33px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media(max-width: 425px) {
      width: 81.18px;
      height: 23.92px;
   }

   img {
      height: 100%;
   }

   &__title {
      font-weight: 700;
      font-size: 28px;
      line-height: 108.5%;
      letter-spacing: 0.02em;
      color: #7380FF;

      @media(max-width: 425px) {
         font-size: 20.3px;
      }
   }
}
</style>