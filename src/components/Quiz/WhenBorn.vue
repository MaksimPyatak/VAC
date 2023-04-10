<template>
   <div class="enter-monthly-income">
      <QuizQuestion>
         <template #questionTitle>When were you born?</template>
         <template #questionSubtitle></template>
         <template #questionHighlightedSubtitle></template>
         <template #questionMain>
            <div class="enter-monthly-income__main">
               <Form class="enter-monthly-income__form" method="post" :validation-schema="shema">

                  <Field v-slot="{ field, meta, errors }" type="text" name="number" @input="$emit('blockMessageButton')">
                     <input id="monthly-income" class="enter-monthly-income__input" type="text" v-bind="field"
                        placeholder="Monthly income"
                        :class="{ 'input-active': meta.valid && meta.touched, 'input-error': !meta.valid && meta.touched }"
                        @change="selectOption(meta.valid, meta.dirty)" @input="$emit('blockMessageButton')">
                  </Field>
                  <ErrorMessage class="enter-monthly-income__error-message error-message" name="number" as="div" />

                  <Field v-slot="{ field, meta, errors }" type="text" name="number" @input="$emit('blockMessageButton')">
                     <input id="monthly-income" class="enter-monthly-income__input" type="text" v-bind="field"
                        placeholder="Monthly income"
                        :class="{ 'input-active': meta.valid && meta.touched, 'input-error': !meta.valid && meta.touched }"
                        @change="selectOption(meta.valid, meta.dirty)" @input="$emit('blockMessageButton')">
                  </Field>
                  <ErrorMessage class="enter-monthly-income__error-message error-message" name="number" as="div" />

                  <Field v-slot="{ field, meta, errors }" type="text" name="number" @input="$emit('blockMessageButton')">
                     <input id="monthly-income" class="enter-monthly-income__input" type="text" v-bind="field"
                        placeholder="Monthly income"
                        :class="{ 'input-active': meta.valid && meta.touched, 'input-error': !meta.valid && meta.touched }"
                        @change="selectOption(meta.valid, meta.dirty)" @input="$emit('blockMessageButton')">
                  </Field>
                  <ErrorMessage class="enter-monthly-income__error-message error-message" name="number" as="div" />
               </Form>
            </div>
         </template>
      </QuizQuestion>
   </div>
</template>

<script>
import QuizQuestion from './QuizQuestion.vue';
import QuizCheck from './QuizCheck.vue';
import { shema } from "@/assets/js/validator.js"
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
   components: {
      QuizQuestion,
      QuizCheck,
      Form,
      Field,
      ErrorMessage
   },
   props: [
      'status'
   ],
   emits: [
      'continue',
      'changeError',
      'blockMessageButton'
   ],
   data() {
      return {
         name: 'when-born',
         nextQuestion: 'last-step',
         activeInput: false,
      }
   },
   methods: {
      selectOption(valid, dirty) {
         console.log('selectOption');
         if (valid && dirty) {
            console.log('selectOption - if');
            this.$emit('continue', this.nextQuestion, this.stutus, true)
         }
         else {
            console.log('selectOption - else');
            this.$emit('continue', this.nextQuestion, this.stutus, false)
         }
      },

   },
   computed: {
      howAddress() {
         return this.$route
      },
      //nextQuestion() {
      //   switch (this.status) {
      //      case ('Employed' || 'Self'):
      //         return 'your-employment'
      //         break;
      //      case ('Student' || 'Retired'):
      //         return 'currently-working'
      //         break;
      //      case 'Other':
      //         return 'how-long-receiving'
      //         break;

      //      default:
      //         console.log('error case');
      //         break;
      //   }
      //}
   },
   watch: {
      $route: {
         handler(newValue, oldValue) {
            console.log(this.activeInput);
            if (!this.activeInput && this.$route.name == this.name) {
               this.$emit('changeError', 'Value is required', true);
               //this.$emit('continue', this.nextQuestion, this.stutus, true)
            }
         },
         immediate: true,
      }
   },
   setup() {
      shema;
      return {
         shema
      }
   }
}
</script>

<style lang="scss" scoped>
.enter-monthly-income {

   &__main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px; //

      @media (max-width: 425px) {
         grid-template-columns: repeat(1, 1fr);
      }
   }

   &__input {
      @include medium_16;
      width: 100%;
      height: 45px;
      margin-bottom: 10px;
      padding-left: 20px;
      border-radius: 2px;
      border: 1px solid #D7D7D7;
      color: #606276;

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