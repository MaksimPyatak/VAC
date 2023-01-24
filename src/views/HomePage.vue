<template>
   <div class="slider-section">
      <div class="slider-section__background">
            <img class="slider-section__map" src="@/img/HomePage/Background images.svg" alt="">
      </div>
      <div class="slider-section__content">
         <div class="slider-section__container _container">
            <h1 class="slider-section__title">The easiest way to buy a car in Canada</h1>
            <swiper 
               class="slider-section__slider"
               :modules="modules"
               :slides-per-view="1" 
               :space-between="40" 
               navigation
               @swiper="onSwiper" 
               @slideChange="onSlideChange"
               @slideNextTransitionStart="nextButtonText"
               @slidePrevTransitionStart="prevButtonText"
            >
               <swiper-slide class="slider-section__slide" >
                  <img src="../img/HomePage/Nissan.svg" alt="Nissan">                    
               </swiper-slide>
               <swiper-slide class="slider-section__slide">
                  <img src="../img/HomePage/Ford Fussion 1.svg" alt="Ford Fussion">                    
               </swiper-slide>
               <swiper-slide class="slider-section__slide">
                  <img src="../img/HomePage/Ram.svg" alt="Ram">                    
               </swiper-slide>
               <swiper-slide class="slider-section__slide">
                  <img src="../img/HomePage/Van.svg" alt="Van">                    
               </swiper-slide>
            </swiper>
            <router-link to="/src/views/Quiz.vue" >
               <Button  
                  class="slider-section__button"
                  :text=listButtonText[slideNumber].text
                  width=200
                  mobileWidth = 214
                  mobileHight = 35
                  empty = 'true'
               />
         </router-link>
         </div>
      </div>
   </div>
   <div class="how-work-cection">
      <div class="how-work-cection__cars">
         <!--<img class="how-work-cection__first-car" src="../img/HomePage/Honda Accord.svg" alt="Honda Accord">
         <img class="how-work-cection__second-car" src="../img/HomePage/Lexus.svg" alt="Lexus">-->      
         <div class="how-work-cection__container _container">
            <Card class="how-work-cection__content" >
               <h2 class="how-work-cection__title">How does it work?</h2>
               <h3 class="how-work-cection__subtitle">From your Phone to your Home</h3>
               <div class="how-work-cection__text">
                  We make it easy for you to buy your dream car from your phone without ever having to step into a dealership! We deliver your vehicle to your home for you to test drive before you sign anything.
               </div>   
            </Card>
         </div>   
      </div>
   </div>
   <div class="easy-steps-section">
      <TriangleList 
         :list="stepsList"
      />
   </div>
</template>

<script>
import { ref } from 'vue'
import { Swiper, SwiperSlide, useSwiperSlide, useSwiper  } from 'swiper/vue';
import { Keyboard, Mousewheel,Navigation } from 'swiper';

import Button from "../components/Button.vue";
import Card from "../components/Card.vue";
import TriangleList from "../components/TriangleList.vue";

import 'swiper/scss';
import 'swiper/scss/navigation';

export default {   
   components: {
      Button, 
      Swiper, 
      SwiperSlide, 
      Card,
      TriangleList,
   },
   data() {
      return {
         listButtonText: [
            {id: 1, text: 'Request a SUV'},
            {id: 2, text: 'Request a Car'},
            {id: 3, text: 'Request a TRUCK'},
            {id: 4, text: 'Request a VAN'},
         ],
         stepsList:[
            {id: 1, title: 'First Contact', text: 'Tell us what your dream vehicle is.'},
            {id: 2, title: 'Vehicle Selection', text: 'One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.'},
            {id: 3, title: 'Secure Financing', text: 'You work with a dedicated Qualified Agent to secure financing on your terms.'},
            {id: 4, title: 'Vehicle Delivery', text: 'We deliver your car to your home or office for you to test drive.'},
            {id: 5, title: 'Getting Vehicle', text: 'If you love the vehicle, you sign the paperwork and keep the car.'},
         ],
         slideNumber:'0',
      }
   },
   methods: {
      //Change button text in slader section
      nextButtonText() {
         this.slideNumber++
      },      
      prevButtonText() {
         this.slideNumber--
      }


   },
   setup() {
      const onSwiper = (slider) => {
        console.log(slider);
      };
      let buttonText = ref(0);//??
      const onSlideChange = (slider) => { //??
         buttonText = slider.activeIndex;
      };
      const slide  = useSwiperSlide();//?
      const slider = useSwiper();//?
      return {
        onSwiper,//??
        onSlideChange,//??
        modules: [Navigation, Keyboard, Mousewheel],
        slide,//??
        slider,//??
        buttonText,//??
      };
    },
}

</script>

<style scoped lang="scss">
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
      //width: 100%;
      height: 100%;
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

   &__slider-wrapper {
   }

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

:deep(.swiper-button-prev ),
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
   color: #7481FF;
   @media(max-width: 425px) { 
      font-size: 14px;
   }
}

.how-work-cection {
   width: 100%;
   height: 430px;
   margin-top: -40px;
   position: relative;
   overflow-inline: hidden;
   @media (max-width: 1440px) {
      height: calc(430px + ((1440px - 100vw)/ 6.59));
   }
   @media (max-width: 768px) {
      height: calc(430px + ((1440px - 100vw)/ 6.59));
   }
   @media (max-width: 768px) {
      height: 519px;
   }

   &__cars {
      //position: absolute;
      width: 100vw;
      height: 100%;
      margin-left: calc((100% - 100vw)/2);
      background: no-repeat right calc(50% + 546px) bottom 0 / 500px url("../img/HomePage/Honda\ Accord.svg"),
      no-repeat left calc(50% + 496px) bottom 107.89px / 500px url("../img/HomePage/Lexus.svg");
      
      @media(max-width: 1440px) { 
         margin-left: 0;
         background: no-repeat right calc( 82.728% + 250px) bottom 0 / calc(500px - ((1440px - 100vw) / 7)) url("../img/HomePage/Honda\ Accord.svg"),
         no-repeat left calc(77.1% + 255px) bottom 107.89px / calc(500px - ((1440px - 100vw) / 7)) url("../img/HomePage/Lexus.svg");
      }

      @media(max-width: 768px) { 
         margin-left: 0;
         background: no-repeat left -105px bottom 0 / calc(500px - ((1440px - 100vw) / 7)) url("../img/HomePage/Honda\ Accord.svg"),
         no-repeat right -153px bottom 102px / calc(500px - ((1440px - 100vw) / 7)) url("../img/HomePage/Lexus.svg");
      }
      @media(max-width: 425px) { 
         background: no-repeat left -93px bottom 0 / 274px url("../img/HomePage/Honda\ Accord.svg"),
         no-repeat right -78px bottom 78px / 259px url("../img/HomePage/Lexus.svg");
      }
   }

   //&__first-car {
   //   position: absolute;
   //   width: 500px;
   //   height: 209.71px;
   //   bottom: 0;
   //   right: 71.528%;
   //}

   //&__second-car {
   //   position: absolute;
   //   width: 500px;
   //   height: 255.81px;
   //   bottom: 108px;
   //   left: 68.06%;
   //}

   &__container {
   }

   &__content {
      width: 605px;
      height: 365px;
      margin: 0 auto;
      padding: 60px;
      border-radius: 5px;
      text-align: center;
      @media (max-width: 768px) {
         max-width: 565px;
         width: auto;
         height: auto;
         padding: 40px;
      }
      
      @media (max-width: 425px) {
         padding: 20px;
      }
   }

   &__title {
      color: var(--color-content);
   }

   &__subtitle {
      color: var(--color-accent);
      @media (max-width: 425px) {
         padding: 0 36px 0;
      }
   }

   &__text {
      @include regular_16;
      margin: 20px 0 0;
      @media (max-width: 425px) {
         margin: 10px 0 0;
      }
   }
}
</style>