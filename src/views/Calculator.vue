<template>
   <Title>
      Use our free calculator!
   </Title>
   <div class="calculator-section">
      <div class="calculator-section__container _container">
         <Calculator class="calculator-section__calculator" />
      </div>
   </div>
</template>

<script>
import Title from '../components/Title.vue';
import Calculator from '../components/Calculator.vue';
export default {
   components:{
      Title,
      Calculator,
   }
}
</script>

}
<style lang="scss" scoped>
.calculator-section {
   width: 100%;
   margin: 40px 0;
   @media (max-width: 425px) {
      margin: 30px 0 ;
   }
}
</style>