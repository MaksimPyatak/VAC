<template>
   <div class="tell-your-employment">
      <QuizQuestion>
         <template #questionTitle>Tell us about your employment</template>
         <template #questionSubtitle>
            We won’t come visit but we need these details to confirm your employment status so you can get the best rates
            possible.
         </template>
         <template #questionHighlightedSubtitle></template>
         <template #questionMain>
            <div class="tell-your-employment__main">
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
            '0': { id: 'employer', placeholder: 'Employer', type: 'text', name: "employer", },
            '1': { id: 'title', placeholder: 'Title', type: 'text', name: "title", },
         },
         name: 'your-employment',
         nextQuestion: 'how-long-income',
      }
   },
   mounted() {
      this.$emit('nextStep', this.nextQuestion)
   },
}
</script>

<style lang="scss" scoped>
.tell-your-employment {

   &__main {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 10px; //

      //@media (max-width: 425px) {
      //   //grid-template-columns: repeat(1, 1fr);
      //}
   }

   &__input {
      @include medium_16;
      width: 100%;
      height: 45px;
      padding-left: 20px;
      border-radius: 2px;
      border: 1px solid #D7D7D7;
      color: #606276;

      &:not(:last-child) {
         margin-bottom: 10px;
      }

      &::placeholder {
         @include medium_16;
         color: #D7D7D7;
      }

      &:focus {
         border-color: #606276;
      }

      //&:in-range {
      //   background: none;
      //}

      // Прибирає фон за замовченням при виборі з запропонованих варіантів
      &:-webkit-autofill {
         -webkit-box-shadow: 0 0 0px 1000px #FFFFFF inset;
      }
   }
}
</style>