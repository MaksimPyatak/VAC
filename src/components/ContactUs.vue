<template>
   <div class="menu__container">
      <div class="menu__criss-cross" @click="$emit('close')">
         <img src="../img/icons/Close.svg" alt="Close">
      </div>
      <h3 class="menu__heading h3">
         We can't wait to hear from you!
      </h3>
      <Form class="menu__form" action="" method="post" :validation-schema="shema"
         @submit="onSubmit, $emit('select', 'success')">
         <div class="menu__item-form" v-if="!menuStore.isCar">
            <Field v-slot="{ field, meta, errors }" type="text" name="vehicle">
               <input id="vehicle" class="menu__input" type="text" v-bind="field" placeholder="Name of selected vehicle"
                  :class="{ 'input-active': meta.valid && meta.touched, 'input-error': !meta.valid && meta.touched }">
            </Field>
         </div>
         <ErrorMessage class="menu__error-message" v-if="!menuStore.isCar" name="vehicle" as="div" />
         <div class="menu__item-form">
            <Field v-slot="{ field, meta, errors }" type="text" name="name">
               <input id="name" class="menu__input" type="text" v-bind="field" placeholder="Your Name"
                  :class="{ 'input-active': meta.valid && meta.touched, 'input-error': !meta.valid && meta.touched }">
            </Field>
            <img src="../img/icons/Name.svg" alt="name icon" class="menu__input-icon">
         </div>
         <ErrorMessage class="menu__error-message" name="name" as="div" />
         <div class="menu__item-form">
            <Field v-slot="{ field, meta, errors }" type="tel" name="phone">
               <input id="phone" class="menu__input" type="tel" v-bind="field" placeholder="Phone Number"
                  :class="{ 'input-active': meta.valid && meta.touched, 'input-error': !meta.valid && meta.touched }">
            </Field>
            <img src="../img/icons/Phone.svg" alt="phone icon" class="menu__input-icon">
         </div>
         <ErrorMessage class="menu__error-message" name="phone" as="div" />
         <div class="menu__item-form">
            <Field v-slot="{ field, meta, errors }" type="email" name="email" id="email" placeholder="Email Address">
               <input id="email" class="menu__input" type="email" v-bind="field" placeholder="Email Address"
                  :class="{ 'input-active': meta.valid && meta.touched, 'input-error': !meta.valid && meta.touched }">
            </Field>
            <ErrorMessage class="menu__error-message" name="email" as="div" />
            <img src="../img/icons/Mail.svg" alt="email icon" class="menu__input-icon">
         </div>
         <button class="menu__buttom">
            <Button text="contact me" :mobileHight="35" />
         </button>
      </Form>
      <div class="menu__text title-semibold">
         You can contact us yourself
      </div>
      <div class="menu__socials">
         <a href="#" class="menu__socials-item">
            <div class="menu__instagram _icon-instagram-Vector"></div>
         </a>
         <a href="#" class="menu__socials-item">
            <div class="menu__facebook _icon-f"></div>
         </a>
         <a href="#" class="menu__socials-item">
            <div class="menu__youtube _icon-YouTube-vector"></div>
         </a>
         <a href="#" class="menu__socials-item">
            <img src="../img/icons/Icon-mail.svg" class="menu__youtube ">
         </a>
      </div>

   </div>
</template>

<script>
import Button from "./Button.vue";

import { useMenuStore } from "../stores/MenuStore.js"

import { shema } from "../assets/js/validator.js"
import { Form, Field, ErrorMessage } from 'vee-validate';
//import * as yup from 'yup';
export default {
   // Вимкнув наслідування атрибутів, щоб прибрати наслідування події select, що викликало заміну компонента на анонімний
   inheritAttrs: false,

   components: {
      Button,
      Form,
      Field,
      ErrorMessage
   },
   data() {
      return {
         //shema: {
         //   email(value) {
         //      if (!value) {
         //         return 'This field is required';
         //      }
         //      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
         //      if (!regex.test(value)) {
         //         return 'Error';
         //      }
         //      return true;
         //   },
         //   phone(value) {
         //      if (!value) {
         //         return 'This field is required';
         //      }
         //      const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
         //      if (!regex.test(value)) {
         //         return 'Error';
         //      }
         //      return true;
         //   }
         //}
      }
   },
   emits: ['close', 'select'],
   methods: {
      onSubmit() {
         console.log(submit);
      },
   },
   setup() {
      const menuStore = useMenuStore();
      shema;
      return {
         menuStore,
         shema
      }
   }
}
</script>


<style scoped lang="scss">
.menu {
   &__container {
      width: 100%;
      height: 100%;
   }

   &__criss-cross {
      width: 22px;
      height: 22px;
      cursor: pointer;

      @media(max-width: 768px) {
         width: 24px;
         height: 24px;
      }

      img {
         width: 100%;
      }
   }

   &__heading {
      margin-top: 41px;
   }


   &__form {
      width: 100%;
      margin: 60px 0 60px 0;
   }

   &__item-form {
      width: 100%;
      position: relative;

      #vehicle {
         padding: 0 0 0 20px;

         &::placeholder {
            color: #606276;
         }
      }
   }

   &__input {
      @include medium_16;
      width: 100%;
      height: 45px;
      margin-bottom: 10px;
      padding-left: 44px;
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

      &:in-range {
         background: none;
      }

      // Прибирає фон за замовченням при виборі з запропонованих варіантів
      &:-webkit-autofill {
         -webkit-box-shadow: 0 0 0px 1000px #FFFFFF inset;
      }
   }

   &__error-message {
      margin-bottom: 10px;
      color: var(--color-error);
   }


   &__input-icon {
      position: absolute;
      top: 10px;
      left: 10px;
   }

   &__buttom {
      width: 100%;
      margin-top: 30px;
   }

   &__text {
      margin-bottom: 20px;
      color: #41456B;
   }

   &__socials {
      display: flex;
      margin: 55px 0 0;
   }


   &__socials-item {
      width: 30px;
      height: 30px;
      margin: 0 10px 0;
      background: var(--color-buttom-default);
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #FFFFFF;

      &:hover {
         background-color: var(--color-buttom-hover);
      }
   }


   &__instagram {
      font-size: 16px;
   }


   &__facebook {
      font-size: 16px;
   }


   &__youtube {
      margin-top: 1px;
      font-size: 13px;
   }
}

.input-active {
   border: 1px solid #D7D7D7;
}

.input-error {
   border-color: var(--color-error);
}

.h3 {}

.title-semibold {}
</style>