<template>
   <div class="box" :id="dataInput.id" :class="{ active: dataInput.checked }">
      <!--<input class="box__content" :name="nameCheckbox" :id="dataInput.id" type="radio" :value="dataInput.textCheckBox"
         v-model="checked" autocomplete="off" />-->
      <div>{{ dataInput.textCheckBox }}</div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         //checked: false,
      }
   },
   props: {
      //nameCheckbox: String,
      dataInput: Object,
   }
}
</script>

<style lang="scss" scoped>
.box {
   height: 45px;
   border: 1px solid #F1F1F1;
   border-radius: 2px;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;

   @include semibold_16;

   &:hover {
      border-color: var(--color-accent);
      color: var(--color-accent);
   }

   &__content {
      position: absolute;
      z-index: -1;
      opacity: 0;
   }
}

.active {
   border-color: var(--color-accent);
   color: var(--color-accent);
}
</style>