<template>
   <div class="article">
      <div class="article__img-title">
         <img :src="article.img" alt="" class="article__img">
      </div>
      <div class="article__container">
         <!--_container-->
         <div class="article__box">
            <div class="article__above-title">
               <div class="article__back-box" @click="router.push('/blog')">
                  <div class="article__back-img-box">
                     <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17L1 9L9 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </div>
                  <div class="article__back-content">
                     Back
                  </div>
               </div>
               <div class="article__date">
                  {{ article.date }}
               </div>
            </div>
            <h2 class="article__title">
               {{ article.title }}
            </h2>
            <router-view></router-view>
         </div>
      </div>
      <SliderArticle title="You might like it" />
   </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { useArticlesStore } from "../stores/articlesStore.js";
import SliderArticle from '../components/SliderArticle.vue';


const router = useRouter();
const route = useRoute();
const articlesStore = useArticlesStore();
//const {articlesList} = articlesStore;

const article = computed(() => {
   return articlesStore.articlesList.find(item => item.id == route.params.id)
})

//onMounted(() => {
//   console.log(articlesStore.articlesList);
//})

</script>

<style lang="scss" scoped>
.article {
   width: 100%;
   //position: relative;

   &__img-title {
      width: 100%;
      height: 200px;
   }

   &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }

   &__container {
      max-width: 1200px;
      height: 100%;
      padding: 0 24px;
      margin: 0 auto;
      box-sizing: content-box;

      @media (max-width: 650px) {
         //top: 120px;
         padding: 0;
      }
   }

   &__box {
      max-width: 1000px;
      //margin-top: -80px;
      margin: -80px auto 0;
      background-color: white;
      position: relative;
      z-index: 1;
      width: 100%;
      padding: 60px 60px 45px;

      @media (max-width: 1200px) {
         padding: 30px 40px 0px;
      }

      @media (max-width: 650px) {
         margin-top: 0;
         padding: 30px 40px 0px;
      }

      @media (max-width: 450px) {
         padding: 30px 20px 0px;
      }
   }

   &__above-title {
      width: 100%;
      height: 29px;
      margin-bottom: 2px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 650px) {
         margin-bottom: 5px;
      }
   }

   &__back-box {
      position: absolute;
      top: 120px;
      left: -100px;
      display: flex;
      align-items: center;
      cursor: pointer;
      stroke: var(--color-text);

      &:hover {
         color: var(--color-accent);
         stroke: var(--color-accent)
      }

      @media (max-width: 1200px) {
         //top: 120px;
         left: 0px;
      }

      @media (max-width: 650px) {
         position: static;
      }

   }

   &__back-img-box {
      width: 24px;
      height: 24px;
      //margin-left: 25%;
      margin-right: 15px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 425px) {
         margin-right: 12px;
      }

      svg {
         width: 8px;
         height: 16px;
         object-fit: contain;
      }
   }

   &__back-content {
      @include bold_16;

      @media (min-width: 650px) and (max-width: 1200px) {
         display: none;
      }
   }


   &__date {}

   &__title {
      max-width: 640px;
   }
}


.article {}
</style>