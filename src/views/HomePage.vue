<template>
   <FirstSectionWIthSlider />
   <div class="how-work-cection">
      <div class="how-work-cection__cars">
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
      <div class="easy-steps-section__container _container">
         <h2 class="easy-steps-section__title">
            Your perfect car in 5 easy steps
         </h2>
         <div class="easy-steps-section__content-box">
            <div class="easy-steps-section__triangle-list">
               <TriangleList 
                  :list="stepsList"
               />
            </div>
            <div class="easy-steps-section__img-box">
               <img class="easy-steps-section__first-img" src="../img/HomePage/Colors.svg" alt="">
               <img class="easy-steps-section__second-img" src="../img/HomePage/Colors2.svg" alt="">
            </div>
         </div>
      </div>
   </div>
   <div class="working-advantages-section">
      <div class="working-advantages-section__container _container">
         <h2 class="working-advantages-section__title">
            Advantages of working with us
         </h2>
         <div class="working-advantages-section__content-box">
            <div class="working-advantages-section__triangle-box">
               <img class="working-advantages-section__triangle" src="../img/HomePage/Vector-first.svg" alt="">
               <div class="working-advantages-section__triangle-content">
                  <div class="working-advantages-section__icon _icon-Delivery"></div>
                  <div class="working-advantages-section__header">
                     Vehicle Delivery
                  </div>
                  <div class="working-advantages-section__text">
                     We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.
                  </div>
               </div>
            </div>
            <div class="working-advantages-section__triangle-box">
               <img v-if="triangleRotation" class="working-advantages-section__triangle" src="../img/HomePage/Vector-first.svg" alt="">
               <img v-else class="working-advantages-section__triangle" src="../img/HomePage/Vector.svg" alt="">
               <div class="working-advantages-section__triangle-content">
                  <div class="working-advantages-section__icon _icon-Finance"></div>
                  <div class="working-advantages-section__header">
                     Auto Financing
                  </div>
                  <div class="working-advantages-section__text">
                     We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%
                  </div>
               </div>
            </div>
            <div class="working-advantages-section__triangle-box">
               <img class="working-advantages-section__triangle" src="../img/HomePage/Vector-first.svg" alt="">
               <div class="working-advantages-section__triangle-content ">
                  <div class="working-advantages-section__icon _icon-Car"></div>
                  <div class="working-advantages-section__header">
                     Huge Inventory
                  </div>
                  <div class="working-advantages-section__text">
                     We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="inventory-button-section">
      <div class="inventory-button-section__container _container">
         <div class="inventory-button-section__car-box">
            <img class="inventory-button-section__corola" src="@/img/HomePage/Corola.svg" alt="Corola">
            <img class="inventory-button-section__honda" src="../img/HomePage/Honda.svg" alt="Honda">
         </div>
         <div class="inventory-button-section__text-box">
            <h2 class="inventory-button-section__title">
               Сhoose your dream vehicle in our catalog
            </h2>
            <div class="inventory-button-section__content-box">
               <div class="inventory-button-section__text">
                  In our catalogue there are many models of vehicles. Choose your car to your liking.
               </div>
               <router-link to="/src/views/CatalogPage.vue" >
                  <Button  class="inventory-button-section__button"
                     text="Inventory"
                     width=190 
                     mobileWidth=100% 
                     mobileHight="35"
                  />
               </router-link>
            </div>
         </div>
      </div>
   </div>
   <div class="statistic-section">
      <div class="statistic-section__container _container">
         <div class="statistic-section__heading">
            <h2 class="statistic-section__title">Happy customers</h2>
            <div class="statistic-section__subtitle">
               Since 2017, we have helped thousands of Canadians get their dream vehicles from the comfort of their homes. 
            </div>
         </div>
         <div class="statistic-section__cards-box">
            <Card class="statistic-section__card" v-for="item in statisticList">
               <h4 class="statistic-section__data">{{ item.data }}</h4>
               <div class="statistic-section__caption">{{ item.caption }}</div>
            </Card>
         </div>
         <div class="statistic-section__question-box">
            <h4 class="statistic-section__question">
               What are you waiting?
               <br>
               Get started right now!
            </h4>
            <router-link to="/src/views/Quiz.vue" >
               <Button 
                  class="statistic-section__button"
                  width="200"
                  mobile-hight="35"
               />
            </router-link>
         </div>
      </div>
   </div>
   <Feedback />
   <div class="calculator-section">
      <div class="calculator-section__container _container">
         <Calculator class="calculator-section__calculator" />
      </div>
   </div>
   <SliderArticle />
   
</template>

<script>
import FirstSectionWIthSlider from "../components/FirstSectionWIthSlider.vue";
import Feedback from "../components/Feedback.vue";
import Calculator from "../components/Calculator.vue";
import SliderArticle from "../components/SliderArticle.vue";

import Button from "../components/Button.vue";
import Card from "../components/Card.vue";
import TriangleList from "../components/TriangleList.vue";


import 'swiper/scss';
import 'swiper/scss/navigation';

export default {   
   components: {
      FirstSectionWIthSlider,
      Feedback,
      Calculator,
      SliderArticle,
      
      Button, 
      Card,
      TriangleList,
   },
   data() {
      return {
         stepsList:[
            {id: 1, title: 'First Contact', text: 'Tell us what your dream vehicle is.'},
            {id: 2, title: 'Vehicle Selection', text: 'One of our Qualified Agents sends you custom pictures and videos of the car you are interested in.'},
            {id: 3, title: 'Secure Financing', text: 'You work with a dedicated Qualified Agent to secure financing on your terms.'},
            {id: 4, title: 'Vehicle Delivery', text: 'We deliver your car to your home or office for you to test drive.'},
            {id: 5, title: 'Getting Vehicle', text: 'If you love the vehicle, you sign the paperwork and keep the car.'},
         ],
         triangleRotation: false,
         statisticList: [
            {id: 1, data: '7,988+', caption: 'Sold Cars' },
            {id: 2, data: '16,974+', caption: 'Vehicles To Choose From' },
            {id: 3, data: '123', caption: 'Experts Across Canada' },
         ],
      }
   },
   
   
   mounted() {
      const mediaQuery = window.matchMedia('(min-width: 1440px)');
      this.triangleRotation = !mediaQuery.matches;
      mediaQuery.addEventListener('change', event => {
         if (event.matches) {
            this.triangleRotation = false;
         } else {
            this.triangleRotation = true;
         }
      });
   },
   
}

</script>


<style scoped lang="scss">
.how-work-cection {
   width: 100%;
   height: 430px;
   margin-top: -40px;
   position: relative;
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
      margin-left: calc(((100% - 100vw)/2));
      background: no-repeat right calc(50% + 546px) bottom 0 / 500px url("../img/HomePage/Honda\ Accord.svg"),
      no-repeat left calc(50% + 496px) bottom 107.89px / 500px url("../img/HomePage/Lexus.svg");
      
      @media(max-width: 1440px) { 
         width: 100%;
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

.easy-steps-section {
   width: 100%;
   margin: 225.29px 0 0;   
   @media (max-width: 425px) {
      overflow: hidden;
   }
   
   @media(max-width: 768px) {
      margin: 160px 0 0;
   }
   
   @media(max-width: 700px) {
      margin: 80px 0 0;
   }

   &__title {
      width: 450px;
      margin: 0 0 60px;
      color: var(--color-content);
      
      @media(max-width: 700px) {
         width: auto;
      }
   }

   &__content-box {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 9.17%;
      
      @media(max-width: 768px) {
         grid-template-columns: auto 1fr;
         column-gap: 66px;
      }
      @media(max-width: 700px) {
         grid-template-columns: 1fr;
         grid-template-rows: repeat(2, auto);
         column-gap: 0;
      }
   }

   &__triangle-list {
      width: 100%;
      min-width: 420px;
      @media(max-width: 768px) {
         min-width: auto;
      }
   }

   &__img-box {
      width: 100%;
      //min-width: 480px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      img {
         width: 290px;
         @media(max-width: 1440px) {
            width: calc(290px - ((1440px - 100vw) / 7.47));
         }
         @media(max-width: 700px) {
            min-width: 176px;
         }
         @media(max-width: 700px) {
            width: auto;
            max-width: 176px;
         }
      }
      @media(max-width: 700px) {
         max-width: 320px;
         margin: 30px 18px 0;
         justify-self: center;
      }
   }

   &__first-img {
      margin: 33px 0 0 -21px;
      grid-column: 1/3;
      grid-row: 1/2;
      justify-self: start;
      align-self: start;
      filter: drop-shadow(0px 20px 25px rgba(0, 0, 0, 0.1));
      
      @media(max-width: 1300px) {
         margin: 0 0 0 -21px;
      }
      @media(max-width: 768px) {
         transform: rotate(15deg);
         margin: 0;
      }
      @media(max-width: 700px) {
         //justify-self: end;
         transform: rotate(0);
         margin: 0;
      }
      
   }

   &__second-img {
      margin: 0 33px 0 0;
      grid-column: 1/3;
      grid-row: 1/2;
      justify-self: end;
      align-self: end;
      filter: drop-shadow(0px 20px 25px rgba(0, 0, 0, 0.1));
      transform: matrix(0.97, -0.26, 0.26, 0.97, 0, 0);
      @media(max-width: 1300px) {
         transform: matrix(0.97, 0.26, -0.26, 0.97, 0, 0);
      }
      @media(max-width: 768px) {
         margin: 265px 33px 0 0;
         align-self: flex-start;
      }
      @media(max-width: 700px) {
         margin: 0 12px 0 0;
         transform: matrix(0.97, -0.26, 0.26, 0.97, 0, 0);
      }
   }
}

.working-advantages-section {
   width: 100%;
   margin: 220px 0 0;

		&__container {
		}

		&__title {
         color: var(--color-content);
         margin: 0 0 60px;
         
         @media(max-width: 600px) {
            margin: 0 0 30px;
            text-align: center;
         }

		}

		&__content-box {
         width: auto;
         @media(min-width: 1440px) {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 400px);
         }
		}

		&__triangle-box {
         width: 550px;
         margin: 0 auto;
         position: relative;
         
         @media(max-width: 600px) {
            width: auto;
         }

         &:not(:last-child) {
            @media(max-width: 1439px) {
               margin-bottom: 47px;
            }
            @media(max-width: 600px) {
               margin-bottom: 20px;
            }
         }
         &:nth-child(1) {
            @media(min-width: 1440px) {
               grid-column: 1/3;
               grid-row: 1/2;
               justify-self: start;
               margin: 0 0 0 -35px;
            }

            .working-advantages-section__triangle-content {
               //padding: 138px 115px 0;
            }
         }
         &:nth-child(2) {
            @media(min-width: 1440px) {
               grid-column: 1/4;
               grid-row: 1/2;
               justify-self: center;
            }

            .working-advantages-section__triangle-content {
               @media(min-width: 1440px) {
                  padding: 33px 165px 0;
               }
            }
         }
         &:nth-child(3) {
            @media(min-width: 1440px) {
               grid-column: 2/4;
               grid-row: 1/2;
               justify-self: end;
               margin: 0 -35px 0 0;
            }

            .working-advantages-section__triangle-content {
               //padding: 138px 115px 0;
            }
         }
		}

      &__triangle{
         @media(max-width: 600px) {
            display: none;
         }
      }

		&__triangle-content {
         position: absolute;
         width: 100%;
         margin: 0 auto;
         top: 0;
         left: 0;
         text-align: center;
         
         padding: 138px 115px 0;
         
         
         @media(max-width: 600px) {
            position: static;
            padding: 0 0 0;

         }
		}

		&__icon {
         color: var(--color-content);
         font-size: 80px;
		}

		&__header {
         @include semibold_20;
         color: var(--color-content);
         margin: 5px 0 5px;
		}

		&__text {
         @include regular_16;
		}
}
.inventory-button-section {
   width: 100%;
   padding: 150px 0 0;
   @media(max-width: 1024px) {
      padding: 90px 0 0;
   }
      
   @media(max-width: 600px) {
      padding: 80px 0 0;
   }

   &__container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      @media(max-width: 1024px) and (min-width: 767px) {
         padding: 0 84px;
      }
      @media(max-width: 1024px) {
         grid-template-columns: repeat(1, 1fr);
         grid-template-rows: repeat(2, auto);
      }
   }

   &__car-box {
      width: 100%;
      padding: 31px 0 12px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      @media(max-width: 1024px) {
         grid-row: 2/3;
      }
   }

   &__honda {
      width: calc(491 / 600 * 100%);
      display: block;
      grid-column: 1/3;
      grid-row: 1/2;
      justify-self: start;
      align-self: end;
      z-index: 2;
   }
   &__corola {
      width: calc(428 / 600 * 100%);
      margin: 0 0 calc(81 / 600 * 100%) calc(171 / 600 * 100%);
      display: block;
      grid-column: 1/3;
      grid-row: 1/2;
      justify-self: start;
      align-self: end;
      opacity: 0.8;
      filter: blur(1px);
   }

   &__text-box {
      //width: 100%;
      padding: 0 0 22px calc((100%/6));
      @media(max-width: 1024px) {
         padding: 0 0 29px ;
         display: grid;
         grid-template-columns: repeat(2, 1fr);
      }
      
      @media(max-width: 600px) {
         display: block;
      }
   }

   &__title {
      margin: 0 0 20px;
      color: var(--color-content);
   }

   &__content-box {
      @media(max-width: 1024px) and (min-width: 601px) {
         padding: 0 0 0 calc((100%/5));
      }
   }

   &__text {
      @include regular_16;
      margin: 0 0 40px;
      color: #606276;
   }

   &__button {
      width: 100%;
   }
}

.statistic-section {
   width: 100%;
   margin-top: 160px;

   &__container {
      display: grid;
      grid-template-columns: 11fr 12fr;
      column-gap: calc(50 / 1200 * 100%);
      
      @media(max-width: 1024px) and (min-width: 767px) {
         padding: 0 84px;
      }
      @media (max-width: 1024px) {
         display: block;
      }
   }

   &__heading {
      margin-bottom: 40px;
   }

   &__title {
      margin-bottom: 20px;
      color: var(--color-content);
      
      @media (max-width: 1024px) {
         margin-bottom: 40px;
      }
   }

   &__subtitle {
      @include regular_16;
   }

   &__cards-box {
      grid-column: 2/3;
      grid-row: 1/3;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 40px;
      
      @media (max-width: 1024px) {
         margin-bottom: 40px;
      }
      @media (max-width: 425px) {
         grid-template-columns: repeat(1, 1fr);
         grid-template-rows: repeat(3, 1fr);
         gap: 10px;
      }
   }

   &__card {
      width: 100%;
      padding: 25px 10px 21px 35px;
      border-radius: 5px;
   }

   &__data {
      margin-bottom: 5px;
      padding: 16px 0 12px;
      color: var(--color-content);}

   &__caption {
      @include regular_16;
   }

   &__question-box {}

   &__question {
      margin-bottom: 40px;
      color: var(--color-content);
      
     
   }

   &__button {
      @media (max-width: 425px) {
         width: 100%;
      }
   }
}

.calculator-section {
   width: 100%;
   margin: var(--margin-top-section) 0 0;
}
</style>