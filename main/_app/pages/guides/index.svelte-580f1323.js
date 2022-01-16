import{S as Y,i as Z,s as z,w as b,x as k,y as G,q as _,o as h,B as w,e as j,k as B,c as C,a as P,m as S,d as m,b as E,g as $,X as V,n as N,p as O,P as H,R as W,aI as x,T as ee,Y as te,t as A,h as R,D as re,aB as J,j as se,Z as F,a2 as le}from"../../chunks/vendor-1ba4e540.js";import{i as ne}from"../../chunks/graphql-a19cc583.js";import{G as ae}from"../../chunks/GuideCard-1d894b00.js";import{P as K}from"../../chunks/PageControls-7bf021fb.js";import{b as oe}from"../../chunks/paths-396f020f.js";import{a as ie}from"../../chunks/user-3cdd149b.js";import{F as ce}from"../../chunks/FicsitCard-98d068ce.js";import{M as ue}from"../../chunks/MetaDescriptors-28c89374.js";import"../../chunks/navigation-b10cf5bf.js";import"../../chunks/singletons-4a680913.js";import"../../chunks/stores-db79f75e.js";function L(o,e,s){const t=o.slice();return t[11]=e[s],t}function fe(o,e,s){const t=o.slice();return t[8]=e[s],t}function Q(o){let e,s;return e=new te({props:{variant:"outlined",href:""+(oe+"/new-guide"),$$slots:{default:[de]},$$scope:{ctx:o}}}),{c(){b(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,a){G(e,t,a),s=!0},p(t,a){const r={};a&16384&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function de(o){let e;return{c(){e=A("New Guide")},l(s){e=R(s,"New Guide")},m(s,t){$(s,e,t)},d(s){s&&m(e)}}}function ge(o){let e,s,t,a=o[1].data.getGuides.guides,r=[];for(let l=0;l<a.length;l+=1)r[l]=U(L(o,a,l));const n=l=>h(r[l],1,1,()=>{r[l]=null});return{c(){e=j("div");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){e=C(l,"DIV",{class:!0});var c=P(e);for(let u=0;u<r.length;u+=1)r[u].l(c);c.forEach(m),this.h()},h(){E(e,"class",s="grid "+o[3]+" gap-4")},m(l,c){$(l,e,c);for(let u=0;u<r.length;u+=1)r[u].m(e,null);t=!0},p(l,c){if(c&2){a=l[1].data.getGuides.guides;let u;for(u=0;u<a.length;u+=1){const p=L(l,a,u);r[u]?(r[u].p(p,c),_(r[u],1)):(r[u]=U(p),r[u].c(),_(r[u],1),r[u].m(e,null))}for(N(),u=a.length;u<r.length;u+=1)n(u);O()}(!t||c&8&&s!==(s="grid "+l[3]+" gap-4"))&&E(e,"class",s)},i(l){if(!t){for(let c=0;c<a.length;c+=1)_(r[c]);t=!0}},o(l){r=r.filter(Boolean);for(let c=0;c<r.length;c+=1)h(r[c]);t=!1},d(l){l&&m(e),J(r,l)}}}function me(o){let e,s,t=o[1].error.message+"",a;return{c(){e=j("p"),s=A("Oh no... "),a=A(t)},l(r){e=C(r,"P",{});var n=P(e);s=R(n,"Oh no... "),a=R(n,t),n.forEach(m)},m(r,n){$(r,e,n),V(e,s),V(e,a)},p(r,n){n&2&&t!==(t=r[1].error.message+"")&&se(a,t)},i:F,o:F,d(r){r&&m(e)}}}function _e(o){let e,s,t,a=Array(D),r=[];for(let n=0;n<a.length;n+=1)r[n]=he(fe(o,a,n));return{c(){e=j("div");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=C(n,"DIV",{class:!0});var l=P(e);for(let c=0;c<r.length;c+=1)r[c].l(l);l.forEach(m),this.h()},h(){E(e,"class",s="grid "+o[3]+" gap-4")},m(n,l){$(n,e,l);for(let c=0;c<r.length;c+=1)r[c].m(e,null);t=!0},p(n,l){(!t||l&8&&s!==(s="grid "+n[3]+" gap-4"))&&E(e,"class",s)},i(n){if(!t){for(let l=0;l<a.length;l+=1)_(r[l]);t=!0}},o(n){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)h(r[l]);t=!1},d(n){n&&m(e),J(r,n)}}}function U(o){let e,s;return e=new ae({props:{guide:o[11],logo:o[11].user.avatar}}),{c(){b(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,a){G(e,t,a),s=!0},p(t,a){const r={};a&2&&(r.guide=t[11]),a&2&&(r.logo=t[11].user.avatar),e.$set(r)},i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function he(o){let e,s;return e=new ce({props:{fake:!0}}),{c(){b(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,a){G(e,t,a),s=!0},p:F,i(t){s||(_(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){w(e,t)}}}function pe(o){let e,s,t,a,r,n,l,c,u,p,d,q,f=o[0]&&o[4]!==null&&Q(o);a=new K({props:{totalPages:Math.ceil(o[2]/D),currentPage:o[6]}});const T=[_e,me,ge],v=[];function X(i,g){return i[1].fetching?0:i[1].error?1:2}return n=X(o),l=v[n]=T[n](o),d=new K({props:{totalPages:Math.ceil(o[2]/D),currentPage:o[6]}}),{c(){e=j("div"),f&&f.c(),s=B(),t=j("div"),b(a.$$.fragment),r=B(),l.c(),c=B(),u=j("div"),p=j("div"),b(d.$$.fragment),this.h()},l(i){e=C(i,"DIV",{class:!0});var g=P(e);f&&f.l(g),s=S(g),t=C(g,"DIV",{});var I=P(t);k(a.$$.fragment,I),I.forEach(m),g.forEach(m),r=S(i),l.l(i),c=S(i),u=C(i,"DIV",{class:!0});var y=P(u);p=C(y,"DIV",{});var M=P(p);k(d.$$.fragment,M),M.forEach(m),y.forEach(m),this.h()},h(){E(e,"class","mb-5 ml-auto flex justify-between"),E(u,"class","mt-5 ml-auto flex justify-end")},m(i,g){$(i,e,g),f&&f.m(e,null),V(e,s),V(e,t),G(a,t,null),$(i,r,g),v[n].m(i,g),$(i,c,g),$(i,u,g),V(u,p),G(d,p,null),q=!0},p(i,[g]){i[0]&&i[4]!==null?f?(f.p(i,g),g&17&&_(f,1)):(f=Q(i),f.c(),_(f,1),f.m(e,s)):f&&(N(),h(f,1,1,()=>{f=null}),O());const I={};g&4&&(I.totalPages=Math.ceil(i[2]/D)),a.$set(I);let y=n;n=X(i),n===y?v[n].p(i,g):(N(),h(v[y],1,1,()=>{v[y]=null}),O(),l=v[n],l?l.p(i,g):(l=v[n]=T[n](i),l.c()),_(l,1),l.m(c.parentNode,c));const M={};g&4&&(M.totalPages=Math.ceil(i[2]/D)),d.$set(M)},i(i){q||(_(f),_(a.$$.fragment,i),_(l),_(d.$$.fragment,i),q=!0)},o(i){h(f),h(a.$$.fragment,i),h(l),h(d.$$.fragment,i),q=!1},d(i){i&&m(e),f&&f.d(),w(a),i&&m(r),v[n].d(i),i&&m(c),i&&m(u),w(d)}}}const D=40;function $e(o,e,s){let t,a,r;H(o,ie,d=>s(4,r=d));let{colCount:n=4}=e,{newGuide:l=!1}=e;const c=W(ne,{offset:0,limit:D});H(o,c,d=>s(1,a=d));const u=re(1);let p;return u.subscribe(d=>{x(c,a.variables.offset=(d-1)*D,a),a.reexecute()}),ee(c),o.$$set=d=>{"colCount"in d&&s(7,n=d.colCount),"newGuide"in d&&s(0,l=d.newGuide)},o.$$.update=()=>{o.$$.dirty&2&&s(2,p=a?.data?.getGuides?.count||0),o.$$.dirty&128&&s(3,t=n==4?"3xl:grid-cols-4 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1":"3xl:grid-cols-3 2xl:grid-cols-2 grid-cols-1")},[l,a,p,t,r,c,u,n]}class ve extends Y{constructor(e){super();Z(this,e,$e,pe,z,{colCount:7,newGuide:0})}}function be(o){let e,s,t,a;return e=new ue({props:{description:"Guides for Satisfactory and modding Satisfactory",title:"Guides"}}),t=new ve({props:{newGuide:!0,colCount:4}}),{c(){b(e.$$.fragment),s=B(),b(t.$$.fragment)},l(r){const n=le('[data-svelte="svelte-gby4d8"]',document.head);k(e.$$.fragment,n),n.forEach(m),s=S(r),k(t.$$.fragment,r)},m(r,n){G(e,document.head,null),$(r,s,n),G(t,r,n),a=!0},p:F,i(r){a||(_(e.$$.fragment,r),_(t.$$.fragment,r),a=!0)},o(r){h(e.$$.fragment,r),h(t.$$.fragment,r),a=!1},d(r){w(e),r&&m(s),w(t,r)}}}class Ve extends Y{constructor(e){super();Z(this,e,null,be,z,{})}}export{Ve as default};
//# sourceMappingURL=index.svelte-580f1323.js.map