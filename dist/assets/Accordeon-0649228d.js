import{_ as a,o as t,c,a as s,x as i,D as d,E as _}from"./index-d1a67418.js";const l="/VAC/assets/Arrow-Bottom-c4e23ba6.svg";const p={data(){return{isOpen:!1,isAnimation:!1}},methods:{openAccordeon(){this.isOpen=!this.isOpen}}},m={class:"accordeon"},u={key:0,class:"accordeon__content"};function v(o,e,f,O,n,A){return t(),c("div",m,[s("div",{class:"accordeon__title",onClick:e[0]||(e[0]=r=>this.isOpen=!this.isOpen)},[i(o.$slots,"title",{},void 0,!0)]),s("div",{class:"accordeon__icon-box",onClick:e[1]||(e[1]=r=>this.isOpen=!this.isOpen)},[s("img",{src:l,alt:"down arrow",class:d(["accordeon__icon",{"rotate-icon":n.isOpen}])},null,2)]),n.isOpen?(t(),c("div",u,[i(o.$slots,"content",{},void 0,!0)])):_("",!0)])}const h=a(p,[["render",v],["__scopeId","data-v-483bb89e"]]);export{h as A};