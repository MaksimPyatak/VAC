<template>
   <div class="video">
      <Title>
         Vehicle videos
      </Title>
      <div class="video__container _container">
         <div class="video__cards">
            <VideoCard class="video__card" v-for="item in createdPage" :card="item" @play-video="play" />
         </div>
         <div class="video__pagination-box">
            <div v-for="n in pagination" class="video__pagination"
               :class="{ 'video__pagination-active': pagination[(n - 1)] == nowPage }"
               @click="createPage(pagination[(n - 1)])">
            </div>
         </div>
         <Transition>
            <VideoModal v-if="activeModal" @close="close" :url="videoNow" />
         </Transition>
      </div>
   </div>
</template>

<script>
import Title from '../components/Title.vue';
import VideoCard from '../components/VideoCard.vue';
import VideoModal from '../components/VideoModal.vue'
import { createPagination } from "../assets/js/create-pagination.js";
export default {
   components: {
      Title,
      VideoCard,
      VideoModal,
   },
   data() {
      return {
         cards: [
            { img: new URL('@/img/video/Video1.jpg', import.meta.url), title: "VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback", video: "https://www.youtube.com/embed/TRkU43kwHiI" },
            { img: new URL('@/img/video/Video2.jpg', import.meta.url), title: "VAC's Vehicle Shoot #11: Toyota Highlander", video: "https://www.youtube.com/embed/fJY3nFKM3Qw" },
            { img: new URL('@/img/video/Video3.jpg', import.meta.url), title: "VAC's Vehicle Shoot #09: 2019 Mazda CX-5", video: "https://www.youtube.com/embed/0W9lkqwpSsU" },
            { img: new URL('@/img/video/Video4.jpg', import.meta.url), title: "Some Vehicles VAC Offers!", video: "https://www.youtube.com/embed/aOSGhwxT6F8" },
            { img: new URL('@/img/video/Video2.jpg', import.meta.url), title: "VAC's Vehicle Shoot #11: Toyota Highlander", video: "https://www.youtube.com/embed/fJY3nFKM3Qw" },
            { img: new URL('@/img/video/Video3.jpg', import.meta.url), title: "VAC's Vehicle Shoot #09: 2019 Mazda CX-5", video: "https://www.youtube.com/embed/0W9lkqwpSsU" },
            { img: new URL('@/img/video/Video4.jpg', import.meta.url), title: "Some Vehicles VAC Offers!", video: "https://www.youtube.com/embed/aOSGhwxT6F8" },
            { img: new URL('@/img/video/Video1.jpg', import.meta.url), title: "VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback", video: "https://www.youtube.com/embed/TRkU43kwHiI" },
            { img: new URL('@/img/video/Video2.jpg', import.meta.url), title: "VAC's Vehicle Shoot #11: Toyota Highlander", video: "https://www.youtube.com/embed/fJY3nFKM3Qw" },
            { img: new URL('@/img/video/Video1.jpg', import.meta.url), title: "VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback", video: "https://www.youtube.com/embed/TRkU43kwHiI" },
            { img: new URL('@/img/video/Video2.jpg', import.meta.url), title: "VAC's Vehicle Shoot #11: Toyota Highlander", video: "https://www.youtube.com/embed/fJY3nFKM3Qw" },
            { img: new URL('@/img/video/Video3.jpg', import.meta.url), title: "VAC's Vehicle Shoot #09: 2019 Mazda CX-5", video: "https://www.youtube.com/embed/0W9lkqwpSsU" },
            { img: new URL('@/img/video/Video3.jpg', import.meta.url), title: "VAC's Vehicle Shoot #09: 2019 Mazda CX-5", video: "https://www.youtube.com/embed/0W9lkqwpSsU" },
            { img: new URL('@/img/video/Video1.jpg', import.meta.url), title: "VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback", video: "https://www.youtube.com/embed/TRkU43kwHiI" },
            { img: new URL('@/img/video/Video2.jpg', import.meta.url), title: "VAC's Vehicle Shoot #11: Toyota Highlander", video: "https://www.youtube.com/embed/fJY3nFKM3Qw" },
            { img: new URL('@/img/video/Video4.jpg', import.meta.url), title: "Some Vehicles VAC Offers!", video: "https://www.youtube.com/embed/aOSGhwxT6F8" },
         ],
         videoNow: '',
         createdPage: [],
         numberOfCards: 4,
         nowPage: 1,
         pagination: [],
         activeModal: false,
      }
   },
   emits: [
      'click'
   ],
   methods: {
      play(url) {
         this.videoNow = url;
         this.activeModal = true;
         document.body.classList.add('lock');
      },
      close() {
         this.activeModal = false;
         document.body.classList.remove('lock');
      },
      createPage(n) {
         this.nowPage = n;
         const first = ((this.nowPage - 1) * this.numberOfCards);
         const last = (this.nowPage * this.numberOfCards);
         this.createdPage = this.cards.slice(first, last);
      },
   },
   mounted() {
      this.createPage(this.nowPage);
      this.createPagination(this.cards, this.numberOfCards);
   },
   setup() {
      createPagination;
      return {
         createPagination
      }
   }

}
</script>

<style></style>

<style lang="scss" scoped>
.video {
   width: 100%;

   &__cards {
      width: 100%;
      margin: 40px 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(1, 1fr);
      gap: 40px;

      @media (max-width: 768px) {
         grid-template-columns: repeat(1, 1fr);
      }

      @media (max-width: 425px) {
         margin: 30px 0;
         gap: 20px;
      }
   }

   &__card {
      &:nth-child(odd) {
         grid-column: 1/2;
      }

      &:nth-child(even) {
         grid-column: 2/3;
      }

      @media (max-width: 768px) {
         &:nth-child(odd) {
            grid-column: 1/2;
         }

         &:nth-child(even) {
            grid-column: 1/2;
         }
      }
   }

   &__pagination-box {
      width: 50px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
   }

   &__pagination {
      width: 10px;
      height: 10px;
      margin: 0 0 40px;
      border-radius: 50%;
      background: var(--color-text);
      opacity: 0.3;

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

   .v-enter-active {
      animation: bounce-in 0.5s;
   }

   .v-leave-active {
      animation: bounce-in 0.5s reverse;
   }

   @keyframes bounce-in {
      0% {
         transform: scale(0);
      }

      50% {
         transform: scale(1.1);
      }

      100% {
         transform: scale(1);
      }
   }
}</style>