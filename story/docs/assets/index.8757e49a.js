var ge=Object.defineProperty,_e=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var Y=(e,u,t)=>u in e?ge(e,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[u]=t,k=(e,u)=>{for(var t in u||(u={}))ve.call(u,t)&&Y(e,t,u[t]);if(Q)for(var t of Q(u))he.call(u,t)&&Y(e,t,u[t]);return e},V=(e,u)=>_e(e,Be(u));import{d as _,r as Ce,a as ne,u as $e,b as ye,w as De,c as oe,o as r,e as m,f as s,g as F,F as j,h as q,n as be,t as v,i as g,p as z,j as N,k as Ae,l as b,m as f,q as C,s as M,v as ae,x as E,y as U,z as le,A as T,B as ke,C as ce,D as w,T as de,E as ie,G as S,H as I,I as X,J as i,K as $,L as re,M as Ve,N as xe,V as Se,O as h,P as x,Q as pe,R as Ie,S as ee,U as ue,W as Me,X as Te,Y as we,Z as He}from"./vendor.f7dc9d8c.js";const ze=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}};ze();var fe="/vu-design-plus/assets/logo.530ac674.png";var B=(e,u)=>{const t=e.__vccOpts||e;for(const[o,n]of u)t[o]=n;return t};const me=e=>(z("data-v-74dee540"),e=e(),N(),e),Ne={class:"home"},Pe={class:"left"},Le=["src"],Ze=me(()=>s("span",null,"vu.design.plus ui",-1)),Oe=me(()=>s("div",{class:"right"},[s("ul",null,[s("li",{class:"active"},"\u7EC4\u4EF6"),s("li",null,"\u5173\u4E8E"),s("li",null,"\u516C\u53F8"),s("li",null,"\u9E23\u8C22")])],-1)),je={class:"body"},qe={class:"left"},Ue=["onClick"],Xe={class:"right"},Re=_({setup(e){const u=Ce([{path:"introduce",introduce:"Introduce",label:"\u4ECB\u7ECD"},{path:"icon",introduce:"icon",label:"\u56FE\u6807"},{path:"message",introduce:"Message",label:"\u6D88\u606F"},{path:"messageBox",introduce:"MessageBox",label:"\u786E\u8BA4\u6846"},{path:"dialog",introduce:"Dialog",label:"\u5BF9\u8BDD\u6846"}]),t=ne("introduce"),o=$e(),n=ye();De(()=>n.fullPath,l=>{const c=l.slice(1);!u.map(p=>p.path).includes(c)||(t.value=c)});const a=l=>{o.push({path:`/${l}`})};return(l,c)=>{const d=oe("router-view");return r(),m("div",Ne,[s("header",null,[s("div",Pe,[s("img",{src:F(fe),alt:"logo"},null,8,Le),Ze]),Oe]),s("div",je,[s("div",qe,[s("ul",null,[(r(!0),m(j,null,q(F(u),(p,y)=>(r(),m("li",{key:y,class:be(t.value===p.path?"active":""),onClick:vs=>a(p.path)},[s("span",null,v(p.introduce),1),s("span",null,v(p.label),1)],10,Ue))),128))])]),s("div",Xe,[g(d)])])])}}});var We=B(Re,[["__scopeId","data-v-74dee540"]]);const Ke=_({setup(e){return(u,t)=>(r(),Ae(We))}}),R=e=>(e.install=function(u){u.component(e.name,e)},e),Ge={modelValue:{type:Boolean,default:!1},title:{type:String,default:""},existBtns:{type:Array,default:["cancel","confirm"]},width:{type:[Number,String],default:400},confirmBtnText:{type:String,default:"\u786E\u8BA4"},cancelBtnText:{type:String,default:"\u53D6\u6D88"}};var A=(e=>(e.$namespace="vu",e.$statePrefix="is-",e.$modifierSeparator="--",e.$elementSeparator="__",e))(A||{});const Je=A.$namespace,Qe=["px","em","rem","vw","%"],Ye={},eu=e=>typeof e=="undefined",W=(e,u="px")=>typeof e=="string"&&Qe.some(t=>e.endsWith(t))?e:`${e}${u}`,uu=e=>Ye[e],su=b({name:"VuMask",props:{zIndex:{type:Number,default:1e3},center:{type:Boolean,default:!1}},emits:["closeHandle"],setup(e,{emit:u}){const t=f(()=>({zIndex:e.zIndex})),o=f(()=>[{[`${A.$statePrefix}center`]:e.center}]);return{styles:t,closeHandle:()=>{u("closeHandle")},classes:o}}});function tu(e,u,t,o,n,a){return C(),M("div",{class:E(["vu-mask",e.classes]),style:U(e.styles),onClick:u[0]||(u[0]=le((...l)=>e.closeHandle&&e.closeHandle(...l),["stop"]))},[ae(e.$slots,"default")],6)}var nu=B(su,[["render",tu]]);const Ee=R(nu),D=[],K=()=>{if(D.length===0){const e=uu("zIndex")||2e3;return D.push(e),e}else{const u=D[D.length-1]+20;return D.push(u),u}},G=e=>u=>{let t=e;return t=u.reduce((o,n)=>`${o}${A.$elementSeparator}${n}`,t),t},ou=b({name:"vu-dialog",components:{VuMark:Ee},props:Ge,emits:["update:modelValue","on-confirm","on-cancel"],setup(e,{emit:u}){const t=K(),o=T(!1),n=f(()=>({width:W(e.width)})),a=f(()=>e.confirmBtnText),l=f(()=>e.cancelBtnText);ke(()=>e.modelValue,y=>{o.value=y});function c(){o.value=!1,u("update:modelValue",!1)}function d(){u("on-confirm")}function p(){u("on-cancel"),c()}return{maskZIndex:t,changeValue:o,styles:n,confirmText:a,cancelText:l,computedClass:G("vu-dialog"),confirmHandle:d,cancelHandle:p}}});function au(e,u,t,o,n,a){const l=ie("VuMark");return C(),ce(de,{name:"vu-dialog-fade"},{default:w(()=>[S(X(l,{"z-index":e.maskZIndex,onCloseHandle:e.cancelHandle,center:!0},{default:w(()=>[i("div",{class:"vu-dialog",style:U(e.styles),onClick:u[3]||(u[3]=le(()=>{},["stop"]))},[i("div",{class:E(e.computedClass(["header"]))},[i("span",null,$(e.title),1),i("i",{class:"vu-icon vu-icon-close",onClick:u[0]||(u[0]=(...c)=>e.cancelHandle&&e.cancelHandle(...c))})],2),i("div",{class:E(e.computedClass(["body"]))},[ae(e.$slots,"default")],2),i("div",{class:E(e.computedClass(["footer"]))},[S(i("button",{class:"cancel",onClick:u[1]||(u[1]=(...c)=>e.cancelHandle&&e.cancelHandle(...c))},$(e.cancelText),513),[[I,e.existBtns.includes("cancel")]]),S(i("button",{onClick:u[2]||(u[2]=(...c)=>e.confirmHandle&&e.confirmHandle(...c))},$(e.confirmText),513),[[I,e.existBtns.includes("confirm")]])],2)],4)]),_:3},8,["z-index","onCloseHandle"]),[[I,e.changeValue]])]),_:3})}var lu=B(ou,[["render",au]]);const Fe=R(lu);const cu=()=>{const e=(u,t)=>Math.floor(Math.random()*(t-u+1))+u;return`rgb(${e(0,255)},${e(0,255)},${e(0,255)})`};const du=_({setup(){return{logoImg:fe,randomBk:cu}}}),iu=e=>(z("data-v-186e5266"),e=e(),N(),e),ru={class:"demo-introduce"},pu={class:"demo-introduce-header"},fu=["src"],mu=iu(()=>s("span",null,"Vu-Design-Plus",-1)),Eu=re('<h2 data-v-186e5266>\u4ECB\u7ECD</h2><div class="content" data-v-186e5266><span data-v-186e5266>Vu Design Plus</span>\u662F\u4E00\u6B3E\u57FA\u4E8E <span data-v-186e5266>Vue3.0</span> + <span data-v-186e5266>typescript</span>\u5F00\u53D1\u7684\u4E2D\u540E\u53F0UI\u7EC4\u4EF6\u5E93, \u7EC4\u4EF6\u7684\u9AD8\u914D\u7F6E\u6027 <span data-v-186e5266>+</span> \u4F20\u7EDF\u7684UI\u7EC4\u4EF6\u5E93\u7684\u7279\u6027 <span data-v-186e5266>+</span> \u66F4\u597D\u7684\u4EA4\u4E92\u4F53\u9A8C,\u4E3A\u7528\u6237\u7684\u4F7F\u7528\u63D0\u4F9B\u4E86\u5F88\u5927\u7684\u4FBF\u5229 </div><h2 data-v-186e5266>\u7279\u6027</h2>',3),Fu={class:"content"},gu=Ve(" \u79BB\u7EBF\u7248\u68EE\u5927\u5C4F\u4EA7\u54C1\u4E13\u7528\u7EC4\u4EF6\u5E93, \u5B9A\u5236\u5316\u7A0B\u5EA6\u9AD8\uFF0C\u4EE5\u9ED1\u8272\u4E3B\u9898\u4E3A\u4E3B\uFF0C\u5DF2\u4E0A\u751F\u4EA7\u653E\u5FC3\u4F7F\u7528 ");function _u(e,u,t,o,n,a){const l=oe("vu-icon");return r(),m("div",ru,[s("header",pu,[s("img",{src:e.logoImg,alt:""},null,8,fu),mu]),Eu,s("div",Fu,[s("ul",null,[s("li",null,[g(l,{type:"star-on",color:e.randomBk()},null,8,["color"]),gu])])])])}var se=B(du,[["render",_u],["__scopeId","data-v-186e5266"]]);const Bu=["caidan","jiazai","shangla","xiala","milk-tea","orange","pear","baseballBall","water-cup","ice-tea","ice-drink","sunrise","soccer","sunny","lightning","coffee","cloudy","basketball","football","remove-outline","camera","delete-solid","zoomin","star-off","eleme","zoomout","ice-cream-square","phone-outline","s-help","s-tools","lollipop","goods","platform-eleme","camera-solid","ice-cream-round","goods","remove","user-solid","star-on","help","doubletop","doublebottom","PDF","form","edit","education","excel","example","exit","dashboard","drag","component","documentation","i404","BarChart","bug","clipboard","confirm","Openeyes","close-eye","eye","close-circular","search","date","warning","close","loading","info","danger","success","right-dobule","left-dobule","left","down","home","right","top","head","shoppingCart","qq","nav","yooxi","jinggao"],vu=[{field:"size",desc:"\u8868\u793Aicon\u5927\u5C0F",type:"[Number, String]",defaultValue:"16"},{field:"color",desc:"\u8868\u793Aicon\u989C\u8272",type:"String",defaultValue:"black"},{field:"type",desc:"\u8868\u793Aicon\u7C7B\u578B",type:"String",defaultValue:"-"}];const hu=_({name:"table-props",props:{componentProps:{type:Array,required:!0}}}),Cu=e=>(z("data-v-7f1c10fe"),e=e(),N(),e),$u={class:"table-props"},yu={class:"content"},Du=Cu(()=>s("tr",null,[s("th",null,"\u5C5E\u6027"),s("th",null,"\u8BF4\u660E"),s("th",null,"\u7C7B\u578B"),s("th",null,"\u9ED8\u8BA4\u503C")],-1));function bu(e,u,t,o,n,a){return r(),m("div",$u,[s("header",null,[xe(e.$slots,"default",{},void 0,!0)]),s("div",yu,[s("table",null,[Du,(r(!0),m(j,null,q(e.componentProps,(l,c)=>(r(),m("tr",{key:c},[s("td",null,v(l.field),1),s("td",null,v(l.desc),1),s("td",null,v(l.type),1),s("td",null,v(l.defaultValue),1)]))),128))])])])}var P=B(hu,[["render",bu],["__scopeId","data-v-7f1c10fe"]]);const L=e=>(z("data-v-3d48db00"),e=e(),N(),e),Au={class:"icon-demo"},ku=L(()=>s("h2",null,"Icon \u56FE\u6807",-1)),Vu=L(()=>s("p",null,"\u63D0\u4F9B\u4E00\u5957\u5E38\u7528\u7684\u56FE\u6807\u96C6\u5408",-1)),xu=L(()=>s("h3",null,"\u56FE\u6807\u96C6\u5408",-1)),Su=["onClick"],Iu=L(()=>s("h3",null,"Icon Props",-1)),Mu=_({setup(e){const u=t=>{h.success(`\u60A8\u9009\u4E2D\u4E86<vu-icon-${t}>\u56FE\u6807`)};return(t,o)=>(r(),m("div",Au,[ku,Vu,xu,s("ul",null,[(r(!0),m(j,null,q(F(Bu),n=>(r(),m("li",{key:n,onClick:a=>u(n)},[g(F(Se),{type:n},null,8,["type"]),s("span",null,v(`vu-icon-${n}`),1)],8,Su))),128))]),Iu,g(P,{"component-props":F(vu)},null,8,["component-props"])]))}});var Tu=B(Mu,[["__scopeId","data-v-3d48db00"]]);const wu=[{field:"success",desc:"\u5F53\u6210\u529F\u65F6\u8C03\u7528\u7684\u6307\u4EE4",type:"-",defaultValue:"VuMessage.success(XXX)"},{field:"danger",desc:"\u5F53\u5931\u8D25\u65F6\u8C03\u7528\u6307\u4EE4",type:"-",defaultValue:"VuMessage.danger(XXX)"}],Hu={class:"message-demo"},zu=s("h2",null,"Message \u6D88\u606F\u63D0\u793A",-1),Nu=s("p",null," \u63D0\u4F9B\u4E86\u4E00\u5957\u6697\u9ED1\u8272\u4E3B\u9898\u7684\u6210\u529F\u4EE5\u53CA\u5931\u8D25\u6D88\u606F\u72B6\u6001\u3002\u53EA\u662F\u4F5C\u4E3A\u6D88\u606F\u63D0\u793A\uFF0C\u5982\u679C\u60F3\u4F7F\u7528\u786E\u8BA4\u6D88\u606F\u8BF7\u770BMessageBox ",-1),Pu=s("h3",null,"\u5B9E\u4F8B\u6548\u679C",-1),Lu=s("h3",null,"\u4EE3\u7801\u793A\u4F8B",-1),Zu=s("div",{class:"code"},[s("div",null,"import {VuMessage} from 'vu-design-plus'"),s("div",null,"const successCallback = () => VuMessage.success('\u6211\u6210\u529F\u4E86')"),s("div",null,"const successCallback = () => VuMessage.danger('\u6211\u5931\u8D25\u4E86')"),s("div",null,"const warningCallback = () => VuMessage.warning('\u6211\u5931\u8D25\u4E86')")],-1),Ou=s("h3",null,"Message Props",-1),ju=_({setup(e){const u=()=>h.success("\u6211\u6210\u529F\u4E86"),t=()=>h.danger("\u6211\u5931\u8D25\u4E86"),o=()=>h.warning("\u6211\u88AB\u8B66\u544A\u4E86");return(n,a)=>(r(),m("div",Hu,[zu,Nu,Pu,s("div",{class:"flex"},[s("div",{class:"btns",onClick:u},"\u70B9\u6211\u6210\u529F"),s("div",{class:"btns",onClick:t},"\u70B9\u6211\u5931\u8D25"),s("div",{class:"btns",onClick:o},"\u70B9\u51FB\u8B66\u544A")]),Lu,Zu,Ou,g(P,{"component-props":F(wu)},null,8,["component-props"])]))}}),qu=[{field:"\u63D0\u793A",desc:"\u8C03\u7528\u53C2\u6570\u4E2D\u5E94\u8BE5\u662F(message) | (message, {callback, ...} | ({callback, ...})), \u53C2\u6570\u53EA\u6709\u4E09\u79CD\u53EF\u80FD\u6027\uFF0C\u5982\u679C\u9700\u8981\u5BF9\u8C61\u53C2\u7167\u4E0B\u5217\u53C2\u6570",type:"-",defaultValue:"-"},{field:"message",desc:"\u63D0\u793A\u6D88\u606F",type:"string",defaultValue:"-"},{field:"htmlTpl",desc:"\u63D0\u793A\u6D88\u606F, \u8DDFmessage\u4E0D\u5171\u5B58\uFF0C\u8FD9\u4E2A\u4F7F\u7528v-html\u6765\u652F\u6301\uFF0C\u6240\u4EE5\u652F\u6301\u81EA\u5B9A\u4E49\u6837\u5F0F",type:"string",defaultValue:"-"},{field:"callback",desc:"\u6210\u529F\u56DE\u8C03",type:"Function",defaultValue:"-"},{field:"cancelCallback",desc:"\u70B9\u51FB\u53D6\u6D88\u7684\u56DE\u8C03",type:"Function",defaultValue:"-"},{field:"cancelButtonText",desc:"\u53D6\u6D88\u6309\u94AE\u6587\u5B57",type:"String",defaultValue:"\u53D6\u6D88"},{field:"confirmButtonText",desc:"\u6210\u529F\u6309\u94AE\u7684\u6587\u5B57",type:"String",defaultValue:"\u786E\u5B9A"}],Uu={class:"message-box-demo"},Xu=s("h2",null,"MessageBox \u6D88\u606F\u786E\u8BA4\u63D0\u793A\u63D0\u793A",-1),Ru=s("p",null,"\u4E13\u95E8\u4E3A\u505A\u67D0\u4E9B\u4E8B\u60C5\u4E4B\u524D\u8BBE\u7F6E\u7684\u6307\u4EE4\uFF0C\u5206\u4E3A\u5220\u9664\u4EE5\u53CA\u786E\u8BA4\u72B6\u6001",-1),Wu=s("h3",null,"\u5B9E\u4F8B\u6548\u679C",-1),Ku=re('<h3>\u63D0\u793A</h3><div class="tips-block"><p>TIP</p><ul><li> \u4F7F\u7528danger\u6307\u4EE4\u4E00\u822C\u90FD\u662F\u5728\u9700\u8981\u5220\u9664\u7684\u662F\u65F6\u5019\uFF0C\u4F46\u662F\u67D0\u79CD\u60C5\u51B5\u4E0B\u4E0D\u80FD\u5220\u9664, \u6B64\u65F6\u53EF\u4EE5\u7528\u5230VuMessageBox.danger\u6307\u4EE4\uFF0C\u6B64\u6307\u4EE4\u53EA\u9700\u8981message, \u53CD\u800C\u4E0D\u9700\u8981\u56DE\u8C03 </li><li> \u4F7F\u7528delete\u6307\u4EE4\u4E00\u822C\u90FD\u662F\u5728\u9700\u8981\u5220\u9664\u7684\u662F\u65F6\u5019\uFF0C\u76F4\u63A5\u8C03\u7528\u6307\u4EE4, \u6B64\u65F6\u53EF\u4EE5\u7528\u5230VuMessageBox.delete\u6307\u4EE4\uFF0C\u6B64\u6307\u4EE4\u9700\u8981\u6D88\u606F\u4EE5\u53CA\u9700\u8981\u56DE\u8C03 </li></ul></div><h3>\u4EE3\u7801\u793A\u4F8B</h3><div class="code"><div>import {VuMessageBox} from &#39;vu-design-plus&#39;</div><div>VuMessageBox.danger(message)</div><div>VuMessageBox.delete(message, {callback})</div><div>VuMessageBox.danger({htmlTpl: message})</div><div>VuMessageBox.delete({htmlTpl: message, callback})</div></div><h3>MessageBox Props</h3>',5),Gu=_({setup(e){const u=()=>{x.danger("\u4EBA\u6570\u8FC7\u591A, \u60A8\u8FD8\u4E0D\u80FD\u5220\u9664?")},t=()=>{x.delete("\u60A8\u786E\u8BA4\u8981\u5220\u9664\u5417",{callback:()=>h.success("\u5220\u9664\u6210\u529F")})},o=()=>{x.danger({htmlTpl:'<div class = "red">\u4EBA\u6570\u8FC7\u591A, \u60A8\u8FD8\u4E0D\u80FD\u5220\u9664?</div>'})},n=()=>{x.delete({htmlTpl:'<div class = "red">\u60A8\u786E\u8BA4\u8981\u5220\u9664\u5417</div>',callback:()=>h.success("\u5220\u9664\u6210\u529F")})};return(a,l)=>(r(),m("div",Uu,[Xu,Ru,Wu,s("div",{class:"flex"},[s("div",{class:"btns",onClick:u},"\u70B9\u51FB\u786E\u8BA4"),s("div",{class:"btns",onClick:t},"\u70B9\u51FB\u5220\u9664"),s("div",{class:"btns",onClick:o},"\u81EA\u5B9A\u4E49\u6A21\u677F \u70B9\u51FB\u786E\u8BA4"),s("div",{class:"btns",onClick:n},"\u81EA\u5B9A\u4E49\u6A21\u677F \u70B9\u51FB\u5220\u9664")]),Ku,g(P,{"component-props":F(qu)},null,8,["component-props"])]))}}),Ju=[{field:"modelValue",type:"Boolean",desc:"\u54CD\u5E94\u5F0F\u5F39\u6846\u663E\u9690\u53D8\u91CF",defaultValue:"false"},{field:"title",type:"String",desc:"\u6807\u9898",defaultValue:"-"},{field:"existBtns",type:"Array",desc:'\u9700\u8981\u5B58\u5728\u7684\u6309\u94AE\uFF0C\u5982\u679C\u60F3\u8981\u786E\u8BA4\u6309\u94AE\u5B58\u5728\u76F4\u63A5\u4F20\u503C\u4E3A: ["confirm"]',defaultValue:"['cancel', 'confirm']"},{field:"width",type:"[Number, String]",desc:"\u5F39\u6846\u663E\u793A\u5BBD\u5EA6",defaultValue:"400"},{field:"confirmBtnText",type:"String",desc:"\u786E\u8BA4\u6309\u94AE\u5185\u5BB9",defaultValue:"\u786E\u8BA4"},{field:"cancelBtnText",type:"String",desc:"\u53D6\u6D88\u6309\u94AE\u5185\u5BB9",defaultValue:"\u53D6\u6D88"},{field:"on-confirm",type:"Click",desc:"\u70B9\u51FB\u786E\u8BA4\u540E\u56DE\u8C03\u4E8B\u4EF6",defaultValue:"-"}],Qu={size:{type:[Number,String],default:16},color:{type:String,default:"black"},type:{type:String,required:!0}},O=e=>`${Je}-${e}`,Yu=b({name:"vu-icon",props:Qu,setup(e){const u=O("icon"),t=f(()=>[u,`vu-icon-${e.type}`].join(" ")),o=f(()=>!e.size&&!e.color?{}:{fontSize:eu(e.size)?void 0:W(e.size),"--color":e.color});return{classes:t,styles:o}}});function es(e,u,t,o,n,a){return C(),M("i",{class:E(e.classes),style:U(e.styles)},null,6)}var us=B(Yu,[["render",es]]);R(us);const ss={message:{type:String,required:!0},type:{type:String,default:"success"},icon:{type:String,default:""},showClose:{type:Boolean,default:!1},autoClose:{type:Boolean,default:!0},customClass:{type:String,default:""},style:{type:Object,default:()=>({})},onClose:{type:Function,default:()=>({})},offset:{type:Number,default:20},delay:{type:Number,default:2e3}};b({name:"VuMessage",props:ss,setup(e){const u=O("message"),t=O(e.customClass||"message"),o=K(),n=f(()=>`${u}-fade`),a=f(()=>[t,[t,A.$modifierSeparator,e.type].join("")]),l=f(()=>V(k({},e.style),{top:W(e.offset),zIndex:o})),c=f(()=>`vu-icon vu-icon-${e.icon}`),d=T(!1),p=()=>{d.value=!1};return pe(()=>{if(d.value=!0,!e.autoClose)return;let y=setTimeout(()=>{p(),clearTimeout(y)},e.delay)}),Ie(()=>d.value=!1),{transitionName:n,classes:a,styles:l,showFlag:d,icon:c,computedClass:G(t),closeMessageHandle:p}}});const ts={title:{type:String,default:""},message:{type:String,default:""},htmlTpl:{type:String,default:""},isDel:{type:Boolean,default:!1},callback:{type:Function,default:()=>({})},cancelCallback:{type:Function,default:()=>({})},cancelButtonText:{type:String,default:"\u53D6\u6D88"},confirmButtonText:{type:String,default:"\u786E\u5B9A"}},ns=b({name:"VuMessageBox",components:{VuMark:Ee},props:ts,emits:["update:modelValue"],setup(e,{emit:u}){const t=K(),o=T(!1),n=T(""),a=p=>{o.value=!1,n.value=p},l=()=>{n.value==="success"?e.callback():e.cancelCallback()},c=f(()=>e.htmlTpl),d=f(()=>e.isDel);return pe(()=>o.value=!0),{maskZIndex:t,changeValue:o,popupBtnHandle:a,onClose:l,computedHtml:c,isDel:d,computedClass:G("vu-message-box")}}}),os={class:"vu-message-box"},as=i("i",{class:"vu-icon vu-icon-jinggao body-left"},null,-1),ls=["innerHTML"],cs={key:1,class:"body-right"};function ds(e,u,t,o,n,a){const l=ie("VuMark");return C(),ce(de,{name:"vu-message-box-fade",onAfterLeave:e.onClose},{default:w(()=>[S(X(l,{"z-index":e.maskZIndex,center:!0},{default:w(()=>[i("div",os,[i("div",{class:E(e.computedClass(["body"]))},[as,e.computedHtml?(C(),M("div",{key:0,class:"body-right",innerHTML:e.htmlTpl},null,8,ls)):(C(),M("div",cs,$(e.message),1))],2),i("div",{class:E(e.computedClass(["footer"]))},[i("button",{class:E(["vu-message-box__footer__btn",e.isDel?"delete-sure":""]),onClick:u[0]||(u[0]=c=>e.popupBtnHandle(e.isDel?"success":"fail"))},$(e.confirmButtonText),3),i("button",{class:E(["vu-message-box__footer__btn",e.isDel?"delete-cancel":"danger-sure"]),onClick:u[1]||(u[1]=c=>e.popupBtnHandle(e.isDel?"fail":"success"))},$(e.cancelButtonText),3)],2)])]),_:1},8,["z-index"]),[[I,e.changeValue]])]),_:1},8,["onAfterLeave"])}var H=B(ns,[["render",ds]]);let te=0;const Z={},is=(e,u={},t)=>{u=V(k({},u),{message:e}),te+=1;const o=te,n=document.createElement("div");n.id=`dialog-popup-${o}`;const a=u.callback||Function.prototype,l=async()=>{const{el:d}=Z[o];ee(null,d),await ue(()=>document.body.removeChild(d)),Reflect.deleteProperty(Z,o)};u=V(k({},u),{isDel:t,cancelButtonText:t?"\u53D6\u6D88":"\u786E\u5B9A",confirmButtonText:t?"\u5220\u9664":"\u53D6\u6D88",callback:async()=>{await l(),a()},cancelCallback:l});const c=X(H,u);ee(c,n),document.body.appendChild(n),ue(()=>{Z[o]={el:n}})};["danger","delete"].forEach(e=>{H[e]=function(u,t={}){return u&&typeof u=="object"&&(t=u,u=""),is(u,t,e==="delete")}});H.install=e=>{e.config.globalProperties.$MessageBox=H};const rs={class:"dialog-demo"},ps=s("h2",null,"Dialog \u5185\u5BB9\u5F39\u6846",-1),fs=s("p",null,"\u5728\u4FDD\u7559\u5F53\u524D\u9875\u9762\u72B6\u6001\u7684\u60C5\u51B5\u4E0B\uFF0C\u544A\u77E5\u7528\u6237\u5E76\u627F\u8F7D\u76F8\u5173\u64CD\u4F5C\u3002",-1),ms=s("h3",null,"\u5B9E\u4F8B\u6548\u679C",-1),Es=s("h3",null,"Dialog Props",-1),Fs=s("span",{class:"red"},"\u8FD9\u662F\u5F39\u6846\u5185\u5BB9",-1),gs=_({setup(e){const u=ne(!1),t=()=>{u.value=!0},o=()=>{h.success("\u70B9\u51FB\u786E\u8BA4"),u.value=!1};return(n,a)=>(r(),m("div",rs,[ps,fs,ms,s("div",{class:"btns",onClick:t},"\u70B9\u51FB\u5F39\u6846"),Es,g(P,{"component-props":F(Ju)},null,8,["component-props"]),g(F(Fe),{title:"\u5F39\u6846\u6807\u9898",modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=l=>u.value=l),onOnConfirm:o},{default:Me(()=>[Fs]),_:1},8,["modelValue"])]))}}),_s=[{path:"/",component:se},{path:"/introduce",component:se},{path:"/icon",component:Tu},{path:"/message",component:ju},{path:"/messageBox",component:Gu},{path:"/dialog",component:gs}],Bs=Te({history:we(),routes:_s});const J=He(Ke);J.use(Fe);J.use(Bs);J.mount("#app");
//# sourceMappingURL=index.8757e49a.js.map