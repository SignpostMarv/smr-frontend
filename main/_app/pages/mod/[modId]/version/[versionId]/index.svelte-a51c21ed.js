import{S as e,i as s,s as n,ak as r,e as a,c as o,a as t,d as c,b as i,f as l,al as d,W as u,t as h,k as f,g,n as m,Q as v,h as p,M as $,l as b,Z as E,u as x,w,x as k,L as V,ab as y,P as I,N as S,r as N,C as D,V as T,X as P,R as j,ae as A,I as R,J as O,j as B,m as H,o as C,K as L,v as G}from"../../../../../chunks/vendor-9ef56761.js";import{l as M}from"../../../../../chunks/gql-fb82bae1.js";import{B as _,H as z}from"../../../../../chunks/graphql-7c12eb8b.js";import{p as U}from"../../../../../chunks/routing-405c8d47.js";import{m as q}from"../../../../../chunks/markdown-f46c64ca.js";import{b as J}from"../../../../../chunks/api-82c76902.js";import{a as K}from"../../../../../chunks/user-f1838cad.js";import{T as Q}from"../../../../../chunks/Toast-70852bff.js";import{D as W}from"../../../../../chunks/Dialog-fc65cda9.js";import{g as X}from"../../../../../chunks/navigation-51f4a605.js";import{b as Z}from"../../../../../chunks/paths-6758d194.js";import"../../../../../chunks/singletons-12a22614.js";function F(e){return{c:u,l:u,m:u,p:u,d:u}}function Y(e){let s,n=e[1]+"";return{c(){s=a("p")},l(e){s=o(e,"P",{}),t(s).forEach(c)},m(e,r){l(e,s,r),s.innerHTML=n},p(e,r){1&r&&n!==(n=e[1]+"")&&(s.innerHTML=n)},d(e){e&&c(s)}}}function ee(e){return{c:u,l:u,m:u,p:u,d:u}}function se(e){let s,n,h={ctx:e,current:null,token:null,hasCatch:!1,pending:ee,then:Y,catch:F,value:1};return r(n=q(e[0]),h),{c(){s=a("div"),h.block.c(),this.h()},l(e){s=o(e,"DIV",{class:!0});var n=t(s);h.block.l(n),n.forEach(c),this.h()},h(){i(s,"class","markdown-content")},m(e,n){l(e,s,n),h.block.m(s,h.anchor=null),h.mount=()=>s,h.anchor=null},p(s,[a]){e=s,h.ctx=e,1&a&&n!==(n=q(e[0]))&&r(n,h)||d(h,e,a)},i:u,o:u,d(e){e&&c(s),h.block.d(),h.token=null,h=null}}}function ne(e,s,n){let{changelog:r}=s;return e.$$set=e=>{"changelog"in e&&n(0,r=e.changelog)},[r]}class re extends e{constructor(e){super(),s(this,e,ne,se,n,{changelog:0})}}function ae(e){let s,n,r,d,$,b,E,x,w,k,V,y,I,S,N,D,T,P,j,A,R,O,B,H,C,L,G,M,_,z,U,q,J,K,Q,W,X,Z,F,Y,ee,se,ne,re,ae=e[0].created_at+"",oe=e[0].downloads+"",te=e[0].sml_version+"",ce=e[0].stability+"",ie=e[0].size+"",le=e[0].hash+"";return{c(){s=a("div"),n=a("h3"),r=h("Info"),d=f(),$=a("span"),b=a("strong"),E=h("Created:"),x=f(),w=h(ae),k=a("br"),V=f(),y=a("span"),I=a("strong"),S=h("Downloads:"),N=f(),D=h(oe),T=a("br"),P=f(),j=a("span"),A=a("strong"),R=h("SML Version:"),O=f(),B=h(te),H=a("br"),C=f(),L=a("span"),G=a("strong"),M=h("Stability:"),_=f(),z=h(ce),U=a("br"),q=f(),J=a("span"),K=a("strong"),Q=h("Size:"),W=f(),X=h(ie),Z=a("br"),F=f(),Y=a("span"),ee=a("strong"),se=h("Hash:"),ne=f(),re=h(le),this.h()},l(e){s=o(e,"DIV",{class:!0});var a=t(s);n=o(a,"H3",{class:!0});var i=t(n);r=g(i,"Info"),i.forEach(c),d=m(a),$=o(a,"SPAN",{});var l=t($);b=o(l,"STRONG",{});var u=t(b);E=g(u,"Created:"),u.forEach(c),x=m(l),w=g(l,ae),l.forEach(c),k=o(a,"BR",{}),V=m(a),y=o(a,"SPAN",{});var h=t(y);I=o(h,"STRONG",{});var f=t(I);S=g(f,"Downloads:"),f.forEach(c),N=m(h),D=g(h,oe),h.forEach(c),T=o(a,"BR",{}),P=m(a),j=o(a,"SPAN",{});var v=t(j);A=o(v,"STRONG",{});var p=t(A);R=g(p,"SML Version:"),p.forEach(c),O=m(v),B=g(v,te),v.forEach(c),H=o(a,"BR",{}),C=m(a),L=o(a,"SPAN",{});var de=t(L);G=o(de,"STRONG",{});var ue=t(G);M=g(ue,"Stability:"),ue.forEach(c),_=m(de),z=g(de,ce),de.forEach(c),U=o(a,"BR",{}),q=m(a),J=o(a,"SPAN",{});var he=t(J);K=o(he,"STRONG",{});var fe=t(K);Q=g(fe,"Size:"),fe.forEach(c),W=m(he),X=g(he,ie),he.forEach(c),Z=o(a,"BR",{}),F=m(a),Y=o(a,"SPAN",{});var ge=t(Y);ee=o(ge,"STRONG",{});var me=t(ee);se=g(me,"Hash:"),me.forEach(c),ne=m(ge),re=g(ge,le),ge.forEach(c),a.forEach(c),this.h()},h(){i(n,"class","text-2xl my-4 font-bold"),i(s,"class","text-lg")},m(e,a){l(e,s,a),v(s,n),v(n,r),v(s,d),v(s,$),v($,b),v(b,E),v($,x),v($,w),v(s,k),v(s,V),v(s,y),v(y,I),v(I,S),v(y,N),v(y,D),v(s,T),v(s,P),v(s,j),v(j,A),v(A,R),v(j,O),v(j,B),v(s,H),v(s,C),v(s,L),v(L,G),v(G,M),v(L,_),v(L,z),v(s,U),v(s,q),v(s,J),v(J,K),v(K,Q),v(J,W),v(J,X),v(s,Z),v(s,F),v(s,Y),v(Y,ee),v(ee,se),v(Y,ne),v(Y,re)},p(e,[s]){1&s&&ae!==(ae=e[0].created_at+"")&&p(w,ae),1&s&&oe!==(oe=e[0].downloads+"")&&p(D,oe),1&s&&te!==(te=e[0].sml_version+"")&&p(B,te),1&s&&ce!==(ce=e[0].stability+"")&&p(z,ce),1&s&&ie!==(ie=e[0].size+"")&&p(X,ie),1&s&&le!==(le=e[0].hash+"")&&p(re,le)},i:u,o:u,d(e){e&&c(s)}}}function oe(e,s,n){let{version:r}=s;return e.$$set=e=>{"version"in e&&n(0,r=e.version)},[r]}class te extends e{constructor(e){super(),s(this,e,oe,ae,n,{version:0})}}function ce(e){return document.title=e[3].data.getVersion.mod.name+" "+e[3].data.getVersion.version+" - SMR",{c:u,l:u,m:u,d:u}}function ie(e){let s;return{c(){s=h("404")},l(e){s=g(e,"404")},m(e,n){l(e,s,n)},p:u,i:u,o:u,d(e){e&&c(s)}}}function le(e){let s,n,r,d,u,$,b,E,w,V,y,I,S,N,D,T,P,M,_,z,U,q,K,X,F,Y,ee,se,ne,ae,oe,ce=e[3].data.getVersion.mod.name+"",ie=e[3].data.getVersion.version+"",le=e[6]&&he(e);function de(s){e[19](s)}_=new j({props:{icon:A,inline:!0,class:"inline-block"}}),U=new re({props:{changelog:e[3].data.getVersion.changelog}}),X=new te({props:{version:e[3].data.getVersion}});let ue={$$slots:{default:[fe]},$$scope:{ctx:e}};function me(s){e[20](s)}void 0!==e[7]&&(ue.open=e[7]),Y=new W({props:ue}),R.push((()=>O(Y,"open",de)));let ve={$$slots:{default:[ge]},$$scope:{ctx:e}};return void 0!==e[5]&&(ve.running=e[5]),ne=new Q({props:ve}),R.push((()=>O(ne,"running",me))),{c(){s=a("div"),n=a("div"),r=a("div"),d=a("h1"),u=h(ce),$=h("\n            Version "),b=h(ie),E=f(),w=a("div"),le&&le.c(),V=f(),y=a("a"),I=h("Download"),N=f(),D=a("a"),T=a("span"),P=h("Install"),M=f(),B(_.$$.fragment),z=f(),B(U.$$.fragment),q=f(),K=a("div"),B(X.$$.fragment),F=f(),B(Y.$$.fragment),se=f(),B(ne.$$.fragment),this.h()},l(e){s=o(e,"DIV",{class:!0});var a=t(s);n=o(a,"DIV",{class:!0});var i=t(n);r=o(i,"DIV",{class:!0});var l=t(r);d=o(l,"H1",{class:!0});var h=t(d);u=g(h,ce),$=g(h,"\n            Version "),b=g(h,ie),h.forEach(c),E=m(l),w=o(l,"DIV",{class:!0});var f=t(w);le&&le.l(f),V=m(f),y=o(f,"A",{href:!0,class:!0});var v=t(y);I=g(v,"Download"),v.forEach(c),N=m(f),D=o(f,"A",{href:!0,class:!0});var p=t(D);T=o(p,"SPAN",{});var x=t(T);P=g(x,"Install"),x.forEach(c),M=m(p),H(_.$$.fragment,p),p.forEach(c),f.forEach(c),l.forEach(c),z=m(i),H(U.$$.fragment,i),i.forEach(c),q=m(a),K=o(a,"DIV",{class:!0});var k=t(K);H(X.$$.fragment,k),k.forEach(c),a.forEach(c),F=m(e),H(Y.$$.fragment,e),se=m(e),H(ne.$$.fragment,e),this.h()},h(){i(d,"class","text-4xl my-4 font-bold"),i(y,"href",S=J+"/mod/"+e[0]+"/versions/"+e[1]+"/download"),i(y,"class","py-2 px-4 rounded text-base bg-green-600 text-center"),i(D,"href",Z),i(D,"class","py-2 px-4 rounded text-base bg-blue-600 text-center"),i(w,"class","grid grid-flow-col gap-4"),i(r,"class","grid grid-flow-col grid-auto-max h-auto items-center svelte-1ug5acc"),i(n,"class","grid grid-cols-1 auto-rows-min gap-8"),i(K,"class","grid grid-cols-1 auto-rows-min gap-8"),i(s,"class","grid gap-8 grid-auto-max svelte-1ug5acc")},m(e,a){l(e,s,a),v(s,n),v(n,r),v(r,d),v(d,u),v(d,$),v(d,b),v(r,E),v(r,w),le&&le.m(w,null),v(w,V),v(w,y),v(y,I),v(w,N),v(w,D),v(D,T),v(T,P),v(D,M),C(_,D,null),v(n,z),C(U,n,null),v(s,q),v(s,K),C(X,K,null),l(e,F,a),C(Y,e,a),l(e,se,a),C(ne,e,a),oe=!0},p(e,s){(!oe||8&s)&&ce!==(ce=e[3].data.getVersion.mod.name+"")&&p(u,ce),(!oe||8&s)&&ie!==(ie=e[3].data.getVersion.version+"")&&p(b,ie),e[6]?le?le.p(e,s):(le=he(e),le.c(),le.m(w,V)):le&&(le.d(1),le=null),(!oe||3&s&&S!==(S=J+"/mod/"+e[0]+"/versions/"+e[1]+"/download"))&&i(y,"href",S);const n={};8&s&&(n.changelog=e[3].data.getVersion.changelog),U.$set(n);const r={};8&s&&(r.version=e[3].data.getVersion),X.$set(r);const a={};4194304&s&&(a.$$scope={dirty:s,ctx:e}),!ee&&128&s&&(ee=!0,a.open=e[7],L((()=>ee=!1))),Y.$set(a);const o={};4194320&s&&(o.$$scope={dirty:s,ctx:e}),!ae&&32&s&&(ae=!0,o.running=e[5],L((()=>ae=!1))),ne.$set(o)},i(e){oe||(k(_.$$.fragment,e),k(U.$$.fragment,e),k(X.$$.fragment,e),k(Y.$$.fragment,e),k(ne.$$.fragment,e),oe=!0)},o(e){x(_.$$.fragment,e),x(U.$$.fragment,e),x(X.$$.fragment,e),x(Y.$$.fragment,e),x(ne.$$.fragment,e),oe=!1},d(e){e&&c(s),le&&le.d(),G(_),G(U),G(X),e&&c(F),G(Y,e),e&&c(se),G(ne,e)}}}function de(e){let s,n,r,i=e[3].error.message+"";return{c(){s=a("p"),n=h("Oh no... "),r=h(i)},l(e){s=o(e,"P",{});var a=t(s);n=g(a,"Oh no... "),r=g(a,i),a.forEach(c)},m(e,a){l(e,s,a),v(s,n),v(s,r)},p(e,s){8&s&&i!==(i=e[3].error.message+"")&&p(r,i)},i:u,o:u,d(e){e&&c(s)}}}function ue(e){let s,n;return{c(){s=a("p"),n=h("Loading...")},l(e){s=o(e,"P",{});var r=t(s);n=g(r,"Loading..."),r.forEach(c)},m(e,r){l(e,s,r),v(s,n)},p:u,i:u,o:u,d(e){e&&c(s)}}}function he(e){let s,n,r,d,p,$,b;return{c(){s=a("button"),n=h("Edit"),r=f(),d=a("button"),p=h("Delete"),this.h()},l(e){s=o(e,"BUTTON",{class:!0});var a=t(s);n=g(a,"Edit"),a.forEach(c),r=m(e),d=o(e,"BUTTON",{class:!0});var i=t(d);p=g(i,"Delete"),i.forEach(c),this.h()},h(){i(s,"class","py-2 px-4 rounded text-base bg-yellow-600"),i(d,"class","py-2 px-4 rounded text-base bg-red-500")},m(a,o){l(a,s,o),v(s,n),l(a,r,o),l(a,d,o),v(d,p),$||(b=[T(s,"click",e[15]),T(d,"click",e[16])],$=!0)},p:u,d(e){e&&c(s),e&&c(r),e&&c(d),$=!1,P(b)}}}function fe(e){let s,n,r,d,p,$,b,E,x,w,k,V,y,I;return{c(){s=a("div"),n=a("h3"),r=h("Delete Version?"),d=f(),p=a("span"),$=h("Are you sure you wish to delete this version"),b=f(),E=a("button"),x=h("Cancel"),w=f(),k=a("button"),V=h("Delete"),this.h()},l(e){s=o(e,"DIV",{class:!0});var a=t(s);n=o(a,"H3",{class:!0});var i=t(n);r=g(i,"Delete Version?"),i.forEach(c),d=m(a),p=o(a,"SPAN",{});var l=t(p);$=g(l,"Are you sure you wish to delete this version"),l.forEach(c),b=m(a),E=o(a,"BUTTON",{class:!0});var u=t(E);x=g(u,"Cancel"),u.forEach(c),w=m(a),k=o(a,"BUTTON",{class:!0});var h=t(k);V=g(h,"Delete"),h.forEach(c),a.forEach(c),this.h()},h(){i(n,"class","text-2xl font-bold"),i(E,"class","py-1 px-4 rounded text-base bg-yellow-600"),i(k,"class","py-1 px-4 rounded text-base bg-red-500"),i(s,"class","grid grid-flow-row gap-4")},m(a,o){l(a,s,o),v(s,n),v(n,r),v(s,d),v(s,p),v(p,$),v(s,b),v(s,E),v(E,x),v(s,w),v(s,k),v(k,V),y||(I=[T(E,"click",e[17]),T(k,"click",e[18])],y=!0)},p:u,d(e){e&&c(s),y=!1,P(I)}}}function ge(e){let s,n;return{c(){s=a("span"),n=h(e[4])},l(r){s=o(r,"SPAN",{});var a=t(s);n=g(a,e[4]),a.forEach(c)},m(e,r){l(e,s,r),v(s,n)},p(e,s){16&s&&p(n,e[4])},d(e){e&&c(s)}}}function me(e){let s,n,r,a,o,t,i=!e[3].fetching&&!e[3].error&&ce(e);const d=[ue,de,le,ie],u=[];function h(e,s){return e[3].fetching?0:e[3].error?1:e[3].data.getVersion?2:3}return r=h(e),a=u[r]=d[r](e),{c(){i&&i.c(),s=b(),n=f(),a.c(),o=b()},l(e){const r=E('[data-svelte="svelte-1523t51"]',document.head);i&&i.l(r),s=b(),r.forEach(c),n=m(e),a.l(e),o=b()},m(e,a){i&&i.m(document.head,null),v(document.head,s),l(e,n,a),u[r].m(e,a),l(e,o,a),t=!0},p(e,[n]){e[3].fetching||e[3].error?i&&(i.d(1),i=null):i||(i=ce(e),i.c(),i.m(s.parentNode,s));let t=r;r=h(e),r===t?u[r].p(e,n):(N(),x(u[t],1,1,(()=>{u[t]=null})),w(),a=u[r],a?a.p(e,n):(a=u[r]=d[r](e),a.c()),k(a,1),a.m(o.parentNode,o))},i(e){t||(k(a),t=!0)},o(e){x(a),t=!1},d(e){i&&i.d(e),c(s),e&&c(n),u[r].d(e),e&&c(o)}}}var ve=function(e,s,n,r){return new(n||(n=Promise))((function(a,o){function t(e){try{i(r.next(e))}catch(s){o(s)}}function c(e){try{i(r.throw(e))}catch(s){o(s)}}function i(e){var s;e.done?a(e.value):(s=e.value,s instanceof n?s:new n((function(e){e(s)}))).then(t,c)}i((r=r.apply(e,s||[])).next())}))};const pe=$(_,{version:void 0}),$e=U((e=>ve(void 0,void 0,void 0,(function*(){return pe.variables.version=e.page.params.versionId,M({version:pe})(e)}))));function be(e,s,n){let r,a,o,t,c=u,i=()=>(c(),c=y(v,(e=>n(3,o=e))),v);var l,d,h,f;V(e,K,(e=>n(14,a=e))),e.$$.on_destroy.push((()=>c()));let{modId:g}=s,{versionId:m}=s,{version:v}=s;i();let p="",$=!1;const b=I({query:z}),E=D(!1);V(e,E,(e=>n(7,t=e)));const x=()=>{b({versionId:m}).then((e=>{e.error?(console.error(e.error.message),n(4,p="Error deleting version: "+e.error.message),n(5,$=!0)):X(Z+"/mod/"+g)}))};S(v);return e.$$set=e=>{"modId"in e&&n(0,g=e.modId),"versionId"in e&&n(1,m=e.versionId),"version"in e&&i(n(2,v=e.version))},e.$$.update=()=>{31752&e.$$.dirty&&n(6,r=(null===n(10,l=null==a?void 0:a.roles)||void 0===l?void 0:l.deleteContent)||(null===n(13,f=null===n(12,h=null===n(11,d=null==o?void 0:o.data)||void 0===d?void 0:d.getVersion.mod)||void 0===h?void 0:h.authors)||void 0===f?void 0:f.findIndex((e=>e.user_id==(null==a?void 0:a.id))))>=0)},[g,m,v,o,p,$,r,t,E,x,l,d,h,f,a,()=>X(Z+"/mod/"+g+"/version/"+m+"/edit"),()=>E.set(!0),()=>E.set(!1),()=>x(),function(e){t=e,E.set(t)},function(e){$=e,n(5,$)}]}class Ee extends e{constructor(e){super(),s(this,e,be,me,n,{modId:0,versionId:1,version:2})}}export{Ee as default,$e as load};
