<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import EmptyLayout from "./layouts/EmptyLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";
import SelectedCarLayout from "./layouts/SelectedCarLayout.vue";

export default {
   components: {
      HelloWorld, EmptyLayout, MainLayout, SelectedCarLayout
   },
   //data() {
   // return {
   //   view: 'EmptyLayout'
   // }
   //},
   computed: {
      layout() {
         console.log(this.$route.meta.layout + '-layout');
         return this.$route.meta.layout + '-layout'
      }
   }
}
</script>

<template>
   <component :is="layout">  
      <router-view/>
   </component>
</template>

<style>

</style>
