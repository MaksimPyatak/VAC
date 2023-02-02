<template>
   <div class="blog-section">
      <div class="blog-section__container _container">
         <h2 class="blog-section__title">
            Interesting to read
         </h2>
         <Button 
            class="blog-section__button" 
            text="all articles"
            :width="180" 
            mobileWidth="100%" 
            :mobileHight="35" 
            :empty="true"
         />
         <div class="blog-section__swiper-container">
            <swiper 
               class="blog-section__slider"
               :modules="modules"
               :slides-per-view="1"
               :space-between="20"
               :navigation="true"
               :breakpoints="{
                  767: {
                  slidesPerView: 2,
                  },
                  1300: {
                  slidesPerView: 3,
                  },
               }"
            >
               <swiper-slide 
                  class="blog-section__slide"
                  v-for="item in cards"

               >
                  <BlogCard
                     :image="item.img"
                     :date="item.date"
                     :title="item.title"
                     @click="toArticle(item.id)"
                  />
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
      data() {
         return {
            cards: [
               {id: 1, img: new URL('@/img/Blog/1.jpg', import.meta.url), date: "10 May, 2020", title: "How to save on buying a car? \n\t Why is it better to buy from us"},
               {id: 2, img: new URL('@/img/Blog/2.jpg', import.meta.url), date: "10 May, 2020", title: "How fast can you order a car in Canada?"},
               {id: 3, img: new URL('@/img/Blog/3.jpg', import.meta.url), date: "10 May, 2020", title: "How to save on buying a car? \n\t Why is it better to buy from us"}
            ]
         }
      },
      methods: {
         toArticle(article) {
            this.$router.push('articles'+ article)
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
   margin: var(--margin-top-section) 0 40px;

   &__container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 60px;
      @media (max-width: 425px) {
         row-gap: 30px;
      }
   }

   &__title {}

   &__button {
      justify-self: end;
      margin-top: 9px;
   }

   &__swiper-container {
      grid-column: 1/3;
   }

   &__slider {
   //   padding: 29px;
   // margin: -29px;
   }

   &__slide {}

   @include navigation;
   :deep(.swiper-button-prev),
   :deep(.swiper-button-next) {
      
      top: 51% !important;
      
      @media(min-width: 767px) {
         display: none;
      }
   }
}
</style>