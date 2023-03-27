<template>
   <div class="slider-section">
      <div class="slider-section__background">
         <img class="slider-section__map" src="@/img/HomePage/Background-images.svg" alt="">
      </div>
      <div class="slider-section__content">
         <div class="slider-section__container _container">
            <h1 class="slider-section__title">The easiest way to buy a car in Canada</h1>
            <swiper class="slider-section__slider" :modules="modules" :slides-per-view="1" :space-between="40" navigation
               @slideNextTransitionStart="nextButtonText" @slidePrevTransitionStart="prevButtonText">
               <swiper-slide class="slider-section__slide">
                  <!--@swiper="onSwiper" @slideChange="onSlideChange" -->
                  <img src="../img/HomePage/Nissan.svg" alt="Nissan">
               </swiper-slide>
               <swiper-slide class="slider-section__slide">
                  <img src="../img/HomePage/FordFussion.svg" alt="Ford Fussion">
               </swiper-slide>
               <swiper-slide class="slider-section__slide">
                  <img src="../img/HomePage/Ram.svg" alt="Ram">
               </swiper-slide>
               <swiper-slide class="slider-section__slide">
                  <img src="../img/HomePage/Van.svg" alt="Van">
               </swiper-slide>
            </swiper>
            <router-link to="/quiz/0">
               <Button class="slider-section__button" :text=listButtonText[slideNumber].text :width=200 :mobileWidth=214
                  :mobileHight=35 :empty=true />
               <!--@click="print"-->
            </router-link>
         </div>
      </div>
   </div>
</template>

<script>
import Button from "./Button.vue";
import { ref } from 'vue';
import { Swiper, SwiperSlide, useSwiperSlide, useSwiper } from 'swiper/vue';
import { Keyboard, Mousewheel, Navigation } from 'swiper';

export default {

   components: {
      Button,
      Swiper,
      SwiperSlide,
   },
   data() {
      return {
         listButtonText: [
            { id: 1, text: 'Request a SUV' },
            { id: 2, text: 'Request a Car' },
            { id: 3, text: 'Request a TRUCK' },
            { id: 4, text: 'Request a VAN' },
         ],
         slideNumber: '0',
      }
   },
   methods: {
      //Change button text in slader section
      nextButtonText() {
         this.slideNumber++
      },
      prevButtonText() {
         this.slideNumber--
      },
      //print() {
      //   console.log(this.onSlideChange);
      //}
   },
   setup() {
      return {
         modules: [Navigation, Keyboard, Mousewheel],
      };
   },
}
</script>

<style lang="scss" scoped>
.slider-section {
   width: 100%;
   height: 600px;
   position: relative;

   @media(max-width: 900px) {
      height: 725px;
   }

   @media(max-width: 425px) {
      height: 505px;
   }

   &__background {
      width: 100%;
      height: 100%;
      //margin-left: calc(((100% - 100vw)/2) - 8.8px);
      background: #7481FF;
   }

   &__map-wrapper {
      width: 100%;
      height: 100%;
   }

   &__map {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   &__road {
      position: absolute;
      top: 61px;
      right: 159px;
   }

   &__content {
      width: 100%;
      padding: 120px 0 0;
      position: absolute;
      top: 0;
      left: 0;

      @media(max-width: 900px) {
         padding: 61px 0 0;
      }

      @media(max-width: 425px) {
         padding: 50px 0 0;
      }
   }

   &__container {
      //width: 100%;
      display: grid;
      grid-template-columns: 9fr 10fr;
      grid-template-rows: auto auto;
      gap: 60px 4.17%;

      @media(max-width: 900px) {
         grid-template-columns: 1fr;
      }

      @media(max-width: 425px) {
         gap: 40px;
      }
   }

   &__title {
      max-width: 534px;
      color: var(--color-white);

      @media(max-width: 900px) {
         max-width: 600px;
         margin: 0 auto 0;
         text-align: center;
      }

      @media(max-width: 425px) {
         padding: 0 10px 0;
      }
   }

   &__slider {
      max-width: 600px;
      width: 100%;
      //height: 300px;
      align-self: flex-end;
      grid-column: 2/3;
      grid-row: 1/3;

      @media(max-width: 900px) {
         grid-column: 1/2;
         grid-row: 2/3;
      }
   }

   &__slider-wrapper {}

   &__slide {
      width: 490px;
      //height: 240px;
      padding: 0 55px 0;
      display: flex;
      justify-content: center;

      @media(max-width: 425px) {
         padding: 0 24px 0;
      }

      img {
         width: 100%;
         object-fit: contain;
      }
   }

   &__button {
      @media(max-width: 900px) {
         margin: 0 auto 0;
      }
   }
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
   width: 53px;
   height: 53px;
   top: 46% !important;
   border-radius: 50%;
   background: var(--color-white);
   opacity: 0.8;

   @media(max-width: 425px) {
      width: 35px;
      height: 35px;
      top: 55% !important;
   }

}

:deep(.swiper-button-disabled) {
   opacity: 0.4;
}

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
   color: #7481FF;

   @media(max-width: 425px) {
      font-size: 14px;
   }
}
</style>