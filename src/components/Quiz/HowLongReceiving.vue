<template>
   <div class="enter-monthly-income">
      <QuizQuestion>
         <template #questionTitle>How long receiving?</template>
         <template #questionSubtitle>
            Your income details help us make sure your vehicle payments are easy and affordable.
         </template>
         <template #questionHighlightedSubtitle></template>
         <template #questionMain>
            <div class="enter-monthly-income__main">
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
            '0': { id: 'time', placeholder: 'Time', type: 'text', name: "time", nextQuestion: 'how-long-receiving', },
         },
         nextQuestion: 'where-live',
      }
   },
   mounted() {
      this.$emit('nextStep', this.nextQuestion)
   },
}
</script>

<style lang="scss" scoped>
.enter-monthly-income {

   &__main {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 10px; //

      @media (max-width: 425px) {
         grid-template-columns: repeat(1, 1fr);
      }
   }
}
</style>