import{_ as p,B as g,H as C,u as v,r as n,o as s,c as a,a as t,E as c,b as l,w as f,G as r,e as u,R as k,S as Q,p as w,d as B}from"./index-c0d4f458.js";import{C as S}from"./CarCard-5bc080fc.js";import q from"./WhatBudget-f5a02ee7.js";import b from"./EmploymentStatus-5f12d836.js";import"./Card-5022cdbd.js";import"./swiper-slide-9be0ebd5.js";import"./formatting-kilometres-7cf410c7.js";/* empty css                   */import"./QuizCheck-6aa92413.js";const z="/VAC/assets/Arrow-left-11daf5a6.svg";const x={components:{CarCard:S,Button:g,WhatBudget:q,EmploymentStatus:b},data(){return{someQuestion:"what-budget",showingCar:!1,grdColumns:"",process:"",nextQuestion:"",previous:"",getLink:"",notSelected:!1}},methods:{Example(){console.log(),console.log(),console.log(),console.log(),console.log()},whatNext(e){this.nextQuestion=e,this.getLink=`/quiz/${this.carStore.activeCarId}/${this.nextQuestion}`,this.notSelected==!0&&(this.notSelected=!1)},pressContinue(){console.log(this.someQuestion),console.log(this.nextQuestion),console.log(this.someQuestion!=this.nextQuestion),this.someQuestion!=this.nextQuestion?(this.previous=this.someQuestion,this.someQuestion=this.nextQuestion,this.process=this.nextQuestion,this.$router.push(this.getLink)):this.notSelected=!0},comeBack(){this.someQuestion=this.previous},getСolumns(){this.someQuestion=="what-budget"?this.grdColumns="one-columns":this.grdColumns="two-columns"},noCar(){this.carStore.activeCarId=0}},computed:{getItem(){return this.carStore.listCars.find(e=>e.id==this.$route.params.id)},whatProcess(){switch(this.someQuestion){case"employment-status":this.process="employment-status";break;case"":this.process="";break}}},watch:{someQuestion:{handler(e,o){this.getСolumns()},deep:!0,immediate:!0}},mounted(){this.requestButtonStore.noButton(!1),this.getСolumns(),this.nextQuestion=this.someQuestion},unmounted(){this.requestButtonStore.noButton(!0),this.carStore.showCar(!1),this.noCar()},setup(){const e=C(),o=v();return{requestButtonStore:e,carStore:o}}},m=e=>(w("data-v-a6df7207"),e=e(),B(),e),y={class:"quiz _container"},I={class:"quiz__box"},V={class:"quiz__question-box"},N={class:"quiz__process-bar"},$={key:0,class:"quiz__not-selected"},A=m(()=>t("div",{class:"quiz__back-img-box"},[t("img",{src:z,alt:"Arrow Bottom",class:"quiz__back-img"})],-1)),E=m(()=>t("div",{class:"quiz__back-content"}," Back ",-1)),D=[A,E];function L(e,o){const d=n("router-view"),h=n("Button"),_=n("CarCard");return s(),a("div",y,[t("div",I,[t("div",V,[t("div",N,[t("div",{class:c(["quiz__complete-bar",e.process])},null,2)]),l(d,{onContinue:e.whatNext},{default:f(({Component:i})=>[(s(),u(Q,null,[(s(),u(k(i)))],1024))]),_:1},8,["onContinue"]),e.notSelected?(s(),a("div",$," Make a choice ")):r("",!0),t("div",{class:c(["quiz__management",e.grdColumns])},[l(h,{class:"quiz__continue-button",text:"Сontinue",width:222,mobileHight:35,onClick:e.pressContinue},null,8,["onClick"]),e.someQuestion!=="what-budget"?(s(),a("div",{key:0,class:"quiz__back-box",onClick:o[0]||(o[0]=(...i)=>e.comeBack&&e.comeBack(...i))},D)):r("",!0)],2)]),e.$route.params.id!=0?(s(),u(_,{key:0,class:"quiz__car-card",cardData:e.getItem},null,8,["cardData"])):r("",!0)])])}const J=p(x,[["render",L],["__scopeId","data-v-a6df7207"]]);export{J as default};