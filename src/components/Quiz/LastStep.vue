<template>
   <div class="last">
      <QuizQuestion>
         <template #questionTitle>
            Congratulations! Last step.
         </template>
         <template #questionSubtitle>
            Get access to your vehicle and financing options by creating your account. There is no obligation to continue
            with financing if you change your mind.
         </template>
         <template #questionHighlightedSubtitle></template>
         <template #questionMain>
            <div class="last__main">
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
            0: { id: 'firstName', placeholder: 'First name', type: 'text', name: "firstName", },
            1: { id: 'lastName', placeholder: 'Last name', type: 'text', name: "lastName", },
            2: { id: 'email', placeholder: 'Email', type: 'email', name: "email", },
            3: { id: 'phone', placeholder: 'Phone number', type: 'tel', name: "phone", },
         },
         nextQuestion: 'successful-application'
      }
   },
   mounted() {
      this.$emit('nextStep', this.nextQuestion)
   },
}
</script>

<style lang="scss" scoped>
.last {

   &__main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px; //

      @media (max-width: 425px) {
         grid-template-columns: repeat(1, 1fr);
      }
   }
}

:deep(.text-input:nth-child(3)),
:deep(.text-input:nth-child(4)) {
   grid-column: 1 / 3;
}

@media (max-width: 425px) {

   :deep(.text-input:nth-child(3)),
   :deep(.text-input:nth-child(4)) {
      grid-column: 1 / 2;
   }
}
</style>