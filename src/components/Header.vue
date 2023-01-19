<script>
import Button from "../components/Button.vue";
import Menu from "../components/Menu.vue";
import ContactUs from "../components/ContactUs.vue" 
import Success from "../components/Success.vue" 

export default {
   data() {
      return {
         selectedMenu: '',
         activeClass: ''
      }
   },
   components: {
      Button, Menu, Success, ContactUs
   },
   methods: {
      selectMenu(param) {
         this.selectedMenu = param;
         this.activeClass = '_active';
         return this.selectedMenu
      }
   }
}
</script>

<template>
   
   <div class="header">
      <div class="header__zero" :class="activeClass" @click="activeClass = ''">
      </div>
      <div class="header__menu" :class="activeClass">
         <component :is="this.selectedMenu" @select="selectMenu" @close="activeClass = ''">
         </component>
      </div>
      <div class="header__container _container">
         <router-link class="header__logo" to="/">            
            <img src="../img/logo img.svg" alt="logo image">
            <div class="header__logo-title">VAC</div>            
         </router-link>
         <div class="header__nav">
            <div @click="selectMenu('Success')" class="header__button-inventory">
               <Button text="Inventory" width=137 mobileHight=35 empty="a" />
            </div>
            <div class="header__button-request">
               <Button width=200 tabletWidth=178 mobileWidth=130 mobileHight="35" />
            </div>
            <div @click="selectMenu('Menu')" class="header__burger">
               <span></span>
               <span></span>
               <span></span>
            </div>
         </div>
      </div>
   </div>
</template>


<style scoped lang="scss">

.header {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 50;
   width: 100%;
   height: 80px;
   margin: 0 auto;
   background: #FFFFFF;
   box-shadow: 0px 1px 0px #D7D7D7;
   
   @media(max-width: 425px) {
      height: 55px;
      }

   &__zero {
    position: absolute;
    top: -100vh;
    width: 100vw;
    height: 100vh;
    left: 0;
    transition: all 0.9s ease 0s;
    // z-index: 0;
  }

  &__zero._active {
    top: 0;
    opacity: 0.0;
    transition: all 0.9s ease 0s;
  }

   &__menu {
      position: absolute;
      top: 0;
      right: 0;
      width: 570px;
      max-height: 100vh;
      min-height: 100vh;
      padding: 28px 120px 105px 60px;
      transform: translate(100%, 0px);
      overflow: scroll;
      transition: all 0.9s ease 0s;
      background: #FFFFFF;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
      
      @media(max-width: 768px) {
      max-width: 504px;
      width: 100%;
      padding: 28px 54px 105px 60px;
      }
      
      @media(max-width: 425px) {
      width: 100%;
      padding: 14px 22px 50px 20px;
      }
   }
   ._active {
   transform: translate(0px, 0px);
   transition: all 0.9s ease 0s;
}

   &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   &__logo {
      width: 112px;
      height: 33px;
      display: flex;
      justify-content: space-between;
      align-items: center;

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
      color: #7380FF;

      @media(max-width: 425px) {
         font-size: 20.3px;
      }
   }

   &__nav {
      display: flex;
      justify-content: center;
      align-items: center;
   }

   &__button-inventory {
      @media(max-width: 650px) {
         display: none;
      }
   }

   &__button-request {
      margin: 0 63px 0 20px;

      @media(max-width: 650px) {
         margin: 0 23px 0 20px;
      }
   }

   &__burger {
      width: 37px;
      height: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;

      @media(max-width: 425px) {
         width: 30px;
         height: 25px;
      }

      span {
         width: 100%;
         height: 4px;
         background: #41456B;
         border-radius: 7px;

         @media(max-width: 425px) {
            height: 3px;
         }
      }
   }
}

</style>