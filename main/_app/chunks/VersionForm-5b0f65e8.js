import{aq as e,ax as a,ay as s,aH as n,ar as t,aI as l,S as r,i as o,s as i,as as c,e as u,t as f,k as d,j as h,l as m,c as p,a as g,g as v,d as b,n as $,m as E,b as S,f as y,Q as w,o as N,h as V,ac as P,x,u as A,v as T,ak as R,at as k,r as I,w as O,al as j,L as B,au as M,av as D,aw as L,W as _,C as F}from"./vendor-9ef56761.js";import{v as G}from"./uplugin-421a2e17.js";import{t as z}from"./forms-8d025218.js";import{m as C}from"./markdown-f46c64ca.js";const U=async(e,a)=>(new l).loadAsync(e).then((e=>{const s=e.file(a+".uplugin");return s?H(e,s,a):{message:a+".uplugin missing from mod"}})).catch((e=>({message:"invalid zip/smod file: "+e}))),H=async(e,a,s)=>a.async("string").then((async a=>{const n=await G(a);if(0!=n.length)return{message:`invalid ${s}.uplugin`,extended:n};const t=JSON.parse(a);let l=!1;for(const e of t.Plugins)if("SML"===e.Name){l=!0;break}return l?{uplugin:t,objects:Object.keys(e.files).filter((e=>e.endsWith(".dll")||e.endsWith(".pak")))}:{message:"mod must depend on SML"}})).catch((e=>({message:`invalid ${s}.uplugin: ${e}`}))),W=e=>{const[a,s,n]=[1e3,"k","B"],t=Math.log(e)/Math.log(a)|0,l=Number((e/Math.pow(a,t)).toFixed(2));return l+" "+(t?(s+"MGTPEZY")[t-1]+n:"byte"+(1!==l?"s":""))};function Y(e,a,s){const n=e.slice();return n[15]=a[s],n}function q(e,a,s){const n=e.slice();return n[18]=a[s],n}function J(e){let a,s,n=(e[14]||"")+"";return{c(){a=u("span"),s=f(n),this.h()},l(e){a=p(e,"SPAN",{class:!0});var t=g(a);s=v(t,n),t.forEach(b),this.h()},h(){S(a,"class","validation-message")},m(e,n){y(e,a,n),w(a,s)},p(e,a){16384&a&&n!==(n=(e[14]||"")+"")&&V(s,n)},d(e){e&&b(a)}}}function Q(e){let a,s,n,t,l,r,o,i,V,P,R;o=new c({props:{for:"file",$$slots:{default:[X,({messages:e})=>({14:e}),({messages:e})=>e?16384:0]},$$scope:{ctx:e}}});let k=e[2].file&&Z(e),I=e[5]&&K(e);return{c(){a=u("div"),s=u("label"),n=f("File:"),t=d(),l=u("input"),r=d(),h(o.$$.fragment),i=d(),k&&k.c(),V=d(),I&&I.c(),P=m(),this.h()},l(e){a=p(e,"DIV",{class:!0});var c=g(a);s=p(c,"LABEL",{for:!0});var u=g(s);n=v(u,"File:"),u.forEach(b),t=$(c),l=p(c,"INPUT",{id:!0,class:!0,name:!0,type:!0,accept:!0,placeholder:!0}),r=$(c),E(o.$$.fragment,c),c.forEach(b),i=$(e),k&&k.l(e),V=$(e),I&&I.l(e),P=m(),this.h()},h(){S(s,"for","file"),S(l,"id","file"),S(l,"class","base-input"),S(l,"name","file"),S(l,"type","file"),S(l,"accept",".zip,.smod"),S(l,"placeholder","File"),S(a,"class","grid grid-flow-row gap-2")},m(e,c){y(e,a,c),w(a,s),w(s,n),w(a,t),w(a,l),w(a,r),N(o,a,null),y(e,i,c),k&&k.m(e,c),y(e,V,c),I&&I.m(e,c),y(e,P,c),R=!0},p(e,a){const s={};2113536&a&&(s.$$scope={dirty:a,ctx:e}),o.$set(s),e[2].file?k?k.p(e,a):(k=Z(e),k.c(),k.m(V.parentNode,V)):k&&(k.d(1),k=null),e[5]?I?I.p(e,a):(I=K(e),I.c(),I.m(P.parentNode,P)):I&&(I.d(1),I=null)},i(e){R||(x(o.$$.fragment,e),R=!0)},o(e){A(o.$$.fragment,e),R=!1},d(e){e&&b(a),T(o),e&&b(i),k&&k.d(e),e&&b(V),I&&I.d(e),e&&b(P)}}}function X(e){let a,s,n=(e[14]||"")+"";return{c(){a=u("span"),s=f(n),this.h()},l(e){a=p(e,"SPAN",{class:!0});var t=g(a);s=v(t,n),t.forEach(b),this.h()},h(){S(a,"class","validation-message")},m(e,n){y(e,a,n),w(a,s)},p(e,a){16384&a&&n!==(n=(e[14]||"")+"")&&V(s,n)},d(e){e&&b(a)}}}function Z(e){let a,s,n,t,l,r,o,i,c,h,m,E,S,N=(e[2].file.type||"Unknown")+"",P=W(e[2].file.size)+"";return{c(){a=u("div"),s=u("span"),n=u("strong"),t=f("File Type:"),l=d(),r=f(N),o=u("br"),i=d(),c=u("span"),h=u("strong"),m=f("File Size:"),E=d(),S=f(P)},l(e){a=p(e,"DIV",{});var u=g(a);s=p(u,"SPAN",{});var f=g(s);n=p(f,"STRONG",{});var d=g(n);t=v(d,"File Type:"),d.forEach(b),l=$(f),r=v(f,N),f.forEach(b),o=p(u,"BR",{}),i=$(u),c=p(u,"SPAN",{});var y=g(c);h=p(y,"STRONG",{});var w=g(h);m=v(w,"File Size:"),w.forEach(b),E=$(y),S=v(y,P),y.forEach(b),u.forEach(b)},m(e,u){y(e,a,u),w(a,s),w(s,n),w(n,t),w(s,l),w(s,r),w(a,o),w(a,i),w(a,c),w(c,h),w(h,m),w(c,E),w(c,S)},p(e,a){4&a&&N!==(N=(e[2].file.type||"Unknown")+"")&&V(r,N),4&a&&P!==(P=W(e[2].file.size)+"")&&V(S,P)},d(e){e&&b(a)}}}function K(e){let a,s,n,t,l,r,o,i,c,h,m,E=e[5].uplugin.Version+"";function N(e,a){return void 0!==e[5].uplugin.SemVersion?ae:ee}let P=N(e),x=P(e),A=void 0!==e[5].uplugin.Plugins&&se(e);function T(e,a){return e[5].objects&&e[5].objects.length>0?oe:re}let R=T(e),k=R(e);return{c(){a=u("div"),s=u("p"),n=u("span"),t=u("strong"),l=f("Version:"),r=d(),o=f(E),i=u("br"),c=d(),x.c(),h=d(),A&&A.c(),m=d(),k.c(),this.h()},l(e){a=p(e,"DIV",{});var u=g(a);s=p(u,"P",{class:!0});var f=g(s);n=p(f,"SPAN",{});var d=g(n);t=p(d,"STRONG",{});var S=g(t);l=v(S,"Version:"),S.forEach(b),r=$(d),o=v(d,E),i=p(d,"BR",{}),d.forEach(b),c=$(f),x.l(f),f.forEach(b),h=$(u),A&&A.l(u),m=$(u),k.l(u),u.forEach(b),this.h()},h(){S(s,"class","mb-4")},m(e,u){y(e,a,u),w(a,s),w(s,n),w(n,t),w(t,l),w(n,r),w(n,o),w(n,i),w(s,c),x.m(s,null),w(a,h),A&&A.m(a,null),w(a,m),k.m(a,null)},p(e,n){32&n&&E!==(E=e[5].uplugin.Version+"")&&V(o,E),P===(P=N(e))&&x?x.p(e,n):(x.d(1),x=P(e),x&&(x.c(),x.m(s,null))),void 0!==e[5].uplugin.Plugins?A?A.p(e,n):(A=se(e),A.c(),A.m(a,m)):A&&(A.d(1),A=null),R===(R=T(e))&&k?k.p(e,n):(k.d(1),k=R(e),k&&(k.c(),k.m(a,null)))},d(e){e&&b(a),x.d(),A&&A.d(),k.d()}}}function ee(e){let a,s,n,t,l=e[5].uplugin.Version+"";return{c(){a=u("span"),s=f("Mod is missing SemVersion field! Are you sure you want to continue? Your version will be set to "),n=f(l),t=f(".0.0"),this.h()},l(e){a=p(e,"SPAN",{class:!0});var r=g(a);s=v(r,"Mod is missing SemVersion field! Are you sure you want to continue? Your version will be set to "),n=v(r,l),t=v(r,".0.0"),r.forEach(b),this.h()},h(){S(a,"class","text-yellow-600")},m(e,l){y(e,a,l),w(a,s),w(a,n),w(a,t)},p(e,a){32&a&&l!==(l=e[5].uplugin.Version+"")&&V(n,l)},d(e){e&&b(a)}}}function ae(e){let a,s,n,t,l,r,o=e[5].uplugin.SemVersion+"";return{c(){a=u("span"),s=u("strong"),n=f("SemVersion:"),t=d(),l=f(o),r=u("br")},l(e){a=p(e,"SPAN",{});var i=g(a);s=p(i,"STRONG",{});var c=g(s);n=v(c,"SemVersion:"),c.forEach(b),t=$(i),l=v(i,o),r=p(i,"BR",{}),i.forEach(b)},m(e,o){y(e,a,o),w(a,s),w(s,n),w(a,t),w(a,l),w(a,r)},p(e,a){32&a&&o!==(o=e[5].uplugin.SemVersion+"")&&V(l,o)},d(e){e&&b(a)}}}function se(e){let a,s,n,t,l,r=e[5].uplugin.Plugins,o=[];for(let i=0;i<r.length;i+=1)o[i]=le(q(e,r,i));return{c(){a=u("p"),s=u("strong"),n=f("Dependencies:"),t=u("br"),l=d();for(let e=0;e<o.length;e+=1)o[e].c()},l(e){a=p(e,"P",{});var r=g(a);s=p(r,"STRONG",{});var i=g(s);n=v(i,"Dependencies:"),i.forEach(b),t=p(r,"BR",{}),l=$(r);for(let a=0;a<o.length;a+=1)o[a].l(r);r.forEach(b)},m(e,r){y(e,a,r),w(a,s),w(s,n),w(a,t),w(a,l);for(let s=0;s<o.length;s+=1)o[s].m(a,null)},p(e,s){if(32&s){let n;for(r=e[5].uplugin.Plugins,n=0;n<r.length;n+=1){const t=q(e,r,n);o[n]?o[n].p(t,s):(o[n]=le(t),o[n].c(),o[n].m(a,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=r.length}},d(e){e&&b(a),P(o,e)}}}function ne(e){let a,s;return{c(){a=u("span"),s=f("*")},l(e){a=p(e,"SPAN",{});var n=g(a);s=v(n,"*"),n.forEach(b)},m(e,n){y(e,a,n),w(a,s)},p:_,d(e){e&&b(a)}}}function te(e){let a,s,n=e[18].SemVersion+"";return{c(){a=u("span"),s=f(n)},l(e){a=p(e,"SPAN",{});var t=g(a);s=v(t,n),t.forEach(b)},m(e,n){y(e,a,n),w(a,s)},p(e,a){32&a&&n!==(n=e[18].SemVersion+"")&&V(s,n)},d(e){e&&b(a)}}}function le(e){let a,s,n,t,l,r,o=e[18].Name+"";function i(e,a){return e[18].SemVersion?te:ne}let c=i(e),h=c(e);return{c(){a=u("strong"),s=f(o),n=f(":"),t=d(),h.c(),l=d(),r=u("br")},l(e){a=p(e,"STRONG",{});var i=g(a);s=v(i,o),n=v(i,":"),i.forEach(b),t=$(e),h.l(e),l=$(e),r=p(e,"BR",{})},m(e,o){y(e,a,o),w(a,s),w(a,n),y(e,t,o),h.m(e,o),y(e,l,o),y(e,r,o)},p(e,a){32&a&&o!==(o=e[18].Name+"")&&V(s,o),c===(c=i(e))&&h?h.p(e,a):(h.d(1),h=c(e),h&&(h.c(),h.m(l.parentNode,l)))},d(e){e&&b(a),e&&b(t),h.d(e),e&&b(l),e&&b(r)}}}function re(e){let a,s,n;return{c(){a=u("p"),s=u("span"),n=f("Mod contains no objects (.dll, .pak)! Are you sure you want to continue?"),this.h()},l(e){a=p(e,"P",{});var t=g(a);s=p(t,"SPAN",{class:!0});var l=g(s);n=v(l,"Mod contains no objects (.dll, .pak)! Are you sure you want to continue?"),l.forEach(b),t.forEach(b),this.h()},h(){S(s,"class","text-yellow-600")},m(e,t){y(e,a,t),w(a,s),w(s,n)},p:_,d(e){e&&b(a)}}}function oe(e){let a,s,n,t,l,r=e[5].objects,o=[];for(let i=0;i<r.length;i+=1)o[i]=ie(Y(e,r,i));return{c(){a=u("p"),s=u("strong"),n=f("Objects:"),t=u("br"),l=d();for(let e=0;e<o.length;e+=1)o[e].c()},l(e){a=p(e,"P",{});var r=g(a);s=p(r,"STRONG",{});var i=g(s);n=v(i,"Objects:"),i.forEach(b),t=p(r,"BR",{}),l=$(r);for(let a=0;a<o.length;a+=1)o[a].l(r);r.forEach(b)},m(e,r){y(e,a,r),w(a,s),w(s,n),w(a,t),w(a,l);for(let s=0;s<o.length;s+=1)o[s].m(a,null)},p(e,s){if(32&s){let n;for(r=e[5].objects,n=0;n<r.length;n+=1){const t=Y(e,r,n);o[n]?o[n].p(t,s):(o[n]=ie(t),o[n].c(),o[n].m(a,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=r.length}},d(e){e&&b(a),P(o,e)}}}function ie(e){let a,s,n,t,l=e[15]+"";return{c(){a=u("span"),s=f(l),n=d(),t=u("br")},l(e){a=p(e,"SPAN",{});var r=g(a);s=v(r,l),r.forEach(b),n=$(e),t=p(e,"BR",{})},m(e,l){y(e,a,l),w(a,s),y(e,n,l),y(e,t,l)},p(e,a){32&a&&l!==(l=e[15]+"")&&V(s,l)},d(e){e&&b(a),e&&b(n),e&&b(t)}}}function ce(e){let a,s,n=(e[14]||"")+"";return{c(){a=u("span"),s=f(n),this.h()},l(e){a=p(e,"SPAN",{class:!0});var t=g(a);s=v(t,n),t.forEach(b),this.h()},h(){S(a,"class","validation-message")},m(e,n){y(e,a,n),w(a,s)},p(e,a){16384&a&&n!==(n=(e[14]||"")+"")&&V(s,n)},d(e){e&&b(a)}}}function ue(e){return{c:_,l:_,m:_,p:_,d:_}}function fe(e){let a,s=e[13]+"";return{c(){a=u("div"),this.h()},l(e){a=p(e,"DIV",{class:!0}),g(a).forEach(b),this.h()},h(){S(a,"class","markdown-content right svelte-1ks9yo5")},m(e,n){y(e,a,n),a.innerHTML=s},p(e,n){16&n&&s!==(s=e[13]+"")&&(a.innerHTML=s)},d(e){e&&b(a)}}}function de(e){return{c:_,l:_,m:_,p:_,d:_}}function he(e){let a,s,n,t,l,r,o,i,m,V,P,B,M,D,L,_,F,G,z,U,H,W,Y,q,X,Z,K,ee,ae,se,ne,te,le,re,oe,ie,he;L=new c({props:{for:"stability",$$slots:{default:[J,({messages:e})=>({14:e}),({messages:e})=>e?16384:0]},$$scope:{ctx:e}}});let me=!e[1]&&Q(e);X=new c({props:{for:"changelog",$$slots:{default:[ce,({messages:e})=>({14:e}),({messages:e})=>e?16384:0]},$$scope:{ctx:e}}});let pe={ctx:e,current:null,token:null,hasCatch:!1,pending:de,then:fe,catch:ue,value:13};return R(ne=C(e[4]),pe),{c(){a=u("form"),s=u("div"),n=u("div"),t=u("label"),l=f("Stability:"),r=d(),o=u("select"),i=u("option"),m=f("Alpha"),V=u("option"),P=f("Beta"),B=u("option"),M=f("Release"),D=d(),h(L.$$.fragment),_=d(),me&&me.c(),F=d(),G=u("div"),z=u("div"),U=u("label"),H=f("Changelog:"),W=d(),Y=u("textarea"),q=d(),h(X.$$.fragment),Z=d(),K=u("div"),ee=u("span"),ae=f("Preview:"),se=d(),pe.block.c(),te=d(),le=u("div"),re=u("input"),this.h()},l(e){a=p(e,"FORM",{});var c=g(a);s=p(c,"DIV",{class:!0});var u=g(s);n=p(u,"DIV",{class:!0});var f=g(n);t=p(f,"LABEL",{for:!0});var d=g(t);l=v(d,"Stability:"),d.forEach(b),r=$(f),o=p(f,"SELECT",{id:!0,class:!0,name:!0});var h=g(o);i=p(h,"OPTION",{});var S=g(i);m=v(S,"Alpha"),S.forEach(b),V=p(h,"OPTION",{});var y=g(V);P=v(y,"Beta"),y.forEach(b),B=p(h,"OPTION",{});var w=g(B);M=v(w,"Release"),w.forEach(b),h.forEach(b),D=$(f),E(L.$$.fragment,f),f.forEach(b),_=$(u),me&&me.l(u),F=$(u),G=p(u,"DIV",{class:!0});var N=g(G);z=p(N,"DIV",{class:!0});var x=g(z);U=p(x,"LABEL",{for:!0});var A=g(U);H=v(A,"Changelog:"),A.forEach(b),W=$(x),Y=p(x,"TEXTAREA",{class:!0,id:!0,name:!0,placeholder:!0,rows:!0}),g(Y).forEach(b),q=$(x),E(X.$$.fragment,x),x.forEach(b),Z=$(N),K=p(N,"DIV",{class:!0});var T=g(K);ee=p(T,"SPAN",{});var R=g(ee);ae=v(R,"Preview:"),R.forEach(b),se=$(T),pe.block.l(T),T.forEach(b),N.forEach(b),te=$(u),le=p(u,"DIV",{});var k=g(le);re=p(k,"INPUT",{type:!0,class:!0}),k.forEach(b),u.forEach(b),c.forEach(b),this.h()},h(){S(t,"for","stability"),i.__value="alpha",i.value=i.__value,V.__value="beta",V.value=V.__value,B.__value="release",B.value=B.__value,S(o,"id","stability"),S(o,"class","base-input"),S(o,"name","stability"),S(n,"class","grid grid-flow-row gap-2"),S(U,"for","changelog"),S(Y,"class","base-input"),S(Y,"id","changelog"),S(Y,"name","changelog"),S(Y,"placeholder","Changelog"),S(Y,"rows","10"),S(z,"class","grid grid-flow-row gap-2 auto-rows-max"),S(K,"class","grid grid-flow-row gap-2 auto-rows-max"),S(G,"class","grid gap-6 split svelte-1ks9yo5"),S(re,"type","submit"),re.disabled=e[3],re.value=e[0],S(re,"class","px-4 py-2 rounded text-base bg-blue-500 cursor-pointer disabled:opacity-50"),S(s,"class","grid grid-flow-row gap-6")},m(c,u){y(c,a,u),w(a,s),w(s,n),w(n,t),w(t,l),w(n,r),w(n,o),w(o,i),w(i,m),w(o,V),w(V,P),w(o,B),w(B,M),w(n,D),N(L,n,null),w(s,_),me&&me.m(s,null),w(s,F),w(s,G),w(G,z),w(z,U),w(U,H),w(z,W),w(z,Y),w(z,q),N(X,z,null),w(G,Z),w(G,K),w(K,ee),w(ee,ae),w(K,se),pe.block.m(K,pe.anchor=null),pe.mount=()=>K,pe.anchor=null,w(s,te),w(s,le),w(le,re),oe=!0,ie||(he=k(e[7].call(null,a)),ie=!0)},p(a,[n]){e=a;const t={};2113536&n&&(t.$$scope={dirty:n,ctx:e}),L.$set(t),e[1]?me&&(I(),A(me,1,1,(()=>{me=null})),O()):me?(me.p(e,n),2&n&&x(me,1)):(me=Q(e),me.c(),x(me,1),me.m(s,F));const l={};2113536&n&&(l.$$scope={dirty:n,ctx:e}),X.$set(l),pe.ctx=e,16&n&&ne!==(ne=C(e[4]))&&R(ne,pe)||j(pe,e,n),(!oe||8&n)&&(re.disabled=e[3]),(!oe||1&n)&&(re.value=e[0])},i(e){oe||(x(L.$$.fragment,e),x(me),x(X.$$.fragment,e),oe=!0)},o(e){A(L.$$.fragment,e),A(me),A(X.$$.fragment,e),oe=!1},d(e){e&&b(a),T(L),me&&me.d(),T(X),pe.block.d(),pe.token=null,pe=null,ie=!1,he()}}}function me(l,r,o){let i,c,u,{modReference:f}=r,{onSubmit:d}=r,{initialValues:h}=r,{submitText:m="Create"}=r,{editing:p=!1}=r;const g=F();B(l,g,(e=>o(5,u=e)));let v=!1;const b=((l,r)=>e({file:a(s().superRefine((async(e,a)=>{if(!("name"in e&&"size"in e&&"type"in e))return void a.addIssue({message:"Unknown file error",code:n.custom});const s=await U(e,l);"message"in s?a.addIssue({message:s.message,code:n.custom}):r.set(s)}))),changelog:t(),stability:t()}))(f,g),{form:$,data:E}=M({initialValues:h,extend:[D,L],validateSchema:b,onSubmit:e=>{o(3,v=!0),d(z(e,b)).then((()=>o(3,v=!1)))}});return B(l,E,(e=>o(2,c=e))),l.$$set=e=>{"modReference"in e&&o(9,f=e.modReference),"onSubmit"in e&&o(10,d=e.onSubmit),"initialValues"in e&&o(11,h=e.initialValues),"submitText"in e&&o(0,m=e.submitText),"editing"in e&&o(1,p=e.editing)},l.$$.update=()=>{4&l.$$.dirty&&o(4,i=c.changelog||"")},[m,p,c,v,i,u,g,$,E,f,d,h]}class pe extends r{constructor(e){super(),o(this,e,me,he,i,{modReference:9,onSubmit:10,initialValues:11,submitText:0,editing:1})}}export{pe as V};
