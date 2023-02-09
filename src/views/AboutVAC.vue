<template>
   <div class="about-vac">
      <Title>
         About VAC 
      </Title>
      <div class="about-vac__our-mission _container">
         <Card class="about-vac__card">
            <h2 class="about-vac__title">
               Our mission
            </h2>
            <p class="about-vac__text">
               Our mission at VAC is to help you find the perfect car at the perfect price and with the perfect auto loan. We make buying a car simple. You can complete the entire process from home—we’ll even deliver the car to you!
            </p>
            <Button 
               class="about-vac__button" 
               :width="200"
               mobileWidth="100%"
               :mobileHight="35"
            />
         </Card>
         <div class="about-vac__img-box">
            <img class="about-vac__img" src="../img/aboutVAC/Kia 1.svg" alt="Kia">
         </div>
      </div>
      <div class="about-vac__dream-car _container">
         <div class="about-vac__text-box">
            <h2 class="about-vac__title">Get your dream car</h2>
            <p class="about-vac__text">
               We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.
            </p>
            <p class="about-vac__text">
               We also hated how choosing a car and figuring out the financing for the vehicle were treated as totally separate processes! Instead of dealing with a salesperson, then being handed off to a closer, and then shuffled over to a finance manager, we wanted to create a way for people to buy a car and only deal with a single person for the entire process.
            </p>
         </div>
         <div class="about-vac__list">
            <TriangleList 
               :list="list"
            />
         </div>        
      </div>
      <div class="about-vac__convenience _container">
         <div class="about-vac__img-box">
            <img class="about-vac__img" src="../img/aboutVAC/Nissan 1.svg" alt="">
         </div>
         <div class="about-vac__text-box">
            <h2 class="about-vac__title">
               VAC is convenience and transparency
            </h2>
            <p class="about-vac__text">
               We want to make simple for you to find the car you want. We also want to make sure you are 100% comfortable with the terms of the conditions of your auto loan.
            </p>
            <p class="about-vac__text">
               Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours.
            </p>
         </div>
      </div>
      <div class="about-vac__best-prices _container">
         <div class="about-vac__text-box">
            <h2 class="about-vac__title">
               Get a car at the best prices and conditions
            </h2>
            <p class="about-vac__text">
               Not only is buying a car with VAC easy, it’s also the best way to save money. We have partnerships with
               Canada’s largest lenders. That allows us to help you secure loans at the best interest rates available.      
            </p>
            <p class="about-vac__text">
               Because convenience and transparency are our founding principles, we take the time to answer all of your
               questions about the vehicle and the auto loan. We will send you pictures and videos of any part of the car you
               like before you request a test drive.      
            </p>
         </div>
         <div class="about-vac__button-box">
            <h4 class="about-vac__button-box-heading">
               We think that VAC is the best way to buy a car in Canada. Try it for yourself and see how much time and money
               you can save.
            </h4>
            <p class="about-vac__text">
               There are never any hidden fees or costs. We never ask you to sign anything until we have explained it clearly
               and you have had a chance to read it.
            </p>
            <Button 
               class="about-vac__button" 
               :width="200"
               mobileWidth="100%"
               :mobileHight="35"
            />
         </div>
      </div>
      <div class="about-vac__qualified-agents _container">
         <Card class="about-vac__card">
            <h3 class="about-vac__card-title">
               Contact us today and speak with one of our qualified agents
            </h3>
            <Button 
               class="about-vac__button" 
               :width="200"
               mobileWidth="100%"
               :mobileHight="35"
            />
         </Card>
         <div class="about-vac__text-box">
            <h2 class="about-vac__title">
               Our qualified agents
            </h2>
            <p class="about-vac__text">
               The true secret to success of VAC isn’t our streamlined purchasing and financing processes. The real reason VAC
               is the easiest and best way to buy a car in Canada is because of our outstanding Qualified Agents.
            </p>
            <p class="about-vac__text">
               Our team provides you with the best customer experience in the automotive industry. You work with a dedicated
               representative throughout the process. They are able to answer any questions you have about any of our vehicles
               or the financing. Are you interested in seeing pictures or videos of a car? Your qualified agent will send them
               to you.
            </p>
         </div>
      </div>
      <Feedback />
      <div class="about-vac__dynamic-team _container">
         <div class="about-vac__text-box">
            <h2 class="about-vac__title">
               We're dynamic team of creative people with innovative mind
            </h2>
            <div class="about-vac__heading-text">
               Our History
            </div>
            <p class="about-vac__text">
               We founded VAC because we hated how complicated it was to buy a car. You only have so much free time in your life. You don’t want to waste it going to different car dealerships every weekend for weeks and months trying to track down the right car.
            </p>
            <div class="about-vac__heading-text">
               Our Goal
            </div>
            <p class="about-vac__text">
               Buying a car has never been easier. You pick out the car you want on our website. You work with one of our Qualified Agents to secure financing. Then we bring the car to you—all before you sign anything. You test drive the vehicle, and if you like it, you sign the loan documents right there and the car is yours. 
            </p>
         </div>  
         <div class="about-vac__img-box">
            <img class="about-vac__img" src="../img/aboutVAC/Dynamic-team.jpg" alt="">
         </div>
      </div>
      <div class="about-vac__mean-features _container">
         <div class="about-vac__img-box">
            <img class="about-vac__img" src="../img/aboutVAC/main-features.jpg" alt="">
         </div>
         <div class="about-vac__text-box">
            <h2 class="about-vac__title">
               Main features
            </h2>
            <p class="about-vac__text">
               We are your one stop shop. We believe that vehicle shopping should be a fun and painless process and with years of experience, we make it just that.
            </p>
            <div class="about-vac__statistic-box statistic-box">
               <Card class="statistic-box__card" v-for="item in statisticList">
                  <h4 class="statistic-box__data">{{ item.data }}</h4>
                  <div class="statistic-box__caption">{{ item.caption }}</div>
               </Card>
            </div>
         </div>
      </div>
      <div class="about-vac__calculator-section calculator-section">
         <div class="calculator-section__container _container">
            <Calculator class="calculator-section__calculator" />
         </div>
      </div>
   </div>
</template>

<script>
import Title from '../components/Title.vue';
import TriangleList from '../components/TriangleList.vue';
import Feedback from '../components/Feedback.vue';
import Calculator from '../components/Calculator.vue';
import Card from '../components/Card.vue';
import Button from '../components/Button.vue';

   export default {
      components: {
         Title,
         TriangleList,
         Feedback,
         Calculator,
         Card,
         Button,
      },
      data() {
         return {
            list: [
            {id: 1, title: 'Quickly', text: 'You do not spend a lot of your time going to car dealerships'},
            {id: 2, title: 'Simply', text: 'You can order your dream car just by talking to our specialist by phone'},
            {id: 3, title: 'Conveniently', text: 'We will deliver the car directly to the doorstep of your home or office'},
            ],
            statisticList: [
               {id: 1, data: '7,988+', caption: 'Sold Cars' },
               {id: 2, data: '123', caption: 'Working Experts' },
               {id: 3, data: '1560+', caption: 'Happy Clients' },
            ]
         }
      }
   }
</script>

<style lang="scss" scoped>
.about-vac {
   & > div:not(:first-child):not(:nth-child(2)) {
      margin-top: var(--margin-top-section);
   }

   & > div:not(:first-child):not(:nth-child(2)) {
      margin-top: var(--margin-top-section);
   }

   & > div:nth-child(2) {
      margin-top: 40px;
   }

   &:last-child {
      margin-bottom: 40px;
   }

   &__our-mission {
      @include grid-section;
      div:first-child {
         width: 106%;
         @media (max-width: 1024px) {
            width: 100%;
         }
      }
      p {         
         margin: 0 0 40px;
      }
   }

   &__card {
      height: max-content;
      padding: 60px;

   }

   &__title {
      width: 100%;
      margin: 0 0 20px;
      color: var(--color-content);
   }

   &__text {
      @include regular_16;
      width: 100%;
      margin: 0 0 20px;
   }

   &__button {
   }

   &__img-box {
      width: 100%;
      align-self: flex-end;
   }

   &__img {
      width: 100%;
   }

   &__dream-car {
      @include grid-section;
   }

   &__text-box {
      p:last-child {
         margin: 0;
      }
   }

   &__convenience {
      @include grid-section;
      div:first-child {
         width: 106%;
         @media (max-width: 1024px) {
            grid-row: 2/3;
            width: 100%;
         }
      }
      div:last-child {
         @media (max-width: 1024px) {
            grid-row: 1/2;
         }
      }
   }

   &__best-prices {
      @include grid-section;

   }

   &__button-box {
      p {
         margin: 0 0 40px;
      }
   }

   &__button-box-heading {
      margin: 0 0 20px;
   }

   &__qualified-agents {
      @include grid-section;
      div:first-child {
         width: 106%;
         @media (max-width: 1024px) {
            width: 100%;
            grid-row: 2/3;
         }
      }
      div:last-child {
         @media (max-width: 1024px) {
            grid-row: 1/2;
         }
      }
   }

   &__card-title {
      margin: 0 0 40px;
      @media (max-width: 425px) {
         margin: 0 0 30px;
      }
   }

   &__dynamic-team {
      @include grid-section;
      div:last-child {
         width: 109.09%;
         @media (max-width: 1024px) {
            width: 100%;
         }
      }
   }

   &__heading-text {
      @include semibold_20;
   }

   &__mean-features {
      @include grid-section;
      div:first-child {
         width: 106%;
         @media (max-width: 1024px) {
            width: 100%;
            grid-row: 2/3;
         }
      }
      div:last-child {
         width: 109.09%;
         @media (max-width: 1024px) {
            width: 100%;
            grid-row: 1/2;
         }
      }

   }

   &__statistic-box {

   }

   &__calculator-section {}
}



.statistic-box {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: repeat(2, 1fr);
   gap: 40px;

   @media (max-width: 425px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 10px;
   }

   &__card {
      width: 100%;
      padding: 25px 10px 21px 35px;
      border-radius: 5px;
   }

   &__data {
      margin-bottom: 5px;
      padding: 16px 0 12px;
      color: var(--color-content);
   }

   &__caption {
      @include regular_16;
   }
}

.calculator-section {

   &__container {}

   &__calculator {}
}
</style>