import { defineStore } from "pinia";

export const useInventoryStore = defineStore('inventoryStore', {
   state: () => ({
      activeInventory: false,
   }),
   actions: {
      doActiveInventory(param) {
         this.activeInventory = param;
         console.log(param);
      },
   },
}) 