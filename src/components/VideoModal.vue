<template>
   <div class="modal" :class="{ 'is-active': activeModal }" @click="$emit('close')" >
      <div class="modal__box">
         <img class="modal__close" src="../img/video/Close.svg" alt="" @click="$emit('close')">
         <iframe 
            width="100%" 
            height="100%" 
            class="modal__youtube" 
            :src=this.url 
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
         </iframe>
      </div>
   </div>
</template>

<script>
   export default {
      props: {
         url: URL
      }
   }
</script>


<style lang="scss" scoped>
.modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.1);
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center; 

   &__box {
      position: relative;
      max-width: 867px;
      width: 100%;
      margin: 84px;
      aspect-ratio: 16 / 9;
      @media (max-width: 766px) {
         margin: 50px 24px 24px;
      }
      @media (max-width: 600px) {
      }
   }

   &__close {    
      cursor: pointer; 
      position: absolute;
      top: 0;
      right: -50px;
      width: 24px;
      @media (max-width: 766px) {
         top: -35px;
         right: 0;
      }
   }

   &__youtube { 
      width: 100%;
      height: 100%;
   }
}
</style>