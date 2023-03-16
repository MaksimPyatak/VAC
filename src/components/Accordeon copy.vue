<template>
   <div class="accordeon" :class="{ 'closing-accordeon': isOpen }">
      <div class="accordeon__title " @click="this.isOpen = !this.isOpen">
         <slot name="title"></slot>
      </div>
      <div class="accordeon__icon-box" @click="this.isOpen = !this.isOpen">
         <img src="../img/icons/Arrow-Bottom.svg" alt="down arrow" class="accordeon__icon"
            :class="{ 'rotate-icon': isOpen }">
      </div>
      <slot v-if="!isOpen" name="tag"></slot>
      <div class="accordeon__content" :class="{ 'active-content': isOpen }">
         <slot name="content"></slot>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         isOpen: false,
      }
   },
   props: {
      filters: String,  //Замінити після прописування передавання масиву
   },
   emits: [
      'openAccordeon',
   ],
}
</script>

<style lang="scss" scoped>
.closing-accordeon {
   grid-template-rows: auto auto !important;
}

.accordeon {
   width: 100%;
   padding: 20px 30px;
   border: 1px solid #D7D7D7;
   display: grid;
   grid-template-columns: 1fr 65px;
   grid-template-rows: auto 0;
   transition: grid-template-rows 1s linear;

   @media (max-width: 768px) {
      padding: 20px 20px;
      grid-template-columns: 1fr 65px;
   }

   @media (max-width: 425px) {
      padding: 20px 20px;
      grid-template-columns: 1fr 34px;
   }

   &__title-box {
      width: 100%;

   }

   &__title {
      @include semibold_20;
      min-height: 32px;
      cursor: pointer;
   }

   &__icon-box {
      width: 24px;
      height: 24px;
      margin: 2px 0 0;
      padding: 2px 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-self: end;
      cursor: pointer;
   }

   &__icon {
      transition: rotate 0.1s;
   }

   .rotate-icon {
      transition: rotate 0.1s;
      transform-origin: 0 4px;
      rotate: x 180deg;
   }

   &__tag {
      grid-column: 1/3;
      display: flex;
      flex-wrap: wrap;
   }

   &__content {
      @include regular_16;
      margin-bottom: 0;
      border: 1px solid #D7D7D7;
      height: 0px;
      overflow: hidden;
      transition: all 1s linear;

      @media (max-width: 425px) {
         margin-bottom: 0;
      }
   }

   .active-content {
      margin-bottom: 13px;
      height: 100%;
   }

}</style>