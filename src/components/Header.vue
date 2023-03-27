<template>
   <div class="header">
      <div class="header__zero" :class="[menuStore.activeClass, menuStore.isActiveFilter]"
         @click="menuStore.close(), menuStore.closeFilter">
      </div>
      <div class="header__menu" :class="menuStore.activeClass">
         <component :is="menuStore.selectedMenu" @close="menuStore.close()">
            <!--@select="useMenuStore.selectMenu" -->
         </component>
      </div>
      <div class="header__container _container">
         <div class="header__logo-box">
            <router-link class="header__logo" to="/">
               <img src="../img/logo-img.svg" alt="logo image">
               <div class="header__logo-title">VAC</div>
            </router-link>
            <h4 v-if="inventoryStore.activeInventory" class="header__inventory">Invenroty</h4>
         </div>
         <div class="header__nav">
            <router-link to="/catalog" class="header__button-inventory">
               <Button v-if="!inventoryStore.activeInventory" text="Inventory" :width=137 :mobileHight=35 :empty=true />
            </router-link>
            <div v-if="requestButtonStore.nothingRequestButton" class="header__button-request">
               <Button @click="$router.push('/quiz/0')" v-if="requestButtonStore.isRequestButton" :width=200
                  :tabletWidth=178 :mobileWidth=130 :mobileHight=35 />
               <Button @click="$router.push(getLink)" class="header__button-apply" v-else text="apply for this vehicle"
                  :width=243 :tabletWidth=236 />
            </div>
            <div @click="menuStore.selectMenu('Menu')" class="header__burger">
               <span></span>
               <span></span>
               <span></span>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Button from "./Button.vue";
import Menu from "./Menu.vue";
import ContactUs from "./ContactUs.vue"
import Success from "./Success.vue"

import { useMenuStore } from "../stores/MenuStore.js"
import { useInventoryStore } from "../stores/InventoryStore.js"
import { useRequestButtonStore } from "../stores/RequestButtonStore.js";
import { useCarStore } from "../stores/CarsStore.js";

export default {
   data() {
      return {
         id: 0,
         link: '',
      }
   },
   components: {
      Button, Menu, Success, ContactUs
   },
   methods: {
      getId(param) {
         if (param > 0) {
            this.id = param;
         } else {
            this.id = 0;
         }
      },
   },
   computed: {
      getRequestButtonText() {
         return this.requestButtonStore.textRequestButton ? this.requestButtonStore.textRequestButton : ''
      },
      getLink() {
         return `/quiz/${this.carStore.activeCarId}`
      },
      //getRequestButtonWidth() {
      //   let width = this.requestButtonStore.requestButtonWidth ? this.requestButtonStore.requestButtonWidth : 200;
      //   let tabletWidth = this.requestButtonStore.requestButtonTabletWidth ? this.requestButtonStore.requestButtonTabletWidth : 178
      //   return { width, tabletWidth }
      //}
   },
   mounted() {
      //this.getLink();
   },
   setup() {
      const menuStore = useMenuStore();
      const inventoryStore = useInventoryStore();
      const requestButtonStore = useRequestButtonStore();
      const carStore = useCarStore();
      return {
         menuStore,
         inventoryStore,
         requestButtonStore,
         carStore,
      }
   },
}
</script>


<style scoped lang="scss">
.header {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 10;
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
      transition: top 0s ease 0s, background 0.5s ease 0.6s;
   }

   &__zero._active {
      top: 0 !important;
      opacity: 0.0;
      transition: all 0.9s ease 0s;
   }

   &__zero._active-filter {
      @media (max-width: 1024px) {
         top: 80px;
         background: rgba(0, 0, 0, 0.1);
         transition: top 0s ease 0s, background 0.5s ease 0.6s;
      }
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
      //overflow: scroll;
      transition: all 0.9s ease 0s;
      background: #FFFFFF;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
      overflow-y: auto;
      overflow-x: hidden;
      z-index: 1;

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

   &__logo-box {
      display: flex;
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

   &__inventory {
      margin-left: 40px;

      @media(max-width: 650px) {
         display: none;
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
      margin: 0 0 0 20px;

      @media(max-width: 650px) {
         margin: 0 0 0 20px;
      }
   }

   &__button-apply {
      @media(max-width: 500px) {
         display: none;
      }
   }

   &__burger {
      width: 37px;
      height: 30px;
      margin-left: 63px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;

      @media(max-width: 650px) {
         margin-left: 23px;
      }

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