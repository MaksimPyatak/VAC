import { defineStore } from "pinia";

export const useMenuStore = defineStore('menuStore', {
   state: () => ({
      selectedMenu: '',
      activeClass: '',
      isActiveFilter: '',
      filterUnderMenu: '',
   }),
   actions: {
      selectMenu(param) {
         this.selectedMenu = param;
         this.activeClass = '_active';
         document.body.classList.add('lock');
         if (this.isActiveFilter) {
            this.filterUnderMenu = '_opened-menu'
         }
      },
      close() {
         this.activeClass = ' ';
         if (!this.isActiveFilter) {
            document.body.classList.remove('lock');
         }
         if (this.isActiveFilter) {
            this.filterUnderMenu = ''
         }
      },
      openFilter() {
         this.isActiveFilter = '_active-filter';
         //this.activeClass = '_active-filter';
         document.body.classList.add('lock');
      },
      closeFilter() {
         this.isActiveFilter = ' ';
         //this.activeClass = ' ';
         document.body.classList.remove('lock');
      },
   },
}) 