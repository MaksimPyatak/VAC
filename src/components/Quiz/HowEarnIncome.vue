<template>
   <div class="earn-income">
      <QuizQuestion>
         <template #questionTitle>How do you earn income?</template>
         <template #questionSubtitle>
            Your employment status will help determine the best vehicle and financing options for you.
         </template>
         <template #questionHighlightedSubtitle></template>
         <template #questionMain>
            <div class="earn-income__main">
               <template v-for="(elem, index) in questionsList">
                  <slot name="input" v-bind="{ elem, index, lengthList }"></slot>
               </template>
               <!--<QuizCheck v-for="elem in questionsList" :dataInput="elem"
                  @click="selectOption(elem), $emit('continue', nextQuestion, whichStatus)" />-->
               <!--nameCheckbox="what-budget" -->
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
   props: [
      'status'
   ],
   emits: [
      'continue'
   ],
   data() {
      return {
         name: 'how-earn-income',
         questionsList: {
            0: { id: 'Long-term disability', textCheckBox: 'Long-term disability', checked: false, type: 'radio', name: "howEarnIncomeRadioButton", nextQuestion: 'monthly-income' },
            1: { id: 'Spousal support', textCheckBox: 'Spousal support', checked: false, type: 'radio', name: "howEarnIncomeRadioButton", nextQuestion: 'monthly-income' },
            2: { id: 'Child support', textCheckBox: 'Child support', checked: false, type: 'radio', name: "howEarnIncomeRadioButton", nextQuestion: 'monthly-income' },
            3: { id: 'Social assistance', textCheckBox: 'Social assistance / Welfare', checked: false, type: 'radio', name: "howEarnIncomeRadioButton", nextQuestion: 'monthly-income' },
            4: { id: 'Maternity leave', textCheckBox: 'Maternity leave', checked: false, type: 'radio', name: "howEarnIncomeRadioButton", nextQuestion: 'monthly-income' },
            5: { id: 'Baby bonus', textCheckBox: 'Baby bonus / Child tax', checked: false, type: 'radio', name: "howEarnIncomeRadioButton", nextQuestion: 'monthly-income' },
            6: { id: 'Unemployed', textCheckBox: 'Unemployed / EI', checked: false, type: 'radio', name: "howEarnIncomeRadioButton", nextQuestion: 'monthly-income' },
            7: { id: 'Not listed', textCheckBox: 'Other / Not listed', checked: false, type: 'radio', name: "howEarnIncomeRadioButton", nextQuestion: 'monthly-income' },
         },
         nextQuestion: 'monthly-income'
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

   },
   computed: {
      //howAddress() {
      //   return this.$route
      //},
      //whichStatus() {
      //   return this.status
      //}
      lengthList() {
         let n = 0;
         for (const i in this.questionsList) {
            n++;
         }
         return n
      },
      firstChecked() {
         return this.questionsList[0].checked
      },
      secondChecked() {
         return this.questionsList[1].checked
      },
      thirdChecked() {
         return this.questionsList[2].checked
      },
      fourthChecked() {
         return this.questionsList[3].checked
      },
      fifthChecked() {
         return this.questionsList[4].checked
      },
      sixthChecked() {
         return this.questionsList[5].checked
      },
      seventhChecked() {
         return this.questionsList[6].checked
      },
   },
   watch: {
      //$route: {
      //   handler(newValue, oldValue) {
      //      for (const item of this.questionsList) {
      //         if (item.checked === true && this.$route.name == this.name) {
      //            this.$emit('continue', this.nextQuestion)
      //         }
      //      }
      //   },
      //   immediate: true,
      //}
      firstChecked: {
         handler(newValue, oldValue) {
            this.selectOption(0);
         },
      },
      secondChecked: {
         handler(newValue, oldValue) {
            this.selectOption(1);
         },
      },
      thirdChecked: {
         handler(newValue, oldValue) {
            this.selectOption(2);
         },
      },
      fourthChecked: {
         handler(newValue, oldValue) {
            this.selectOption(3);
         },
      },
      fifthChecked: {
         handler(newValue, oldValue) {
            this.selectOption(4);
         },
      },
      sixthChecked: {
         handler(newValue, oldValue) {
            this.selectOption(5);
         },
      },
      seventhChecked: {
         handler(newValue, oldValue) {
            this.selectOption(6);
         },
      },
   }
}
</script>

<style lang="scss" scoped>
.earn-income {

   &__main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px; //

      @media (max-width: 500px) {
         grid-template-columns: repeat(1, 1fr);
      }
   }
}
</style>