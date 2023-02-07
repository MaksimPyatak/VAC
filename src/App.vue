<script>
import { RouterLink, RouterView } from 'vue-router'
import EmptyLayout from "./layouts/EmptyLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";

export default {
   components: {
      EmptyLayout, MainLayout
   },
   computed: {
      layout() {
         return this.$route.meta.layout + '-layout'
      }
   }
}
</script>

<template>
   <component :is="layout">
      <router-view />
   </component>
</template>

<style lang="scss">
//.wrapper {
//      position: relative;
//      min-height: 100%;
//      margin: 0 auto;
//      display: flex;
//      flex-direction: column;
//   }
</style>
