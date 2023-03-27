<template>
   <div class="what-budget">
      <QuizQuestion>
         <template #questionTitle>What's your budget?</template>
         <template #questionSubtitle>Find vehicle options that fit your budget.</template>
         <template #questionHighlightedSubtitle></template>
         <template #questionMain>
            <div class="what-budget__main">
               <QuizCheck v-for="elem in questionsList" :dataInput="elem"
                  @click="selectOption(elem), $emit('continue', nextQuestion)" />
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
   emits: [
      'comeBack',
      'continue'
   ],
   data() {
      return {
         questionsList: [
            { id: 250, textCheckBox: 'Under $250/Month', checked: false },
            { id: 374, textCheckBox: '$250-374/Month', checked: false },
            { id: 500, textCheckBox: '$374-500/Month', checked: false },
            { id: 'Over', textCheckBox: 'Over $500/Month', checked: false },
         ],
         nextQuestion: 'employment-status'
      }
   },
   methods: {
      selectOption(e) {
         if (!e.checked === true) {
            for (const elem of this.questionsList) {
               if (elem.checked === true) {
                  elem.checked = false;
               }
            }
            e.checked = true;
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