<template>
   <component :is="layout">
      <!--<Transition name="main">-->
      <router-view />
      <!--</Transition>-->
   </component>
</template>

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

<style lang="scss">
//.main-enter-active {
//   animation: bounce-in 1.5s;
//}
//.main-leave-active {
//   animation: bounce-in 1.5s reverse;
//}
//@keyframes bounce-in {
//   0% {
//      transform: scale(0);
//   }
//   100% {
//      transform: scale(1);
//   }
//}
</style>
