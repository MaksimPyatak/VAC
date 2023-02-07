<template>
   <div class="video">
      <Title>
         Vehicle videos
      </Title>
      <div class="video__cards">
         <VideoCards 
         v-for="item in createdPage"
         :card="item"
         @play-video="play" />
      </div>
      <div class="video__pagination-box">
         <div class="video__pagination" v-for="n in pagination" @click="createPage(pagination[(n - 1)])"></div>
      </div>
      <div class="video__modal">
         <video :src=videoNow controls>
         </video>
      </div>
   </div>
</template>

<script>
import Title from '../components/Title.vue';
import VideoCards from '../components/VideoCards.vue';
   export default {
      components: {
         Title,
         VideoCards
      },
      data() {
         return {
            cards: [
               {img: new URL('@/img/video/Video1.jpg', import.meta.url), title: "VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)},
               {img: new URL('@/img/video/Video2.jpg', import.meta.url), title: "VAC's Vehicle Shoot #11: Toyota Highlander", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)},
               {img: new URL('@/img/video/Video3.jpg', import.meta.url), title: "VAC's Vehicle Shoot #09: 2019 Mazda CX-5", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)},
               {img: new URL('@/img/video/Video4.jpg', import.meta.url), title: "Some Vehicles VAC Offers!", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)},
               {img: new URL('@/img/video/Video2.jpg', import.meta.url), title: "VAC's Vehicle Shoot #11: Toyota Highlander", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)},
               {img: new URL('@/img/video/Video3.jpg', import.meta.url), title: "VAC's Vehicle Shoot #09: 2019 Mazda CX-5", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)},
               {img: new URL('@/img/video/Video4.jpg', import.meta.url), title: "Some Vehicles VAC Offers!", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)},
               {img: new URL('@/img/video/Video1.jpg', import.meta.url), title: "VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)},
               {img: new URL('@/img/video/Video2.jpg', import.meta.url), title: "VAC's Vehicle Shoot #11: Toyota Highlander", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)}, 
               {img: new URL('@/img/video/Video1.jpg', import.meta.url), title: "VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)},
               {img: new URL('@/img/video/Video2.jpg', import.meta.url), title: "VAC's Vehicle Shoot #11: Toyota Highlander", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)},
               {img: new URL('@/img/video/Video3.jpg', import.meta.url), title: "VAC's Vehicle Shoot #09: 2019 Mazda CX-5", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)},
               {img: new URL('@/img/video/Video3.jpg', import.meta.url), title: "VAC's Vehicle Shoot #09: 2019 Mazda CX-5", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)}, 
               {img: new URL('@/img/video/Video1.jpg', import.meta.url), title: "VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)},
               {img: new URL('@/img/video/Video2.jpg', import.meta.url), title: "VAC's Vehicle Shoot #11: Toyota Highlander", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)},
               {img: new URL('@/img/video/Video4.jpg', import.meta.url), title: "Some Vehicles VAC Offers!", video: new URL('youtu.be/Ar-NYFU1p0s', import.meta.url)},
            ],
            videoNow:'',
            numberOfPages: '',
            createdPage: [],
            numberOfCards: 4,
            nowPage: 1,
            pagination: [],
         }
      },
      emits: [
         'click'
      ],
      methods: {
         createPages(n) {
            console.log(n);
         },
         play(url) {
            this.videoNow = url;
         },
         howPages() {
            const x = this.cards.length / this.numberOfCards;
            this.numberOfPages = Math.ceil(x);
         },
         createPage(n) {
            //if (n == !undefined) {               
            //this.nowPage = n + 1;
            //};
            this.nowPage = n;
            console.log(this.nowPage);
            const first = ((this.nowPage - 1) * this.numberOfCards);
            const last = (this.nowPage * this.numberOfCards);
            this.createdPage = this.cards.slice(first, last);
         },
         createPagination() {
            for (let index = 1; index < (this.numberOfPages + 1); index++) {
               this.pagination.push(index);
               console.log(this.pagination);
            }
         }
      },
      mounted() {
         this.howPages();
         this.createPage(this.nowPage);
         this.createPagination();
      }
   }
</script>

<style lang="scss" scoped>
.video__pagination-box {
   width: 100%;
   height: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
}
.video__pagination {
   width: 25px;
   height: 25px;
   margin-right: 10px;
   background: grey;
   border-radius: 50%;
   color: red;
}
</style>