<template>
   <div class="tag" @click="$emit('closeTag')"> <!--Можливо затосувати Pinia -->
      <div class="tag__close">
         <img src="../img/icons/Close-blue.svg" alt="close" class="tag__close-icon">
      </div>
      <div class="tag__filter">
         <slot></slot>
      </div>
   </div>
</template>

<script>
   export default {
      emits: [
         'closeTag',
      ],
   }
</script>

<style lang="scss" scoped>
.tag {
   width: 71px;
   height: 35px;
   padding: 10px 0 10px 10px;
   display: flex;
   align-items: center;
   background: rgba(116, 129, 255, 0.2);
   border-radius: 2px;
   cursor: pointer;

   &__close {
      width: 9px;
      height: 9px;
      margin-right: 7px;
   }

   &__close-icon {}

   &__filter {
      display: flex;
      white-space: nowrap;
      overflow: hidden;
   }
}
</style>