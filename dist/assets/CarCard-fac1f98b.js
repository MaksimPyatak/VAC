import{C as G}from"./Card-75f86a0f.js";import{$ as M,d as N,S as j,a as V}from"./swiper-slide-4fb57470.js";import{s as q}from"./formatting-kilometres-7cf410c7.js";/* empty css                   */import{_ as K,r as I,o as F,c as L,a as C,b as E,w as S,F as R,f as U,e as X,h as Y,t as x}from"./index-856fd5e6.js";function k(a=""){return`.${a.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function W({swiper:a,extendParams:A,on:d,emit:_}){const o="swiper-pagination";A({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:l=>l,formatFractionTotal:l=>l,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),a.pagination={el:null,$el:null,bullets:[]};let v,p=0;function B(){return!a.params.pagination.el||!a.pagination.el||!a.pagination.$el||a.pagination.$el.length===0}function b(l,e){const{bulletActiveClass:i}=a.params.pagination;l[e]().addClass(`${i}-${e}`)[e]().addClass(`${i}-${e}-${e}`)}function r(){const l=a.rtl,e=a.params.pagination;if(B())return;const i=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,t=a.pagination.$el;let s;const c=a.params.loop?Math.ceil((i-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?(s=Math.ceil((a.activeIndex-a.loopedSlides)/a.params.slidesPerGroup),s>i-1-a.loopedSlides*2&&(s-=i-a.loopedSlides*2),s>c-1&&(s-=c),s<0&&a.params.paginationType!=="bullets"&&(s=c+s)):typeof a.snapIndex<"u"?s=a.snapIndex:s=a.activeIndex||0,e.type==="bullets"&&a.pagination.bullets&&a.pagination.bullets.length>0){const n=a.pagination.bullets;let u,f,D;if(e.dynamicBullets&&(v=n.eq(0)[a.isHorizontal()?"outerWidth":"outerHeight"](!0),t.css(a.isHorizontal()?"width":"height",`${v*(e.dynamicMainBullets+4)}px`),e.dynamicMainBullets>1&&a.previousIndex!==void 0&&(p+=s-(a.previousIndex-a.loopedSlides||0),p>e.dynamicMainBullets-1?p=e.dynamicMainBullets-1:p<0&&(p=0)),u=Math.max(s-p,0),f=u+(Math.min(n.length,e.dynamicMainBullets)-1),D=(f+u)/2),n.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(h=>`${e.bulletActiveClass}${h}`).join(" ")),t.length>1)n.each(h=>{const g=M(h),m=g.index();m===s&&g.addClass(e.bulletActiveClass),e.dynamicBullets&&(m>=u&&m<=f&&g.addClass(`${e.bulletActiveClass}-main`),m===u&&b(g,"prev"),m===f&&b(g,"next"))});else{const h=n.eq(s),g=h.index();if(h.addClass(e.bulletActiveClass),e.dynamicBullets){const m=n.eq(u),P=n.eq(f);for(let y=u;y<=f;y+=1)n.eq(y).addClass(`${e.bulletActiveClass}-main`);if(a.params.loop)if(g>=n.length){for(let y=e.dynamicMainBullets;y>=0;y-=1)n.eq(n.length-y).addClass(`${e.bulletActiveClass}-main`);n.eq(n.length-e.dynamicMainBullets-1).addClass(`${e.bulletActiveClass}-prev`)}else b(m,"prev"),b(P,"next");else b(m,"prev"),b(P,"next")}}if(e.dynamicBullets){const h=Math.min(n.length,e.dynamicMainBullets+4),g=(v*h-v)/2-D*v,m=l?"right":"left";n.css(a.isHorizontal()?m:"top",`${g}px`)}}if(e.type==="fraction"&&(t.find(k(e.currentClass)).text(e.formatFractionCurrent(s+1)),t.find(k(e.totalClass)).text(e.formatFractionTotal(c))),e.type==="progressbar"){let n;e.progressbarOpposite?n=a.isHorizontal()?"vertical":"horizontal":n=a.isHorizontal()?"horizontal":"vertical";const u=(s+1)/c;let f=1,D=1;n==="horizontal"?f=u:D=u,t.find(k(e.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${f}) scaleY(${D})`).transition(a.params.speed)}e.type==="custom"&&e.renderCustom?(t.html(e.renderCustom(a,s+1,c)),_("paginationRender",t[0])):_("paginationUpdate",t[0]),a.params.watchOverflow&&a.enabled&&t[a.isLocked?"addClass":"removeClass"](e.lockClass)}function $(){const l=a.params.pagination;if(B())return;const e=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,i=a.pagination.$el;let t="";if(l.type==="bullets"){let s=a.params.loop?Math.ceil((e-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&a.params.freeMode.enabled&&!a.params.loop&&s>e&&(s=e);for(let c=0;c<s;c+=1)l.renderBullet?t+=l.renderBullet.call(a,c,l.bulletClass):t+=`<${l.bulletElement} class="${l.bulletClass}"></${l.bulletElement}>`;i.html(t),a.pagination.bullets=i.find(k(l.bulletClass))}l.type==="fraction"&&(l.renderFraction?t=l.renderFraction.call(a,l.currentClass,l.totalClass):t=`<span class="${l.currentClass}"></span> / <span class="${l.totalClass}"></span>`,i.html(t)),l.type==="progressbar"&&(l.renderProgressbar?t=l.renderProgressbar.call(a,l.progressbarFillClass):t=`<span class="${l.progressbarFillClass}"></span>`,i.html(t)),l.type!=="custom"&&_("paginationRender",a.pagination.$el[0])}function z(){a.params.pagination=N(a,a.originalParams.pagination,a.params.pagination,{el:"swiper-pagination"});const l=a.params.pagination;if(!l.el)return;let e=M(l.el);e.length!==0&&(a.params.uniqueNavElements&&typeof l.el=="string"&&e.length>1&&(e=a.$el.find(l.el),e.length>1&&(e=e.filter(i=>M(i).parents(".swiper")[0]===a.el))),l.type==="bullets"&&l.clickable&&e.addClass(l.clickableClass),e.addClass(l.modifierClass+l.type),e.addClass(a.isHorizontal()?l.horizontalClass:l.verticalClass),l.type==="bullets"&&l.dynamicBullets&&(e.addClass(`${l.modifierClass}${l.type}-dynamic`),p=0,l.dynamicMainBullets<1&&(l.dynamicMainBullets=1)),l.type==="progressbar"&&l.progressbarOpposite&&e.addClass(l.progressbarOppositeClass),l.clickable&&e.on("click",k(l.bulletClass),function(t){t.preventDefault();let s=M(this).index()*a.params.slidesPerGroup;a.params.loop&&(s+=a.loopedSlides),a.slideTo(s)}),Object.assign(a.pagination,{$el:e,el:e[0]}),a.enabled||e.addClass(l.lockClass))}function O(){const l=a.params.pagination;if(B())return;const e=a.pagination.$el;e.removeClass(l.hiddenClass),e.removeClass(l.modifierClass+l.type),e.removeClass(a.isHorizontal()?l.horizontalClass:l.verticalClass),a.pagination.bullets&&a.pagination.bullets.removeClass&&a.pagination.bullets.removeClass(l.bulletActiveClass),l.clickable&&e.off("click",k(l.bulletClass))}d("init",()=>{a.params.pagination.enabled===!1?H():(z(),$(),r())}),d("activeIndexChange",()=>{(a.params.loop||typeof a.snapIndex>"u")&&r()}),d("snapIndexChange",()=>{a.params.loop||r()}),d("slidesLengthChange",()=>{a.params.loop&&($(),r())}),d("snapGridLengthChange",()=>{a.params.loop||($(),r())}),d("destroy",()=>{O()}),d("enable disable",()=>{const{$el:l}=a.pagination;l&&l[a.enabled?"removeClass":"addClass"](a.params.pagination.lockClass)}),d("lock unlock",()=>{r()}),d("click",(l,e)=>{const i=e.target,{$el:t}=a.pagination;if(a.params.pagination.el&&a.params.pagination.hideOnClick&&t&&t.length>0&&!M(i).hasClass(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&i===a.navigation.nextEl||a.navigation.prevEl&&i===a.navigation.prevEl))return;const s=t.hasClass(a.params.pagination.hiddenClass);_(s===!0?"paginationShow":"paginationHide"),t.toggleClass(a.params.pagination.hiddenClass)}});const T=()=>{a.$el.removeClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.removeClass(a.params.pagination.paginationDisabledClass),z(),$(),r()},H=()=>{a.$el.addClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.addClass(a.params.pagination.paginationDisabledClass),O()};Object.assign(a.pagination,{enable:T,disable:H,render:$,update:r,init:z,destroy:O})}const J={components:{Swiper:j,SwiperSlide:V,Card:G},props:{cardData:Object},computed:{formattingKilometres(){return q},linkOpen(){return`/car/${this.cardData.id}`}},setup(){return{modules:[W],selectedValueKilometres:q}}},Q={class:"car-card"},Z={class:"car-card__img-box"},w=["src"],aa={class:"car-card__price"},la={class:"car-card__characteristics"},ea={class:"car-card__box-hidden"},ta={class:"car-card__year"},sa={class:"car-card__body-type"},na={class:"car-card__transmission"},ia={class:"car-card__kilometres"};function oa(a,A,d,_,o,v){const p=I("swiper-slide"),B=I("swiper"),b=I("router-link"),r=I("Card");return F(),L("div",Q,[C("div",Z,[E(B,{class:"car-card__swiper",modules:_.modules,"slides-per-view":1,"space-between":0,pagination:{type:"progressbar"}},{default:S(()=>[(F(!0),L(R,null,U(this.cardData.imgExterior,$=>(F(),X(p,{class:"car-card__slide"},{default:S(()=>[C("img",{class:"car-card__img",src:$,alt:""},null,8,w)]),_:2},1024))),256))]),_:1},8,["modules"])]),E(r,{class:"car-card__content"},{default:S(()=>[E(b,{to:v.linkOpen,class:"car-card__title"},{default:S(()=>[Y(x(this.cardData.title),1)]),_:1},8,["to"]),C("div",aa," $ "+x(new Intl.NumberFormat("uk-UA").format(Number(String(this.cardData.price).split(" ").join("")))),1),C("div",la,[C("div",ea,[C("div",ta,x(this.cardData.year)+" year ",1),C("div",sa,x(this.cardData.bodyType),1),C("div",na,x(this.cardData.transmission)+" transmission ",1),C("div",ia,x(this.cardData.kilometres),1)])])]),_:1})])}const pa=K(J,[["render",oa],["__scopeId","data-v-f9770250"]]);export{pa as C};
