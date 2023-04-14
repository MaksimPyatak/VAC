<template>
   <div class="quiz _container">
      <div class="quiz__box">
         <form @submit="onSubmit" class="quiz__question-box">
            <div v-if="!isSuccess" class="quiz__process-bar">
               <div class="quiz__complete-bar" :class="step"></div>
            </div>
            <div v-else class="quiz__success-img-box">
               <img src="../img/icons/Success.svg" alt="" class="quiz__success-img">
            </div>
            <component :is="step" @nextStep="whatNext" :validationSchema="currentSchema" :status="status" :values="values">
               <template #input="{ elem }">

                  <QuizCheck v-if="whatShowInput" :dataInput="elem" :name="elem.name" value=""
                     @click="whatNext(elem.nextQuestion, elem.name, elem.id)" />

                  <QuizTextInput v-if="!whatShowInput" :dataInput="elem" :name="elem.name" />

               </template>
            </component>
            <div v-if="[namesValidations[getValueCurrentStep]]" class="quiz__error-message">{{
               errors[namesValidations[getValueCurrentStep]] }}</div>
            <div class="quiz__management" :class="grdColumns">
               <Button class="quiz__continue-button" :text=textButton :width=222 :mobileHight=35 @click="onSubmit" />
               <div v-if="isBack" class="quiz__back-box" @click="comeBack">
                  <div class="quiz__back-img-box">
                     <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17L1 9L9 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </div>
                  <div class="quiz__back-content">
                     Back
                  </div>
               </div>
            </div>
         </form>
         <CarCard class="quiz__car-card" v-if="$route.params.id != 0" :cardData="getItem" />
      </div>
   </div>
</template>


<script setup>
import { ref, computed, reactive, onMounted, onUnmounted } from 'vue';
import { Field, ErrorMessage, useForm } from 'vee-validate';
import { useRoute } from 'vue-router'
import * as yup from 'yup';
import { useRequestButtonStore } from "../stores/RequestButtonStore.js";
import { useCarStore } from "../stores/CarsStore.js";
//import CarCard from "../components/CarCard.vue";
import Button from "../components/Button.vue";
//import WhatBudget from "../components/Quiz/WhatBudget.vue";
import QuizCheck from "../components/Quiz/QuizCheck.vue"
import QuizTextInput from '../components/Quiz/QuizTextInput.vue'


const route = useRoute()
const requestButtonStore = useRequestButtonStore();
const carStore = useCarStore();
const step = ref('what-budget');
const nextStep = ref(null);
const prevSteps = ref(['what-budget']);
const whichStep = ref(0);
const status = ref(null);
//const isChecked = ref(null);
const steps = reactive([
   { 'what-budget': 0 },
   { 'employment-status': 1 },
   { 'how-earn-income': 2 },
   { 'monthly-income': 3 },
   { 'your-employment': 4 },
   { 'currently-working': 5 },
   { 'how-long-income': 6 },
   { 'how-long-receiving': 7 },
   { 'where-live': 8 },
   { 'when-born': 9 },
   { 'last-step': 10 },
   { 'successful-application': 11 }
]);
const textButton = computed(() => {
   return isSuccess.value ? 'Go to main page' : 'Сontinue'
})
const namesValidations = [
   'budgetRadioButton',
   'employmentRadioButton',
   'howEarnIncomeRadioButton',
   '',
   '',
   'currently-working'
]
const getItem = computed(() => {
   return carStore.listCars.find(item => item.id == route.params.id)
})
/**
* При відсутності кнопки BACK робить контейнер де вона знаходиться в один стовпчик
*/
const grdColumns = computed(() => {
   if (step.value == ('what-budget' || 'successful-application')) {
      return 'one-columns'
   } else {
      return 'two-columns'
   }
})

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const shema = [
   yup.object({
      budgetRadioButton: yup.string().required("Make your choice"),
   }),
   yup.object({
      employmentRadioButton: yup.string().required("Make your choice"),
   }),
   yup.object({
      howEarnIncomeRadioButton: yup.string().required("Make your choice"),
   }),
   yup.object({
      'monthly-income': yup.number().label("Value").required("Value is required").typeError("Value must be a number").positive(),
   }),
   //your-employment
   yup.object({
      'employer': yup.string().label("Value").required("Value is required"),
      'title': yup.string().label("Value").required("Value is required"),
   }),
   yup.object({
      'currently-working': yup.string().required("Make your choice"),
   }),
   //how-long-income
   yup.object({
      'years': yup.number().label("Value").required("Value is required").typeError("Value must be a number").positive(),
      'mounths': yup.number().label("Value").required("Value is required").typeError("Value must be a number").positive(),
   }),
   //how-long-receiving
   yup.object({
      'time': yup.number().label("Value").required("Value is required").typeError("Value must be a number").positive(),
   }),
   //where-live
   yup.object({
      'street': yup.string().required("Value is required"),
      'city': yup.string().required("Value is required"),
      'province': yup.string().required("Value is required"),
      'postalCode': yup.string().label("Value").required("Value is required").matches(/\d/, "Value must be a number").min(5, "Value must contain minimum 5 characters"),
   }),
   //when-born
   yup.object({
      'year': yup.string().label("Value").required("Value is required").matches(/\d/, "Value must be a number").min(4, "Value must contain minimum 4 characters"),
      'mounth': yup.number().label("Value").required("Value is required").typeError("Value must be a number").positive(),
      'day': yup.number().label("Value").required("Value is required").typeError("Value must be a number").positive(),
   }),
   //last-step
   yup.object({
      'firstName': yup.string().required("Value is required"),
      'lastName': yup.string().required("Value is required"),
      'email': yup.string().email().required("Value is required"),
      'phone': yup.string().required("Phone number is required").matches(phoneRegExp, 'Phone number is not valid').min(10, "Phone number must contain 10 characters").max(10, "Phone number must contain 10 characters"),

   }),
];
const whatShowInput = computed(() => {
   switch (namesValidations[getValueCurrentStep.value]) {
      case 'budgetRadioButton':
         return true;
      case 'employmentRadioButton':
         return true;
      case 'howEarnIncomeRadioButton':
         return true;
      case 'currently-working':
         return true;
      default:
         return false;
   }
})
const getValueCurrentStep = computed(() => {
   let valueCurrentStep;
   steps.forEach(elem => {
      for (let [key, value] of Object.entries(elem)) {
         if (key == step.value) {
            valueCurrentStep = value
         }
      }
   })
   return valueCurrentStep
});
const currentSchema = computed(() => {
   return shema[getValueCurrentStep.value]
});
function whatNext(componenet, whichComponent, id) {
   nextStep.value = componenet;
   if (whichComponent == 'employmentRadioButton') {
      status.value = id;
   }
}
const isLastStep = computed(() => {
   return step.value === 'last-step'
});
const isSuccess = computed(() => {
   return step.value === 'successful-application'
});

const isBack = computed(() => {
   console.log(step.value);
   if (step.value !== 'what-budget' && step.value !== 'successful-application') {
      console.log(step.value !== 'what-budget' && step.value !== 'successful-application');

      return true
   }
   return false
});
function comeBack() {
   nextStep.value = prevSteps.value[whichStep.value];
   step.value = prevSteps.value[whichStep.value - 1];
   whichStep.value--;
}
const { values, handleSubmit, errors } = useForm({
   // vee-validate will be aware of computed schema changes
   validationSchema: currentSchema,
   // turn this on so each step values won't get removed when you move back or to the next step
   keepValuesOnUnmount: true,
});
/**
 * Ми використовуємо обробник "submit", щоб перейти до наступних кроків або надіслати форму, якщо це останній крок
*/
const onSubmit = handleSubmit((values) => {
   console.log(!isLastStep.value);
   if (!isLastStep.value) {
      if (!(prevSteps.value[whichStep.value + 1] == nextStep.value)) {
         prevSteps.value[whichStep.value + 1] = nextStep.value;
      }
      whichStep.value++;
      if (whichStep.value < prevSteps.value.length) {
         step.value = prevSteps.value[whichStep.value]
         if (whichStep.value <= prevSteps.value.length) {
            nextStep.value = prevSteps.value[whichStep.value + 1]
         }
      } else {
         step.value = nextStep.value;
      }

      return;
   }
   console.log(JSON.stringify(values, null, 2));
   step.value = nextStep.value;
});
onMounted(() => {
   requestButtonStore.noButton(false);

})
onUnmounted(() => {
   requestButtonStore.noButton(true);
})
</script>

<script>
import CarCard from "../components/CarCard.vue";
import WhatBudget from "../components/Quiz/WhatBudget.vue";
import EmploymentStatus from '../components/Quiz/EmploymentStatus.vue';
import HowEarnIncome from '../components/Quiz/HowEarnIncome.vue';
import MonthlyIncome from '../components/Quiz/MonthlyIncome.vue';
import YourEmployment from "../components/Quiz/YourEmployment.vue";
import CurrentlyWorking from "../components/Quiz/CurrentlyWorking.vue";
import HowLongIncome from "../components/Quiz/HowLongIncome.vue";
import HowLongReceiving from "../components/Quiz/HowLongReceiving.vue";
import WhereLive from "../components/Quiz/WhereLive.vue";
import WhenBorn from "../components/Quiz/WhenBorn.vue";
import LastStep from "../components/Quiz/LastStep.vue";
import SuccessfulApplication from "../components/Quiz/SuccessfulApplication.vue";

export default {
   components: {
      CarCard,
      WhatBudget,
      EmploymentStatus,
      HowEarnIncome,
      MonthlyIncome,
      YourEmployment,
      CurrentlyWorking,
      HowLongIncome,
      HowLongReceiving,
      WhereLive,
      WhenBorn,
      LastStep,
      SuccessfulApplication
   },
}
</script>

<style lang="scss" scoped>
.quiz {
   margin-top: 40px;

   @media (max-width: 425px) {
      margin-top: 30px;
   }

   &__box {
      display: flex;
      gap: 60px;
      flex-direction: row-reverse;
      flex-wrap: wrap;
      justify-content: center;

      @media (max-width: 425px) {
         gap: 40px;
      }
   }

   &__question-box {
      max-width: 454px;
      width: 100%;
      justify-self: end;
   }

   &__process-bar {
      width: 100%;
      height: 8px;
      margin-bottom: 60px;
      background: #F1F1F1;
      border-radius: 2px;

      @media (max-width: 425px) {
         margin-bottom: 30px;
      }
   }

   &__complete-bar {
      width: 9%;
      height: 100%;
      background: #7380FF;
      border-radius: 2px;
   }


   &__success-img-box {
      width: 70px;
      height: 70px;
      margin: 69px 0 20px;
   }

   &__success-img {
      width: 100%;
   }

   &__error-message {
      @include regular_16;
      color: red;
   }

   &__management {
      margin-top: 40px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;

      @media (max-width: 425px) {
         margin-top: 30px;
         //grid-template-columns: v-bind(grdColumns);
      }
   }

   &__continue-button {
      width: 100%;

      @media (max-width: 425px) {
         width: 100%;
      }
   }

   &__back-box {
      display: flex;
      align-items: center;
      cursor: pointer;
      stroke: var(--color-text);

      &:hover {
         color: var(--color-accent);
         stroke: var(--color-accent)
      }
   }

   &__back-img-box {
      width: 8px;
      height: 16px;
      margin-left: 25%;
      margin-right: 15px;

      @media (max-width: 425px) {
         margin-right: 12px;
      }
   }

   &__back-content {
      @include bold_16;
   }

   &__car-card {
      max-width: 454px;
   }
}


.one-columns {
   grid-template-columns: 1fr;
}

.two-columns {
   grid-template-columns: repeat(2, 1fr);
}

.employment-status {
   width: 18%;
}

.how-earn-income {
   width: 27%;
}

.monthly-income {
   width: 36%;
}

.your-employment {
   //Tell us about your employment
   width: 45%;
}

.currently-working {
   //Are you currently working? 
   width: 45%;
}

.how-long-income {
   width: 54%;
}

.how-long-receiving {
   width: 63%;
}

.where-live {
   width: 72%;
}

.when-born {
   width: 81%;
}

.last-step {
   width: 90%;
}
</style>