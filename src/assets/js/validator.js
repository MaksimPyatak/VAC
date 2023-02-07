import * as yup from 'yup';

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const shema = yup.object({
   vehicle: yup.string().required(),
   name: yup.string().required().min(3),
   phone: yup.string().required("required").matches(phoneRegExp, 'Phone number is not valid').min(10, "too short").max(10, "too long"),
   email: yup.string().required().email(),
});

      //{
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
      
      //validateEmail(value) {
      //   if (!value) {
      //      return 'This field is required';
      //   } 
      //   const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      //   if (!regex.test(value)) {
      //      return 'Error';
      //   }
      //   return true;
      //},
      //passwordRules() {yup.string().required()},
      //validateTel(value) {
      //   if (!value) {
      //      return 'This field is required';
      //   } 
      //   const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      //   if (!regex.test(value)) {
      //      return 'Error';
      //   }
      //   return true;
      //},