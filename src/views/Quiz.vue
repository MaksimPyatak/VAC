<template>
   <div class="quiz _container">
      <div class="quiz__box">
         <div class="quiz__question-box">
            <div class="quiz__process-bar">
               <div class="quiz__complete-bar" :class="someQuestion"></div>
            </div>
            <!--<component :is="someQuestion" @continue="whatNext">
               </component>-->
            <!--<KeepAlive>-->
            <router-view @continue="whatNext" @comeBack="example" v-slot="{ Component }">
               <keep-alive>
                  <component :is="Component" />
               </keep-alive>
            </router-view>
            <!--</KeepAlive>-->
            <div v-if="notSelected" class="quiz__not-selected">
               Make a choice
            </div>
            <div class="quiz__management" :class="grdColumns">
               <Button class="quiz__continue-button" text="Сontinue" :width=222 :mobileHight=35 @click="pressContinue" />
               <div v-if="someQuestion !== 'what-budget'" class="quiz__back-box" @click="comeBack, $router.back()">
                  <div class="quiz__back-img-box">
                     <!--<img src="../img/icons/Arrow-left.svg" alt="Arrow Bottom" class="quiz__back-img">-->
                     <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17L1 9L9 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </div>
                  <div class="quiz__back-content">
                     Back
                  </div>
               </div>
            </div>
         </div>
         <CarCard class="quiz__car-card" v-if="$route.params.id != 0" :cardData="getItem" />
      </div>
   </div>
</template>

<script>
import { useRequestButtonStore } from "../stores/RequestButtonStore.js";
import { useCarStore } from "../stores/CarsStore.js";
import CarCard from "../components/CarCard.vue";
import Button from "../components/Button.vue";
import WhatBudget from "../components/WhatBudget.vue";
import EmploymentStatus from "../components/EmploymentStatus.vue";


export default {
   components: {
      CarCard,
      Button,
      WhatBudget,
      EmploymentStatus
   },
   data() {
      return {
         /** Назва поточного опитування*/
         someQuestion: 'what-budget',
         showingCar: false,
         grdColumns: '',
         process: '',
         nextQuestion: '',
         previous: '',//Чи потрібен
         getLink: '',
         notSelected: false,
      }
   },
   methods: {
      example() {
         console.log('example');
         console.log(this.previous);
         console.log(this.someQuestion);
         console.log(this.nextQuestion);
      },
      whatNext(param) {
         this.nextQuestion = param;
         this.getLink = `/quiz/${this.carStore.activeCarId}/${this.nextQuestion}`
         if (this.notSelected == true) {
            this.notSelected = false;
         }
      },
      pressContinue() {
         if (this.someQuestion != this.nextQuestion) {
            //this.previous = this.someQuestion;
            this.someQuestion = this.nextQuestion;
            this.process = this.nextQuestion;
            this.$router.push(this.getLink);
         } else {
            this.notSelected = true;
         }
         console.log(this.process);
         console.log(this.previous);
         console.log(this.someQuestion);
         console.log(this.nextQuestion);
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
         //this.process = 
         console.log(this.$route.name);
      },
   },
   computed: {
      /**
       * Знаходить елемент масиву, id якого, дорівнює параметру мршруту id
      */
      getItem() {
         console.log(this.$route.params.id);
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
      this.comeBack();
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
      return {
         requestButtonStore,
         carStore,
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
   //Are you currently working? / Tell us about your employment
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