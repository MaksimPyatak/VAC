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
               <Form class="tell-your-employment__form" method="post" id="firsForm" :validation-schema="shema" ref="form">

                  <Field v-slot="{ field, meta, errors }" type="text" name="title2">
                     <input id="employer" class="tell-your-employment__input" type="text" v-bind="field"
                        v-model="title2Value" placeholder="Employer"
                        :class="{ 'input-active': meta.valid && meta.touched, 'input-error': !meta.valid && meta.touched }"
                        @change="selectOption(), saveValidTitle2(meta.valid, meta.dirty)"
                        @input="$emit('blockMessageButton')">
                  </Field>
                  <ErrorMessage class="tell-your-employment__error-message error-message" name="title2" as="div" />

                  <Field v-slot="{ field, meta, errors }" type="text" name="title">
                     <input id="title" class="tell-your-employment__input" type="text" v-bind="field" placeholder="Title"
                        v-model="titleValue"
                        :class="{ 'input-active': meta.valid && meta.touched, 'input-error': !meta.valid && meta.touched }"
                        @change="selectOption(), saveValidTitle(meta.valid, meta.dirty)"
                        @input="$emit('blockMessageButton')">
                  </Field>
                  <ErrorMessage class="tell-your-employment__error-message error-message" name="title" as="div" />
               </Form>
            </div>
         </template>
      </QuizQuestion>
   </div>
</template>

<script>
import QuizQuestion from './QuizQuestion.vue';
import { shema } from "@/assets/js/validator.js"
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
   components: {
      QuizQuestion,
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
      'blockMessageButton',
      'blockTransition'
   ],
   data() {
      return {
         name: 'your-employment',
         nextQuestion: 'how-long-income',
         activeInput: false,
         validTitle: false,
         validTitle2: false,
         titleValue: '',
         title2Value: '',
         formMeta: '',
      }
   },
   methods: {
      selectOption() {
         //console.log(this);
         console.log(this.$refs.form);
         if (this.validTitle && this.validTitle2) {
            console.log('selectOption - if');
            this.$emit('continue', this.nextQuestion, this.stutus, true)
            this.$emit('blockTransition', true)
         } else if (this.validTitle && this.validTitle2 && this.title2Value.length > 0 && this.titleValue.length > 0) {
            console.log(valid);
            this.$emit('continue', this.nextQuestion);
            this.$emit('blockTransition', true)
         } else {
            console.log('selectOption - else');
            this.$emit('continue', this.name, this.stutus, false)
            this.$emit('blockTransition', false)
         }
      },
      saveValidTitle2(valid) {
         this.validTitle2 = valid;
      },
      saveValidTitle(valid) {
         this.validTitle = valid;
      }
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
            if (this.title2Value.length > 0 && this.titleValue.length > 0 && this.$route.name == this.name) {
               this.$emit('continue', this.nextQuestion);
            }
         },
         immediate: true,
      }
   },
   setup() {
      shema;
      return {
         shema,
      }
   }
}
</script>

<style lang="scss" scoped>
.tell-your-employment {

   &__main {
      display: block;
      //grid-template-columns: repeat(2, 1fr);
      //gap: 10px; //

      @media (max-width: 425px) {
         //grid-template-columns: repeat(1, 1fr);
      }
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