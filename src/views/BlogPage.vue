<template>
   <div class="our-blog">
      <Title>
         Vehicle videos
      </Title>
      <div class="our-blog__container _container">
         <div class="our-blog__cards">
            <BlogCard v-for="item in createdPage" :image="item.img" :date="item.date" :title="item.title"
               @click="toArticle(item.id)" />
         </div>
         <div class="our-blog__pagination-box">
            <div v-for="n in pagination" class="our-blog__pagination"
               :class="{ 'our-blog__pagination-active': pagination[(n - 1)] == nowPage }"
               @click="createPage(pagination[(n - 1)])">
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router'

import Title from '@/components/Title.vue';
import BlogCard from '@/components/BlogCard.vue';


const router = useRouter()
const route = useRoute()

const cards = ref([
   { id: 1, img: new URL('@/img/Blog/1.jpg', import.meta.url), date: "10 May, 2020", title: "How to save on buying a car? \n\t Why is it better to buy from us" },
   { id: 2, img: new URL('@/img/Blog/2.jpg', import.meta.url), date: "10 May, 2020", title: "How fast can you order a car in Canada?" },
   { id: 3, img: new URL('@/img/Blog/3.jpg', import.meta.url), date: "10 May, 2020", title: "How to save on buying a car? \n\t Why is it better to buy from us" },
   { id: 4, img: new URL('@/img/Blog/4.jpg', import.meta.url), date: "10 May, 2020", title: "How to save on buying a car? \n\t Why is it better to buy from us" },
   { id: 5, img: new URL('@/img/Blog/5.jpg', import.meta.url), date: "10 May, 2020", title: "How fast can you order a car in Canada?" },
   { id: 6, img: new URL('@/img/Blog/6.jpg', import.meta.url), date: "10 May, 2020", title: "How to save on buying a car? \n\t Why is it better to buy from us" },
   { id: 7, img: new URL('@/img/Blog/7.jpg', import.meta.url), date: "10 May, 2020", title: "How to save on buying a car? \n\t Why is it better to buy from us" },
   { id: 8, img: new URL('@/img/Blog/8.jpg', import.meta.url), date: "10 May, 2020", title: "How fast can you order a car in Canada?" },
   { id: 9, img: new URL('@/img/Blog/9.jpg', import.meta.url), date: "10 May, 2020", title: "How to save on buying a car? \n\t Why is it better to buy from us" },
   { id: 10, img: new URL('@/img/Blog/7.jpg', import.meta.url), date: "10 May, 2020", title: "How to save on buying a car? \n\t Why is it better to buy from us" },
   { id: 11, img: new URL('@/img/Blog/2.jpg', import.meta.url), date: "10 May, 2020", title: "How fast can you order a car in Canada?" },
   { id: 12, img: new URL('@/img/Blog/3.jpg', import.meta.url), date: "10 May, 2020", title: "How to save on buying a car? \n\t Why is it better to buy from us" },
   { id: 13, img: new URL('@/img/Blog/5.jpg', import.meta.url), date: "10 May, 2020", title: "How to save on buying a car? \n\t Why is it better to buy from us" },
   { id: 14, img: new URL('@/img/Blog/9.jpg', import.meta.url), date: "10 May, 2020", title: "How fast can you order a car in Canada?" },
   { id: 15, img: new URL('@/img/Blog/8.jpg', import.meta.url), date: "10 May, 2020", title: "How to save on buying a car? \n\t Why is it better to buy from us" }
]);
const numberOfCards = ref(0)
const createdPage = ref([]);
const nowPage = ref(1);
const pagination = ref([]);


function howCardsOfPage() {
   if (window.innerWidth < 600) {
      numberOfCards.value = 6
   } else if (window.innerWidth < 900) {
      numberOfCards.value = 8;
   } else {
      numberOfCards.value = 9
   }
};

function createPagination(arrayData, numberOfCards,) {
   pagination.value.splice(0, pagination.value.length);
   if (!(numberOfCards == 0)) {
      const numberOfPages = Math.ceil(arrayData.length / numberOfCards);
      for (let index = 1; index < (numberOfPages + 1); index++) {
         pagination.value.push(index);
      }
   }
}

function createPage(n) {
   nowPage.value = n;
   const first = ((nowPage.value - 1) * numberOfCards.value);
   const last = (nowPage.value * numberOfCards.value);
   createdPage.value = cards.value.slice(first, last);

}

function toArticle(article) {
   router.push('/articles1/' + article + '/' + article)
}

watch(numberOfCards, () => {
   createPagination(cards.value, numberOfCards.value);
   createPage(nowPage.value);
}, { immediate: true })

onMounted(() => {
   window.addEventListener('resize', howCardsOfPage);
   howCardsOfPage();
})

onUnmounted(() => window.removeEventListener('resize', howCardsOfPage))
</script>

<style lang="scss" scoped>
.our-blog {
   width: 100%;

   &__cards {
      width: 100%;
      margin: 40px 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 20px;

      @media (max-width: 900px) {
         grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 600px) {
         margin: 30px 0;
         grid-template-columns: repeat(1, 1fr);
         gap: 20px;
      }
   }

   &__pagination-box {
      width: 50px;
      margin: 0 auto;
      display: flex;
      justify-content: center
   }

   &__pagination {
      width: 10px;
      height: 10px;
      margin: 0 0 40px;
      border-radius: 50%;
      background: var(--color-text);
      opacity: 0.3;

      &:not(:last-child) {
         margin-right: 10px;
      }

      &:hover {
         cursor: pointer;
      }

      @media (max-width: 425px) {
         margin: 30px 0;
      }
   }

   &__pagination-active {
      opacity: 1;
   }
}

:deep(.blog-card) {
   height: 100%;
}
</style>