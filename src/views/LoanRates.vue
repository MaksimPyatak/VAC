<template>
   <div class="loan-rates">
      <Title>
         Loan rates
      </Title>
      <div class="loan-rates__credit-policy _container">
         <Card class="loan-rates__card">
            <h2 class="loan-rates__title">
               Our credit policy
            </h2>
            <p class="loan-rates__text">
               You want to secure a loan that works for your budget. Here at VAC we work with Canada’s largest lenders to help you find the best interest rates and terms for your auto loan.
            </p>
            <Button  
               @click="$router.push('quiz')"
               class="loan-rates__button" 
               :width="200"
               mobileWidth="100%"
               :mobileHight="35"
            />
         </Card>
         <div class="loan-rates__img-box">
            <img class="loan-rates__img" src="../img/LoanRates/Chevrolet.svg" alt="">
         </div>
      </div>
      <div class="loan-rates__interest-rates  _container">
         <h2 class="loan-rates__title">
            Interest rates and loan terms
         </h2>
         <div class="loan-rates__grid-box">
            <Card class="loan-rates__card">
               <div class="loan-rates__heading-box">
                  <div class="loan-rates__icon-box">
                     <img class="loan-rates__icon" src="../img/LoanRates/percent.svg" alt="percent icon">
                  </div>
                  <h4 class="loan-rates__card-heading">
                     What are my interest rate options?
                  </h4>
               </div>
               <div class="loan-rates__text">
                  We work to secure customized auto loans from Canada’s largest lenders. Your interest rate is critical for determining the total cost of your auto financing. Interest rates are based on many factors including the loan amount, your credit score, and your budget. We help you find the lowest interest rates available for your auto loan.
               </div>
            </Card>
            <Card class="loan-rates__card">
               <div class="loan-rates__heading-box">
                  <div class="loan-rates__icon-box">
                     <img class="loan-rates__icon" src="../img/LoanRates/iconTime.svg" alt="time icon">
                  </div>
                  <h4 class="loan-rates__card-heading">
                     How long will my loan term be?
                  </h4>
               </div>
               <div class="loan-rates__text">
                  Our goal is to find the right car and the right loan for you. Because we have relationships with so many different lenders, we can help you find the right term length for your budget. The longer the loan is, often the lower the monthly payments will be—but the more expensive the loan will be overall. Most of the loans we secure for our clients are between 36 and 72 months.
               </div>
            </Card>
         </div>
      </div>
      <div class="loan-rates__benefits  _container">
         <div class="loan-rates__text-box">
            <h2 class="loan-rates__title">
               Benefits of getting an auto loan with VAC
            </h2>
            <p class="loan-rates__text">
               For many people getting a reasonable auto loan is the best way for them to get a new car. However, the benefits of getting the right loan go beyond just being able to drive a nice vehicle.
            </p>
            <div class="loan-rates__text-semibold">
               When you work with VAC, there are never any hidden costs or fees! We lay out all the terms and conditions so that you know exactly what details of the loan are before you sign anything.
            </div>
            <Button 
               @click="$router.push('quiz')"
               class="loan-rates__button" 
               :width="200"
               mobileWidth="100%"
               :mobileHight="35"
            />
         </div>
         <div class="loan-rates__img-box">
            <img class="loan-rates__img" src="../img/LoanRates/Ford-Escape.svg" alt="Ford Escape">
         </div>
      </div>
      <div class="loan-rates__calculator-section calculator-section">
         <div class="calculator-section__container _container">
            <Calculator class="calculator-section__calculator" />
         </div>
      </div>
   </div>
</template>

<script>
import Title from '../components/Title.vue';
import Calculator from '../components/Calculator.vue';
import Button from '../components/Button.vue';
import Card from '../components/Card.vue';
   export default {
      components: {
         Title,
         Calculator,
         Button,
         Card,
      }
      
   }
</script>

<style lang="scss" scoped>
.loan-rates {
   & > div:not(:first-child):not(:nth-child(2)) {
      margin-top: var(--margin-top-section);
   }

   & > div:nth-child(2) {
      margin-top: 40px;
   }

   &:last-child {
      margin-bottom: 40px;
   }


   &__credit-policy {
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
      @media (max-width: 768px) {
         padding: 40px;
      }
      @media (max-width: 425px) {
         padding: 20px;
      }
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

   &__button {}

   &__img-box {
      width: 100%;
      align-self: flex-end;
   }

   &__img {
      width: 100%;
   }

   &__interest-rates {
      .loan-rates__title {
         margin: 0 0 60px;
         @media (min-width: 767px) and (max-width: 1024px) {
            padding: 0 84px;
         }
      }
      .loan-rates__card {
         height: 100%;
      }
   }

   &__grid-box {
      @include grid-section;
      gap: 40px;
      @media (max-width: 1024px) {
         gap: 20px;
      }

   }

   &__heading-box {
      width: 100%;
      margin: 0 0 20px;
      display: flex;
      justify-content: start;
      align-items: center;
   }

   &__icon-box {
      margin: 0 20px 0 0;

   }

   &__icon {
   }

   &__card-heading {
      max-width: 320px;
   }

   &__benefits {
      @include grid-section;
      & > div:last-child {
         width: 109.09%;
         @media (max-width: 1024px) {
            width: 100%;
         }
      }
   }

   &__text-box {
      width: 110%;
      @media (max-width: 1024px) {
         width: 100%;
      }
   }

   &__text-semibold {
      @include semibold_20;
      width: 100%;
      margin: 0 0 40px;
   }

   &__calculator-section {}
}


.calculator-section {

   &__container {}

   &__calculator {}
}
</style>