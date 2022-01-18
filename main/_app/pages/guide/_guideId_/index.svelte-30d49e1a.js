import{S as ne,i as re,s as se,az as ae,w as P,x as S,y as q,q as h,o as w,B as M,aF as oe,e as v,t as C,k as H,c as b,a as D,h as T,d as u,m as L,b as V,g as I,X as _,j as Z,R as ve,l as K,ab as be,p as y,P as le,aA as ke,Q as we,T as De,n as x,Z as A,D as Ee,O as ie,M as ue,N as fe,Y as ee,L as Ge,aR as ce,aS as Ie,V as je,W as Ve}from"../../../chunks/vendor-3f5cbc3a.js";import{l as Ae}from"../../../chunks/gql-61421eff.js";import{s as Ce,t as Te}from"../../../chunks/graphql-a19cc583.js";import{p as Ne}from"../../../chunks/routing-689f9c1f.js";import{a as de}from"../../../chunks/formatting-24701f16.js";import{b as te}from"../../../chunks/paths-396f020f.js";import{a as Pe}from"../../../chunks/user-124feed5.js";import{g as $e}from"../../../chunks/navigation-ca50617e.js";import{T as Se}from"../../../chunks/Toast-c4472768.js";import{m as ge}from"../../../chunks/markdown-5ff4796f.js";import{M as qe}from"../../../chunks/MetaDescriptors-40e2f494.js";import"../../../chunks/singletons-4fc5a6de.js";import"../../../chunks/stores-c07fe9fa.js";function Me(a){let e,n,t,s,r,o,l,m,f=de(a[0].created_at)+"",c,i;return{c(){e=v("div"),n=v("h3"),t=C("Info"),s=H(),r=v("span"),o=v("strong"),l=C("Created:"),m=H(),c=C(f),i=v("br"),this.h()},l($){e=b($,"DIV",{class:!0});var p=D(e);n=b(p,"H3",{class:!0});var N=D(n);t=T(N,"Info"),N.forEach(u),s=L(p),r=b(p,"SPAN",{});var j=D(r);o=b(j,"STRONG",{});var B=D(o);l=T(B,"Created:"),B.forEach(u),m=L(j),c=T(j,f),j.forEach(u),i=b(p,"BR",{}),p.forEach(u),this.h()},h(){V(n,"class","text-2xl my-4 font-bold"),V(e,"class","text-lg")},m($,p){I($,e,p),_(e,n),_(n,t),_(e,s),_(e,r),_(r,o),_(o,l),_(r,m),_(r,c),_(e,i)},p($,p){p&1&&f!==(f=de($[0].created_at)+"")&&Z(c,f)},d($){$&&u(e)}}}function Oe(a){let e,n;return e=new oe({props:{$$slots:{default:[Me]},$$scope:{ctx:a}}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){q(e,t,s),n=!0},p(t,s){const r={};s&3&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function He(a){let e,n;return e=new ae({props:{$$slots:{default:[Oe]},$$scope:{ctx:a}}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){q(e,t,s),n=!0},p(t,[s]){const r={};s&3&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function Le(a,e,n){let{guide:t}=e;return a.$$set=s=>{"guide"in s&&n(0,t=s.guide)},[t]}class Be extends ne{constructor(e){super();re(this,e,Le,He,se,{guide:0})}}function Fe(a){let e,n,t,s,r,o,l,m,f,c,i,$=a[0].username+"",p,N,j,B,F;return{c(){e=v("div"),n=v("h3"),t=C("Author"),s=H(),r=v("div"),o=v("div"),l=v("div"),f=H(),c=v("div"),i=v("a"),p=C($),j=H(),B=v("div"),F=C("Writer"),this.h()},l(G){e=b(G,"DIV",{class:!0});var O=D(e);n=b(O,"H3",{class:!0});var R=D(n);t=T(R,"Author"),R.forEach(u),s=L(O),r=b(O,"DIV",{class:!0});var k=D(r);o=b(k,"DIV",{class:!0});var g=D(o);l=b(g,"DIV",{class:!0,style:!0}),D(l).forEach(u),f=L(g),c=b(g,"DIV",{class:!0});var U=D(c);i=b(U,"A",{href:!0,class:!0});var z=D(i);p=T(z,$),z.forEach(u),j=L(U),B=b(U,"DIV",{});var d=D(B);F=T(d,"Writer"),d.forEach(u),U.forEach(u),g.forEach(u),k.forEach(u),O.forEach(u),this.h()},h(){V(n,"class","text-2xl my-4 font-bold"),V(l,"class","rounded-full bg-cover w-14 h-14"),V(l,"style",m=`background-image: url("${a[0].avatar}")`),V(i,"href",N=""+(te+"/user/"+a[0].id+"/")),V(i,"class","text-yellow-500 underline"),V(c,"class","grid grid-flow-row"),V(o,"class","grid grid-flow-col auto-cols-min gap-x-4"),V(r,"class","grid auto-rows-min text-lg gap-y-4"),V(e,"class","grid grid-flow-row gap-y-2")},m(G,O){I(G,e,O),_(e,n),_(n,t),_(e,s),_(e,r),_(r,o),_(o,l),_(o,f),_(o,c),_(c,i),_(i,p),_(c,j),_(c,B),_(B,F)},p(G,O){O&1&&m!==(m=`background-image: url("${G[0].avatar}")`)&&V(l,"style",m),O&1&&$!==($=G[0].username+"")&&Z(p,$),O&1&&N!==(N=""+(te+"/user/"+G[0].id+"/"))&&V(i,"href",N)},d(G){G&&u(e)}}}function Re(a){let e,n;return e=new oe({props:{$$slots:{default:[Fe]},$$scope:{ctx:a}}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){q(e,t,s),n=!0},p(t,s){const r={};s&3&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function We(a){let e,n;return e=new ae({props:{$$slots:{default:[Re]},$$scope:{ctx:a}}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){q(e,t,s),n=!0},p(t,[s]){const r={};s&3&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function Qe(a,e,n){let{author:t}=e;return a.$$set=s=>{"author"in s&&n(0,t=s.author)},[t]}class Ue extends ne{constructor(e){super();re(this,e,Qe,We,se,{author:0})}}function _e(a){let e,n;return e=new qe({props:{description:a[3].data.getGuide.short_description,title:a[3].data.getGuide.name}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){q(e,t,s),n=!0},p(t,s){const r={};s&8&&(r.description=t[3].data.getGuide.short_description),s&8&&(r.title=t[3].data.getGuide.name),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function ze(a){let e;return{c(){e=C("404")},l(n){e=T(n,"404")},m(n,t){I(n,e,t)},p:A,i:A,o:A,d(n){n&&u(e)}}}function Xe(a){let e,n,t,s=a[3].data.getGuide.name+"",r,o,l,m,f,c,i,$,p,N,j,B,F,G,O,R,k=a[5]&&me(a);c=new ae({props:{class:"h-fit",$$slots:{default:[nt]},$$scope:{ctx:a}}}),p=new Be({props:{guide:a[3].data.getGuide}}),j=new Ue({props:{author:a[3].data.getGuide.user}});let g=a[5]&&pe(a);function U(d){a[15](d)}let z={$$slots:{default:[it]},$$scope:{ctx:a}};return a[2]!==void 0&&(z.running=a[2]),G=new Se({props:z}),ue.push(()=>fe(G,"running",U)),{c(){e=v("div"),n=v("div"),t=v("h1"),r=C(s),o=H(),l=v("div"),k&&k.c(),m=H(),f=v("div"),P(c.$$.fragment),i=H(),$=v("div"),P(p.$$.fragment),N=H(),P(j.$$.fragment),B=H(),g&&g.c(),F=H(),P(G.$$.fragment),this.h()},l(d){e=b(d,"DIV",{class:!0});var E=D(e);n=b(E,"DIV",{class:!0});var Q=D(n);t=b(Q,"H1",{class:!0});var X=D(t);r=T(X,s),X.forEach(u),o=L(Q),l=b(Q,"DIV",{});var Y=D(l);k&&k.l(Y),Y.forEach(u),Q.forEach(u),m=L(E),f=b(E,"DIV",{class:!0});var W=D(f);S(c.$$.fragment,W),i=L(W),$=b(W,"DIV",{class:!0});var J=D($);S(p.$$.fragment,J),N=L(J),S(j.$$.fragment,J),J.forEach(u),W.forEach(u),E.forEach(u),B=L(d),g&&g.l(d),F=L(d),S(G.$$.fragment,d),this.h()},h(){V(t,"class","text-4xl font-bold"),V(n,"class","flex flex-wrap h-auto justify-between items-center"),V($,"class","grid grid-cols-1 auto-rows-min gap-8"),V(f,"class","grid grid-auto-max auto-rows-min gap-4"),V(e,"class","grid gap-6 xlx:grid-flow-row")},m(d,E){I(d,e,E),_(e,n),_(n,t),_(t,r),_(n,o),_(n,l),k&&k.m(l,null),_(e,m),_(e,f),q(c,f,null),_(f,i),_(f,$),q(p,$,null),_($,N),q(j,$,null),I(d,B,E),g&&g.m(d,E),I(d,F,E),q(G,d,E),R=!0},p(d,E){(!R||E&8)&&s!==(s=d[3].data.getGuide.name+"")&&Z(r,s),d[5]?k?(k.p(d,E),E&32&&h(k,1)):(k=me(d),k.c(),h(k,1),k.m(l,null)):k&&(x(),w(k,1,1,()=>{k=null}),y());const Q={};E&262152&&(Q.$$scope={dirty:E,ctx:d}),c.$set(Q);const X={};E&8&&(X.guide=d[3].data.getGuide),p.$set(X);const Y={};E&8&&(Y.author=d[3].data.getGuide.user),j.$set(Y),d[5]?g?(g.p(d,E),E&32&&h(g,1)):(g=pe(d),g.c(),h(g,1),g.m(F.parentNode,F)):g&&(x(),w(g,1,1,()=>{g=null}),y());const W={};E&262160&&(W.$$scope={dirty:E,ctx:d}),!O&&E&4&&(O=!0,W.running=d[2],ie(()=>O=!1)),G.$set(W)},i(d){R||(h(k),h(c.$$.fragment,d),h(p.$$.fragment,d),h(j.$$.fragment,d),h(g),h(G.$$.fragment,d),R=!0)},o(d){w(k),w(c.$$.fragment,d),w(p.$$.fragment,d),w(j.$$.fragment,d),w(g),w(G.$$.fragment,d),R=!1},d(d){d&&u(e),k&&k.d(),M(c),M(p),M(j),d&&u(B),g&&g.d(d),d&&u(F),M(G,d)}}}function Ye(a){let e,n,t=a[3].error.message+"",s;return{c(){e=v("p"),n=C("Oh no... "),s=C(t)},l(r){e=b(r,"P",{});var o=D(e);n=T(o,"Oh no... "),s=T(o,t),o.forEach(u)},m(r,o){I(r,e,o),_(e,n),_(e,s)},p(r,o){o&8&&t!==(t=r[3].error.message+"")&&Z(s,t)},i:A,o:A,d(r){r&&u(e)}}}function Ze(a){let e,n;return{c(){e=v("p"),n=C("Loading...")},l(t){e=b(t,"P",{});var s=D(e);n=T(s,"Loading..."),s.forEach(u)},m(t,s){I(t,e,s),_(e,n)},p:A,i:A,o:A,d(t){t&&u(e)}}}function me(a){let e,n,t,s;return e=new ee({props:{variant:"outlined",$$slots:{default:[Je]},$$scope:{ctx:a}}}),e.$on("click",a[10]),t=new ee({props:{variant:"outlined",$$slots:{default:[Ke]},$$scope:{ctx:a}}}),t.$on("click",a[11]),{c(){P(e.$$.fragment),n=H(),P(t.$$.fragment)},l(r){S(e.$$.fragment,r),n=L(r),S(t.$$.fragment,r)},m(r,o){q(e,r,o),I(r,n,o),q(t,r,o),s=!0},p(r,o){const l={};o&262144&&(l.$$scope={dirty:o,ctx:r}),e.$set(l);const m={};o&262144&&(m.$$scope={dirty:o,ctx:r}),t.$set(m)},i(r){s||(h(e.$$.fragment,r),h(t.$$.fragment,r),s=!0)},o(r){w(e.$$.fragment,r),w(t.$$.fragment,r),s=!1},d(r){M(e,r),r&&u(n),M(t,r)}}}function Je(a){let e;return{c(){e=C("Edit")},l(n){e=T(n,"Edit")},m(n,t){I(n,e,t)},d(n){n&&u(e)}}}function Ke(a){let e;return{c(){e=C("Delete")},l(n){e=T(n,"Delete")},m(n,t){I(n,e,t)},d(n){n&&u(e)}}}function ye(a){return{c:A,l:A,m:A,p:A,d:A}}function xe(a){let e,n=a[17]+"";return{c(){e=v("p")},l(t){e=b(t,"P",{});var s=D(e);s.forEach(u)},m(t,s){I(t,e,s),e.innerHTML=n},p(t,s){s&8&&n!==(n=t[17]+"")&&(e.innerHTML=n)},d(t){t&&u(e)}}}function et(a){return{c:A,l:A,m:A,p:A,d:A}}function tt(a){let e,n,t={ctx:a,current:null,token:null,hasCatch:!1,pending:et,then:xe,catch:ye,value:17};return ce(n=ge(a[3].data.getGuide.guide),t),{c(){e=v("div"),t.block.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var r=D(e);t.block.l(r),r.forEach(u),this.h()},h(){V(e,"class","markdown-content break-words")},m(s,r){I(s,e,r),t.block.m(e,t.anchor=null),t.mount=()=>e,t.anchor=null},p(s,r){a=s,t.ctx=a,r&8&&n!==(n=ge(a[3].data.getGuide.guide))&&ce(n,t)||Ie(t,a,r)},d(s){s&&u(e),t.block.d(),t.token=null,t=null}}}function nt(a){let e,n;return e=new oe({props:{$$slots:{default:[tt]},$$scope:{ctx:a}}}),{c(){P(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){q(e,t,s),n=!0},p(t,s){const r={};s&262152&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){w(e.$$.fragment,t),n=!1},d(t){M(e,t)}}}function pe(a){let e,n,t;function s(o){a[14](o)}let r={$$slots:{default:[lt]},$$scope:{ctx:a}};return a[6]!==void 0&&(r.open=a[6]),e=new Ge({props:r}),ue.push(()=>fe(e,"open",s)),{c(){P(e.$$.fragment)},l(o){S(e.$$.fragment,o)},m(o,l){q(e,o,l),t=!0},p(o,l){const m={};l&262144&&(m.$$scope={dirty:l,ctx:o}),!n&&l&64&&(n=!0,m.open=o[6],ie(()=>n=!1)),e.$set(m)},i(o){t||(h(e.$$.fragment,o),t=!0)},o(o){w(e.$$.fragment,o),t=!1},d(o){M(e,o)}}}function rt(a){let e;return{c(){e=C("Delete Guide?")},l(n){e=T(n,"Delete Guide?")},m(n,t){I(n,e,t)},d(n){n&&u(e)}}}function st(a){let e;return{c(){e=C("Cancel")},l(n){e=T(n,"Cancel")},m(n,t){I(n,e,t)},d(n){n&&u(e)}}}function at(a){let e;return{c(){e=C("Delete")},l(n){e=T(n,"Delete")},m(n,t){I(n,e,t)},d(n){n&&u(e)}}}function ot(a){let e,n,t,s,r,o,l,m;return r=new ee({props:{variant:"outlined",$$slots:{default:[st]},$$scope:{ctx:a}}}),r.$on("click",a[12]),l=new ee({props:{variant:"outlined",$$slots:{default:[at]},$$scope:{ctx:a}}}),l.$on("click",a[13]),{c(){e=v("div"),n=v("span"),t=C("Are you sure you wish to delete this guide"),s=H(),P(r.$$.fragment),o=H(),P(l.$$.fragment),this.h()},l(f){e=b(f,"DIV",{class:!0});var c=D(e);n=b(c,"SPAN",{});var i=D(n);t=T(i,"Are you sure you wish to delete this guide"),i.forEach(u),s=L(c),S(r.$$.fragment,c),o=L(c),S(l.$$.fragment,c),c.forEach(u),this.h()},h(){V(e,"class","grid grid-flow-row gap-4")},m(f,c){I(f,e,c),_(e,n),_(n,t),_(e,s),q(r,e,null),_(e,o),q(l,e,null),m=!0},p(f,c){const i={};c&262144&&(i.$$scope={dirty:c,ctx:f}),r.$set(i);const $={};c&262144&&($.$$scope={dirty:c,ctx:f}),l.$set($)},i(f){m||(h(r.$$.fragment,f),h(l.$$.fragment,f),m=!0)},o(f){w(r.$$.fragment,f),w(l.$$.fragment,f),m=!1},d(f){f&&u(e),M(r),M(l)}}}function lt(a){let e,n,t,s;return e=new je({props:{$$slots:{default:[rt]},$$scope:{ctx:a}}}),t=new Ve({props:{$$slots:{default:[ot]},$$scope:{ctx:a}}}),{c(){P(e.$$.fragment),n=H(),P(t.$$.fragment)},l(r){S(e.$$.fragment,r),n=L(r),S(t.$$.fragment,r)},m(r,o){q(e,r,o),I(r,n,o),q(t,r,o),s=!0},p(r,o){const l={};o&262144&&(l.$$scope={dirty:o,ctx:r}),e.$set(l);const m={};o&262144&&(m.$$scope={dirty:o,ctx:r}),t.$set(m)},i(r){s||(h(e.$$.fragment,r),h(t.$$.fragment,r),s=!0)},o(r){w(e.$$.fragment,r),w(t.$$.fragment,r),s=!1},d(r){M(e,r),r&&u(n),M(t,r)}}}function it(a){let e,n;return{c(){e=v("span"),n=C(a[4])},l(t){e=b(t,"SPAN",{});var s=D(e);n=T(s,a[4]),s.forEach(u)},m(t,s){I(t,e,s),_(e,n)},p(t,s){s&16&&Z(n,t[4])},d(t){t&&u(e)}}}function ut(a){let e,n,t,s,r,o,l=!a[3].fetching&&!a[3].error&&a[3].data.getGuide&&_e(a);const m=[Ze,Ye,Xe,ze],f=[];function c(i,$){return i[3].fetching?0:i[3].error?1:i[3].data.getGuide?2:3}return t=c(a),s=f[t]=m[t](a),{c(){l&&l.c(),e=K(),n=H(),s.c(),r=K()},l(i){const $=be('[data-svelte="svelte-bhfvpi"]',document.head);l&&l.l($),e=K(),$.forEach(u),n=L(i),s.l(i),r=K()},m(i,$){l&&l.m(document.head,null),_(document.head,e),I(i,n,$),f[t].m(i,$),I(i,r,$),o=!0},p(i,[$]){!i[3].fetching&&!i[3].error&&i[3].data.getGuide?l?(l.p(i,$),$&8&&h(l,1)):(l=_e(i),l.c(),h(l,1),l.m(e.parentNode,e)):l&&(x(),w(l,1,1,()=>{l=null}),y());let p=t;t=c(i),t===p?f[t].p(i,$):(x(),w(f[p],1,1,()=>{f[p]=null}),y(),s=f[t],s?s.p(i,$):(s=f[t]=m[t](i),s.c()),h(s,1),s.m(r.parentNode,r))},i(i){o||(h(l),h(s),o=!0)},o(i){w(l),w(s),o=!1},d(i){l&&l.d(i),u(e),i&&u(n),f[t].d(i),i&&u(r)}}}const he=ve(Ce,{guide:void 0}),Et=Ne(async a=>(he.variables.guide=a.params.guideId,Ae({guide:he})(a)));function ft(a,e,n){let t,s,r=A,o=()=>(r(),r=ke(c,g=>n(3,s=g)),c),l,m;le(a,Pe,g=>n(9,l=g)),a.$$.on_destroy.push(()=>r());let{guideId:f}=e,{guide:c}=e;o();let i="",$=!1;const p=we({query:Te}),N=Ee(!1);le(a,N,g=>n(6,m=g));const j=()=>{p({guideId:f}).then(g=>{g.error?(console.error(g.error.message),n(4,i="Error deleting guide: "+g.error.message),n(2,$=!0)):$e(te+"/guides")})};De(c);const B=()=>$e(te+"/guide/"+f+"/edit"),F=()=>N.set(!0),G=()=>N.set(!1),O=()=>j();function R(g){m=g,N.set(m)}function k(g){$=g,n(2,$)}return a.$$set=g=>{"guideId"in g&&n(0,f=g.guideId),"guide"in g&&o(n(1,c=g.guide))},a.$$.update=()=>{a.$$.dirty&520&&n(5,t=l?.roles?.deleteContent||l?.id===s?.data?.getGuide?.user?.id),a.$$.dirty&4&&($||n(4,i=""))},[f,c,$,s,i,t,m,N,j,l,B,F,G,O,R,k]}class Gt extends ne{constructor(e){super();re(this,e,ft,ut,se,{guideId:0,guide:1})}}export{Gt as default,Et as load};
//# sourceMappingURL=index.svelte-30d49e1a.js.map
