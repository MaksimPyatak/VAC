<template>
   <div class="car-card">
      <div class="car-card__img-box">
         <swiper class="car-card__swiper"
            :modules="modules"
            :slides-per-view="1"
            :space-between="0"
            :pagination="{ type: 'progressbar', }"
         >
            <swiper-slide v-for="img in this.cardData.img" class="car-card__slide">
               <img class="car-card__img" :src="img" alt="">
            </swiper-slide>
         </swiper>
      </div>
      <Card class="car-card__content">
         <!--cardData.link-->
         <router-link :to="linkOpen" class="car-card__title">
            {{ this.cardData.title }}
         </router-link>
         <div class="car-card__price">
            $ {{ new Intl.NumberFormat('uk-UA').format(Number(String(this.cardData.price).split(' ').join(''))) }}
         </div>
         <div class="car-card__characteristics">
            <div class="car-card__box-hidden">
               <div class="car-card__year">
                  {{ this.cardData.year }} year
               </div>
               <div class="car-card__body-type">
                  {{ this.cardData.bodyType }}
               </div>
               <div class="car-card__transmission">
                  {{ this.cardData.transmission }} transmission
               </div>
               <div class="car-card__kilometres">
                  {{ this.cardData.kilometres }} 
               </div>
            </div>
         </div>
      </Card>
   </div>
</template>

<script>
   import Card from './Card.vue'
   import { Swiper, SwiperSlide } from 'swiper/vue';
   import { Pagination } from 'swiper';
   
   import { selectedValueKilometres } from "../assets/js/formatting-kilometres.js";

   import 'swiper/css';
   import 'swiper/css/pagination';

   export default {
      components: {
         Swiper,
         SwiperSlide,
         Card,
      },
      props: {
         cardData: Object,
      },
      computed: {
         formattingKilometres() {
            return selectedValueKilometres
         },
         linkOpen() {
            return `/car/${this.cardData.id}`
         },
      },
      setup() {
         selectedValueKilometres
         return {
            modules: [Pagination],
            selectedValueKilometres,
         }
      }
      
   }
</script>

<style lang="scss" scoped>
.car-card {
   width: 100%;

   &__img-box {
      width: 100%;
      aspect-ratio: 420/216;
   }

   &__swiper {
      width: 100%;
      height: 100%;
   }

   &__slide {
   }

   &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   &__content {
      padding: 20px;
   }

   &__title {
      margin-bottom: 10px;      
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
      color: var(--color-content);
   }

   &__price {
      @include semibold_20;
      margin-bottom: 20px;
      color: var(--color-accent);
   }

   &__characteristics {
      width: 100%;
      overflow: hidden;
      @include regular_16;
   }

   &__box-hidden {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-left: -20px;
      & > div {
         margin-right: 20px;
         &::before {
            content: '|';
         margin-right: 20px;
         }
      }
   }

   &__year {}

   &__body-type {}

   &__transmission {}

   &__kilometres {}
}
:deep(.swiper-pagination-progressbar) {
   width: 90% ;
   height: 5px;
   top: auto;
   bottom: 5px;
   left: 5%;
   background: rgba(255, 255, 255, 0.2);
   border-radius: 28px;
   .swiper-pagination-progressbar-fill {
      
   background: rgb(255, 255, 255, 0.7);
   border-radius: 28px;
   }
}

</style>