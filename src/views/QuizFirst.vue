<template>
   <div class="quiz _container">
      <div class="quiz__box">
         <Form class="quiz__question-box" method="post" :validation-schema="shema" v-slot="{ errors }" @submit="onSubmit">
            <div class="quiz__process-bar">
               <div class="quiz__complete-bar" :class="someQuestion"></div>
            </div>

            <KeepAlive>
               <component :is="someQuestion" @continue="whatNext">
                  <template #input="{ id, textCheckBox, type, name }">
                     <Field :name="name" v-slot="{ field, meta }" :type="type">
                        <QuizCheck :name="name" :value="id" :text="textCheckBox" :type="type" />
                     </Field>
                     {{ errors.field }}
                     <ErrorMessage :name="name" />
                  </template>
               </component>
            </KeepAlive>
            <!--<router-view @continue="whatNext" @blockTransition="blockTransition" @changeError="changeError"
               @blockMessageButton="notErrorMessage = false" v-slot="{ Component }">
               <keep-alive>
                  <component :is="Component" />
               </keep-alive>
            </router-view>-->
            <div class="quiz__not-selected">
               <!--v-if="errors.length"-->
               <!--{{ errors }}-->
            </div>
            <div class="quiz__management" :class="grdColumns">
               <Button class="quiz__continue-button" text="Сontinue" :width=222 :mobileHight=35 @click="pressContinue" />
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
            <button type="submit">Click</button>
         </Form>
         <CarCard class="quiz__car-card" v-if="$route.params.id != 0" :cardData="getItem" />
      </div>
   </div>
</template>

<script>
import { useRequestButtonStore } from "../stores/RequestButtonStore.js";
import { useCarStore } from "../stores/CarsStore.js";
import { shema } from "@/assets/js/validator.js"
import { Form, Field, ErrorMessage } from 'vee-validate';
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
   data() {
      return {
         currentStep: null,
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
      changeError(message, canContinue) {
         this.changedError = message;
         if (canContinue) {
            this.canContinue = canContinue;
         }
      },
      onSubmit(values) {
         //console.log('example');
         console.log(values);
         //console.log(this.errorMessage);
         //console.log(this.nextQuestion);
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
         //console.log(this.canContinue);
         //console.log(this.nextQuestion);
         //console.log(this.someQuestion);
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
      /**
       * При відсутності кнопки BACK робить контейнер де вона знаходиться в один стовбчик
      */
      whatProcess() {
         switch (this.someQuestion) {
            case 'employment-status':
               this.process = 'employment-status';
               break;
            case '':
               this.process = '';
               break;

            default:
               break;
         }
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
      //this.comeBack();
      //this.example()
   },
   unmounted() {
      this.requestButtonStore.noButton(true);
      this.carStore.showCar(false);
      this.noCar();
   },
   setup() {
      const requestButtonStore = useRequestButtonStore();
      const carStore = useCarStore();
      shema;
      return {
         requestButtonStore,
         carStore,
         shema
      }
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