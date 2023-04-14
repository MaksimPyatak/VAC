<template>
   <div class="preloader" v-if="isPreloader">
      <div class="preloader__container">
         <img src="../img/logo-img.svg" alt="Logo image" class="preloader__img">
         <div class="preloader__text">
            Loading ...
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         isPreloader: true,
      }
   },
   methods: {
      closePreloader() {
         //document.onreadystatechange 
         document.addEventListener('readystatechange', () => {
            if (document.readyState == 'complete') {
               setTimeout(() => {
                  this.isPreloader = false
               }, 400)
               //this.isPreloader = false;
            }
         })
         //const that = this;
         //window.onload = function () {
         //   that.isPreloader = false;
         //   console.log(that.isPreloader);
         //}
         //console.log(this.isPreloader);
      }
   },
   mounted() {
      this.closePreloader();
   },
   //watch: {
   //   'document.readyState'() {
   //      console.log(document.readyState);
   //   }
   //}
}

</script>

<style lang="scss" scoped>
.preloader {
   z-index: 1000;
   position: absolute;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background: white;
   display: flex;
   justify-content: center;
   align-items: center;

   &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   &__img {
      width: 92.75px;
      margin-bottom: 27px;
      display: block;
   }

   &__text {
      @include regular_16;
   }
}
</style>