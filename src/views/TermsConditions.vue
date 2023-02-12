<template>
   <div class="terms-conditions">
      <Title>
         Terms & Conditions
      </Title>
      <div class="terms-conditions__accordeons">
         <div class="terms-conditions__container _container">
         <Accordeon v-for="item in listConditions"  class="terms-conditions__accordeons-item">
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
import Accordeon from '../components/Accordeon.vue';
   export default {
      components: {
         Title,
         Accordeon,
      },
      data() {
         return {
            listConditions: [
               {id:1, title:'Please read these terms and conditions of use carefully before using this web site', text: 'These Terms of Service are effective as of the date posted above and we will not be bound by any additional or different terms on other documents that are inconsistent with these terms. We may modify or update these Terms of Service at any time without notice by posting the amended terms on the Site and such terms shall be effective for all use of the Site and any services or information offered on the Site' },
               {id:2, title:'Modifications of the terms and conditions', text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ' },
               {id:3, title:'Links', text: 'Subject to the terms and conditions specified herein, the Site offers Users information regarding us and our programs. The Site also offers Users the possibility of accessing video content, obtaining information about the programs, communicating through certain functions provided on the Site or accessing our social media sites.' },
               {id:4, title:'Minors', text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ' },
               {id:5, title:'Restricted access', text: 'Subject to the terms and conditions specified herein, the Site offers Users information regarding us and our programs. The Site also offers Users the possibility of accessing video content, obtaining information about the programs, communicating through certain functions provided on the Site or accessing our social media sites.' },
               {id:6, title:'Governing law', text: 'These Terms of Service are effective as of the date posted above and we will not be bound by any additional or different terms on other documents that are inconsistent with these terms. We may modify or update these Terms of Service at any time without notice by posting the amended terms on the Site and such terms shall be effective for all use of the Site and any services or information offered on the Site' },
               {id:7, title:'Privacy policy', text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ' },
               {id:8, title:'Personal information', text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ' },
               {id:9, title:'Collecting personal information', text: 'Subject to the terms and conditions specified herein, the Site offers Users information regarding us and our programs. The Site also offers Users the possibility of accessing video content, obtaining information about the programs, communicating through certain functions provided on the Site or accessing our social media sites.' },
               {id:10, title:'Using and sharing personal information', text: 'These Terms of Service are effective as of the date posted above and we will not be bound by any additional or different terms on other documents that are inconsistent with these terms. We may modify or update these Terms of Service at any time without notice by posting the amended terms on the Site and such terms shall be effective for all use of the Site and any services or information offered on the Site' },
               {id:11, title:'Sharing your personal information', text: 'Subject to the terms and conditions specified herein, the Site offers Users information regarding us and our programs. The Site also offers Users the possibility of accessing video content, obtaining information about the programs, communicating through certain functions provided on the Site or accessing our social media sites.' },
               {id:12, title:'Contacting you', text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ' },
               {id:13, title:'Accessing your personal information stored by us', text: 'These Terms of Service are effective as of the date posted above and we will not be bound by any additional or different terms on other documents that are inconsistent with these terms. We may modify or update these Terms of Service at any time without notice by posting the amended terms on the Site and such terms shall be effective for all use of the Site and any services or information offered on the Site' },
               {id:14, title:'Responding to privacy concerns or complaints', text: 'Subject to the terms and conditions specified herein, the Site offers Users information regarding us and our programs. The Site also offers Users the possibility of accessing video content, obtaining information about the programs, communicating through certain functions provided on the Site or accessing our social media sites.' },
               {id:15, title:'How we work', text: 'Vehicle Approval Centre may, in its sole discretion and for any reason, modify, supplement or amend these Terms and Conditions without any notice or liability to you or any other person, by posting revised Terms and Conditions on the Vehicle Approval Centre website. Your continued use of the Vehicle Approval Centre website signifies your acceptance of such revised Terms and Conditions. ' },
               {id:16, title:'Authorization', text: 'These Terms of Service are effective as of the date posted above and we will not be bound by any additional or different terms on other documents that are inconsistent with these terms. We may modify or update these Terms of Service at any time without notice by posting the amended terms on the Site and such terms shall be effective for all use of the Site and any services or information offered on the Site' },
               {id:17, title:'Retaining your personal information', text: 'Subject to the terms and conditions specified herein, the Site offers Users information regarding us and our programs. The Site also offers Users the possibility of accessing video content, obtaining information about the programs, communicating through certain functions provided on the Site or accessing our social media sites.' },
            ]
         }
      },
   }
</script>

<style lang="scss" scoped>
.terms-conditions {

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