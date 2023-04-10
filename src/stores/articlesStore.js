import { defineStore } from "pinia";
import { ref } from 'vue';

export const useArticlesStore = defineStore('articlesStore', () => {
   const articlesList = ref([
      { id: 1, img: new URL('@/img/Blog/1.png', import.meta.url), date: "10 May, 2020", title: "How to save on buying a car? \n\t Why is it better to buy from us" },
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

   ])
   return { articlesList }
})