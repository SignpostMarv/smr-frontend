import{S as s,i as a,s as r,W as t,X as o,e as n,t as e,k as c,j as m,c as i,a as f,g as u,d,n as $,m as p,b as h,f as g,a2 as l,o as k,Y as j,x as b,u as x,v,a1 as w,h as M}from"../../chunks/vendor-db5fc542.js";import{g as y}from"../../chunks/graphql-7b224d75.js";import{T as E}from"../../chunks/Toast-c21bf6da.js";import{g as N}from"../../chunks/navigation-51f4a605.js";import{M as S}from"../../chunks/ModForm-35250209.js";import{b as q}from"../../chunks/paths-6758d194.js";import"../../chunks/singletons-12a22614.js";import"../../chunks/forms-8d025218.js";import"../../chunks/markdown-c60b2bfd.js";function T(s){let a,r;return{c(){a=n("span"),r=e(s[1])},l(t){a=i(t,"SPAN",{});var o=f(a);r=u(o,s[1]),o.forEach(d)},m(s,t){g(s,a,t),l(a,r)},p(s,a){2&a&&M(r,s[1])},d(s){s&&d(a)}}}function A(s){let a,r,w,M,y,N,q,A;function F(a){s[3](a)}M=new S({props:{onSubmit:s[2]}});let H={$$slots:{default:[T]},$$scope:{ctx:s}};return void 0!==s[0]&&(H.running=s[0]),N=new E({props:H}),t.push((()=>o(N,"running",F))),{c(){a=n("h1"),r=e("New Mod"),w=c(),m(M.$$.fragment),y=c(),m(N.$$.fragment),this.h()},l(s){a=i(s,"H1",{class:!0});var t=f(a);r=u(t,"New Mod"),t.forEach(d),w=$(s),p(M.$$.fragment,s),y=$(s),p(N.$$.fragment,s),this.h()},h(){h(a,"class","text-4xl my-4 font-bold")},m(s,t){g(s,a,t),l(a,r),g(s,w,t),k(M,s,t),g(s,y,t),k(N,s,t),A=!0},p(s,[a]){const r={};34&a&&(r.$$scope={dirty:a,ctx:s}),!q&&1&a&&(q=!0,r.running=s[0],j((()=>q=!1))),N.$set(r)},i(s){A||(b(M.$$.fragment,s),b(N.$$.fragment,s),A=!0)},o(s){x(M.$$.fragment,s),x(N.$$.fragment,s),A=!1},d(s){s&&d(a),s&&d(w),v(M,s),s&&d(y),v(N,s)}}}function F(s,a,r){let t="",o=!1;const n=w({query:y});return s.$$.update=()=>{1&s.$$.dirty&&(o||r(1,t=""))},[o,t,s=>{n({mod:s}).then((s=>{s.error?(console.error(s.error.message),r(1,t="Error creating mod: "+s.error.message),r(0,o=!0)):N(q+"/mod/"+s.data.createMod.id)}))},function(s){o=s,r(0,o)}]}class H extends s{constructor(s){super(),a(this,s,F,A,r,{})}}export{H as default};
