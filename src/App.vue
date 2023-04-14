<template>
   <Preloader />
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
import Preloader from './components/Preloader.vue';


export default {
   components: {
      EmptyLayout,
      MainLayout,
      Preloader
   },
   computed: {
      layout() {
         return this.$route.meta.layout + '-layout'
      }
   },
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
