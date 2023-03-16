<template>
   <div class="car-page">
      <div class="car-page__container _container">
         <div class="car-page__maim-section">
            <div class="car-page__title-box">
               <h2 class="car-page__title">
                  {{ getItem.title }}
               </h2>
               <div class="car-page__subtitle">
                  Watching now 8 people
               </div>
            </div>
            <div class="car-page__car-data">
               <div class="car-page__swiper-box">
                  <swiper :loop="true" :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
                     class="car-page__first-swiper">
                     <swiper-slide class="car-page__first-swiper-slide" v-for="img of getItem.imgExterior">
                        <img :src="img" />
                     </swiper-slide>
                  </swiper>
                  <!--:freeMode="true" -->
                  <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="4"
                     :centeredSlides="true" :watchSlidesProgress="true" :modules="modules" :navigation="true"
                     class="car-page__second-swiper">
                     <swiper-slide class="car-page__second-swiper-slide" v-for="img of getItem.imgExterior">
                        <img :src="img" :alt="getItem.title" />
                     </swiper-slide>
                  </swiper>
               </div>
               <div class="car-page__data-box">
                  <div class="car-page__main-data">
                     <div class="car-page__price-box" id="price-box">
                        <div class="car-page__info-headig">Price</div>
                        <h4 class="car-page__info-data">$ {{ new
                           Intl.NumberFormat('uk-UA').format(Number(String(getItem.price).split(' ').join(''))) }}</h4>
                     </div>
                     <div class="car-page__body-box" id="body-box">
                        <div class="car-page__info-headig">Body</div>
                        <h4 class="car-page__info-data">{{ getItem.bodyType }}</h4>
                     </div>
                     <div class="car-page__year-box" id="year-box">
                        <div class="car-page__info-headig">Year</div>
                        <h4 class="car-page__info-data">{{ getItem.year }}</h4>
                     </div>
                     <div class="car-page__transmission-box" id="transmission-box">
                        <div class="car-page__info-headig">Transmission</div>
                        <h4 class="car-page__info-data">{{ getItem.transmission }}</h4>
                     </div>
                     <div class="car-page__kilometres-box" id="kilometres-box">
                        <div class="car-page__info-headig">Kilometres </div>
                        <h4 class="car-page__info-data">{{ getFormatKilometres }}</h4>
                     </div>
                  </div>
                  <div class="car-page__horizontal-rule"></div>
                  <div class="car-page__box-heading">
                     Detail
                  </div>
                  <ul class="car-page__detail">
                     <li class="car-page__detail-item" v-for="item of getItem.detail">
                        {{ item }}
                     </li>
                  </ul>
                  <div class="car-page__horizontal-rule"></div>
                  <div class="car-page__box-heading">
                     Description
                  </div>
                  <div class="car-page__description">
                     <p class="car-page__content" v-for="p of getItem.description">
                        {{ p }}
                     </p>
                  </div>
                  <Button text="Request more information" :width=280 :mobileWidth=247 :mobileHight=35
                     @click="menuStore.selectMenu('ContactUs', true)" />
               </div>
            </div>

         </div>
         <Calculator :amoyntValue="getItem.price">
            <template v-slot:title>
               <div class="calculator__title-box">
                  <h2 class="calculator__title">
                     Calculate the installment plan for this car.
                  </h2>
               </div>
            </template>
         </Calculator>
      </div>
   </div>
</template>

<script>
import { ref } from 'vue';
import Calculator from '../components/Calculator.vue';
import Button from '../components/Button.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Thumbs } from 'swiper';

import { selectedValueKilometres } from "../assets/js/formatting-kilometres.js";
import { useMenuStore } from "../stores/MenuStore.js"
import { useCarStore } from "../stores/CarsStore.js";

import 'swiper/css';
import 'swiper/css/navigation';
export default {
   components: {
      Swiper,
      SwiperSlide,
      Calculator,
      Button
   },
   data() {
      return {
         //thumbsSwiper: null,
      }
   },
   methods: {
      //setThumbsSwiper(swiper) {
      //   this.thumbsSwiper.value = swiper;
      //}
   },
   computed: {
      /**
       * Знаходить елемент масиву, id якого, дорівнює параметру мршруту id
      */
      getItem() {
         return this.carStore.listCars.find(item => item.id == this.$route.params.id)
      },
      /**
       * Повертає числову частину з getItem.kilometres
      */
      getFormatKilometres() {
         return parseFloat(this.getItem.kilometres.split(' ').join(''))
      }
   },
   setup() {
      selectedValueKilometres;
      const menuStore = useMenuStore();
      const carStore = useCarStore();
      const thumbsSwiper = ref(null);
      const setThumbsSwiper = (swiper) => {
         thumbsSwiper.value = swiper;
      }
      return {
         carStore,
         menuStore,
         modules: [Navigation, Thumbs],
         selectedValueKilometres,
         thumbsSwiper,
         setThumbsSwiper,
      }
   }
}
</script>

<style lang="scss" scoped>
.car-page {
   margin: 40px 0px;

   @media (max-width: 425px) {
      margin: 20px 0px;
   }

   &__container {}

   &__maim-section {
      width: 100%;
      margin-bottom: var(--margin-top-section);

      @media (max-width: 1024px) and (min-width: 767px) {
         padding: 0 60px;
      }
   }

   &__title-box {
      margin-bottom: 20px;
   }

   &__title {
      color: var(--color-content);
   }

   &__subtitle {
      @include medium_16;
   }

   &__car-data {
      width: 100%;
      display: grid;
      //flex-direction: column;
      grid-template-columns: 54.16% 41.66%;
      column-gap: 50px;

      @media (max-width: 1024px) {
         grid-template-columns: 100%;
      }
   }

   &__swiper-box {
      width: 100%;
      margin-bottom: var(--margin-top-section);
   }

   &__first-swiper {
      width: 100%;
      aspect-ratio: 650 / 366;
      margin-bottom: 20px;
   }

   &__first-swiper-slide {
      width: 100%;

      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
   }

   &__second-swiper {
      width: 100%;
      height: 90px;

      @media (max-width: 425px) {
         height: 50px;
      }

      :deep(.swiper-slide) {
         //width: 167px !important;

         //height: 90px;
         //@media (max-width: 425px) {
         //   width: 93px !important;
         //}
      }
   }

   &__second-swiper-slide {
      width: 167px !important;
      //height: 90px;
      aspect-ratio: 167 / 90;

      img {
         width: 100%;
         height: 100%;
         object-fit: cover;
      }
   }

   &__data-box {}

   &__main-data {
      max-width: 500px;
      display: grid;
      grid-template-columns: repeat(2, minmax(max-content, 1fr));
      //grid-template: "#price-box ." auto "#body-box .#year-box" auto "#transmission-box #kilometres-box" auto / repeat(2, 1fr);
      gap: 20px 20%;
   }

   &__price-box {
      grid-column: 1/2;
      grid-row: 1/2;

      .car-page__info-data {
         color: var(--color-accent);
      }
   }

   &__info-headig {
      @include medium_16;
   }

   &__info-data {
      color: var(--color-content);
   }

   &__body-box {
      grid-column: 1/2;
      grid-row: 2/3;
   }

   &__year-box {
      grid-column: 2/3;
      grid-row: 2/3;
   }

   &__transmission-box {
      grid-column: 1/2;
      grid-row: 3/4;
   }

   &__kilometres-box {
      grid-column: 2/3;
      grid-row: 3/4;
   }

   &__horizontal-rule {
      max-width: 500px;
      border-top: 1px solid var(--color-secondary);
      margin: 60px 0;

      @media (max-width: 425px) {
         margin: 40px 0;
      }
   }

   &__box-heading {
      @include medium_16;
      margin-bottom: 20px;
   }

   &__detail {
      max-width: 500px;
      display: grid;
      grid-template-columns: repeat(2, minmax(min-content, 1fr));
      gap: 20px 20%;

      @media (max-width: 425px) {
         grid-template-columns: 100%;
      }
   }

   &__detail-item {
      @include semibold_20;
   }

   &__description {
      margin-bottom: 40px;

      @media (max-width: 425px) {
         margin-bottom: 30px;
      }
   }

   &__content {
      @include regular_16;

      &:not(:last-child) {
         margin-bottom: 2px;
      }
   }
}

.calculator {
   &__title-box {}

   &__title {}

   :deep(.calculator__heading) {
      width: 100%;
      display: grid;
      grid-template-columns: 2fr 0.925fr;
      column-gap: 30px;

      @media (max-width: 850px) {
         grid-template-columns: 1fr;
      }
   }
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
   width: 53px;
   height: 53px;
   top: 46% !important;
   border-radius: 50%;
   background: var(--color-accent);
   //position: absolute !important;
   //z-index: 1;
   opacity: 0.8;

   @media(max-width: 767px) {
      //top: 31vw !important;
   }

   @media(max-width: 425px) {
      width: 35px;
      height: 35px;
   }

}

//:deep(.swiper-button-disabled) {
//   opacity: 0.8;
//}

:deep(.swiper-button-prev) {
   left: 0 !important;
   padding-right: 2px;
}

:deep(.swiper-button-next) {
   right: 0 !important;
   padding-left: 2px;
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
   font-size: 22px;
   font-weight: 700;
   color: #ffffff;
   z-index: 2;

   @media(max-width: 425px) {
      font-size: 14px;
   }
}
</style>