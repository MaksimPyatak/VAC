<template>
   <div class="residence">
      <QuizQuestion>
         <template #questionTitle>Where do you live?</template>
         <template #questionSubtitle>
            Providing your location helps find the best deals near you.
         </template>
         <template #questionHighlightedSubtitle></template>
         <template #questionMain>
            <div class="residence__main">
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
            0: { id: 'street', placeholder: 'Street address', type: 'text', name: "street", },
            1: { id: 'city', placeholder: 'City', type: 'text', name: "city", },
            2: { id: 'province', placeholder: 'Province', type: 'text', name: "province", },
            3: { id: 'postalCode', placeholder: 'Postal code', type: 'text', name: "postalCode", },
         },
         nextQuestion: 'when-born',
      }
   },
   mounted() {
      this.$emit('nextStep', this.nextQuestion)
   },
}
</script>

<style lang="scss" scoped>
.residence {

   &__main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px; //

      @media (max-width: 425px) {
         grid-template-columns: repeat(1, 1fr);
      }


      //& > div:nth-child(3), & > div:nth-child(4) {
      //   grid-column: 1 / 3;
      //}
   }
}

:deep(.text-input:nth-child(1)),
:deep(.residence__main>div:nth-child(2)) {
   grid-column: 1 / 3;
}

@media (max-width: 425px) {

   :deep(.text-input:nth-child(1)),
   :deep(.residence__main>div:nth-child(2)) {
      grid-column: 1 / 2;
   }
}
</style>