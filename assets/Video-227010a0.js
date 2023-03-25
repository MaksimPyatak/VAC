import{T as C}from"./Title-c01fb7f7.js";import{_,o as i,c,a as t,t as b,E as g,r,b as w,w as h,F as u,f as p,T as y,h as A,e as V,G as k}from"./index-ebbd00e0.js";import{c as U}from"./create-pagination-dc2351ef.js";const S={props:{card:Object}},R={class:"video-card"},L={class:"video-card__img-block"},T=["src"],M={class:"video-card__title"};function j(e,o,a,m,s,d){return i(),c("div",R,[t("div",L,[t("img",{class:"video-card__img",src:a.card.img,alt:""},null,8,T),t("div",{class:"video-card__playing _icon-play",onClick:o[0]||(o[0]=l=>e.$emit("playVideo",a.card.video))})]),t("h4",M,b(a.card.title),1)])}const P=_(S,[["render",j],["__scopeId","data-v-4299345d"]]),$="/VAC/assets/Close-89a377b2.svg";const H={props:{url:URL}},O={class:"modal__box"},x=["src"];function F(e,o,a,m,s,d){return i(),c("div",{class:g(["modal",{"is-active":e.activeModal}]),onClick:o[1]||(o[1]=l=>e.$emit("close"))},[t("div",O,[t("img",{class:"modal__close",src:$,alt:"",onClick:o[0]||(o[0]=l=>e.$emit("close"))}),t("iframe",{width:"100%",height:"100%",class:"modal__youtube",src:this.url,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},`\r
         `,8,x)])],2)}const z=_(H,[["render",F],["__scopeId","data-v-de96f75a"]]);const I={components:{Title:C,VideoCard:P,VideoModal:z},data(){return{cards:[{img:new URL("/VAC/assets/Video1-d627f76a.jpg",self.location),title:"VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback",video:"https://www.youtube.com/embed/TRkU43kwHiI"},{img:new URL("/VAC/assets/Video2-c1ea9376.jpg",self.location),title:"VAC's Vehicle Shoot #11: Toyota Highlander",video:"https://www.youtube.com/embed/fJY3nFKM3Qw"},{img:new URL("/VAC/assets/Video3-79ad58bf.jpg",self.location),title:"VAC's Vehicle Shoot #09: 2019 Mazda CX-5",video:"https://www.youtube.com/embed/0W9lkqwpSsU"},{img:new URL("/VAC/assets/Video4-5cd3b035.jpg",self.location),title:"Some Vehicles VAC Offers!",video:"https://www.youtube.com/embed/aOSGhwxT6F8"},{img:new URL("/VAC/assets/Video2-c1ea9376.jpg",self.location),title:"VAC's Vehicle Shoot #11: Toyota Highlander",video:"https://www.youtube.com/embed/fJY3nFKM3Qw"},{img:new URL("/VAC/assets/Video3-79ad58bf.jpg",self.location),title:"VAC's Vehicle Shoot #09: 2019 Mazda CX-5",video:"https://www.youtube.com/embed/0W9lkqwpSsU"},{img:new URL("/VAC/assets/Video4-5cd3b035.jpg",self.location),title:"Some Vehicles VAC Offers!",video:"https://www.youtube.com/embed/aOSGhwxT6F8"},{img:new URL("/VAC/assets/Video1-d627f76a.jpg",self.location),title:"VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback",video:"https://www.youtube.com/embed/TRkU43kwHiI"},{img:new URL("/VAC/assets/Video2-c1ea9376.jpg",self.location),title:"VAC's Vehicle Shoot #11: Toyota Highlander",video:"https://www.youtube.com/embed/fJY3nFKM3Qw"},{img:new URL("/VAC/assets/Video1-d627f76a.jpg",self.location),title:"VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback",video:"https://www.youtube.com/embed/TRkU43kwHiI"},{img:new URL("/VAC/assets/Video2-c1ea9376.jpg",self.location),title:"VAC's Vehicle Shoot #11: Toyota Highlander",video:"https://www.youtube.com/embed/fJY3nFKM3Qw"},{img:new URL("/VAC/assets/Video3-79ad58bf.jpg",self.location),title:"VAC's Vehicle Shoot #09: 2019 Mazda CX-5",video:"https://www.youtube.com/embed/0W9lkqwpSsU"},{img:new URL("/VAC/assets/Video3-79ad58bf.jpg",self.location),title:"VAC's Vehicle Shoot #09: 2019 Mazda CX-5",video:"https://www.youtube.com/embed/0W9lkqwpSsU"},{img:new URL("/VAC/assets/Video1-d627f76a.jpg",self.location),title:"VAC's Vehicle Shoot #10: 2018 Chevy Cruze Hatchback",video:"https://www.youtube.com/embed/TRkU43kwHiI"},{img:new URL("/VAC/assets/Video2-c1ea9376.jpg",self.location),title:"VAC's Vehicle Shoot #11: Toyota Highlander",video:"https://www.youtube.com/embed/fJY3nFKM3Qw"},{img:new URL("/VAC/assets/Video4-5cd3b035.jpg",self.location),title:"Some Vehicles VAC Offers!",video:"https://www.youtube.com/embed/aOSGhwxT6F8"}],videoNow:"",numberOfPages:"",createdPage:[],numberOfCards:4,nowPage:1,pagination:[],activeModal:!1}},emits:["click"],methods:{play(e){this.videoNow=e,this.activeModal=!0,document.body.classList.add("lock")},close(){this.activeModal=!1,document.body.classList.remove("lock")},createPage(e){this.nowPage=e;const o=(this.nowPage-1)*this.numberOfCards,a=this.nowPage*this.numberOfCards;this.createdPage=this.cards.slice(o,a)}},mounted(){this.createPage(this.nowPage),this.createPagination(this.cards,this.numberOfCards)},setup(){return{createPagination:U}}},N={class:"video"},Y={class:"video__container _container"},J={class:"video__cards"},K={class:"video__pagination-box"},Q=["onClick"];function q(e,o,a,m,s,d){const l=r("Title"),v=r("VideoCard"),f=r("VideoModal");return i(),c("div",N,[w(l,null,{default:h(()=>[A(" Vehicle videos ")]),_:1}),t("div",Y,[t("div",J,[(i(!0),c(u,null,p(s.createdPage,n=>(i(),V(v,{class:"video__card",card:n,onPlayVideo:d.play},null,8,["card","onPlayVideo"]))),256))]),t("div",K,[(i(!0),c(u,null,p(s.pagination,n=>(i(),c("div",{class:g(["video__pagination",{"video__pagination-active":s.pagination[n-1]==s.nowPage}]),onClick:B=>d.createPage(s.pagination[n-1])},null,10,Q))),256))]),w(y,null,{default:h(()=>[s.activeModal?(i(),V(f,{key:0,onClose:d.close,url:s.videoNow},null,8,["onClose","url"])):k("",!0)]),_:1})])])}const E=_(I,[["render",q],["__scopeId","data-v-392c2ff5"]]);export{E as default};
