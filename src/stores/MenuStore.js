import { defineStore } from "pinia";

export const useMenuStore = defineStore('menuStore', {
   state: () => ({
      selectedMenu: '',
      activeClass: '',
   }),
   actions: {
      selectMenu(param) {
         this.selectedMenu = param;
         this.activeClass = '_active';
         document.body.classList.add('lock');
      },
      close() {
         this.activeClass = ' ';
         document.body.classList.remove('lock');
      },
   },
}) 