<template>
   <div class="what-budget">
      <QuizQuestion>
         <template #questionTitle>What's your budget?</template>
         <template #questionSubtitle>Find vehicle options that fit your budget.</template>
         <template #questionHighlightedSubtitle></template>
         <template #questionMain>
            <div class="what-budget__main">
               <!--<slot name="input" v-bind="{ elem, index, lengthList }"></slot>-->
               <!--<template v-for="(elem, index) in questionsList">
                  <Field v-if="elem.type" class="what-budget__radio-button radio-button"
                     :class="{ 'input-active': elem.checked }" :type="elem.type" :id="elem.id" :name="elem.name"
                     :value="elem.id"
                     @click="$emit('nextStep', elem.nextQuestion, elem.name, elem.id), elem.checked = true" as="div">
                     <input class="radio-button__checkbox-input" :type="elem.type" :name="elem.name" :value="elem.id" />
                     
                     <div>{{ elem.textCheckBox }}</div>
                  </Field>
                  <ErrorMessage class="what-budget__error-message" name="budgetRadioButton" as="div" />
                  <div class="what-budget__error-message" v-if="(+index + 1 == lengthList) || (elem.type != 'radio')">
                  </div>
               </template>-->
               <QuizCheck v-for="elem in questionsList" :dataInput="elem"
                  @click="selectOption(elem), $emit('continue', nextQuestion)" />
            </div>
         </template>
      </QuizQuestion>
      <!--:class="{ 'input-active': meta.valid && meta.touched, 'input-error': !meta.valid && meta.touched }"-->
      <!--v-bind="field" -->
   </div>
</template>

<script>
import { Field, ErrorMessage, useField } from 'vee-validate';
import * as yup from 'yup';
import QuizQuestion from './QuizQuestion.vue';
import QuizCheck from './QuizCheck.vue';
export default {
   components: {
      QuizQuestion,
      QuizCheck,
      Field,
      ErrorMessage,
   },
   props: [
      'values'
   ],
   emits: [
      'continue',
      'nextStep'
   ],
   data() {
      return {
         name: 'what-budget',
         questionsList: {
            '0': { id: 250, textCheckBox: 'Under $250/Month', checked: false, type: 'radio', name: "budgetRadioButton", nextQuestion: 'employment-status' },
            '1': { id: 374, textCheckBox: '$250-374/Month', checked: false, type: 'radio', name: "budgetRadioButton", nextQuestion: 'employment-status' },
            '2': { id: 500, textCheckBox: '$374-500/Month', checked: false, type: 'radio', name: "budgetRadioButton", nextQuestion: 'employment-status' },
            3: { id: 'Over', textCheckBox: 'Over $500/Month', checked: false, type: 'radio', name: "budgetRadioButton", nextQuestion: 'employment-status' },
         }
      }
   },
   methods: {
      selectOption(e) {
         console.log(e.checked);
         if (e.checked === true) {
            for (const elem in this.questionsList) {
               if (this.questionsList[elem].checked === true) {
                  this.questionsList[elem].checked = false;
               }
            }
            this.questionsList[e].checked = true;
         }
      },
   },
   computed: {
      lengthList() {
         this.values.budgetRadioButton
         let n = 0;
         for (const i in this.questionsList) {
            n++;
         }
         return n
      },
      firstChecked() {
         return this.questionsList[0].checked
      },
      secondChecked() {
         return this.questionsList[1].checked
      },
      thirdChecked() {
         return this.questionsList[2].checked
      },
      fourthChecked() {
         return this.questionsList[3].checked
      },
   },
   watch: {
      firstChecked: {
         handler(newValue, oldValue) {
            this.selectOption(0);
         },
      },
      secondChecked: {
         handler(newValue, oldValue) {
            this.selectOption(1);
         },
      },
      thirdChecked: {
         handler(newValue, oldValue) {
            this.selectOption(2);
         },
      },
      fourthChecked: {
         handler(newValue, oldValue) {
            this.selectOption('3');
         },
      },
   },
   setup() {
      //const props = defineProps(['validationSchema']);
      const { value, errorMessage } = useField('budgetRadioButton', {
         type: 'radio',
         valueProp: 'Checkbox value'
      });
      //console.log(props.validationSchema.fields);

      return {
         value,
         errorMessage
      }
   }
}
</script>

<style lang="scss" scoped>
.what-budget {

   &__main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;

      @media (max-width: 425px) {
         grid-template-columns: repeat(1, 1fr);
      }
   }
}

.radio-button {
   height: 45px;
   border: 1px solid #F1F1F1;
   border-radius: 2px;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;

   @include semibold_16;

   &:hover {
      border-color: var(--color-accent);
      color: var(--color-accent);
   }

   &__checkbox-input {
      //width: 0;
      //height: 0;
      //visibility: hidden;
   }
}

.input-active {
   border-color: var(--color-accent);
   color: var(--color-accent);
}
</style>