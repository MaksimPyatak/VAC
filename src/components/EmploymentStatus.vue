<template>
   <div class="employment">
      <QuizQuestion>
         <template #questionTitle>What's your employment status?</template>
         <template #questionSubtitle>Your employment status will help determine the best vehicle and financing options for
            you.</template>
         <template #questionHighlightedSubtitle></template>
         <template #questionMain>
            <div class="employment__main">
               <QuizCheck v-for="elem in questionsList" :dataInput="elem"
                  @click="selectOption(elem), $emit('continue', elem.nextQuestion)" />
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
   data() {
      return {
         questionsList: [
            { id: 'Employed', textCheckBox: 'Employed', checked: false, nextQuestion: 'monthly-income' },
            { id: 'Self', textCheckBox: 'Self-Employed', checked: false, nextQuestion: 'monthly-income' },
            { id: 'Student', textCheckBox: 'Student', checked: false, nextQuestion: 'monthly-income' },
            { id: 'Retired', textCheckBox: 'Retired / Pension', checked: false, nextQuestion: 'monthly-income' },
            { id: 'Other', textCheckBox: 'Other', checked: false, nextQuestion: 'how-earn-income' },
         ],
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