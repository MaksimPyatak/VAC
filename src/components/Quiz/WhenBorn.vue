<template>
   <div class="born">
      <QuizQuestion>
         <template #questionTitle>When were you born?</template>
         <template #questionSubtitle></template>
         <template #questionHighlightedSubtitle></template>
         <template #questionMain>
            <div class="born__main">
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
            '0': { id: 'year', placeholder: 'Year', type: 'text', name: "year", },
            '1': { id: 'mounth', placeholder: 'Mounth', type: 'text', name: "mounth", },
            2: { id: 'day', placeholder: 'Day', type: 'text', name: "day", },
         },
         name: 'when-born',
         nextQuestion: 'last-step',
      }
   },
   mounted() {
      this.$emit('nextStep', this.nextQuestion)
   },
}
</script>

<style lang="scss" scoped>
.born {

   &__main {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px; //

      @media (max-width: 425px) {
         grid-template-columns: repeat(2, 1fr);
      }
   }

   :deep(.text-input:nth-child(1)) {
      grid-column: 1 / 3;
   }

   //@media (max-width: 425px) {

   //   :deep(.text-input:nth-child(1)) {
   //      grid-column: 1 / 2;
   //   }
   //}
}
</style>