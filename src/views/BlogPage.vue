<template>
   <div class="privacy-policy">
      <Title class="privacy-policy__title">
         Privacy Policy
      </Title>
      <div class="privacy-policy__accordeons">
         <div class="privacy-policy__container _container">
            <Accordeon v-for="item in listPolicy" class="privacy-policy__accordeons-item">
               <template v-slot:title>
               {{ item.title }}
            </template>
            <template v-slot:content>
              {{ item.text }}
            </template>
            </Accordeon>
         </div>
      </div>
   </div>
</template>

<script>
import Title from '../components/Title.vue';
import Accordeon from '../components/Accordeon copy.vue';

   export default {
      components: {
         Title,
         Accordeon,
      },
      data() {
         return {
            listPolicy: [
               {id:1, title:'Terms', text: 'These Terms of Service are effective as of the date posted above and we will not be bound by any additional or different terms on other documents that are inconsistent with these terms. We may modify or update these Terms of Service at any time without notice by posting the amended terms on the Site and such terms shall be effective for all use of the Site and any services or information offered on the Site' },
               {id:2, title:'Authorization', text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ' },
               {id:3, title:'Links', text: 'Subject to the terms and conditions specified herein, the Site offers Users information regarding us and our programs. The Site also offers Users the possibility of accessing video content, obtaining information about the programs, communicating through certain functions provided on the Site or accessing our social media sites.' },
               {id:4, title:'Site terms of use modifications', text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ' },
               {id:5, title:'Governing law', text: 'Subject to the terms and conditions specified herein, the Site offers Users information regarding us and our programs. The Site also offers Users the possibility of accessing video content, obtaining information about the programs, communicating through certain functions provided on the Site or accessing our social media sites.' },
               {id:6, title:'How we treat your personal information', text: 'These Terms of Service are effective as of the date posted above and we will not be bound by any additional or different terms on other documents that are inconsistent with these terms. We may modify or update these Terms of Service at any time without notice by posting the amended terms on the Site and such terms shall be effective for all use of the Site and any services or information offered on the Site' },
               {id:7, title:'Cookies', text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ' },
            ]
         }
      },
   }
</script>

<style lang="scss" scoped>
.privacy-policy {

&__accordeons {
   margin: 40px 0;
   @media (max-width: 425px) {
      margin: 30px 0;
   }
}
&__accordeons-item:not(:last-child) {
   margin-bottom: 10px;
}
}
</style>