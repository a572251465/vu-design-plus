import{d as _,r as G,a as L,u as J,b as Q,w as Y,c as O,o as c,e as i,f as e,g as p,F as T,h as H,n as uu,t as h,i as r,p as b,j as y,k as eu,l as Z,m as v,q,s as su,v as U,x as A,y as X,z as tu,A as nu,B as ou,C as N,T as lu,D as au,E as S,G as M,H as cu,I as F,J as w,K as R,L as f,M as du,V as iu,N as B,O as $,P as ru,Q as pu,R as Eu,S as Fu,U as _u}from"./vendor.f951d580.js";const fu=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}};fu();var j="/vu-design-plus/assets/logo.530ac674.png";var g=(u,s)=>{const n=u.__vccOpts||u;for(const[l,t]of s)n[l]=t;return n};const K=u=>(b("data-v-74dee540"),u=u(),y(),u),hu={class:"home"},mu={class:"left"},Bu=["src"],gu=K(()=>e("span",null,"vu.design.plus ui",-1)),Cu=K(()=>e("div",{class:"right"},[e("ul",null,[e("li",{class:"active"},"\u7EC4\u4EF6"),e("li",null,"\u5173\u4E8E"),e("li",null,"\u516C\u53F8"),e("li",null,"\u9E23\u8C22")])],-1)),vu={class:"body"},Du={class:"left"},$u=["onClick"],Au={class:"right"},bu=_({setup(u){const s=G([{path:"introduce",introduce:"Introduce",label:"\u4ECB\u7ECD"},{path:"icon",introduce:"icon",label:"\u56FE\u6807"},{path:"message",introduce:"Message",label:"\u6D88\u606F"},{path:"messageBox",introduce:"MessageBox",label:"\u786E\u8BA4\u6846"},{path:"dialog",introduce:"Dialog",label:"\u5BF9\u8BDD\u6846"}]),n=L("introduce"),l=J(),t=Q();Y(()=>t.fullPath,o=>{const d=o.slice(1);!s.map(E=>E.path).includes(d)||(n.value=d)});const a=o=>{l.push({path:`/${o}`})};return(o,d)=>{const D=O("router-view");return c(),i("div",hu,[e("header",null,[e("div",mu,[e("img",{src:p(j),alt:"logo"},null,8,Bu),gu]),Cu]),e("div",vu,[e("div",Du,[e("ul",null,[(c(!0),i(T,null,H(p(s),(E,I)=>(c(),i("li",{key:I,class:uu(n.value===E.path?"active":""),onClick:es=>a(E.path)},[e("span",null,h(E.introduce),1),e("span",null,h(E.label),1)],10,$u))),128))])]),e("div",Au,[r(D)])])])}}});var yu=g(bu,[["__scopeId","data-v-74dee540"]]);const ku=_({setup(u){return(s,n)=>(c(),eu(yu))}}),W=u=>(u.install=function(s){s.component(u.name,u)},u),Vu={modelValue:{type:Boolean,default:!1},title:{type:String,default:""},existBtns:{type:Array,default:["cancel","confirm"]},width:{type:[Number,String],default:400},confirmBtnText:{type:String,default:"\u786E\u8BA4"},cancelBtnText:{type:String,default:"\u53D6\u6D88"}};var k=(u=>(u.$namespace="vu",u.$statePrefix="is-",u.$modifierSeparator="--",u.$elementSeparator="__",u))(k||{});k.$namespace;const xu=["px","em","rem","vw","%"],Iu={},Su=(u,s="px")=>typeof u=="string"&&xu.some(n=>u.endsWith(n))?u:`${u}${s}`,Mu=u=>Iu[u],wu=Z({name:"VuMask",props:{zIndex:{type:Number,default:1e3},center:{type:Boolean,default:!1}},emits:["closeHandle"],setup(u,{emit:s}){const n=v(()=>({zIndex:u.zIndex})),l=v(()=>[{[`${k.$statePrefix}center`]:u.center}]);return{styles:n,closeHandle:()=>{s("closeHandle")},classes:l}}});function Tu(u,s,n,l,t,a){return q(),su("div",{class:A(["vu-mask",u.classes]),style:X(u.styles),onClick:s[0]||(s[0]=(...o)=>u.closeHandle&&u.closeHandle(...o))},[U(u.$slots,"default")],6)}var Hu=g(wu,[["render",Tu]]);const Pu=W(Hu),C=[],Nu=()=>{if(C.length===0){const u=Mu("zIndex")||2e3;return C.push(u),u}else{const s=C[C.length-1]+20;return C.push(s),s}},zu=u=>s=>{let n=u;return n=s.reduce((l,t)=>`${l}${k.$elementSeparator}${t}`,n),n},Lu=Z({name:"vu-dialog",components:{VuMark:Pu},props:Vu,emits:["update:modelValue","on-confirm","on-cancel"],setup(u,{emit:s}){const n=Nu(),l=tu(!1),t=v(()=>({width:Su(u.width)})),a=v(()=>u.confirmBtnText),o=v(()=>u.cancelBtnText);nu(()=>u.modelValue,I=>{l.value=I});function d(){l.value=!1,s("update:modelValue",!1)}function D(){s("on-confirm")}function E(){s("on-cancel"),d()}return{maskZIndex:n,changeValue:l,styles:t,confirmText:a,cancelText:o,computedClass:zu("vu-dialog"),confirmHandle:D,cancelHandle:E}}});function Ou(u,s,n,l,t,a){const o=au("VuMark");return q(),ou(lu,{name:"vu-dialog-fade"},{default:N(()=>[S(cu(o,{"z-index":u.maskZIndex,center:!0},{default:N(()=>[F("div",{class:"vu-dialog",style:X(u.styles)},[F("div",{class:A(u.computedClass(["header"]))},[F("span",null,w(u.title),1),F("i",{class:"vu-icon vu-icon-close",onClick:s[0]||(s[0]=(...d)=>u.cancelHandle&&u.cancelHandle(...d))})],2),F("div",{class:A(u.computedClass(["body"]))},[U(u.$slots,"default")],2),F("div",{class:A(u.computedClass(["footer"]))},[S(F("button",{class:"cancel",onClick:s[1]||(s[1]=(...d)=>u.cancelHandle&&u.cancelHandle(...d))},w(u.cancelText),513),[[M,u.existBtns.includes("cancel")]]),S(F("button",{onClick:s[2]||(s[2]=(...d)=>u.confirmHandle&&u.confirmHandle(...d))},w(u.confirmText),513),[[M,u.existBtns.includes("confirm")]])],2)],4)]),_:3},8,["z-index"]),[[M,u.changeValue]])]),_:3})}var Zu=g(Lu,[["render",Ou]]);const qu=W(Zu);const Uu=()=>{const u=(s,n)=>Math.floor(Math.random()*(n-s+1))+s;return`rgb(${u(0,255)},${u(0,255)},${u(0,255)})`};const Xu=_({setup(){return{logoImg:j,randomBk:Uu}}}),m=u=>(b("data-v-b06b46f4"),u=u(),y(),u),Ru={class:"demo-introduce"},ju={class:"demo-introduce-header"},Ku=["src"],Wu=m(()=>e("span",null,"Vu-Design-Plus",-1)),Gu=R('<h2 data-v-b06b46f4>\u4ECB\u7ECD</h2><div class="content" data-v-b06b46f4><span data-v-b06b46f4>Vu Design Plus</span>\u662F\u4E00\u6B3E\u57FA\u4E8E <span data-v-b06b46f4>Vue3.0</span> + <span data-v-b06b46f4>typescript</span>\u5F00\u53D1\u7684\u4E2D\u540E\u53F0UI\u7EC4\u4EF6\u5E93, \u7EC4\u4EF6\u7684\u9AD8\u914D\u7F6E\u6027 <span data-v-b06b46f4>+</span> \u4F20\u7EDF\u7684UI\u7EC4\u4EF6\u5E93\u7684\u7279\u6027 <span data-v-b06b46f4>+</span> \u66F4\u597D\u7684\u4EA4\u4E92\u4F53\u9A8C,\u4E3A\u7528\u6237\u7684\u4F7F\u7528\u63D0\u4F9B\u4E86\u5F88\u5927\u7684\u4FBF\u5229 </div><h2 data-v-b06b46f4>\u7279\u6027</h2>',3),Ju={class:"content"},Qu=f(" \u4F18\u9518\u79D1\u6280\u79BB\u7EBF\u7248\u68EE\u5927\u5C4F\u4EA7\u54C1\u4E13\u7528\u7EC4\u4EF6\u5E93, \u5B9A\u5236\u5316\u7A0B\u5EA6\u9AD8\uFF0C\u4EE5\u9ED1\u8272\u4E3B\u9898\u4E3A\u4E3B\uFF0C\u5DF2\u4E0A\u751F\u4EA7\u653E\u5FC3\u4F7F\u7528 "),Yu=f("\u6240\u6709\u7EC4\u4EF6\u57FA\u4E8E "),ue=m(()=>e("span",null,"typescript",-1)),ee=f(" ,"),se=m(()=>e("span",null,"CompositionAPI",-1)),te=f(" \u4EE5\u53CA "),ne=m(()=>e("span",null,"tsx",-1)),oe=f(" \u5F00\u53D1\u3002\u662FVuetypescript\u7231\u597D\u8005\u7EDD\u4F73\u5B66\u4E60\u5BF9\u8C61\u3002\u5982\u679C\u4F60\u5E0C\u671B\u4F7F\u7528tsx\u5F00\u53D1\u9AD8\u8D28\u91CF\u7684Vue\u7EC4\u4EF6\uFF0C\u90A3\u4E48\u5F3A\u70C8\u63A8\u8350\u5C1D\u8BD5\u57FA\u4E8E "),le=m(()=>e("span",null,"Viewer-Design",-1)),ae=f(" \u7684\u7EC4\u4EF6\u6765\u5C01\u88C5 "),ce=f("\u652F\u6301\u7EC4\u4EF6\u6309\u9700\u5F15\u5165\uFF0C\u652F\u6301\u56FE\u6807\u6309\u9700\u52A0\u8F7D\uFF0C\u7EC4\u4EF6\u5E93\u4F7F\u7528\u4E86 "),de=m(()=>e("span",null,"pnpm",-1)),ie=f(" + "),re=m(()=>e("span",null,"monorepo",-1));function pe(u,s,n,l,t,a){const o=O("vu-icon");return c(),i("div",Ru,[e("header",ju,[e("img",{src:u.logoImg,alt:""},null,8,Ku),Wu]),Gu,e("div",Ju,[e("ul",null,[e("li",null,[r(o,{type:"star-on",color:u.randomBk()},null,8,["color"]),Qu]),e("li",null,[r(o,{type:"star-on",color:u.randomBk()},null,8,["color"]),Yu,ue,ee,se,te,ne,oe,le,ae]),e("li",null,[r(o,{type:"star-on",color:u.randomBk()},null,8,["color"]),ce,de,ie,re])])])])}var z=g(Xu,[["render",pe],["__scopeId","data-v-b06b46f4"]]);const Ee=["caidan","jiazai","shangla","xiala","milk-tea","orange","pear","baseballBall","water-cup","ice-tea","ice-drink","sunrise","soccer","sunny","lightning","coffee","cloudy","basketball","football","remove-outline","camera","delete-solid","zoomin","star-off","eleme","zoomout","ice-cream-square","phone-outline","s-help","s-tools","lollipop","goods","platform-eleme","camera-solid","ice-cream-round","goods","remove","user-solid","star-on","help","doubletop","doublebottom","PDF","form","edit","education","excel","example","exit","dashboard","drag","component","documentation","i404","BarChart","bug","clipboard","confirm","Openeyes","close-eye","eye","close-circular","search","date","warning","close","loading","info","danger","success","right-dobule","left-dobule","left","down","home","right","top","head","shoppingCart","qq","nav","yooxi","jinggao"],Fe=[{field:"size",desc:"\u8868\u793Aicon\u5927\u5C0F",type:"[Number, String]",defaultValue:"16"},{field:"color",desc:"\u8868\u793Aicon\u989C\u8272",type:"String",defaultValue:"black"},{field:"type",desc:"\u8868\u793Aicon\u7C7B\u578B",type:"String",defaultValue:"-"}];const _e=_({name:"table-props",props:{componentProps:{type:Array,required:!0}}}),fe=u=>(b("data-v-37be3126"),u=u(),y(),u),he={class:"table-props"},me={class:"content"},Be=fe(()=>e("tr",null,[e("th",null,"\u5C5E\u6027"),e("th",null,"\u8BF4\u660E"),e("th",null,"\u7C7B\u578B"),e("th",null,"\u9ED8\u8BA4\u503C")],-1));function ge(u,s,n,l,t,a){return c(),i("div",he,[e("header",null,[du(u.$slots,"default",{},void 0,!0)]),e("div",me,[e("table",null,[Be,(c(!0),i(T,null,H(u.componentProps,(o,d)=>(c(),i("tr",{key:d},[e("td",null,h(o.field),1),e("td",null,h(o.desc),1),e("td",null,h(o.type),1),e("td",null,h(o.defaultValue),1)]))),128))])])])}var V=g(_e,[["render",ge],["__scopeId","data-v-37be3126"]]);const x=u=>(b("data-v-71536bd3"),u=u(),y(),u),Ce={class:"icon-demo"},ve=x(()=>e("h2",null,"Icon \u56FE\u6807",-1)),De=x(()=>e("p",null,"\u63D0\u4F9B\u4E00\u5957\u5E38\u7528\u7684\u56FE\u6807\u96C6\u5408",-1)),$e=x(()=>e("h3",null,"\u56FE\u6807\u96C6\u5408",-1)),Ae=["onClick"],be=x(()=>e("h3",null,"Icon Props",-1)),ye=_({setup(u){const s=n=>{B.success(`\u60A8\u9009\u4E2D\u4E86<vu-icon-${n}>\u56FE\u6807`)};return(n,l)=>(c(),i("div",Ce,[ve,De,$e,e("ul",null,[(c(!0),i(T,null,H(p(Ee),t=>(c(),i("li",{key:t,onClick:a=>s(t)},[r(p(iu),{type:t},null,8,["type"]),e("span",null,h(`vu-icon-${t}`),1)],8,Ae))),128))]),be,r(V,{"component-props":p(Fe)},null,8,["component-props"])]))}});var ke=g(ye,[["__scopeId","data-v-71536bd3"]]);const Ve=[{field:"success",desc:"\u5F53\u6210\u529F\u65F6\u8C03\u7528\u7684\u6307\u4EE4",type:"-",defaultValue:"VuMessage.success(XXX)"},{field:"danger",desc:"\u5F53\u5931\u8D25\u65F6\u8C03\u7528\u6307\u4EE4",type:"-",defaultValue:"VuMessage.danger(XXX)"}],xe={class:"message-demo"},Ie=e("h2",null,"Message \u6D88\u606F\u63D0\u793A",-1),Se=e("p",null," \u63D0\u4F9B\u4E86\u4E00\u5957\u6697\u9ED1\u8272\u4E3B\u9898\u7684\u6210\u529F\u4EE5\u53CA\u5931\u8D25\u6D88\u606F\u72B6\u6001\u3002\u53EA\u662F\u4F5C\u4E3A\u6D88\u606F\u63D0\u793A\uFF0C\u5982\u679C\u60F3\u4F7F\u7528\u786E\u8BA4\u6D88\u606F\u8BF7\u770BMessageBox ",-1),Me=e("h3",null,"\u5B9E\u4F8B\u6548\u679C",-1),we=e("h3",null,"\u4EE3\u7801\u793A\u4F8B",-1),Te=e("div",{class:"code"},[e("div",null,"import {VuMessage} from 'vu-design-plus'"),e("div",null,"const successCallback = () => VuMessage.success('\u6211\u6210\u529F\u4E86')"),e("div",null,"const successCallback = () => VuMessage.danger('\u6211\u5931\u8D25\u4E86')")],-1),He=e("h3",null,"Message Props",-1),Pe=_({setup(u){const s=()=>B.success("\u6211\u6210\u529F\u4E86"),n=()=>B.danger("\u6211\u5931\u8D25\u4E86");return(l,t)=>(c(),i("div",xe,[Ie,Se,Me,e("div",{class:"flex"},[e("div",{class:"btns",onClick:s},"\u70B9\u6211\u6210\u529F"),e("div",{class:"btns",onClick:n},"\u70B9\u6211\u5931\u8D25")]),we,Te,He,r(V,{"component-props":p(Ve)},null,8,["component-props"])]))}}),Ne=[{field:"\u63D0\u793A",desc:"\u8C03\u7528\u53C2\u6570\u4E2D\u5E94\u8BE5\u662F(message) | (message, {callback, ...} | ({callback, ...})), \u53C2\u6570\u53EA\u6709\u4E09\u79CD\u53EF\u80FD\u6027\uFF0C\u5982\u679C\u9700\u8981\u5BF9\u8C61\u53C2\u7167\u4E0B\u5217\u53C2\u6570",type:"-",defaultValue:"-"},{field:"message",desc:"\u63D0\u793A\u6D88\u606F",type:"string",defaultValue:"-"},{field:"htmlTpl",desc:"\u63D0\u793A\u6D88\u606F, \u8DDFmessage\u4E0D\u5171\u5B58\uFF0C\u8FD9\u4E2A\u4F7F\u7528v-html\u6765\u652F\u6301\uFF0C\u6240\u4EE5\u652F\u6301\u81EA\u5B9A\u4E49\u6837\u5F0F",type:"string",defaultValue:"-"},{field:"callback",desc:"\u6210\u529F\u56DE\u8C03",type:"Function",defaultValue:"-"},{field:"cancelCallback",desc:"\u70B9\u51FB\u53D6\u6D88\u7684\u56DE\u8C03",type:"Function",defaultValue:"-"},{field:"cancelButtonText",desc:"\u53D6\u6D88\u6309\u94AE\u6587\u5B57",type:"String",defaultValue:"\u53D6\u6D88"},{field:"confirmButtonText",desc:"\u6210\u529F\u6309\u94AE\u7684\u6587\u5B57",type:"String",defaultValue:"\u786E\u5B9A"}],ze={class:"message-box-demo"},Le=e("h2",null,"MessageBox \u6D88\u606F\u786E\u8BA4\u63D0\u793A\u63D0\u793A",-1),Oe=e("p",null,"\u4E13\u95E8\u4E3A\u505A\u67D0\u4E9B\u4E8B\u60C5\u4E4B\u524D\u8BBE\u7F6E\u7684\u6307\u4EE4\uFF0C\u5206\u4E3A\u5220\u9664\u4EE5\u53CA\u786E\u8BA4\u72B6\u6001",-1),Ze=e("h3",null,"\u5B9E\u4F8B\u6548\u679C",-1),qe=R('<h3>\u63D0\u793A</h3><div class="tips-block"><p>TIP</p><ul><li> \u4F7F\u7528danger\u6307\u4EE4\u4E00\u822C\u90FD\u662F\u5728\u9700\u8981\u5220\u9664\u7684\u662F\u65F6\u5019\uFF0C\u4F46\u662F\u67D0\u79CD\u60C5\u51B5\u4E0B\u4E0D\u80FD\u5220\u9664, \u6B64\u65F6\u53EF\u4EE5\u7528\u5230VuMessageBox.danger\u6307\u4EE4\uFF0C\u6B64\u6307\u4EE4\u53EA\u9700\u8981message, \u53CD\u800C\u4E0D\u9700\u8981\u56DE\u8C03 </li><li> \u4F7F\u7528delete\u6307\u4EE4\u4E00\u822C\u90FD\u662F\u5728\u9700\u8981\u5220\u9664\u7684\u662F\u65F6\u5019\uFF0C\u76F4\u63A5\u8C03\u7528\u6307\u4EE4, \u6B64\u65F6\u53EF\u4EE5\u7528\u5230VuMessageBox.delete\u6307\u4EE4\uFF0C\u6B64\u6307\u4EE4\u9700\u8981\u6D88\u606F\u4EE5\u53CA\u9700\u8981\u56DE\u8C03 </li></ul></div><h3>\u4EE3\u7801\u793A\u4F8B</h3><div class="code"><div>import {VuMessageBox} from &#39;vu-design-plus&#39;</div><div>VuMessageBox.danger(message)</div><div>VuMessageBox.delete(message, {callback})</div><div>VuMessageBox.danger({htmlTpl: message})</div><div>VuMessageBox.delete({htmlTpl: message, callback})</div></div><h3>MessageBox Props</h3>',5),Ue=_({setup(u){const s=()=>{$.danger("\u4EBA\u6570\u8FC7\u591A, \u60A8\u8FD8\u4E0D\u80FD\u5220\u9664?")},n=()=>{$.delete("\u60A8\u786E\u8BA4\u8981\u5220\u9664\u5417",{callback:()=>B.success("\u5220\u9664\u6210\u529F")})},l=()=>{$.danger({htmlTpl:'<div class = "red">\u4EBA\u6570\u8FC7\u591A, \u60A8\u8FD8\u4E0D\u80FD\u5220\u9664?</div>'})},t=()=>{$.delete({htmlTpl:'<div class = "red">\u60A8\u786E\u8BA4\u8981\u5220\u9664\u5417</div>',callback:()=>B.success("\u5220\u9664\u6210\u529F")})};return(a,o)=>(c(),i("div",ze,[Le,Oe,Ze,e("div",{class:"flex"},[e("div",{class:"btns",onClick:s},"\u70B9\u51FB\u786E\u8BA4"),e("div",{class:"btns",onClick:n},"\u70B9\u51FB\u5220\u9664"),e("div",{class:"btns",onClick:l},"\u81EA\u5B9A\u4E49\u6A21\u677F \u70B9\u51FB\u786E\u8BA4"),e("div",{class:"btns",onClick:t},"\u81EA\u5B9A\u4E49\u6A21\u677F \u70B9\u51FB\u5220\u9664")]),qe,r(V,{"component-props":p(Ne)},null,8,["component-props"])]))}}),Xe=[{field:"modelValue",type:"Boolean",desc:"\u54CD\u5E94\u5F0F\u5F39\u6846\u663E\u9690\u53D8\u91CF",defaultValue:"false"},{field:"title",type:"String",desc:"\u6807\u9898",defaultValue:"-"},{field:"existBtns",type:"Array",desc:'\u9700\u8981\u5B58\u5728\u7684\u6309\u94AE\uFF0C\u5982\u679C\u60F3\u8981\u786E\u8BA4\u6309\u94AE\u5B58\u5728\u76F4\u63A5\u4F20\u503C\u4E3A: ["confirm"]',defaultValue:"['cancel', 'confirm']"},{field:"width",type:"[Number, String]",desc:"\u5F39\u6846\u663E\u793A\u5BBD\u5EA6",defaultValue:"400"},{field:"confirmBtnText",type:"String",desc:"\u786E\u8BA4\u6309\u94AE\u5185\u5BB9",defaultValue:"\u786E\u8BA4"},{field:"cancelBtnText",type:"String",desc:"\u53D6\u6D88\u6309\u94AE\u5185\u5BB9",defaultValue:"\u53D6\u6D88"},{field:"on-confirm",type:"Click",desc:"\u70B9\u51FB\u786E\u8BA4\u540E\u56DE\u8C03\u4E8B\u4EF6",defaultValue:"-"}],Re={class:"dialog-demo"},je=e("h2",null,"Dialog \u5185\u5BB9\u5F39\u6846",-1),Ke=e("p",null,"\u5728\u4FDD\u7559\u5F53\u524D\u9875\u9762\u72B6\u6001\u7684\u60C5\u51B5\u4E0B\uFF0C\u544A\u77E5\u7528\u6237\u5E76\u627F\u8F7D\u76F8\u5173\u64CD\u4F5C\u3002",-1),We=e("h3",null,"\u5B9E\u4F8B\u6548\u679C",-1),Ge=e("h3",null,"Dialog Props",-1),Je=e("span",{class:"red"},"\u8FD9\u662F\u5F39\u6846\u5185\u5BB9",-1),Qe=_({setup(u){const s=L(!1),n=()=>{s.value=!0},l=()=>{B.success("\u70B9\u51FB\u786E\u8BA4"),s.value=!1};return(t,a)=>(c(),i("div",Re,[je,Ke,We,e("div",{class:"btns",onClick:n},"\u70B9\u51FB\u5F39\u6846"),Ge,r(V,{"component-props":p(Xe)},null,8,["component-props"]),r(p(pu),{title:"\u5F39\u6846\u6807\u9898",modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=o=>s.value=o),onOnConfirm:l},{default:ru(()=>[Je]),_:1},8,["modelValue"])]))}}),Ye=[{path:"/",component:z},{path:"/introduce",component:z},{path:"/icon",component:ke},{path:"/message",component:Pe},{path:"/messageBox",component:Ue},{path:"/dialog",component:Qe}],us=Eu({history:Fu(),routes:Ye});const P=_u(ku);P.use(qu);P.use(us);P.mount("#app");
//# sourceMappingURL=index.04b1db88.js.map
