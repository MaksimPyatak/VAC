import{Q as l,a as _}from"./QuizCheck-c19fe03b.js";import{_ as p,r as i,o,c as a,b as k,w as t,h as u,a as f,F as m,f as x,e as Q}from"./index-856fd5e6.js";const C={components:{QuizQuestion:l,QuizCheck:_},data(){return{questionsList:[{id:250,textCheckBox:"Under $250/Month",checked:!1},{id:374,textCheckBox:"$250-374/Month",checked:!1},{id:500,textCheckBox:"$374-500/Month",checked:!1},{id:"Over",textCheckBox:"Over $500/Month",checked:!1}],nextQuestion:"employment-status"}},methods:{selectOption(e){if(!e.checked){for(const s of this.questionsList)s.checked===!0&&(s.checked=!1);e.checked=!0}}}},g={class:"what-budget"},v={class:"what-budget__main"};function B(e,s,b,q,n,d){const r=i("QuizCheck"),h=i("QuizQuestion");return o(),a("div",g,[k(h,null,{questionTitle:t(()=>[u("What's your budget?")]),questionSubtitle:t(()=>[u("Find vehicle options that fit your budget.")]),questionHighlightedSubtitle:t(()=>[]),questionMain:t(()=>[f("div",v,[(o(!0),a(m,null,x(n.questionsList,c=>(o(),Q(r,{dataInput:c,onClick:$=>(d.selectOption(c),e.$emit("continue",n.nextQuestion))},null,8,["dataInput","onClick"]))),256))])]),_:1})])}const M=p(C,[["render",B],["__scopeId","data-v-450626ab"]]);export{M as default};
