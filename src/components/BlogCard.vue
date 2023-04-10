<template>
   <Card class="blog-card">
      <div class="blog-card__img-box">
         <img class="blog-card__img" :src="image" alt="">
      </div>
      <div class="blog-card__content">
         <div class="blog-card__data">{{ date }}</div>
         <div class="blog-card__title">{{ title }}</div>
      </div>
   </Card>
</template>

<script>
import Card from './Card.vue';
export default {
   components: {
      Card,
   },
   props: {
      image: URL,
      date: String,
      title: String,
      id: String,
   },
}
</script>

<style lang="scss" scoped>
.blog-card {
   cursor: pointer;
   width: 100%;
   height: 360px;

   &__img-box {
      width: 100%;
      height: 230px;
   }

   &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   &__content {
      width: 100%;
      padding: 20px 30px 20px;
   }

   &__data {
      @include regular_16;
      margin: 0 0 1px;
      color: var(--color-text);
   }

   &__title {
      @include semibold_20;
      color: var(--color-content);
   }
}
</style>