import{g as Z,b as U,$ as I,n as q,c as M,d as Q,S as w,a as ee}from"./swiper-slide-789ff6bf.js";import{C as ae}from"./Card-f50fd2f8.js";import{_ as j,r as X,o as N,c as A,a as E,b as G,w as O,F as W,f as F,e as te,t as H,p as K,d as z}from"./index-03ce7993.js";function ne({swiper:e,extendParams:S,on:v,emit:x}){const _=Z(),C=U();e.keyboard={enabled:!1},S({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function f(y){if(!e.enabled)return;const{rtlTranslate:$}=e;let c=y;c.originalEvent&&(c=c.originalEvent);const k=c.keyCode||c.charCode,t=e.params.keyboard.pageUpDown,n=t&&k===33,l=t&&k===34,g=k===37,b=k===39,a=k===38,o=k===40;if(!e.allowSlideNext&&(e.isHorizontal()&&b||e.isVertical()&&o||l)||!e.allowSlidePrev&&(e.isHorizontal()&&g||e.isVertical()&&a||n))return!1;if(!(c.shiftKey||c.altKey||c.ctrlKey||c.metaKey)&&!(_.activeElement&&_.activeElement.nodeName&&(_.activeElement.nodeName.toLowerCase()==="input"||_.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(n||l||g||b||a||o)){let P=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&e.$el.parents(`.${e.params.slideActiveClass}`).length===0)return;const L=e.$el,T=L[0].clientWidth,s=L[0].clientHeight,h=C.innerWidth,d=C.innerHeight,u=e.$el.offset();$&&(u.left-=e.$el[0].scrollLeft);const r=[[u.left,u.top],[u.left+T,u.top],[u.left,u.top+s],[u.left+T,u.top+s]];for(let D=0;D<r.length;D+=1){const p=r[D];if(p[0]>=0&&p[0]<=h&&p[1]>=0&&p[1]<=d){if(p[0]===0&&p[1]===0)continue;P=!0}}if(!P)return}e.isHorizontal()?((n||l||g||b)&&(c.preventDefault?c.preventDefault():c.returnValue=!1),((l||b)&&!$||(n||g)&&$)&&e.slideNext(),((n||g)&&!$||(l||b)&&$)&&e.slidePrev()):((n||l||a||o)&&(c.preventDefault?c.preventDefault():c.returnValue=!1),(l||o)&&e.slideNext(),(n||a)&&e.slidePrev()),x("keyPress",k)}}function m(){e.keyboard.enabled||(I(_).on("keydown",f),e.keyboard.enabled=!0)}function i(){e.keyboard.enabled&&(I(_).off("keydown",f),e.keyboard.enabled=!1)}v("init",()=>{e.params.keyboard.enabled&&m()}),v("destroy",()=>{e.keyboard.enabled&&i()}),Object.assign(e.keyboard,{enable:m,disable:i})}function le({swiper:e,extendParams:S,on:v,emit:x}){const _=U();S({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),e.mousewheel={enabled:!1};let C,f=M(),m;const i=[];function y(a){let T=0,s=0,h=0,d=0;return"detail"in a&&(s=a.detail),"wheelDelta"in a&&(s=-a.wheelDelta/120),"wheelDeltaY"in a&&(s=-a.wheelDeltaY/120),"wheelDeltaX"in a&&(T=-a.wheelDeltaX/120),"axis"in a&&a.axis===a.HORIZONTAL_AXIS&&(T=s,s=0),h=T*10,d=s*10,"deltaY"in a&&(d=a.deltaY),"deltaX"in a&&(h=a.deltaX),a.shiftKey&&!h&&(h=d,d=0),(h||d)&&a.deltaMode&&(a.deltaMode===1?(h*=40,d*=40):(h*=800,d*=800)),h&&!T&&(T=h<1?-1:1),d&&!s&&(s=d<1?-1:1),{spinX:T,spinY:s,pixelX:h,pixelY:d}}function $(){e.enabled&&(e.mouseEntered=!0)}function c(){e.enabled&&(e.mouseEntered=!1)}function k(a){return e.params.mousewheel.thresholdDelta&&a.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&M()-f<e.params.mousewheel.thresholdTime?!1:a.delta>=6&&M()-f<60?!0:(a.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),x("scroll",a.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),x("scroll",a.raw)),f=new _.Date().getTime(),!1)}function t(a){const o=e.params.mousewheel;if(a.direction<0){if(e.isEnd&&!e.params.loop&&o.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&o.releaseOnEdges)return!0;return!1}function n(a){let o=a,P=!0;if(!e.enabled)return;const L=e.params.mousewheel;e.params.cssMode&&o.preventDefault();let T=e.$el;if(e.params.mousewheel.eventsTarget!=="container"&&(T=I(e.params.mousewheel.eventsTarget)),!e.mouseEntered&&!T[0].contains(o.target)&&!L.releaseOnEdges)return!0;o.originalEvent&&(o=o.originalEvent);let s=0;const h=e.rtlTranslate?-1:1,d=y(o);if(L.forceToAxis)if(e.isHorizontal())if(Math.abs(d.pixelX)>Math.abs(d.pixelY))s=-d.pixelX*h;else return!0;else if(Math.abs(d.pixelY)>Math.abs(d.pixelX))s=-d.pixelY;else return!0;else s=Math.abs(d.pixelX)>Math.abs(d.pixelY)?-d.pixelX*h:-d.pixelY;if(s===0)return!0;L.invert&&(s=-s);let u=e.getTranslate()+s*L.sensitivity;if(u>=e.minTranslate()&&(u=e.minTranslate()),u<=e.maxTranslate()&&(u=e.maxTranslate()),P=e.params.loop?!0:!(u===e.minTranslate()||u===e.maxTranslate()),P&&e.params.nested&&o.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const r={time:M(),delta:Math.abs(s),direction:Math.sign(s),raw:a};i.length>=2&&i.shift();const D=i.length?i[i.length-1]:void 0;if(i.push(r),D?(r.direction!==D.direction||r.delta>D.delta||r.time>D.time+150)&&k(r):k(r),t(r))return!0}else{const r={time:M(),delta:Math.abs(s),direction:Math.sign(s)},D=m&&r.time<m.time+500&&r.delta<=m.delta&&r.direction===m.direction;if(!D){m=void 0,e.params.loop&&e.loopFix();let p=e.getTranslate()+s*L.sensitivity;const R=e.isBeginning,J=e.isEnd;if(p>=e.minTranslate()&&(p=e.minTranslate()),p<=e.maxTranslate()&&(p=e.maxTranslate()),e.setTransition(0),e.setTranslate(p),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!R&&e.isBeginning||!J&&e.isEnd)&&e.updateSlidesClasses(),e.params.freeMode.sticky){clearTimeout(C),C=void 0,i.length>=15&&i.shift();const B=i.length?i[i.length-1]:void 0,V=i[0];if(i.push(r),B&&(r.delta>B.delta||r.direction!==B.direction))i.splice(0);else if(i.length>=15&&r.time-V.time<500&&V.delta-r.delta>=1&&r.delta<=6){const Y=s>0?.8:.2;m=r,i.splice(0),C=q(()=>{e.slideToClosest(e.params.speed,!0,void 0,Y)},0)}C||(C=q(()=>{m=r,i.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)},500))}if(D||x("scroll",o),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),p===e.minTranslate()||p===e.maxTranslate())return!0}}return o.preventDefault?o.preventDefault():o.returnValue=!1,!1}function l(a){let o=e.$el;e.params.mousewheel.eventsTarget!=="container"&&(o=I(e.params.mousewheel.eventsTarget)),o[a]("mouseenter",$),o[a]("mouseleave",c),o[a]("wheel",n)}function g(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",n),!0):e.mousewheel.enabled?!1:(l("on"),e.mousewheel.enabled=!0,!0)}function b(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,n),!0):e.mousewheel.enabled?(l("off"),e.mousewheel.enabled=!1,!0):!1}v("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&b(),e.params.mousewheel.enabled&&g()}),v("destroy",()=>{e.params.cssMode&&g(),e.mousewheel.enabled&&b()}),Object.assign(e.mousewheel,{enable:g,disable:b})}function se({swiper:e,extendParams:S,on:v,emit:x}){S({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function _(t){let n;return t&&(n=I(t),e.params.uniqueNavElements&&typeof t=="string"&&n.length>1&&e.$el.find(t).length===1&&(n=e.$el.find(t))),n}function C(t,n){const l=e.params.navigation;t&&t.length>0&&(t[n?"addClass":"removeClass"](l.disabledClass),t[0]&&t[0].tagName==="BUTTON"&&(t[0].disabled=n),e.params.watchOverflow&&e.enabled&&t[e.isLocked?"addClass":"removeClass"](l.lockClass))}function f(){if(e.params.loop)return;const{$nextEl:t,$prevEl:n}=e.navigation;C(n,e.isBeginning&&!e.params.rewind),C(t,e.isEnd&&!e.params.rewind)}function m(t){t.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),x("navigationPrev"))}function i(t){t.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),x("navigationNext"))}function y(){const t=e.params.navigation;if(e.params.navigation=Q(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(t.nextEl||t.prevEl))return;const n=_(t.nextEl),l=_(t.prevEl);n&&n.length>0&&n.on("click",i),l&&l.length>0&&l.on("click",m),Object.assign(e.navigation,{$nextEl:n,nextEl:n&&n[0],$prevEl:l,prevEl:l&&l[0]}),e.enabled||(n&&n.addClass(t.lockClass),l&&l.addClass(t.lockClass))}function $(){const{$nextEl:t,$prevEl:n}=e.navigation;t&&t.length&&(t.off("click",i),t.removeClass(e.params.navigation.disabledClass)),n&&n.length&&(n.off("click",m),n.removeClass(e.params.navigation.disabledClass))}v("init",()=>{e.params.navigation.enabled===!1?k():(y(),f())}),v("toEdge fromEdge lock unlock",()=>{f()}),v("destroy",()=>{$()}),v("enable disable",()=>{const{$nextEl:t,$prevEl:n}=e.navigation;t&&t[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),n&&n[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),v("click",(t,n)=>{const{$nextEl:l,$prevEl:g}=e.navigation,b=n.target;if(e.params.navigation.hideOnClick&&!I(b).is(g)&&!I(b).is(l)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===b||e.pagination.el.contains(b)))return;let a;l?a=l.hasClass(e.params.navigation.hiddenClass):g&&(a=g.hasClass(e.params.navigation.hiddenClass)),x(a===!0?"navigationShow":"navigationHide"),l&&l.toggleClass(e.params.navigation.hiddenClass),g&&g.toggleClass(e.params.navigation.hiddenClass)}});const c=()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),y(),f()},k=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),$()};Object.assign(e.navigation,{enable:c,disable:k,update:f,init:y,destroy:$})}const ie={components:{Swiper:w,SwiperSlide:ee,Card:ae},data(){return{feedbackList:[{id:1,img:new URL("/VAC/assets/feedBack1-9be96517.jpg",self.location),person:"Laura Chaisson",text:"In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. Lorem esse sint in nisi id esse."},{id:1,img:new URL("/VAC/assets/feedBack2-43ddadd4.jpg",self.location),person:"Brad Pitt ",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda praesentium doloremque, magni voluptatum expedita maxime consequatur possimus magnam eum nesciunt ad itaque adipisci aliquam nihil."},{id:1,img:new URL("/VAC/assets/feedBack3-0a1f8b6c.jpg",self.location),person:"Jennifer Linn Aniston",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda praesentium doloremque, magni voluptatum expedita maxime consequatur possimus magnam eum nesciunt ad itaque adipisci aliquam nihil."}],topNavigation:""}},methods:{heightCalculation(){document.getElementsByClassName("")}},setup(){return{modules:[se,ne,le]}}},oe=e=>(K("data-v-c60acef4"),e=e(),z(),e),de={class:"feedback"},re={class:"feedback__container _container"},ce=oe(()=>E("h2",{class:"feedback__title"}," What our client say about us! ",-1)),fe={class:"feedback__img-box"},ue=["src"],me={class:"feedback__content"},ge={class:"feedback__name"},he={class:"feedback__text"};function ve(e,S,v,x,_,C){const f=X("swiper-slide"),m=X("swiper"),i=X("Card");return N(),A("div",de,[E("div",re,[ce,G(i,{class:"feedback__card"},{default:O(()=>[G(m,{class:"feedback__slider",modules:x.modules,"slides-per-view":1,"space-between":50,navigation:!0,onSwiper:e.onSwiper,onSlideChange:e.onSlideChange},{default:O(()=>[(N(!0),A(W,null,F(_.feedbackList,y=>(N(),te(f,{class:"feedback__slide"},{default:O(()=>[E("div",fe,[E("img",{class:"feedback__img",src:y.img,alt:""},null,8,ue)]),E("div",me,[E("div",ge,H(y.person),1),E("div",he,H(y.text),1)])]),_:2},1024))),256))]),_:1},8,["modules","onSwiper","onSlideChange"])]),_:1})])])}const Me=j(ie,[["render",ve],["__scopeId","data-v-c60acef4"]]),_e="/VAC/assets/Polygon-832422d7.jpg";const be={props:["list"]},pe=e=>(K("data-v-e8026a11"),e=e(),z(),e),Ee={class:"triangle-list__item"},xe={class:"triangle-list__item-number-box"},Ce=pe(()=>E("img",{class:"triangle-list__item-number-frame",src:_e,alt:""},null,-1)),ke={class:"triangle-list__item-number"},Te={class:"triangle-list__item-number-content"},ye={class:"triangle-list__content"},$e={class:"triangle-list__title"},De={class:"triangle-list__text"};function Le(e,S,v,x,_,C){return N(!0),A(W,null,F(v.list,f=>(N(),A("div",Ee,[E("div",xe,[Ce,E("div",ke,[E("h4",Te,H(f.id),1)])]),E("div",ye,[E("div",$e,H(f.title),1),E("div",De,H(f.text),1)])]))),256)}const Ne=j(be,[["render",Le],["__scopeId","data-v-e8026a11"]]);export{Me as F,ne as K,le as M,se as N,Ne as T};
