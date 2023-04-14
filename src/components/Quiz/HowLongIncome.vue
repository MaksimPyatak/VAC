<template>
   <div class="long-income">
      <QuizQuestion>
         <template #questionTitle>How long have you been earning this income?</template>
         <template #questionSubtitle>Your income details help us make sure your vehicle payments are easy and
            affordable. </template>
         <template #questionHighlightedSubtitle></template>
         <template #questionMain>
            <div class="long-income__main">
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
            '0': { id: 'years', placeholder: 'Years', type: 'text', name: "years", nextQuestion: 'how-long-receiving', },
            '1': { id: 'mounths', placeholder: 'Mounths', type: 'text', name: "mounths", nextQuestion: 'how-long-receiving', },
         },
         nextQuestion: 'how-long-receiving',
      }
   },
   mounted() {
      this.$emit('nextStep', this.nextQuestion)
   },
}
</script>

<style lang="scss" scoped>
.long-income {

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