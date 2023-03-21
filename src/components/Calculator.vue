<template>
   <div class="calculator">
      <div class="calculator__heading">
         <slot name="heading">
            <h2 class="calculator__title">
               Let’s figure out how much you can afford
            </h2>
            <div class="calculator__subtitle">
               Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan
               duration and the total loan amount affect your monthly payments.
            </div>
         </slot>
      </div>
      <div class="calculator__calculator-box">
         <Card class="calculator__range-box">
            <div class="calculator__button-box">
               <Button class="calculator__button-poor" text="Poor" :width="112" :mobileWidth="85.45" :hight="50"
                  :mobileHight="35" @click="changeTab(18, 'Poor')" :empty=poor />
               <Button class="calculator__button-average" text="Average" :width="138" :mobileWidth="105.29" :hight="50"
                  :mobileHight="35" @click="changeTab(30, 'Average')" :empty=average />
               <Button class="calculator__button-good" text="Good" :width="117" :mobileWidth="89.26" :hight="50"
                  :mobileHight="35" @click="changeTab(42, 'Good')" :empty=good />
            </div>
            <div class="calculator__amount">
               <div class="calculator__input-heading">
                  <label class="calculator__label" for="amount">
                     Loan Amount
                  </label>
                  <h4 class="calculator__value">
                     $ {{ new
                        Intl.NumberFormat('uk-UA').format(Number(String(amoynt).split(' ').join(''))) }}
                  </h4>
               </div>
               <input class="calculator__input" type="range" name="amount" v-model="amoynt" min="10000" max="550000"
                  step="10000" @input="handleAmountChange">
            </div>
            <div class="calculator__duration">
               <div class="calculator__input-heading">
                  <label class="calculator__label" for="duration">
                     Loan Duration
                  </label>
                  <h4 class="calculator__value">
                     {{ duration }}
                     <span class="calculator__bold-16">month</span>
                  </h4>
               </div>
               <input class="calculator__input" type="range" name="duration" v-model="duration" min="1" max="60"
                  @input="handleDurationChange">
            </div>
         </Card>
         <Card class="calculator__result-box">
            <div class="calculator__bi-weekly">
               <div class="calculator__result-title">
                  Bi-Weekly Payment
               </div>
               <h2 class="calculator__result">$ {{ new
                  Intl.NumberFormat('uk-UA').format(Number(String(biWeeklyPayment).split(' ').join(''))) }}</h2>
            </div>
            <div class="calculator__monthly">
               <div class="calculator__result-title">
                  Monthly Payment
               </div>
               <h4 class="calculator__result">$ {{ new
                  Intl.NumberFormat('uk-UA').format(Number(String(monthlyPayment).split(' ').join(''))) }}</h4>
            </div>
            <div class="calculator__weekly">
               <div class="calculator__result-title">
                  Weekly Payment
               </div>
               <h4 class="calculator__result">$ {{ new
                  Intl.NumberFormat('uk-UA').format(Number(String(WeeklyPayment).split(' ').join(''))) }}</h4>
            </div>
            <router-link to="/src/views/CatalogPage.vue" class="calculator__button-inventory">
               <Button class="calculator__request-button" :text="choiceButtonText" width="100%" :tabletWidth="250"
                  mobileWidth="100%" mobileHight="35" />
            </router-link>
         </Card>
      </div>
   </div>
</template>

<script>
import Button from "./Button.vue"
import Card from "./Card.vue"
export default {
   components: {
      Button,
      Card,
   },
   props: {
      amoyntValue: Number,
      buttonText: String,
   },
   data() {
      return {
         amoynt: 150000,
         duration: 18,
         poor: false,
         average: true,
         good: true,
         durationBackgroundSize: '30% 100%',
         amoyntBackgroundSize: '27% 100%',
         displayThumb: 'block',
         heightInput: '8px',
         backgroundImageInput: 'linear-gradient(#7481FF, #7481FF)',
         pointerInput: 'auto',
      }
   },
   computed: {
      choiceButtonText() {
         return this.buttonText ? this.buttonText : ''
      },
      biWeeklyPayment() {
         const biWeekly = this.amoynt / this.duration / 2;
         return Math.round(biWeekly)
      },
      monthlyPayment() {
         const biWeekly = this.amoynt / this.duration;
         return Math.round(biWeekly)
      },
      WeeklyPayment() {
         const biWeekly = this.amoynt / this.duration / 4;
         return Math.round(biWeekly)
      }
   },
   methods: {
      computedAmoynValue() {
         if (this.amoyntValue) {
            this.amoynt = String(this.amoyntValue).split(' ').join('');
            this.displayThumb = 'none';
            this.heightInput = '1px';
            this.backgroundImageInput = '#D7D7D7';
            this.pointerInput = 'auto';
         }
      },
      changeTab(duration, asAvailable) {
         if (asAvailable === 'Poor') {
            this.poor = false;
            this.average = true;
            this.good = true;
            this.duration = duration;
            this.durationBackgroundSize = '30% 100%'
         } else if (asAvailable === 'Average') {
            this.poor = true;
            this.average = false;
            this.good = true;
            this.duration = duration;
            this.durationBackgroundSize = '50% 100%'
         } else if (asAvailable === 'Good') {
            this.poor = true;
            this.average = true;
            this.good = false;
            this.duration = duration;
            this.durationBackgroundSize = '70% 100%'
         }
      },
      handleAmountChange(e) {
         let inputTarget = e.target;
         const min = inputTarget.min;
         const max = inputTarget.max;
         const val = inputTarget.value;
         this.amoyntBackgroundSize = (val - min) * 100 / (max - min) + '% 100%';
      },
      handleDurationChange(e) {
         let inputTarget = e.target;
         const min = inputTarget.min;
         const max = inputTarget.max;
         const val = inputTarget.value;
         this.durationBackgroundSize = (val - min) * 100 / (max - min) + '% 100%';
      }
   },
   mounted() {
      this.computedAmoynValue();
   }
}
</script>

<style lang="scss" scoped>
.calculator {
   width: 100%;

   &__heading {
      width: 100%;
      margin: 0 0 60px;
      display: grid;
      grid-template-columns: 5fr 6fr;
      column-gap: 5%;

      @media (max-width: 850px) {
         column-gap: 8.33%;

      }

      @media (max-width: 767px) {
         grid-template-columns: 1fr;

      }
   }

   &__title {
      @media (max-width: 850px) and (min-width: 426px) {
         min-width: 360px;

      }
   }

   &__subtitle {
      @include regular_16;
      margin: 10px 0 0;
   }

   &__calculator-box {
      width: 100%;
      display: grid;
      grid-template-columns: 2fr 0.925fr;
      column-gap: 30px;

      @media (max-width: 896px) {
         grid-template-columns: 1fr;
      }
   }

   &__range-box {
      width: 100%;
      padding: 60px 60px 0;

      &>div {
         margin: 0 0 60px; //!!!!!!!!

         @media (max-width: 850px) {
            margin: 0 0 40px; //!!!!!!!!
         }
      }

      @media (max-width: 850px) {
         padding: 40px 40px 0;
      }

      @media (max-width: 425px) {
         padding: 20px 20px 0;
      }
   }

   &__button-box {
      display: flex;
   }

   &__button-poor {
      margin: 0 -1px 0 0;

      @media (max-width: 585px) {
         width: 85px;
         height: 35px;
      }
   }

   &__button-average {
      @media (max-width: 585px) {
         width: 105px;
         height: 35px;
      }
   }

   &__button-good {
      margin: 0 0 0 -1px;

      @media (max-width: 585px) {
         width: 89px;
         height: 35px;
      }
   }

   &__amount {
      width: 100%;

      .calculator__input {
         background-size: v-bind(amoyntBackgroundSize);
         background-image: v-bind(backgroundImageInput);
         height: v-bind(heightInput);
         cursor: v-bind(pointerInput);
      }
   }

   &__input-heading {
      width: 100%;
      margin: 0 0 20px;
      display: flex;
      justify-content: space-between;
      color: var(--color-content);
   }

   &__label {
      @include semibold_20;
   }

   &__input {
      cursor: pointer;
      width: 100%;
      height: 8px;
      -webkit-appearance: none;
      appearance: none;
      background: #D7D7D7; //Не активна частина
      border-radius: 5px;
      background-image: linear-gradient(#7481FF, #7481FF); // Заповнена частина
      background-repeat: no-repeat;


      &::-webkit-slider-thumb {
         appearance: none;
         width: 18px;
         height: 18px;
         margin: -5px 0 0;
         background: var(--color-accent);
         border: 1px solid var(--color-white);
         border-radius: 2px;
      }

      &::-moz-range-thumb {
         display: block;
         appearance: none;
         -webkit-appearance: none;
         width: 18px;
         height: 18px;
         background: var(--color-accent);
         border: 1px solid var(--color-white);
         border-radius: 2px;

      }

      &::-ms-thumb {
         display: block;
         appearance: none;
         -webkit-appearance: none;
         width: 18px;
         height: 18px;
         background: var(--color-accent);
         border: 1px solid var(--color-white);
         border-radius: 2px;
      }

      &[name="amount"]::-webkit-slider-thumb {
         display: v-bind(displayThumb) !important;
      }

      &[name="amount"]::-moz-range-thumb {
         display: v-bind(displayThumb) !important;
      }

      &[name="amount"]::-ms-thumb {
         display: v-bind(displayThumb) !important;
      }

      &::-webkit-slider-runnable-track {
         width: 100%;
         -webkit-appearance: none;
         border-radius: 2px;
         height: 8px;
         background: transparent;
      }

      &::-moz-range-track {
         appearance: none;
         -webkit-appearance: none;
         height: 8px;
         background: transparent;
         border-radius: 2px;

      }

      &::-ms-track {
         appearance: none;
         -webkit-appearance: none;
         height: 8px;
         background: transparent;
         border-radius: 2px;

      }
   }


   &__duration {
      input {
         background-size: v-bind(durationBackgroundSize);

      }
   }

   &__bold-16 {
      @include bold_16;
      color: var(--color-text);
   }

   &__result-box {
      width: 100%;
      padding: 60px;

      @media (max-width: 850px) {
         padding: 40px;
         display: grid;
         grid-template-columns: 1fr auto auto;
         column-gap: 30px;
      }

      @media (max-width: 630px) {
         padding: 40px; //!!
         grid-template-columns: 1fr 1fr;
         column-gap: 14px;
      }

      @media (max-width: 425px) {
         padding: 44px 20px 20px;
      }
   }

   &__bi-weekly {
      width: 100%;
      margin: 0 0 30px;

      h2 {
         color: var(--color-accent);
         min-width: 167px;
      }

      @media (max-width: 850px) {
         margin: 0 0 40px;
      }

      @media (max-width: 630px) {
         grid-column: 1/3;
      }
   }

   &__monthly {
      width: 100%;
      margin: 0 0 20px;
      min-width: max-content;

      @media (max-width: 850px) {
         padding: 0 0 0 10px;
      }

   }

   &__weekly {
      width: 100%;
      margin: 0 0 40px;
      min-width: max-content;

   }

   &__result-title {
      height: 29px;
      padding: 7.5px 0 0;
   }

   &__result {
      color: var(--color-content);
   }

   &__button-inventory {
      @media (max-width: 670px) {
         grid-column: 1/3;
      }
   }

   &__request-button {
      padding: 0 10px;
      min-width: max-content;

      @media (max-width: 896px) {
         max-width: 250px;
         width: 100%;
         //min-width: max-content;
      }

      @media (max-width: 630px) {
         max-width: none;
      }
   }
}
</style>