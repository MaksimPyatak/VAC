<script >//setup
export default {
   props: {
      list: {
         type: Array,
         required: true
      },
      title
   }
}
</script>

<template>
   <div class="triangle-list" v-for="item in list">
      <div class="triangle-list__item-number-box">
         <img class="triangle-list__item-number-frame" src="/src/img/img-components/img-triangle-list/Polygon 103.jpg"
            alt="">
         <div class="triangle-list__item-number">{{ item.id }}</div>
      </div>
      <div class="triangle-list__title"></div>
      <div class="triangle-list__content"></div>
   </div>
   <div>{{ title }}</div>
</template>

<style scoped>
header {
   line-height: 1.5;
}

.logo {
   display: block;
   margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
   header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
   }

   .logo {
      margin: 0 2rem 0 0;
   }

   header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
   }
}
</style>
