import{C as T}from"./Calculator-66078f74.js";import{G as P,_ as M,B as j,C as B,l as O,r as x,o as p,c as h,a as t,t as b,b as k,w as S,F as U,f as v,e as L,p as q,d as E}from"./index-8819f449.js";import{i as z,$ as R,S as D,a as F}from"./swiper-slide-dd7b7c95.js";import{N}from"./navigation-4c814e19.js";import{s as G}from"./formatting-kilometres-7cf410c7.js";/* empty css                   *//* empty css                       */import"./Card-17d1dcca.js";function H({swiper:e,extendParams:g,on:u}){g({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let m=!1,A=!1;e.thumbs={swiper:null};function r(){const a=e.thumbs.swiper;if(!a||a.destroyed)return;const s=a.clickedIndex,i=a.clickedSlide;if(i&&R(i).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof s>"u"||s===null)return;let l;if(a.params.loop?l=parseInt(R(a.clickedSlide).attr("data-swiper-slide-index"),10):l=s,e.params.loop){let d=e.activeIndex;e.slides.eq(d).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,d=e.activeIndex);const f=e.slides.eq(d).prevAll(`[data-swiper-slide-index="${l}"]`).eq(0).index(),_=e.slides.eq(d).nextAll(`[data-swiper-slide-index="${l}"]`).eq(0).index();typeof f>"u"?l=_:typeof _>"u"?l=f:_-d<d-f?l=_:l=f}e.slideTo(l)}function y(){const{thumbs:a}=e.params;if(m)return!1;m=!0;const s=e.constructor;if(a.swiper instanceof s)e.thumbs.swiper=a.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(z(a.swiper)){const i=Object.assign({},a.swiper);Object.assign(i,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(i),A=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",r),!0}function w(a){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const i=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():s.params.slidesPerView;let l=1;const d=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(l=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(l=1),l=Math.floor(l),s.slides.removeClass(d),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let o=0;o<l;o+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+o}"]`).addClass(d);else for(let o=0;o<l;o+=1)s.slides.eq(e.realIndex+o).addClass(d);const f=e.params.thumbs.autoScrollOffset,_=f&&!s.params.loop;if(e.realIndex!==s.realIndex||_){let o=s.activeIndex,n,I;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const V=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),C=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof V>"u"?n=C:typeof C>"u"?n=V:C-o===o-V?n=s.params.slidesPerGroup>1?C:o:C-o<o-V?n=C:n=V,I=e.activeIndex>e.previousIndex?"next":"prev"}else n=e.realIndex,I=n>e.previousIndex?"next":"prev";_&&(n+=I==="next"?f:-1*f),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(n)<0&&(s.params.centeredSlides?n>o?n=n-Math.floor(i/2)+1:n=n+Math.floor(i/2)-1:n>o&&s.params.slidesPerGroup,s.slideTo(n,a?0:void 0))}}u("beforeInit",()=>{const{thumbs:a}=e.params;!a||!a.swiper||(y(),w(!0))}),u("slideChange update resize observerUpdate",()=>{w()}),u("setTransition",(a,s)=>{const i=e.thumbs.swiper;!i||i.destroyed||i.setTransition(s)}),u("beforeDestroy",()=>{const a=e.thumbs.swiper;!a||a.destroyed||A&&a.destroy()}),Object.assign(e.thumbs,{init:y,update:w})}const K=P("carStore",{state:()=>({listCars:[{id:1,imgExterior:{1:new URL("/VAC/assets/1-4cb7f820.jpg",self.location),2:new URL("/VAC/assets/2-c65baf19.webp",self.location),3:new URL("/VAC/assets/3-03361281.webp",self.location),4:new URL("/VAC/assets/4-2c7bbc63.jpeg",self.location),4:new URL("/VAC/assets/5i-8091731d.jpg",self.location)},imgInterior:{1:new URL("/VAC/assets/1i-45061a4a.jpg",self.location),2:new URL("@/img/CarsCatalog/Porsche/2i.webp",self.location),3:new URL("@/img/CarsCatalog/Porsche/3i.webp",self.location),4:new URL("@/img/CarsCatalog/Porsche/4i.jpeg",self.location),4:new URL("/VAC/assets/5i-8091731d.jpg",self.location)},wathcing:8,make:"Porsche",model:"Panamera",title:"Porsche Panamera II Turbo S E-Hybrid",link:"car",price:15e4,year:"2012",bodyType:"Sedan",transmission:"Manual",kilometres:"1 000 kilometres",detail:["Rear wheel drive","6 cylinders","11 l. per 100 km.","2500-4000 rpm","0-100 in 2.7 s.","Seats 4 - 5","325 - 690 horsepower","Power steering"],description:["Porsche 911 - a sports car manufactured by the German company Porsche AG in the back of a two-door coupe or a convertible based on it, produced in different generations from 1964 to the present day.","The 911 index was not originally planned for the timeless designation of different generations of the same car, and was no more than one of many similar in the through three-digit internal factory numbering of all Porsche models assigned to a very specific 1964 model."]},{id:2,img:{1:new URL("/VAC/assets/1-d12652e2.jpg",self.location),2:new URL("/VAC/assets/2-46a19f16.jpg",self.location),3:new URL("/VAC/assets/3-2b606c5a.jpg",self.location)},make:"Audi",model:"A7",title:"Audi A7 I (4G) S-tronic",price:"23 500",year:"2015",bodyType:"Trucks",transmission:"Automatic",kilometres:"150 000 Kilometres"},{id:3,img:{1:new URL("/VAC/assets/1-07d86a1d.webp",self.location),2:new URL("/VAC/assets/2-86eff2ae.webp",self.location),3:new URL("/VAC/assets/3-de1269d3.webp",self.location)},make:"Audi",model:"A7",title:"Audi A7 Sportback 3.0 TDI quattro/S-Line",price:"35 500",year:"2014",bodyType:"SUV",transmission:"Automatic",kilometres:"96 800 kilometres"},{id:4,img:{1:new URL("/VAC/assets/1-ff226d32.webp",self.location),2:new URL("/VAC/assets/2-0e132e2e.webp",self.location),3:new URL("/VAC/assets/3-b6171ea6.webp",self.location)},make:"Audi",model:"Q5",title:"Audi Q5 2.0 TFSI quattro",price:"65 000",year:"2012",bodyType:"Hatchback",transmission:"Manual",kilometres:"145 000 kilometres"},{id:5,img:{1:new URL("/VAC/assets/1-d1c87629.webp",self.location),2:new URL("/VAC/assets/2-27a5c193.webp",self.location),3:new URL("/VAC/assets/3-cd9e845d.webp",self.location)},make:"Audi",model:"Q5",title:"Audi Q5 S Line TDi Quattro S-A 2.0",price:"35 000",year:"2017",bodyType:"Coupe",transmission:"Manual",kilometres:"105 000 kilometres"},{id:6,img:{1:new URL("/VAC/assets/1-36138bd5.jpg",self.location),2:new URL("/VAC/assets/2-eafa89f7.webp",self.location),3:new URL("/VAC/assets/3-fb467029.webp",self.location),4:new URL("/VAC/assets/4-9cc7362e.webp",self.location)},make:"Mercedes-Benz",model:"CLAI",title:"Mercedes-Benz CLA I (C117, X117) 200 More information",price:"150 000",year:"2018",bodyType:"Convertiable",transmission:"Automatic",kilometres:"20 000 kilometres"},{id:7,img:{1:new URL("/VAC/assets/1-7e0f2eb2.jpg",self.location),2:new URL("/VAC/assets/2-b30c25cc.jpeg",self.location),3:new URL("/VAC/assets/3-86ab70dc.jpg",self.location)},make:"Mercedes-Benz",model:"Class III",title:"Mercedes-Benz E-Class III (W211, S211) Restyling 230",price:"125 000",year:"2012",bodyType:"Sedan",transmission:"Automatic",kilometres:"50 000 kilometres"},{id:8,img:{1:new URL("/VAC/assets/1-d543ff66.jpg",self.location),2:new URL("/VAC/assets/2-feaff6df.jpg",self.location),3:new URL("/VAC/assets/3-28bf78da.jpg",self.location)},make:"Mercedes-Benz",model:"W124",title:"Mercedes-Benz W124 420",price:"3 500",year:"1987",bodyType:"Sedan",transmission:"Manual",kilometres:"550 000 kilometres"},{id:9,img:{1:new URL("/VAC/assets/1-afbad3d6.jpg",self.location),2:new URL("/VAC/assets/2-04470db6.jpg",self.location),3:new URL("/VAC/assets/3-ce6061fa.jpg",self.location),4:new URL("/VAC/assets/4-9b245a11.jpg",self.location)},make:"Mitsubishi",model:"Outlander",title:"Mitsubishi Outlander PHEV",price:"18 000",year:"2018",bodyType:"SUV",transmission:"Automatic",kilometres:"68 000 kilometres"},{id:10,img:{1:new URL("/VAC/assets/1-27018eab.webp",self.location),2:new URL("/VAC/assets/2-2d62c1e0.webp",self.location),3:new URL("/VAC/assets/3-9eac46e4.webp",self.location)},make:"Mitsubishi",model:"Outlander",title:"MITSUBISHI OUTLANDER 2.0 CVT INVITE",price:"17 000",year:"2018",bodyType:"SUV",transmission:"Automatic",kilometres:"91 000 kilometres"},{id:11,img:{1:new URL("/VAC/assets/1-24c8a1ac.webp",self.location),2:new URL("/VAC/assets/2-2cc1d4ad.webp",self.location),3:new URL("/VAC/assets/3-1d5964c7.webp",self.location)},make:"Mitsubishi",model:"Outlander",title:"Mitsubishi Outlander (ZK MY16) LS wagon",price:"18 200",year:"2019",bodyType:"SUV",transmission:"Manual",kilometres:"91 000 kilometres"},{id:12,img:{1:new URL("/VAC/assets/2-542bea15.webp",self.location),2:new URL("/VAC/assets/1-bdcbf858.webp",self.location),3:new URL("/VAC/assets/3-a4d230a0.webp",self.location)},make:"Porsche",model:"Cayenne",title:"Porsche Cayenne V8 Turbo",price:"102 000",year:"2021",bodyType:"SUV",transmission:"Manual",kilometres:"22 000 kilometres"},{id:13,img:{1:new URL("/VAC/assets/1-4cb7f820.jpg",self.location),2:new URL("/VAC/assets/2-c65baf19.webp",self.location),3:new URL("/VAC/assets/3-03361281.webp",self.location),4:new URL("/VAC/assets/4-2c7bbc63.jpeg",self.location)},make:"Porsche",model:"Panamera",title:"Porsche Panamera II Turbo S E-Hybrid  ",price:"38 000",year:"2012",bodyType:"Sedan",transmission:"Automatic",kilometres:"550 000 kilometres"},{id:14,img:{1:new URL("/VAC/assets/1-53ea60b7.webp",self.location),2:new URL("/VAC/assets/2-57b9d82d.webp",self.location),3:new URL("/VAC/assets/3-8465cb3d.webp",self.location)},make:"Porsche",model:"911",title:"Porsche 911 Targa 4 GTS ",price:"88 000",year:"2016",bodyType:"Sedan",transmission:"Automatic",kilometres:"125 000 kilometres"},{id:15,img:{1:new URL("/VAC/assets/1-402cc6d8.webp",self.location),2:new URL("/VAC/assets/2-bbc4c752.webp",self.location),3:new URL("/VAC/assets/3-90b370e5.webp",self.location)},make:"Porsche",model:"Macan",title:"PORSCHE MACAN GTS",price:"90 300",year:"2022",bodyType:"SUV",transmission:"Manual",kilometres:"5 000 kilometres"},{id:16,img:{1:new URL("/VAC/assets/1-e6c956df.webp",self.location),2:new URL("/VAC/assets/2-adb9fe65.webp",self.location),3:new URL("/VAC/assets/3-c93f325c.webp",self.location)},make:"Porsche",model:"Macan",title:"	Porsche Macan (95B) ",price:"92 000",year:"2022",bodyType:"SUV",transmission:"Manual",kilometres:"10 000 kilometres"}]}),actions:{doActiveInventory(e){this.activeInventory=e}}});const Q={components:{Swiper:D,SwiperSlide:F,Calculator:T,Button:j},data(){return{}},methods:{},computed:{getItem(){return this.carStore.listCars.find(e=>e.id==this.$route.params.id)},getFormatKilometres(){return parseFloat(this.getItem.kilometres.split(" ").join(""))}},setup(){const e=B(),g=K(),u=O(null);return{carStore:g,menuStore:e,modules:[N,H],selectedValueKilometres:G,thumbsSwiper:u,setThumbsSwiper:A=>{u.value=A}}}},c=e=>(q("data-v-e29af581"),e=e(),E(),e),W={class:"car-page"},Y={class:"car-page__container _container"},X={class:"car-page__maim-section"},Z={class:"car-page__title-box"},J={class:"car-page__title"},$=c(()=>t("div",{class:"car-page__subtitle"}," Watching now 8 people ",-1)),ee={class:"car-page__car-data"},se={class:"car-page__swiper-box"},te=["src"],ae=["src","alt"],ie={class:"car-page__data-box"},oe={class:"car-page__main-data"},le={class:"car-page__price-box",id:"price-box"},ne=c(()=>t("div",{class:"car-page__info-headig"},"Price",-1)),re={class:"car-page__info-data"},ce={class:"car-page__body-box",id:"body-box"},de=c(()=>t("div",{class:"car-page__info-headig"},"Body",-1)),me={class:"car-page__info-data"},pe={class:"car-page__year-box",id:"year-box"},ue=c(()=>t("div",{class:"car-page__info-headig"},"Year",-1)),fe={class:"car-page__info-data"},be={class:"car-page__transmission-box",id:"transmission-box"},_e=c(()=>t("div",{class:"car-page__info-headig"},"Transmission",-1)),he={class:"car-page__info-data"},ge={class:"car-page__kilometres-box",id:"kilometres-box"},we=c(()=>t("div",{class:"car-page__info-headig"},"Kilometres ",-1)),Ce={class:"car-page__info-data"},Ae=c(()=>t("div",{class:"car-page__horizontal-rule"},null,-1)),ye=c(()=>t("div",{class:"car-page__box-heading"}," Detail ",-1)),Ve={class:"car-page__detail"},Se={class:"car-page__detail-item"},xe=c(()=>t("div",{class:"car-page__horizontal-rule"},null,-1)),ke=c(()=>t("div",{class:"car-page__box-heading"}," Description ",-1)),Ue={class:"car-page__description"},ve={class:"car-page__content"},Ie=c(()=>t("div",{class:"calculator__title-box"},[t("h2",{class:"calculator__title"}," Calculate the installment plan for this car. ")],-1));function Le(e,g,u,m,A,r){const y=x("swiper-slide"),w=x("swiper"),a=x("Button"),s=x("Calculator");return p(),h("div",W,[t("div",Y,[t("div",X,[t("div",Z,[t("h2",J,b(r.getItem.title),1),$]),t("div",ee,[t("div",se,[k(w,{loop:!0,spaceBetween:10,thumbs:{swiper:m.thumbsSwiper},modules:m.modules,class:"car-page__first-swiper"},{default:S(()=>[(p(!0),h(U,null,v(r.getItem.imgExterior,i=>(p(),L(y,{class:"car-page__first-swiper-slide"},{default:S(()=>[t("img",{src:i},null,8,te)]),_:2},1024))),256))]),_:1},8,["thumbs","modules"]),k(w,{onSwiper:m.setThumbsSwiper,loop:!0,spaceBetween:10,slidesPerView:4,centeredSlides:!0,watchSlidesProgress:!0,modules:m.modules,navigation:!0,class:"car-page__second-swiper"},{default:S(()=>[(p(!0),h(U,null,v(r.getItem.imgExterior,i=>(p(),L(y,{class:"car-page__second-swiper-slide"},{default:S(()=>[t("img",{src:i,alt:r.getItem.title},null,8,ae)]),_:2},1024))),256))]),_:1},8,["onSwiper","modules"])]),t("div",ie,[t("div",oe,[t("div",le,[ne,t("h4",re,"$ "+b(new Intl.NumberFormat("uk-UA").format(Number(String(r.getItem.price).split(" ").join("")))),1)]),t("div",ce,[de,t("h4",me,b(r.getItem.bodyType),1)]),t("div",pe,[ue,t("h4",fe,b(r.getItem.year),1)]),t("div",be,[_e,t("h4",he,b(r.getItem.transmission),1)]),t("div",ge,[we,t("h4",Ce,b(r.getFormatKilometres),1)])]),Ae,ye,t("ul",Ve,[(p(!0),h(U,null,v(r.getItem.detail,i=>(p(),h("li",Se,b(i),1))),256))]),xe,ke,t("div",Ue,[(p(!0),h(U,null,v(r.getItem.description,i=>(p(),h("p",ve,b(i),1))),256))]),k(a,{text:"Request more information",width:280,mobileWidth:247,mobileHight:35,onClick:g[0]||(g[0]=i=>m.menuStore.selectMenu("ContactUs",!0))})])])]),k(s,{amoyntValue:r.getItem.price},{title:S(()=>[Ie]),_:1},8,["amoyntValue"])])])}const Ee=M(Q,[["render",Le],["__scopeId","data-v-e29af581"]]);export{Ee as default};