import{S as r,i as a,s,e as t,t as e,c,a as n,g as o,d as u,f,a2 as l,h as m,k as p,l as d,n as i,a8 as h}from"./chunks/vendor-db5fc542.js";function E(r){let a,s,p=r[1].frame+"";return{c(){a=t("pre"),s=e(p)},l(r){a=c(r,"PRE",{});var t=n(a);s=o(t,p),t.forEach(u)},m(r,t){f(r,a,t),l(a,s)},p(r,a){2&a&&p!==(p=r[1].frame+"")&&m(s,p)},d(r){r&&u(a)}}}function k(r){let a,s,p=r[1].stack+"";return{c(){a=t("pre"),s=e(p)},l(r){a=c(r,"PRE",{});var t=n(a);s=o(t,p),t.forEach(u)},m(r,t){f(r,a,t),l(a,s)},p(r,a){2&a&&p!==(p=r[1].stack+"")&&m(s,p)},d(r){r&&u(a)}}}function v(r){let a,s,v,g,P,R,x,N,$=r[1].message+"",b=r[1].frame&&E(r),j=r[1].stack&&k(r);return{c(){a=t("h1"),s=e(r[0]),v=p(),g=t("pre"),P=e($),R=p(),b&&b.c(),x=p(),j&&j.c(),N=d()},l(t){a=c(t,"H1",{});var e=n(a);s=o(e,r[0]),e.forEach(u),v=i(t),g=c(t,"PRE",{});var f=n(g);P=o(f,$),f.forEach(u),R=i(t),b&&b.l(t),x=i(t),j&&j.l(t),N=d()},m(r,t){f(r,a,t),l(a,s),f(r,v,t),f(r,g,t),l(g,P),f(r,R,t),b&&b.m(r,t),f(r,x,t),j&&j.m(r,t),f(r,N,t)},p(r,[a]){1&a&&m(s,r[0]),2&a&&$!==($=r[1].message+"")&&m(P,$),r[1].frame?b?b.p(r,a):(b=E(r),b.c(),b.m(x.parentNode,x)):b&&(b.d(1),b=null),r[1].stack?j?j.p(r,a):(j=k(r),j.c(),j.m(N.parentNode,N)):j&&(j.d(1),j=null)},i:h,o:h,d(r){r&&u(a),r&&u(v),r&&u(g),r&&u(R),b&&b.d(r),r&&u(x),j&&j.d(r),r&&u(N)}}}function g({error:r,status:a}){return{props:{error:r,status:a}}}function P(r,a,s){let{status:t}=a,{error:e}=a;return r.$$set=r=>{"status"in r&&s(0,t=r.status),"error"in r&&s(1,e=r.error)},[t,e]}class R extends r{constructor(r){super(),a(this,r,P,v,s,{status:0,error:1})}}export{R as default,g as load};
