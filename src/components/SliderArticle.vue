<template>
   <div class="blog-section">
      <div class="blog-section__container _container">
         <h2 class="blog-section__title">
            {{ howTitle }}
         </h2>
         <Button @click="$router.push('/blog')" class="blog-section__button" text="all articles" :width="180"
            mobileWidth="100%" :mobileHight="35" :empty="true" />
         <div class="blog-section__swiper-container">
            <swiper class="blog-section__slider" :modules="modules" :slides-per-view="1" :space-between="20" navigation
               :breakpoints="{
                  768: {
                     slidesPerView: 2,
                  },
                  1300: {
                     slidesPerView: 3,
                  },
               }">
               <swiper-slide class="blog-section__slide" v-for="item in cards">
                  <BlogCard :image="item.img" :date="item.date" :title="item.title" @click="toArticle(item.id)" />
               </swiper-slide>
            </swiper>
         </div>
      </div>
   </div>
</template>

<script>
import BlogCard from './BlogCard.vue';
import Button from './Button.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

export default {
   components: {
      BlogCard,
      Button,
      Swiper,
      SwiperSlide,
   },
   props: [
      'title',
   ],
   data() {
      return {
         cards: [
            { id: 1, img: new URL('@/img/Blog/1.jpg', import.meta.url), date: "10 May, 2020", title: "How to save on buying a car? \n\t Why is it better to buy from us" },
            { id: 2, img: new URL('@/img/Blog/2.jpg', import.meta.url), date: "10 May, 2020", title: "How fast can you order a car in Canada?" },
            { id: 3, img: new URL('@/img/Blog/3.jpg', import.meta.url), date: "10 May, 2020", title: "How to save on buying a car? \n\t Why is it better to buy from us" }
         ]
      }
   },
   computed: {
      howTitle() {
         return this.title ? this.title : 'Interesting to read'
      }
   },
   methods: {
      toArticle(article) {
         this.$router.push('/articles1/' + article + '/' + article)
      }
   },
   setup() {
      return {
         modules: [Navigation]
      }
   }
}
</script>

<style lang="scss" scoped>
.blog-section {
   width: 100%;
   margin: var(--margin-top-section) 0 0;

   &__container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 60px;

      @media (max-width: 425px) {
         row-gap: 30px;
      }

      @media (max-width: 767px) {
         grid-template-columns: repeat(1, 1fr);
      }
   }

   &__title {
      width: max-content;

      @media (max-width: 450px) {
         width: auto;
      }
   }

   &__button {
      justify-self: end;
      margin-top: 9px;

      @media (max-width: 767px) {
         justify-self: center;
         grid-row: 3/4;
         margin: -40px 0 40px;
      }

      @media (max-width: 425px) {
         width: 100%;
         justify-self: center;
         margin: -9px 0 30px;
      }
   }

   &__swiper-container {
      grid-column: 1/3;
   }

   &__slider {
      padding: 0 25px 40px;
      margin: 0 -24px;

      @media (max-width: 425px) {
         margin: 0 -20px;
      }

      //@media (min-width: 425px) and (max-width: 433px){
      //   padding: 0 25px 40px 16px;
      //   margin: 0 -16px 0 -16px;
      //}
      .swiper-slide-prev {
         margin-right: 50px !important;
         margin-left: -30px;
      }

      .swiper-slide-next {
         @media (max-width: 1299px) {
            margin-right: 54px !important;
         }

         @media (max-width: 767px) {
            margin-left: 10px !important;
         }
      }
   }

   &__slide {}

   @include navigation;

   :deep(.swiper-button-prev),
   :deep(.swiper-button-next) {

      top: 46% !important;

      @media(min-width: 767px) {
         display: none;
      }
   }

   :deep(.swiper-button-next) {
      right: 25px !important;
   }

   :deep(.swiper-button-prev) {
      left: 25px !important;
   }
}
</style>