<template>
   <div class="accordeon">
      <div class="accordeon__title " @click="openAccordeon">
         <slot name="title"></slot>
      </div>
      <div class="accordeon__icon-box" @click="openAccordeon">
         <img src="../img/icons/Arrow-Bottom.svg" alt="down arrow" class="accordeon__icon"
            :class="{ 'rotate-icon': isOpen }">
      </div>
      <slot v-if="!isOpen" name="tag"></slot>
      <!--<Transition name="accord">-->
         <div class="accordeon__content" :class="{'active-content':  isOpen, 'showing-start-content': isAnimation, 'showing-end-content': isAnimationEnd, 'showing-height-auto': heightAuto}" >
            <!--v-if="isOpen" -->
            <slot name="content"></slot>
         </div>
      <!--</Transition>-->
   </div>
</template>

<script>
import Tag from './Tag.vue'
   export default {
      components: {
         Tag,
      },
      data() {
         return {
            isOpen: false,
            isAnimation: false,
            isAnimationEnd: false,
            heightAuto: false,
         }
      },
      props: {
         filters: String,  //Замінити після прописування передавання масиву
      },
      emits: [
         'openAccordeon', 
      ],
      methods: {
         openAccordeon() {
            if (!this.isOpen) {
               this.isOpen = !this.isOpen;
               this.$emit('openAccordeon');
               setTimeout(() => this.isAnimation = !this.isAnimation, 10);
               setTimeout(() => this.isAnimationEnd = !this.isAnimationEnd, 200);
               setTimeout(() => this.heightAuto = !this.heightAuto, 400);
            } else {
               this.isAnimationEnd = !this.isAnimationEnd
               setTimeout(() => this.heightAuto = !this.heightAuto, 600);
               setTimeout(() => this.isAnimation = !this.isAnimation, 400);
               setTimeout(() => this.isOpen = !this.isOpen, 500);
               setTimeout(() => this.$emit('openAccordeon'), 500);
            }
           
            //this.$emit('openAccordeon');
         },
      }
   }
</script>

<style lang="scss" scoped>


.accordeon {
   width: 100%;
   padding: 20px 30px;
   border: 1px solid #D7D7D7;
   display: grid;
   grid-template-columns: 1fr 65px;
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
      transition: rotate 0.5s;
   }

   .rotate-icon {
      transition: rotate 0.5s;
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
      margin-bottom: 13px;
      @media (max-width: 425px) {
         margin-bottom: 0;
      }
      height: 0;
      display: none;
      //opacity: 0;
      //position: relative;
      transition: all 1.5s ease-in ;
   }
   .active-content {
      display: block;
      overflow: hidden;
      transition: all 0.1s cubic-bezier(.43,.22,.9,.07) ;
   }

   .showing-start-content {
      //display: block;
      //height: 50px;
      //height: auto;
      //opacity: 1;
      //padding: 0;
      //background-color: #000;
      //animation-name: bounce;
      //animation-duration: 0.5s;
      //animation-timing-function: cubic-bezier(.43,.22,.9,.07);
      ////animation-direction: alternate;
      //animation-fill-mode: forwards;
      
      height: 30px;
      //opacity: 0.5;
      transform-origin: 0 50%;
      transform: rotatex(90deg);
      transition: all 0.5s linear;

   }
   .showing-end-content {
      
      transform: rotatex(0);;
      //opacity: 1;
      transition: transform 0.2s linear;
      transition: height 0.1s linear 0.001s;
   }
   .showing-height-auto {
      overflow: visible ;
      height: auto;
   }
}
@keyframes bounce {
  0% {
      height: 0;
      opacity: 0;
  }
  90% {
      height: 30px;
      opacity: 0.5;
      //padding: 0 0 40px 0;
  }
  100% { 
      height: auto;
      opacity: 1;
      //padding: 0;
  }
}

//.accord-enter-active,
//.accord-leave-active {
//  transition: all 2s ease;
////  transition: transform 0.5s ease;

//}

//.v-enter-from,
//.v-leave-to {
//   //margin-top: -100px;
//   opacity: 0;
//  transform: scaleY(-20px);
//  height: 100px;
//  line-height: 0;
//}

//.v-enter-to,
//.v-leave-from {
//   //margin-top: -100px;
//   opacity: 1;
//  transform: scaleY(0);
//  height: 100px;
//  line-height: 1.5em;
//}

//.v-enter-active {
//   transform: all 3.5s ease;
//   transform: opacity 0.5s ease 0.5s;
//}
//.v-leave-active {
//   transform: all 3.5s ease;
//   transform: opacity 0.5s ease 0.5s;   
//}


</style>