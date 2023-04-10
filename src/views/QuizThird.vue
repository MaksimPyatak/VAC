<template>
   <div class="quiz _container">
      <div class="quiz__box">
         <form @submit="onSubmit" class="quiz__question-box">
            <div class="quiz__process-bar">
               <div class="quiz__complete-bar" :class="someQuestion"></div>
            </div>
            <label class="box" for="budgetRadioButton">
               <Field class="box__checkbox-input" type="radio" id="first" name="budgetRadioButton" value="first" />
               <div>first</div>
               <ErrorMessage name="budgetRadioButton" as="div" />
               <Field class="box__checkbox-input" type="radio" id="second" name="budgetRadioButton" value="second" />
               <div>second</div>
            </label>
            <button type="submit">submit</button>
         </form>
      </div>
   </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import { Field, ErrorMessage, useForm } from 'vee-validate';
import * as yup from 'yup';
import { on } from 'dom7';

const step = ref('what-budget');
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
const shema = [
   yup.object({
      budgetRadioButton: yup.string().required("A radio option is required"),
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
   })
   return valueCurrentStep
});
const currentSchema = computed(() => {
   console.log(getValueCurrentStep.value);
   return shema[getValueCurrentStep.value]
});
const { values, handleSubmit } = useForm({
   // vee-validate will be aware of computed schema changes
   validationSchema: currentSchema,
   // turn this on so each step values won't get removed when you move back or to the next step
   keepValuesOnUnmount: true,
});

// Ми використовуємо обробник "submit", щоб перейти до наступних кроків і надіслати форму, якщо це останній крок
const onSubmit = handleSubmit((values) => {
   console.log(JSON.stringify(values, null, 2));
});
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
      width: 9%; //v-bind()
      height: 100%;
      background: #7380FF;
      border-radius: 2px;
   }

   &__not-selected {
      margin-bottom: 10px;
      color: red;
   }

   &__management {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;

      @media (max-width: 425px) {
         margin-top: 30px;
         grid-template-columns: v-bind(grdColumns);
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

   &__back-img {
      width: 100%;
   }

   &__back-content {
      @include bold_16;
   }

   &__car-card {
      max-width: 454px;
   }
}

.question__main {}

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

:deep(.input-active) {
   border: 1px solid #D7D7D7;
}

:deep(.input-error) {
   border-color: var(--color-error);
}

:deep(.error-message) {
   margin-bottom: 10px;
   color: var(--color-error);
}
</style>