<script>
import {useMenuStore} from "../stores/MenuStore.js"
import {useInventoryStore} from "../stores/InventoryStore.js"
export default {
   emits: ['select', 'close'],
   setup() {
      const menuStore = useMenuStore();
      const inventoryStore = useInventoryStore();
      return {
         menuStore,
         inventoryStore
      }
   }
}
</script>

<template>
   <div class="menu__conteiner">
      <div class="menu__criss-cross" @click="menuStore.close()">
         <span></span>
         <span></span>
      </div>
      <div class="menu__list">
         <router-link v-if="!inventoryStore.activeInventory" to="/catalog" class="menu__item menu__inventory h4" @click="menuStore.close()">Inventory</router-link>
         <div class="menu__item h4" @click="menuStore.selectMenu('ContactUs')">Contact us</div>
         <router-link class="menu__item h4" to="/aboutVAC" @click="$emit('close')">About VAC</router-link>
         <router-link class="menu__item h4" to="/loan-rates" @click="$emit('close')">Loan Rates</router-link>
         <router-link class="menu__item h4" to="/video" @click="$emit('close')">Video</router-link>
         <router-link class="menu__item h4" to="/blog" @click="$emit('close')">Blog</router-link>
         <router-link class="menu__item h4" to="/calculator" @click="$emit('close')">Calculate</router-link>
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
      </div>
   </div>

</template>

<style scoped lang="scss">
.menu {

   &__conteiner {
      padding: 0 0 0 20px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
   }

   &__criss-cross {
      width: 37px;
      height: 28px;
      min-height: 28px;
      margin: 0 0 75px auto;
      position: relative;
      z-index: 4;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;

      span {
         width: 100%;
         height: 4px;
         display: block;
         background: #41456B;
         border-radius: 7px;
         
         @media(max-width: 425px) {
            height: 3px;
         }
         &:first-child {
            transform: rotate(-45deg) translate(-2px, 15px);
         }
         &:nth-child(2) {
            transform: rotate(45deg) translate(-2px, -15px);
         }
      }
   }

   &__list {
      flex: 1 1 auto;
   }

   &__item {
      display: block;
      margin: 0 0 20px;
      cursor: pointer;
      @media(max-width: 425px) {
         margin: 0 0 25px;
      }
   }

   &__inventory {
      display: none;
      @media(max-width: 650px) {
         display: block;
      }
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
</style>