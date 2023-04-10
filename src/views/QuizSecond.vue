<template>
   <div class="quiz _container">
      <div class="quiz__box">
         <Form @submit="onSubmit" class="quiz__question-box" method="post" :validation-schema="currentSchema"
            v-slot="{ errors }">
            <div class="quiz__process-bar">
               <div class="quiz__complete-bar" :class="someQuestion"></div>
            </div>
            <!--<KeepAlive>-->
            <!--<component :is="step" @continue="whatNext">
               <template #input="{ id, textCheckBox, type, name }">
                  <Field :name="name" v-slot="{ field, meta }" :type="type">
                     <QuizCheck :name="name" :value="id" :text="textCheckBox" :type="type" as="div" />
                  </Field>
                  <ErrorMessage :name="name" />
               </template>
            </component>
            <Field name="what-budget" v-slot="{ field, meta }" type="radio">
               <label class="box">
                  
                  <input class="box__checkbox-input" type="radio" :id="20" name="what-budget" :value="250"
                     @click="printing(values)" />
                  <div>what</div>
               </label>
            </Field>-->
            <!--<ErrorMessage name="what-budget" />-->
            <Field name="password" type="password" placeholder="Type a strong one" />
            <ErrorMessage name="password" />
            <!--</KeepAlive>-->
            <!--<router-view @continue="whatNext" @blockTransition="blockTransition" @changeError="changeError"
               @blockMessageButton="notErrorMessage = false" v-slot="{ Component }">
               <keep-alive>
                  <component :is="Component" />
               </keep-alive>
            </router-view>-->
            <div class="quiz__not-selected" v-if="false">
               <!--v-if="errors.length"-->
               {{ errors }}
            </div>
            <div class="quiz__management" :class="grdColumns">

               <button type="submit">submit</button>

               <Button type="submit" class="quiz__continue-button" text="Сontinue" :width=222 :mobileHight=35 />
               <!--@click="pressContinue"-->
               <div v-if="someQuestion !== 'what-budget'" class="quiz__back-box" @click="comeBack, $router.back()">
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
         </Form>
         <CarCard class="quiz__car-card" v-if="$route.params.id != 0" :cardData="getItem" />
      </div>
   </div>
</template>

<script>
import { reactive, computed, ref } from 'vue'
import * as yup from 'yup';
import { useRequestButtonStore } from "../stores/RequestButtonStore.js";
import { useCarStore } from "../stores/CarsStore.js";
//import { shema } from "@/assets/js/validator.js"
import { Form, Field, ErrorMessage, useForm } from 'vee-validate';
import CarCard from "../components/CarCard.vue";
import Button from "../components/Button.vue";
import WhatBudget from "../components/Quiz/WhatBudget.vue";
import EmploymentStatus from "../components/Quiz/EmploymentStatus.vue";
import QuizCheck from "../components/Quiz/QuizCheck.vue";


export default {
   components: {
      CarCard,
      QuizCheck,
      Button,
      WhatBudget,
      EmploymentStatus,
      Form,
      Field,
      ErrorMessage
   },
   setup() {
      const requestButtonStore = useRequestButtonStore();
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
      const carStore = useCarStore();
      const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      const shema = [
         yup.object({
            password: yup.string().min(1).required(),
            //budgetRadioButton: yup
            //   .string()
            //   .required(),
         }),
         yup.object({
            password: yup.string().min(1).required(),
            confirmPass: yup
               .string()
               .required()
               .oneOf([yup.ref('password')], 'Passwords must match'),
         }),
         yup.object({
            favoriteDrink: yup
               .string()
               .required()
               .oneOf(['coffee', 'tea', 'soda'], 'Choose a drink'),
         }),
      ];
      const currentSchema = computed(() => {
         console.log(getValueCurrentStep.value);
         return shema[getValueCurrentStep.value]
      });
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
      //shema;
      return {
         requestButtonStore,
         carStore,
         currentSchema,
         steps,
         values,
         onSubmit,
         handleSubmit
         //shema
      }
   },
   data() {
      return {
         //steps: [
         //   { 'what-budget': 0 },
         //   { 'employment-status': 1 },
         //   { 'how-earn-income': 2 },
         //   { 'monthly-income': 3 },
         //   { 'your-employment': 4 },
         //   { 'currently-working': 5 },
         //   { 'how-long-income': 6 },
         //   { 'how-long-receiving': 7 },
         //   { 'where-live': 8 },
         //   { 'when-born': 9 },
         //   { 'last-step': 10 },
         //],
         /** Назва поточного опитування*/
         step: 'what-budget',
         /** Назва поточного опитування*/
         someQuestion: 'what-budget',
         showingCar: false,
         grdColumns: '',
         process: '',
         nextQuestion: '',
         //previous: '',//Чи потрібен
         getLink: '',
         notSelected: false,
         changedError: '',
         notErrorMessage: true,
         status: '',
         canContinue: true,
      }
   },
   methods: {
      printing(value) {
         console.log(value);
      },
      changeError(message, canContinue) {
         this.changedError = message;
         if (canContinue) {
            this.canContinue = canContinue;
         }
      },
      example() {
         console.log('example');
         console.log(this.previous);
         console.log(this.errorMessage);
         console.log(this.nextQuestion);
      },
      blockTransition(canContinue) {
         console.log(canContinue);
         if (canContinue) {
            this.canContinue = canContinue;
         }

      },
      whatNext(param, status) {
         this.status = status;
         this.nextQuestion = param;
         if (this.status) {
            this.getLink = `/quiz/${this.carStore.activeCarId}/${this.nextQuestion}/${this.status}`
         } else {
            this.getLink = `/quiz/${this.carStore.activeCarId}/${this.nextQuestion}`
         }
         if (this.notSelected == true) {
            this.notSelected = false;
         }
         console.log(this.getLink);
      },
      pressContinue() {
         console.log(this.canContinue);
         console.log(this.nextQuestion);
         console.log(this.someQuestion);
         //console.log(this.changedError);

         if ((this.someQuestion != this.nextQuestion) && this.canContinue) {
            this.someQuestion = this.nextQuestion;
            this.process = this.nextQuestion;
            this.notErrorMessage = true;
            this.$router.push(this.getLink);
         } else {
            console.log(this.notSelected);
            this.notSelected = true;
            console.log(this.notSelected);
         }
         //console.log(this.getLink);
         //console.log(this.previous);
         //console.log(this.someQuestion);
         //console.log(this.nextQuestion);
      },
      //comeBack() {
      //   this.someQuestion = this.previous;
      //},
      /**
       * При відсутності кнопки BACK робить контейнер де вона знаходиться в один стовпчик
      */
      getСolumns() {
         if (this.someQuestion == 'what-budget') {
            this.grdColumns = 'one-columns'
         } else {
            this.grdColumns = 'two-columns'
         }
      },
      noCar() {
         this.carStore.activeCarId = 0;
      },
      comeBack() {
         this.carStore.activeCarId = this.$route.params.id;
         this.someQuestion = this.$route.name;
      },
   },
   computed: {
      /**
       * Витягує схему валідації, що відповідає даному кроку
      */
      currentSchema() {
         console.log(shema[0]);
         return shema[this.getValueCurrentStep];
      },
      /**
       * Повертає номер кроку опитування
      */
      //getValueCurrentStep() {
      //   let valueCurrentStep;
      //   this.steps.forEach(elem => {
      //      for (let [key, value] of Object.entries(elem)) {
      //         if (key == this.step) {
      //            valueCurrentStep = value
      //         }
      //      }
      //   })
      //   return valueCurrentStep
      //},
      /**
       * Вибирає яке повідомлення про помилку видавати, чи з компоненнта чи стандартне
      */
      errorMessage() {
         console.log(this.changedError.length);
         if (this.changedError.length > 0) {
            return this.changedError
         } else {
            return 'Make a choice'
         }
      },
      /**
       * Знаходить елемент масиву, id якого, дорівнює параметру мршруту id
      */
      getItem() {
         //console.log(this.$route.params.id);
         return this.carStore.listCars.find(item => item.id == this.$route.params.id)
      },
   },
   watch: {
      someQuestion: {
         handler(newValue, oldValue) {
            this.getСolumns();
         },
         deep: true,
         immediate: true,
      },
      getItem: {
         handler(newValue, oldValue) {
            this.comeBack();
         },
         deep: true,
         immediate: true,

      }
   },
   mounted() {
      this.requestButtonStore.noButton(false);
      this.getСolumns();
      this.nextQuestion = this.someQuestion;
      console.log(this.currentSchema);
      //this.example2();
      //console.log(this.getValueCurrentStep);
      //this.comeBack();
      //this.example()
   },
   unmounted() {
      this.requestButtonStore.noButton(true);
      this.carStore.showCar(false);
      this.noCar();
   }
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