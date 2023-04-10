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
               <QuizCheck v-for="elem in questionsList" :dataInput="elem"
                  @click="selectOption(elem), $emit('continue', elem.nextQuestion,)" />
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
   props: [
      'status'
   ],
   emits: [
      'continue'
   ],
   data() {
      return {
         name: 'how-earn-income',
         questionsList: [
            { id: 'yes', textCheckBox: 'Yes', checked: false, nextQuestion: 'how-long-income' },
            { id: 'no', textCheckBox: 'No', checked: false, nextQuestion: 'how-long-receiving' },
         ],
         //nextQuestion: 'monthly-income'
      }
   },
   methods: {
      selectOption(e) {
         console.log(this.status)
         if (!e.checked === true) {
            for (const elem of this.questionsList) {
               if (elem.checked === true) {
                  elem.checked = false;
               }
            }
            e.checked = true;
         }
      },

   },
   computed: {
      howAddress() {
         return this.$route
      },
      whichStatus() {
         return this.status
      }

   },
   watch: {
      $route: {
         handler(newValue, oldValue) {
            for (const item of this.questionsList) {
               if (item.checked === true && this.$route.name == this.name) {
                  this.$emit('continue', this.nextQuestion)
               }
            }
         },
         immediate: true,
      }
   }
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
}
</style>