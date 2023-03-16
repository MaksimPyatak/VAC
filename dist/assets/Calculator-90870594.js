import{_ as f,r as _,o as I,c as C,a as e,i as S,b as i,w as h,t as r,j as g,v as y,h as w,B,u as W,p as x,d as P}from"./index-365130de.js";import{C as N}from"./Card-76dbc40a.js";const m={components:{Button:B,Card:N},props:{amoyntValue:Number},data(){return{amoynt:15e4,duration:18,poor:!1,average:!0,good:!0,durationBackgroundSize:"30% 100%",amoyntBackgroundSize:"27% 100%",displayThumb:"block",heightInput:"8px",backgroundImageInput:"linear-gradient(#7481FF, #7481FF)",pointerInput:"auto"}},computed:{biWeeklyPayment(){const t=this.amoynt/this.duration/2;return Math.round(t)},monthlyPayment(){const t=this.amoynt/this.duration;return Math.round(t)},WeeklyPayment(){const t=this.amoynt/this.duration/4;return Math.round(t)}},methods:{computedAmoynValue(){this.amoyntValue&&(this.amoynt=String(this.amoyntValue).split(" ").join(""),this.displayThumb="none",this.heightInput="1px",this.backgroundImageInput="#D7D7D7",this.pointerInput="auto")},changeTab(t,o){o==="Poor"?(this.poor=!1,this.average=!0,this.good=!0,this.duration=t,this.durationBackgroundSize="30% 100%"):o==="Average"?(this.poor=!0,this.average=!1,this.good=!0,this.duration=t,this.durationBackgroundSize="50% 100%"):o==="Good"&&(this.poor=!0,this.average=!0,this.good=!1,this.duration=t,this.durationBackgroundSize="70% 100%")},handleAmountChange(t){let o=t.target;const u=o.min,c=o.max,a=o.value;this.amoyntBackgroundSize=(a-u)*100/(c-u)+"% 100%"},handleDurationChange(t){let o=t.target;const u=o.min,c=o.max,a=o.value;this.durationBackgroundSize=(a-u)*100/(c-u)+"% 100%"}},mounted(){this.computedAmoynValue()}},b=()=>{W(t=>({e5fd518c:t.amoyntBackgroundSize,"7e716d28":t.backgroundImageInput,"8d0958d8":t.heightInput,c9717e08:t.pointerInput,"6ee68ba3":t.displayThumb,"2e4523b2":t.durationBackgroundSize}))},v=m.setup;m.setup=v?(t,o)=>(b(),v(t,o)):b;const V=m,l=t=>(x("data-v-cb0cd193"),t=t(),P(),t),A={class:"calculator"},T={class:"calculator__heading"},z=l(()=>e("h2",{class:"calculator__title"}," Let’s figure out how much you can afford ",-1)),D=l(()=>e("div",{class:"calculator__subtitle"}," Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments. ",-1)),F={class:"calculator__calculator-box"},j={class:"calculator__button-box"},M={class:"calculator__amount"},U={class:"calculator__input-heading"},H=l(()=>e("label",{class:"calculator__label",for:"amount"}," Loan Amount ",-1)),G={class:"calculator__value"},L={class:"calculator__duration"},q={class:"calculator__input-heading"},E=l(()=>e("label",{class:"calculator__label",for:"duration"}," Loan Duration ",-1)),J={class:"calculator__value"},K=l(()=>e("span",{class:"calculator__bold-16"},"month",-1)),O={class:"calculator__bi-weekly"},Q=l(()=>e("div",{class:"calculator__result-title"}," Bi-Weekly Payment ",-1)),R={class:"calculator__result"},X={class:"calculator__monthly"},Y=l(()=>e("div",{class:"calculator__result-title"}," Monthly Payment ",-1)),Z={class:"calculator__result"},$={class:"calculator__weekly"},tt=l(()=>e("div",{class:"calculator__result-title"}," Weekly Payment ",-1)),ot={class:"calculator__result"};function et(t,o,u,c,a,n){const d=_("Button"),p=_("Card"),k=_("router-link");return I(),C("div",A,[e("div",T,[S(t.$slots,"title",{},()=>[z,D],!0)]),e("div",F,[i(p,{class:"calculator__range-box"},{default:h(()=>[e("div",j,[i(d,{class:"calculator__button-poor",text:"Poor",width:112,mobileWidth:85.45,hight:50,mobileHight:35,onClick:o[0]||(o[0]=s=>n.changeTab(18,"Poor")),empty:a.poor},null,8,["mobileWidth","empty"]),i(d,{class:"calculator__button-average",text:"Average",width:138,mobileWidth:105.29,hight:50,mobileHight:35,onClick:o[1]||(o[1]=s=>n.changeTab(30,"Average")),empty:a.average},null,8,["mobileWidth","empty"]),i(d,{class:"calculator__button-good",text:"Good",width:117,mobileWidth:89.26,hight:50,mobileHight:35,onClick:o[2]||(o[2]=s=>n.changeTab(42,"Good")),empty:a.good},null,8,["mobileWidth","empty"])]),e("div",M,[e("div",U,[H,e("h4",G," $ "+r(new Intl.NumberFormat("uk-UA").format(Number(String(a.amoynt).split(" ").join("")))),1)]),g(e("input",{class:"calculator__input",type:"range",name:"amount","onUpdate:modelValue":o[3]||(o[3]=s=>a.amoynt=s),min:"10000",max:"550000",step:"10000",onInput:o[4]||(o[4]=(...s)=>n.handleAmountChange&&n.handleAmountChange(...s))},null,544),[[y,a.amoynt]])]),e("div",L,[e("div",q,[E,e("h4",J,[w(r(a.duration)+" ",1),K])]),g(e("input",{class:"calculator__input",type:"range",name:"duration","onUpdate:modelValue":o[5]||(o[5]=s=>a.duration=s),min:"1",max:"60",onInput:o[6]||(o[6]=(...s)=>n.handleDurationChange&&n.handleDurationChange(...s))},null,544),[[y,a.duration]])])]),_:1}),i(p,{class:"calculator__result-box"},{default:h(()=>[e("div",O,[Q,e("h2",R,"$ "+r(new Intl.NumberFormat("uk-UA").format(Number(String(n.biWeeklyPayment).split(" ").join("")))),1)]),e("div",X,[Y,e("h4",Z,"$ "+r(new Intl.NumberFormat("uk-UA").format(Number(String(n.monthlyPayment).split(" ").join("")))),1)]),e("div",$,[tt,e("h4",ot,"$ "+r(new Intl.NumberFormat("uk-UA").format(Number(String(n.WeeklyPayment).split(" ").join("")))),1)]),i(k,{to:"/src/views/CatalogPage.vue",class:"calculator__button-inventory"},{default:h(()=>[i(d,{class:"calculator__request-button",width:"100%",tabletWidth:250,mobileWidth:"100%",mobileHight:"35"})]),_:1})]),_:1})])])}const st=f(V,[["render",et],["__scopeId","data-v-cb0cd193"]]);export{st as C};
