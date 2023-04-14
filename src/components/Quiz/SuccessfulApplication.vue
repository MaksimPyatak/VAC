<template>
   <div class="success">
      <QuizQuestion>
         <template #questionTitle>Application successful!</template>
         <template #questionSubtitle>Your response was successfully submitted. Thank you!
            Our team will reach out to you shortly.</template>
         <template #questionHighlightedSubtitle> </template>
         <template #questionMain>
            <div class="success__main">
               <template v-for="(elem, index) in questionsList">
                  <div class="success__semibold20">
                     Confirmation number:
                  </div>
                  <slot name="input" v-bind="{ elem, index }"></slot>
               </template>
            </div>
         </template>
      </QuizQuestion>
   </div>
</template>

<script>
import { readonly } from 'vue';
import QuizQuestion from './QuizQuestion.vue';

export default {
   components: {
      QuizQuestion,
   },
   data() {
      return {
         questionsList: {
            0: { id: 'confirmation', type: 'text', name: "confirmation", confNumber: '', readonly: 'readonly' },
         },

      }
   },
   methods: {
      genNumber() {
         let chars = "0123456789abcdefghijklmnopqrstuvwxyz_-ABCDEFGHIJKLMNOPQRSTUVWXYZ";
         let numberLength = 14;
         for (let i = 0; i <= numberLength; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            this.questionsList[0].confNumber += chars.substring(randomNumber, randomNumber + 1);
         }
         console.log(this.questionsList[0].confNumber);
      }
   },
   mounted() {
      this.genNumber();
   }
}
</script>

<style lang="scss" scoped>
.success {

   &__main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px; //

      @media (max-width: 425px) {
         grid-template-columns: repeat(1, 1fr);
      }
   }

   &__semibold20 {
      @include semibold_20;
      display: flex;
      align-items: center;
   }
}

:deep(.text-input) {
   grid-column: 1 / 2;
}
</style>