<script>
   import Button from "../components/Button.vue"
   export default {
      components: { Button }
   }
</script>

<template>
   404
   <div class="about">
   <Button 
   text="Inventory"
   width="150"
   hight="45"
   tabletWidth="100"
   mobileHight="80"
   empty="a"
   />
</div>
</template>



<style scoped>
* {
   font-size: 44px;
   color:yellowgreen;
}
.about :deep(.button) {
   height: 100px;
}
</style>