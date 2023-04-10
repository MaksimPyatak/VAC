<template>
   <div class="quiz _container">
      <div class="quiz__box">
         <form @submit="onSubmit" class="quiz__question-box">
            <div class="quiz__process-bar">
               <div class="quiz__complete-bar" :class="step"></div>
            </div>
            {{ step }}<br>
            {{ status }}
            <!--<KeepAlive>-->
            <component :is="step" @nextStep="whatNext" :validationSchema="currentSchema" :status="status" :values="values">
               <!--<template #input="{ elem, index, lengthList }">-->

               <!--<label v-if="elem.type" class="quiz__radio-button radio-button" :class="{ 'input-active': elem.checked }"
                     :for="elem.id" @click="whatNext(elem.nextQuestion, elem.name, elem.id), elem.checked = true">
                     <Field class="radio-button__checkbox-input" :type="elem.type" :id="elem.id" :name="elem.name"
                        :value="elem.id" :checked="elem.checked" />
                     <div>{{ elem.textCheckBox }}</div>
                  </label>-->
               <!--(+index + 1 == lengthList) || (elem.type != 'radio')-->
               <!--</template>-->
            </component>
            <!--</KeepAlive>-->
            <!--<label class="box" for="budgetRadioButton">
               <Field class="box__checkbox-input" type="radio" id="first" name="budgetRadioButton" value="first" />
               <div>first</div>
               <ErrorMessage name="budgetRadioButton" as="div" />
               <Field class="box__checkbox-input" type="radio" id="second" name="budgetRadioButton" value="second" />
               <div>second</div>
            </label>-->
            <div class="quiz__management" :class="grdColumns">
               <Button class="quiz__continue-button" text="Сontinue" :width=222 :mobileHight=35 @click="onSubmit" />
               <div v-if="step !== 'what-budget'" class="quiz__back-box" @click="comeBack">
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
      {{ values.budgetRadioButton }}
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
]);
const getItem = computed(() => {
   return carStore.listCars.find(item => item.id == route.params.id)
})
/**
* При відсутності кнопки BACK робить контейнер де вона знаходиться в один стовпчик
*/
const grdColumns = computed(() => {
   if (step.value == 'what-budget') {
      return 'one-columns'
   } else {
      return 'two-columns'
   }
})
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
      'monthly-income': yup.number().label("Value").typeError("Value must be a number").positive().required("Value is required"),
   }),
];
const getValueCurrentStep = computed(() => {
   let valueCurrentStep;
   steps.forEach(elem => {
      for (let [key, value] of Object.entries(elem)) {
         if (key == step.value) {
            valueCurrentStep = value
         }
      }
      console.log(valueCurrentStep);
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
function comeBack() {
   nextStep.value = prevSteps.value[whichStep.value];
   step.value = prevSteps.value[whichStep.value - 1];
   whichStep.value--;
}
const { values, handleSubmit } = useForm({
   // vee-validate will be aware of computed schema changes
   validationSchema: currentSchema,
   // turn this on so each step values won't get removed when you move back or to the next step
   keepValuesOnUnmount: true,
});
/**
 * Ми використовуємо обробник "submit", щоб перейти до наступних кроків і надіслати форму, якщо це останній крок
*/
const onSubmit = handleSubmit((values) => {
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
import MonthlyIncome from '../components/Quiz/MonthlyIncome.vue'

export default {
   components: {
      CarCard,
      WhatBudget,
      EmploymentStatus,
      HowEarnIncome,
      MonthlyIncome
   },
   computed: {

      /**
       * Знаходить елемент масиву, id якого, дорівнює параметру мршруту id
      */
      //getItem() {
      //   console.log(this.$route.params.id);
      //   return carStore.listCars.find(item => item.id == this.$route.params.id)
      //},
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

   &__error-message {
      color: red;
   }

   &__management {
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