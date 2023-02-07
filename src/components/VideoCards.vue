<template>
   <div class="video-card">
      <div class="video__img-block">
         <img :src="card.img" alt="">
         <div class="video__playing _icon-play" @click="$emit('playVideo', card.video)"></div>
      </div>
      <h4 class="video__title">{{ card.title }}</h4>
   </div>
</template>

<script>
import { object } from 'yup/lib/locale';

   export default {
      props: {
         card: Object
      },
   }
</script>

<style lang="scss" scoped>

</style>