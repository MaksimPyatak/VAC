<template>
   <div class="footer">
      <div class="footer__container _container">      
         <router-link class="footer__logo" to="/">            
            <img src="../img/footer/logo img.svg" alt="logo image">
            <div class="footer__logo-title">VAC</div>            
         </router-link>
         <div class="footer__menu">
            <a href="../views/TermsConditions.vue" class="footer__link">Terms</a>
            <a href="../views/PrivacyPolicy.vue" class="footer__link">Privacy</a>
         </div>
         <div class="footer__socials">
            <a href="#" class="footer__socials-item">
               <div class="footer__instagram _icon-instagram-Vector"></div>
            </a>
            <a href="#" class="footer__socials-item">
               <div class="footer__facebook _icon-f"></div>
            </a>
            <a href="#" class="footer__socials-item">
               <div class="footer__youtube _icon-YouTube-vector"></div>
            </a>
         </div>
         <div class="footer__created">
            <div class="footer__created-conent">Created by</div>
            <img src="../img/icons/Logo.svg" alt="creator logo">
         </div>
         <div class="footer__copyright">©Copyright, 2020. Vehicle Approval</div>
      </div>
   </div>

</template>

<script>


export default {
   data() {
      return {
         
      }
   },
   components: {
   },
   methods: {
   }
}
</script>

<style scoped lang="scss">
.footer {
   //position: absolute;
   //bottom: 0;
   //left: 0;
   //right: 0;
   //z-index: 50;
   width: 100%;
   height: 133px;
   background: #7481FF;
   display: flex;
   align-items: center; 

   @media(max-width: 850px) {
      height: 200px;
      padding: 41px 0 60px;
   }

   @media(max-width: 650px) {
      height: 176px;
      padding: 20px 0;
   }
   
   &__container {
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: 2fr 2.5fr 3fr minmax(max-content, 2fr) minmax(max-content, 2.5fr);
      align-items: center;
      
      @media(max-width: 850px) {
         grid-template-columns: 3fr minmax(max-content, 5fr) minmax(max-content, 4fr);
         grid-template-rows: 33px 26px;
         row-gap: 40px;
      }
      
      @media(max-width: 650px) {
         grid-template-columns: 1fr 2fr;
         grid-template-rows: 24px 30px 22px;
         row-gap: 30px;
      }
   }

   &__logo {
      width: 112px;
      height: 33px;
      margin: 0 20px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      
      @media(max-width: 850px) {
         margin: 0 40px 0 0;
         grid-row-start: 1;
         grid-row-end: 3;
         align-self: start;
      }

      @media(max-width: 650px) {
         margin: 0;
         grid-row-start: 1;
         grid-row-end: 2;
         align-self: start;
      }

      @media(max-width: 425px) {
         width: 81.18px;
         height: 23.92px;
      }
      img {
         height: 100%;
      }
   }

   &__logo-title {      
      font-weight: 700;
      font-size: 28px;
      line-height: 108.5%;
      letter-spacing: 0.02em;
      color: #FFFFFF;
      
      @media(max-width: 425px) {
         font-size: 20.3px;
      }
   }

   &__menu {
      @include semibold_16;
      margin: 0 20px 0 0;
      display: grid;
      grid-template-columns: repeat(2, min-content);
      gap: 20px;
      color: var(--color-white);
   }

   &__link {}

   &__socials {
      display: flex;
      
      @media(max-width: 650px) {
         grid-row-start: 2;
         grid-row-end: 3;
         grid-column-start: 1;
         grid-column-end: 3;
      }
   }

   &__socials-item {
      width: 30px;
      height: 30px;
      margin: 0 10px 0 0;
      background: var(--color-white);
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      color:  var(--color-accent);

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

   &__created {
      margin: 0 20px 0 0;
      display: flex;
      
      @media(max-width: 650px) {
      margin: 0;
         grid-row-start: 2;
         grid-row-end: 3;
         grid-column-start: 2;
         grid-column-end: 3;
         justify-self: end;
      }
   }

   &__created-conent {
      margin: 0 8px 0 0;
      align-self: center;
      @include semibold_16;
      color: var(--color-white);
   }

   &__copyright {
      @include regular_14;
      color: var(--color-white);
      
      @media(max-width: 650px) {
         grid-column-start: 1;
         grid-column-end: 3;
      }
   }
}
</style>