<template>
   <div class="enter-monthly-income">
      <QuizQuestion>
         <template #questionTitle>Enter your monthly income</template>
         <template #questionSubtitle>Your income details help us make sure your vehicle payments are easy and
            affordable. </template>
         <template #questionHighlightedSubtitle>Before taxes and deductions.</template>
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
   props: [
      'status',
   ],
   emits: [
      'nextStep',
   ],
   data() {
      return {
         questionsList: {
            '0': { id: 0, placeholder: 'Monthly income', type: 'text', name: "monthly-income", },
         },
         whichNextStep: '',
      }
   },
   methods: {
      nextQuestion() {
         switch (this.status) {
            case ('Employed'):
               this.whichNextStep = 'your-employment'
               break;
            case ('Self'):
               this.whichNextStep = 'your-employment'
               break;
            case ('Student'):
               this.whichNextStep = 'currently-working'
               break;
            case ('Retired'):
               this.whichNextStep = 'currently-working'
               break;
            case ('Other'):
               this.whichNextStep = 'how-long-receiving'
               break;
            default:
               break;
         }
      }
   },
   mounted() {
      this.nextQuestion()
      this.$emit('nextStep', this.whichNextStep)
   },
}
</script>

<style lang="scss" scoped>
.enter-monthly-income {

   &__main {
      display: block;

      @media (max-width: 425px) {}
   }
}
</style>