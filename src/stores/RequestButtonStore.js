import { defineStore } from "pinia";

export const useRequestButtonStore = defineStore('requestButtonStore', {
   state: () => ({
      textRequestButton: false,
      //requestButtonWidth: false,
      //requestButtonTabletWidth: false,
      isRequestButton: true,
   }),
   actions: {
      //changeRequestButton(text, width, tabletWidth) {
      //   this.textRequestButton = text;
      //   this.requestButtonWidth = width;
      //   this.requestButtonTabletWidth = tabletWidth;
      //},
      changeButton(param) {
         this.isRequestButton = param;
      }
   },
}) 