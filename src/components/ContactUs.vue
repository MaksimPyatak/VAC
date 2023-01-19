<script>
import Button from "./Button.vue";
import { Form, Field, ErrorMessage  } from 'vee-validate'; 
import * as yup from 'yup';

//import { configure } from 'vee-validate';
//// Default values
//configure({
//  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
//  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
//  validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
//  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
//});
const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

//const shema = {
//   email(value) {
//      if (!value) {
//            return 'This field is required';
//         } 
//         const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//         if (!regex.test(value)) {
//            return 'Error';
//         }
//         return true;
//   },
//   phone(value) {
//      if (!value) {
//            return 'This field is required';
//         } 
//         const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//         if (!regex.test(value)) {
//            return 'Error';
//         }
//         return true;
//   }
//}
//yup.object({
//   vehicle: yup.string().required(),
//   name: yup.string().required().min(3),
//   phone: yup.string().required("required").matches(phoneRegExp, 'Phone number is not valid').min(10, "too short").max(10, "too long"),
//   email: yup.string().required().email(),
//   })
//const passwordRules = yup.string().required().min(8);

export default {
   components: {Button, Form, Field, ErrorMessage },  
   data() {
      return {
         shema: {
            email(value) {
               if (!value) {
                  return 'This field is required';
               }
               const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
               if (!regex.test(value)) {
                  return 'Error';
               }
               return true;
            },
            phone(value) {
               if (!value) {
                  return 'This field is required';
               }
               const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
               if (!regex.test(value)) {
                  return 'Error';
               }
               return true;
            }
         }
      }
   },
   emits: ['close'],
   methods: {
      onSubmit() {
         console.log(yup);
      },
      validateEmail(value) {
         if (!value) {
            return 'This field is required';
         } 
         const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
         if (!regex.test(value)) {
            return 'Error';
         }
         return true;
      },
      //passwordRules() {yup.string().required()},
      validateTel(value) {
         if (!value) {
            return 'This field is required';
         } 
         const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
         if (!regex.test(value)) {
            return 'Error';
         }
         return true;
      },
   },
}
</script>

<template>
   <div class="menu__container">
      <div class="menu__criss-cross" @click="$emit('close')">
         <img src="../img/icons/Close.svg" alt="Close">
      </div>
      <h3 class="menu__heading h3">We can't wait to hear from you!</h3>
      <Form class="menu__form" action="" method="post" 
         :validationShema="shema" @submit="onSubmit"  v-slot="{ field, meta, errors }" >
         <div class="menu__item-form">
            <Field class="menu__input" 
            :class="{'input-active': meta.valid && meta.touched, 'input-error': !meta.valid && meta.touched}"
            type="text" name="vehicle" id="vehicle" placeholder="Name of selected vehicle" />
         </div>
            <ErrorMessage name="vehicle" />
         <div class="menu__item-form">
            <Field class="menu__input" 
            :class="{'input-active': meta.valid && meta.touched, 'input-error': !meta.valid && meta.touched}"
            
            type="text" name="name" id="name" placeholder="Your Name" />
            <img src="../img/icons/Name.svg" alt="name icon" class="menu__input-icon">
         </div>
            <ErrorMessage name="name" />
         <div class="menu__item-form">
            <Field 
               class="menu__input"
               
               type="tel"
               name="phone" 
               id="phone" 
               placeholder="Phone Number" />
            <img src="../img/icons/Phone.svg" alt="phone icon" class="menu__input-icon">
         </div>
         <div class="menu__item-form">
            <Field
               class="menu__input" 
               type="email" 
               name="email" id="email" 
               placeholder="Email Address" />
               <!--
               :class="{'input-active': meta.valid && meta.touched, 'input-error': !meta.valid && meta.touched}" -->
               {{ meta }}
            <ErrorMessage name="email" />
            <img src="../img/icons/Mail.svg" alt="email icon" class="menu__input-icon" >
         </div>
         <button class="menu__buttom">
         <Button  text="contact me" mobileHight=35 />
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
            <img src="../img/icons/Icon mail.svg" class="menu__youtube ">
         </a>
      </div>

   </div>

</template>


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
         border: 1px solid #606276;
      }
      &:in-range {
         background: none;
      }
      // Прибирає фон за замовченням при виборі з запропонованих варіантів
      &:-webkit-autofill {
         -webkit-box-shadow: 0 0 0px 1000px #FFFFFF inset;
      }
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
      border: 1px solid #F54E4E;
   }
.h3 {
}
.title-semibold {
}

</style>