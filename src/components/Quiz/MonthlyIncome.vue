<template>
   <div class="enter-monthly-income">
      <QuizQuestion>
         <template #questionTitle>Enter your monthly income</template>
         <template #questionSubtitle>Your income details help us make sure your vehicle payments are easy and
            affordable. </template>
         <template #questionHighlightedSubtitle>Before taxes and deductions.</template>
         <template #questionMain>
            <div class="enter-monthly-income__main">
               <Field v-slot="{ field, meta, errors }" type="text" name="monthly-income" ref="monthlyIncome">
                  <input id="monthly-income" class="enter-monthly-income__input" type="text" v-bind="field"
                     placeholder="Monthly income" v-model="monthlyIncomeValue" ref="monthlyIncomeInpute"
                     :class="{ 'input-active': meta.valid && meta.touched, 'input-error': !meta.valid && meta.touched }"
                     @blur="selectOption(meta.valid, meta.dirty)" @input="$emit('blockMessageButton')">
               </Field>
               <div class="enter-monthly-income__error-message error-message">
                  {{ errorMessage }}
               </div>

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
import { useField } from 'vee-validate';
import * as yup from 'yup';

export default {
   components: {
      QuizQuestion,
      QuizCheck,
      Form,
      Field,
      ErrorMessage
   },
   props: [
      'status',
      'valid-schema'
   ],
   emits: [
      'nextStep',
      'changeError',
      'blockMessageButton',
      'blockTransition'
   ],
   data() {
      return {
         name: 'monthly-income',
         //nextQuestion: 'how-long-receiving'//Замінити
         activeInput: false,
         monthlyIncomeValue: '',
         whichNextStep: '',
      }
   },
   methods: {
      selectOption(valid, dirty) {
         console.log('selectOption');
         console.log(this.status);
         this.nextQuestion();
         console.log(this.whichNextStep);
         if (valid && dirty) {
            console.log('valid && dirty');
            this.$emit('nextStep', this.whichNextStep);
            this.$emit('blockTransition', true)
         } else if (valid && this.monthlyIncomeValue.length > 0) {
            console.log('valid && this.monthlyIncomeValue.length > 0');
            console.log(valid);
            this.$emit('nextStep', this.whichNextStep);
            this.$emit('blockTransition', true)
         }
         else {
            console.log('else');
            this.$emit('nextStep', this.name);
            this.$emit('blockTransition', false)
         }
      },
      nextQuestion() {
         console.log(this.status);
         switch (this.status) {
            case ('Employed' || 'Self'):
               this.whichNextStep = 'your-employment'
               break;
            case ('Student' || 'Retired'):
               this.whichNextStep = 'currently-working'
               break;
               return 'currently-working'
            case ('Other'):
               console.log('Other');
               this.whichNextStep = 'how-long-receiving'
               break;
               return 'how-long-receiving'
            default:
               console.log('error case');
               break;
         }
      }

   },
   computed: {
      howAddress() {
         return this.$route
      },
      whichStatus() {
         return this.status
      },
   },
   watch: {
      $route: {
         handler(newValue, oldValue) {
            if (!this.activeInput && this.$route.name == this.name) {
               this.$emit('changeError', 'Value is required', true);
               //this.$emit('nextStep', this.nextQuestion, this.stutus, true)
            }
            if (this.monthlyIncomeValue.length > 0 && this.$route.name == this.name) {
               this.$emit('nextStep', this.nextQuestion);
            }
         },
         immediate: true,
      }
   },
   mounted() {
      console.log(this.$refs);
      console.log(this.status);
   },
   setup() {
      shema;
      //const props = defineProps(['validationSchema']);
      const { value, errorMessage } = useField('monthly-income', yup.object({
         'monthly-income': yup.number().label("Value").typeError("Value must be a number").positive().required("Value is required"),
      }));
      //console.log(props.validationSchema.fields);

      return {
         shema,
         value,
         errorMessage
      }
   }
}
</script>

<script setup>
</script>

<style lang="scss" scoped>
.enter-monthly-income {

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

   &__error-message {
      color: red;
   }
}
</style>