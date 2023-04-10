import * as yup from 'yup';

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const shema = [
   yup.object({
      budgetRadioButton: yup.boolean().required().oneOf([0 , 1, 2, 3], 'Selecting the gender field is required'),
   }),
   yup.object({
      employmentRadioButton: yup.boolean().required().oneOf([0 , 1, 2, 3, 4], 'Selecting the gender field is required'),
   }),
   yup.object({
   vehicle: yup.string().required("Vehicle is required"),
   name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
   phone: yup.string().required("Phone number is required").matches(phoneRegExp, 'Phone number is not valid').min(10, "Phone number must contain 10 characters").max(10, "Phone number must contain 10 characters"),
   email: yup.string().required("Email is required").email("Email must be a valid email"),
   number: yup.number().label("Value").typeError("Value must be a number").positive().required("Value is required"),
   title: yup.string().required("Vehicle is required"),
   title2: yup.string().required("Vehicle is required"),

})
];

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