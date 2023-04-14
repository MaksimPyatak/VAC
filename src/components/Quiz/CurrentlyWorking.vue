<template>
   <div class="working">
      <QuizQuestion>
         <template #questionTitle>Are you currently working?</template>
         <template #questionSubtitle>
            Your employment status will help determine the best vehicle and financing options for you.
         </template>
         <template #questionHighlightedSubtitle></template>
         <template #questionMain>
            <div class="working__main">
               <template v-for="(elem, index) in questionsList">
                  <slot name="input" v-bind="{ elem, index }"></slot>
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
            0: {
               id: 'yes', textCheckBox: 'Yes', type: 'radio',
               name: 'currently-working', nextQuestion: 'how-long-income'
            },
            1: {
               id: 'no', textCheckBox: 'No', type: 'radio',
               name: 'currently-working', nextQuestion: 'how-long-receiving'
            },
         },
      }
   },
}
</script>

<style lang="scss" scoped>
.working {
   &__main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px; //

      @media (max-width: 425px) {
         grid-template-columns: repeat(1, 1fr);
      }
   }
}</style>