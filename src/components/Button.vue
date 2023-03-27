<script>
export default {
   props: {
      text: String,
      width: Number | String,
      tabletWidth: Number | String,
      mobileWidth: Number | String,
      hight: Number,
      mobileHight: Number,
      empty: Boolean,

   },
   data() {
      return {
         textDefault: 'Request a car',
         widthDefault: '100%',//px
         hightDefault: '45',//px
         borderDefault: '',//!!!!
         borderHoverDefault: '1px solid #6270FF',
         backGroundDefault: 'var(--color-buttom-default)',//змінні з base.css
         backGroundWhite: 'var(--color-white)',
         backGroundHoverDefault: 'var(--color-buttom-hover)',
         textColorDefault: '#FFFFFF',
         changeTabletWidth: '',
         changeBorder: '',
         changeBorderHover: '',
         changeWidth: '',
         changeHight: '',
         changeBackGround: '',
         changeBackGroundHover: '',
         changeTextColor: '',
         changeTextColorHover: ''
      }
   },
   mounted() {
      return (
         this.changeHight = this.hight ? (this.hight + 'px') : (this.hightDefault + 'px')),
         this.changeMobileHight = this.mobileHight ? (this.mobileHight + 'px') : this.changeHight,
         this.changeWidth = (this.width ? (this.width + 'px') : (this.widthDefault)),
         this.changeTabletWidth = (this.tabletWidth ? (this.tabletWidth + 'px') : this.changeWidth),
         this.changeMobileWidth = (this.mobileWidth ? (this.mobileWidth + 'px') : this.changeWidth),
         //this.changeBorder = (this.empty ? this.borderDefault : ''),
         //this.changeBackGround = (this.empty ? this.backGroundWhite : this.backGroundDefault),
         //this.changeTextColor = (this.empty ? this.backGroundDefault : this.textColorDefault),
         //this.changeBorderHover = (this.empty ? this.borderHoverDefault : ''),
         //this.changeBackGroundHover = (this.empty ? this.backGroundWhite : this.backGroundHoverDefault),
         this.changeTextColorHover = (this.empty ? this.backGroundHoverDefault : this.textColorDefault)
   },
   computed: {
      isEmpty() {
         return !this.empty
      }
   },
}
</script>

<template>
   <div class="button" :class="{ 'is-empty': empty, 'no-empty': isEmpty }">
      <div class="button__text font-button">{{ text ? text : textDefault }}</div>
   </div>
</template>

<style scoped lang="scss">
.no-empty {
   background: var(--color-buttom-default);
   color: var(--color-white);

   &:hover {
      background: var(--color-buttom-hover);

   }
}

.is-empty {
   border: 1px solid var(--color-accent);
   background: var(--color-white);
   color: var(--color-buttom-default);

   &:hover {
      border: 1px solid var(--color-buttom-hover);
      color: var(--color-buttom-hover);

   }
}

.button {
   width: v-bind(changeWidth);
   //min-width: 100%;
   height: v-bind(changeHight);
   //background: v-bind(changeBackGround);
   //border: v-bind(changeBorder);
   //border-radius: 2px;
   display: flex;
   justify-content: center;
   align-items: center;
   letter-spacing: 0.02em;
   text-transform: uppercase;
   //color: v-bind(changeTextColor);

   @media(max-width: 768px) {
      width: v-bind(changeTabletWidth);
   }

   @media(max-width: 425px) {
      width: v-bind(changeMobileWidth);
      height: v-bind(changeMobileHight);
   }

   &:hover {
      //background: v-bind(changeBackGroundHover);
      //border: v-bind(changeBorderHover);
      //color: v-bind(changeTextColorHover);
      cursor: pointer;
   }

   &__text {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 14px;

      @media(max-width: 425px) {
         font-size: 14px;
      }
   }
}
</style>