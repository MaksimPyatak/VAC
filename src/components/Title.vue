<template>
   <div class="title">
      <div class="title__container _container">
         <h1 class="title__text">
            <slot></slot>
         </h1>
      </div>
   </div>
</template>

<script>
   export default {
      
   }
</script>

<style lang="scss" scoped>
.title {
   width: 100%;
   height: 145px;
   background-image: url(../img/Components/title.jpg);
   background-size: cover;

   @media (max-width: 425px) {
      height: 116px;
   }

   &__container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
   }

   &__text {
      color: var(--color-white);
   }
}
</style>