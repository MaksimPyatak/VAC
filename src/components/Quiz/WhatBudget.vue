<template>
   <div class="what-budget">
      <QuizQuestion>
         <template #questionTitle>What's your budget?</template>
         <template #questionSubtitle>Find vehicle options that fit your budget.</template>
         <template #questionHighlightedSubtitle></template>
         <template #questionMain>
            <div class="what-budget__main">
               <template v-for="(elem) in questionsList">
                  <slot name="input" v-bind="{ elem }"></slot>
               </template>
            </div>
         </template>
      </QuizQuestion>
   </div>
</template>

<script>
import QuizQuestion from './QuizQuestion.vue';
export default {
   components: {
      QuizQuestion,
   },
   data() {
      return {
         questionsList: {
            '0': { id: 250, textCheckBox: 'Under $250/Month', type: 'radio', name: "budgetRadioButton", nextQuestion: 'employment-status' },
            '1': { id: 374, textCheckBox: '$250-374/Month', checked: false, type: 'radio', name: "budgetRadioButton", nextQuestion: 'employment-status' },
            '2': { id: 500, textCheckBox: '$374-500/Month', checked: false, type: 'radio', name: "budgetRadioButton", nextQuestion: 'employment-status' },
            3: { id: 'Over', textCheckBox: 'Over $500/Month', checked: false, type: 'radio', name: "budgetRadioButton", nextQuestion: 'employment-status' },
         }
      }
   },
}
</script>

<style lang="scss" scoped>
.what-budget {

   &__main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;

      @media (max-width: 425px) {
         grid-template-columns: repeat(1, 1fr);
      }
   }
}
</style>