<template>
   <div class="video-card">
      <div class="video-card__img-block">
         <img class="video-card__img" :src="card.img" alt="">
         <div class="video-card__playing _icon-play" @click="$emit('playVideo', card.video)"></div>
      </div>
      <h4 class="video-card__title">{{ card.title }}</h4>
   </div>
</template>

<script>
   export default {
      props: {
         card: Object
      },
   }
</script>

<style lang="scss" scoped>
.video-card {
   width: 100%;

   &__img-block {
      width: 100%;
      position: relative;
   }
   
   &__img {
      width: 100%;
   }

   &__playing {
      position: absolute;
      top: 42.3%;
      left: 47%;
      width: 53px;
      height: 53px;
      border-radius: 50%;
      padding: 0 0 0 5px;
      background-color: var(--color-white);
      opacity: 0.8;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--color-accent);
         font-size: 24px;
      &:hover {
         cursor: pointer;
      }
   }

   &__title {}
}

</style>