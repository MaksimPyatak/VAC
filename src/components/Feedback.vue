<template>
   <div class="feedback">
      <div class="feedback__container _container">
         <h2 class="feedback__title">
            What our client say about us!
         </h2>
         <Card class="feedback__card">            
            <swiper class="feedback__slider"
               :modules="modules"
               :slides-per-view="1"
               :space-between="50"
               :navigation="true"
               @swiper="onSwiper"
               @slideChange="onSlideChange"
            >

               <swiper-slide class="feedback__slide" v-for="item in feedbackList">
                  <div class="feedback__img-box">
                     <img class="feedback__img" :src=item.img alt="">
                  </div>
                  <div class="feedback__content">
                     <div class="feedback__name">{{ item.person }}</div>
                     <div class="feedback__text">{{ item.text }}</div>
                  </div>
               </swiper-slide>
            </swiper>
         </Card>
      </div>
   </div>
</template>

<script>
import { Swiper, SwiperSlide, useSwiperSlide, useSwiper  } from 'swiper/vue';
import { Keyboard, Mousewheel,Navigation } from 'swiper';

import Card from "../components/Card.vue";

import 'swiper/scss';
import 'swiper/scss/navigation';

export default {
   components: {
      Swiper, 
      SwiperSlide, 
      Card,
   },
   data() {
      return {
         feedbackList: [
            {id: 1, img: new URL('@/img/HomePage/feedBack1.jpg', import.meta.url), person: 'Laura Chaisson', text: 'In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse.'},
            {id: 1, img: new URL('@/img/HomePage/feedBack2.jpg', import.meta.url), person: 'Brad Pitt ', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda praesentium doloremque, magni voluptatum expedita maxime consequatur possimus magnam eum nesciunt ad itaque adipisci aliquam nihil.'},
            {id: 1, img: new URL('@/img/HomePage/feedBack3.jpg', import.meta.url), person: 'Jennifer Linn Aniston', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda praesentium doloremque, magni voluptatum expedita maxime consequatur possimus magnam eum nesciunt ad itaque adipisci aliquam nihil.'}
         ],
         topNavigation: '',
      }
   },
   methods: {
      heightCalculation() {
         const img = document.getElementsByClassName("")
         let heihtImg = getComputedStyle
      }
   },
   setup () {
      return {         
         modules: [Navigation, Keyboard, Mousewheel],
      }
   }
}
</script>

<style lang="scss" scoped>
   .feedback {
   width: 100%;
      margin-top: var(--margin-top-section);
   @media(max-width: 425px) { 
   }
   &__title {
      margin:0 0 60px;
      color: var(--color-content);
   }

   &__card {
      width: 100%;
      height: 320px;      
      @media(max-width: 767px) { 
         height: auto;
      }
   }

   &__slider {
      width: 100%;
      height: 100%;
   }

   &__slide {
      display: grid;
      grid-template-columns: 4.6fr 7.4fr;
      @media(max-width: 767px) { 
         grid-template-columns: 1fr;
         grid-template-rows: repeat(2, auto);
      }
   }

   &__img-box {
      min-width: 301px;
      max-height: 340px;
      @media(max-width: 767px) { 
         height: 59.72vw;
      }
   }

   &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   &__content {
      margin: 54px 60px 54px 40px;
      overflow: hidden;
   }

   &__name {
      @include regular_16;
      margin: 0 0 11px;
   }

   &__text {
      @include semibold_20;
      position: relative;
      height: 82%;
      text-overflow: ellipsis;
      overflow: hidden;
      color: var(--color-content);
      @media(max-width: 767px) { 
         height: 225px;
      }
      //&::before {
      //position: absolute;
      //content: "...";
      //inset-block-end: 0; /* "bottom" */
      //inset-inline-end: 0; /* "right" */
      //}
      //&::after {
      //content: "";
      //position: absolute;
      //inset-inline-end: 0; /* "right" */
      //width: 1rem;
      //height: 1rem;
      //background: white;
      //}
   }
}
:deep(.swiper-button-prev) ,
:deep(.swiper-button-next) {
   width: 53px;
   height: 53px;
   top: 46% !important;
   border-radius: 50%;
   background: var(--color-accent);
   @media(max-width: 767px) { 
      top: 31vw !important;
   }
   @media(max-width: 425px) { 
      width: 35px;
      height: 35px;
   }
   
}
:deep(.swiper-button-disabled) {
      opacity: 0.8;  
   }
:deep(.swiper-button-prev ) {
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
   @media(max-width: 425px) { 
      font-size: 14px;
   }
}
</style>