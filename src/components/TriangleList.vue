<script >//setup
   export default {
      props:[ 
         'list'
      ]
   }
</script>

<template class="triangle-list">
   <div class="triangle-list__item" v-for="item in list">
      <div class="triangle-list__item-number-box">
         <img class="triangle-list__item-number-frame" src="/src/img/img-components/img-triangle-list/Polygon 103.jpg"
            alt="">
         <div class="triangle-list__item-number">
            <h4 class="triangle-list__item-number-content">{{ item.id }}</h4>
         </div>
      </div>
      <div class="triangle-list__content">
         <div class="triangle-list__title">{{ item.title }}</div>
         <div class="triangle-list__text">{{ item.text }}</div>
      </div>
   </div>
</template>

<style scoped lang="scss">
   .triangle-list {

      
      &__item {
         width: 100%;
         display: grid;
         grid-template-columns: auto 1fr;

         &:not(:last-child) {
            margin: 0 0 40px;
            @media (max-width: 425px) {
               margin: 0 0 20px;
            }
         }
      }

		&__item-number-box {
         width: 75px;
         height: 67px;
         margin: 0 20px 0 0;
         position: relative;
         @media (max-width: 425px) {
            width: 53px;
            height: 47px;
         }
		}

		&__item-number-frame {
         width: 100%;
		}

		&__item-number {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         padding: 12px 0 0;
         display: flex;
         justify-content: center;
         align-items: center;
         color: var(--color-content);
		} 
      
      &__item-number-content {

      }     

		&__content {

		}

		&__title {
         @include semibold_20;
         width: 100%;
         margin: 0 0 5px;
         color: var(--color-content);
		}

		&__text {
         @include regular_16;
         width: 100%;
         color: #606276;
		}
}

</style>
