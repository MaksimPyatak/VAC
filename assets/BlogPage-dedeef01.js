import{_ as p,E as h,G as C,m as l,q as V,s as L,H as M,o as r,c,b as R,w as A,a as d,F as v,e as b,h as H,g as U,I as j}from"./index-783ab144.js";import{T as W}from"./Title-dbd2dafb.js";import{B}from"./BlogCard-6ec2c2cc.js";import"./Card-1b846ff7.js";const P={class:"our-blog"},x={class:"our-blog__container _container"},k={class:"our-blog__cards"},E={class:"our-blog__pagination-box"},z=["onClick"],N={__name:"BlogPage",setup(T){const _=h();C();const g=l([{id:1,img:new URL("/VAC/assets/1-110a9143.jpg",self.location),date:"10 May, 2020",title:`How to save on buying a car? 
	 Why is it better to buy from us`},{id:2,img:new URL("/VAC/assets/2-20eaf935.jpg",self.location),date:"10 May, 2020",title:"How fast can you order a car in Canada?"},{id:3,img:new URL("/VAC/assets/3-1894696b.jpg",self.location),date:"10 May, 2020",title:`How to save on buying a car? 
	 Why is it better to buy from us`},{id:4,img:new URL("/VAC/assets/4-de4a50dd.jpg",self.location),date:"10 May, 2020",title:`How to save on buying a car? 
	 Why is it better to buy from us`},{id:5,img:new URL("/VAC/assets/5-3346ec6a.jpg",self.location),date:"10 May, 2020",title:"How fast can you order a car in Canada?"},{id:6,img:new URL("/VAC/assets/6-e6502a6b.jpg",self.location),date:"10 May, 2020",title:`How to save on buying a car? 
	 Why is it better to buy from us`},{id:7,img:new URL("/VAC/assets/7-5f479a0c.jpg",self.location),date:"10 May, 2020",title:`How to save on buying a car? 
	 Why is it better to buy from us`},{id:8,img:new URL("/VAC/assets/8-fa4fdd7e.jpg",self.location),date:"10 May, 2020",title:"How fast can you order a car in Canada?"},{id:9,img:new URL("/VAC/assets/9-900cba9e.jpg",self.location),date:"10 May, 2020",title:`How to save on buying a car? 
	 Why is it better to buy from us`},{id:10,img:new URL("/VAC/assets/7-5f479a0c.jpg",self.location),date:"10 May, 2020",title:`How to save on buying a car? 
	 Why is it better to buy from us`},{id:11,img:new URL("/VAC/assets/2-20eaf935.jpg",self.location),date:"10 May, 2020",title:"How fast can you order a car in Canada?"},{id:12,img:new URL("/VAC/assets/3-1894696b.jpg",self.location),date:"10 May, 2020",title:`How to save on buying a car? 
	 Why is it better to buy from us`},{id:13,img:new URL("/VAC/assets/5-3346ec6a.jpg",self.location),date:"10 May, 2020",title:`How to save on buying a car? 
	 Why is it better to buy from us`},{id:14,img:new URL("/VAC/assets/9-900cba9e.jpg",self.location),date:"10 May, 2020",title:"How fast can you order a car in Canada?"},{id:15,img:new URL("/VAC/assets/8-fa4fdd7e.jpg",self.location),date:"10 May, 2020",title:`How to save on buying a car? 
	 Why is it better to buy from us`}]),a=l(0),f=l([]),s=l(1),o=l([]);function u(){window.innerWidth<600?a.value=6:window.innerWidth<900?a.value=8:a.value=9}function m(t,i){if(o.value.splice(0,o.value.length),i!=0){const e=Math.ceil(t.length/i);for(let n=1;n<e+1;n++)o.value.push(n)}}function y(t){s.value=t;const i=(s.value-1)*a.value,e=s.value*a.value;f.value=g.value.slice(i,e)}function w(t){_.push("/articles1/"+t+"/"+t)}return V(a,()=>{m(g.value,a.value),y(s.value)},{immediate:!0}),L(()=>{window.addEventListener("resize",u),u()}),M(()=>window.removeEventListener("resize",u)),(t,i)=>(r(),c("div",P,[R(W,null,{default:A(()=>[H(" Vehicle videos ")]),_:1}),d("div",x,[d("div",k,[(r(!0),c(v,null,b(f.value,e=>(r(),U(B,{image:e.img,date:e.date,title:e.title,onClick:n=>w(e.id)},null,8,["image","date","title","onClick"]))),256))]),d("div",E,[(r(!0),c(v,null,b(o.value,e=>(r(),c("div",{class:j(["our-blog__pagination",{"our-blog__pagination-active":o.value[e-1]==s.value}]),onClick:n=>y(o.value[e-1])},null,10,z))),256))])])]))}},q=p(N,[["__scopeId","data-v-9ca93245"]]);export{q as default};