<template class="question">
   <h4 class="question__title">
      <slot name="questionTitle"></slot>
   </h4>
   <div class="question__subtitle">
      <slot name="questionSubtitle"></slot>
      <slot name="questionHighlightedSubtitle"></slot>
   </div>
   <div class="question__main">
      <slot name="questionMain"></slot>
   </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.question {

   &__title {
      margin-bottom: 5px;
   }

   &__subtitle {
      @include regular_16;
      margin-bottom: 40px;
      color: #7C7A84;

      @media (max-width: 425px) {
         margin-bottom: 20px;
      }
   }

   &__main {
      margin-bottom: 40px;
   }
}
</style>