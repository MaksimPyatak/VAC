<template>
   <div class="employment">
      <QuizQuestion>
         <template #questionTitle>
            What's your employment status?
         </template>
         <template #questionSubtitle>
            Your employment status will help determine the best vehicle and financing options for you.
         </template>
         <template #questionHighlightedSubtitle></template>
         <template #questionMain>
            <div class="employment__main">
               <template v-for="(elem, index) in questionsList">
                  <slot name="input" v-bind="{ elem }"></slot>
               </template>
            </div>
         </template>
      </QuizQuestion>
   </div>
</template>

<script>
import QuizQuestion from './QuizQuestion.vue';
import QuizCheck from './QuizCheck.vue';

export default {
   components: {
      QuizQuestion,
      QuizCheck,
   },
   emits: [
      'nextStep'
   ],
   data() {
      return {
         name: 'employment-status',
         questionsList: {
            0: { id: 'Employed', textCheckBox: 'Employed', checked: false, type: 'radio', name: "employmentRadioButton", nextQuestion: 'monthly-income' },
            1: { id: 'Self', textCheckBox: 'Self-Employed', checked: false, type: 'radio', name: "employmentRadioButton", nextQuestion: 'monthly-income' },
            2: { id: 'Student', textCheckBox: 'Student', checked: false, type: 'radio', name: "employmentRadioButton", nextQuestion: 'monthly-income' },
            3: { id: 'Retired', textCheckBox: 'Retired / Pension', checked: false, type: 'radio', name: "employmentRadioButton", nextQuestion: 'monthly-income' },
            4: { id: 'Other', textCheckBox: 'Other', checked: false, type: 'radio', name: "employmentRadioButton", nextQuestion: 'how-earn-income' },
         },
      }
   },
   methods: {
      selectOption(e) {
         if (this.questionsList[e].checked === true) {
            for (const elem in this.questionsList) {
               if (this.questionsList[elem].checked === true) {
                  this.questionsList[elem].checked = false;
               }
            }
            this.questionsList[e].checked = true;
         }
      },

      /**
       * Визначає яке питання наступне, якщо вибрана відповідь залишилася з історії
      */
      whatNext() {
         for (const elem in this.questionsList) {
            if (this.questionsList[elem].checked === true) {
               this.$emit('nextStep', this.questionsList[elem].nextQuestion)
            }
         }

      },

   },
   //computed: {
   //   //howAddress() {
   //   //   return this.$route
   //   //},
   //   lengthList() {
   //      let n = 0;
   //      for (const i in this.questionsList) {
   //         n++;
   //      }
   //      return n
   //   },
   //   firstChecked() {
   //      return this.questionsList[0].checked
   //   },
   //   secondChecked() {
   //      return this.questionsList[1].checked
   //   },
   //   thirdChecked() {
   //      return this.questionsList[2].checked
   //   },
   //   fourthChecked() {
   //      return this.questionsList[3].checked
   //   },
   //   fifthChecked() {
   //      return this.questionsList[4].checked
   //   },
   //},
   //watch: {
   //   /**
   //    * При переході вперед/назад по історії надає дані для маршруту в залаежності від того який елемент був вибраний
   //   */
   //   //$route: {
   //   //   handler(newValue, oldValue) {
   //   //      for (const item of this.questionsList) {
   //   //         if (item.checked === true && this.$route.name == this.name) {
   //   //            this.$emit('continue', item.nextQuestion, item.id)
   //   //         }
   //   //      }
   //   //   },
   //   //   immediate: true,
   //   //},
   //   firstChecked: {
   //      handler(newValue, oldValue) {
   //         this.selectOption(0);
   //      },
   //   },
   //   secondChecked: {
   //      handler(newValue, oldValue) {
   //         this.selectOption(1);
   //      },
   //   },
   //   thirdChecked: {
   //      handler(newValue, oldValue) {
   //         this.selectOption(2);
   //      },
   //   },
   //   fourthChecked: {
   //      handler(newValue, oldValue) {
   //         this.selectOption(3);
   //      },
   //   },
   //   fifthChecked: {
   //      handler(newValue, oldValue) {
   //         this.selectOption(4);
   //      },
   //   },
   //},
   mounted() {
      this.whatNext();

   }
}
</script>

<style lang="scss" scoped>
.employment {

   &__main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px; //

      @media (max-width: 425px) {
         grid-template-columns: repeat(1, 1fr);
      }
   }
}
</style>