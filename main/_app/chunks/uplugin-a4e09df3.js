import{d as c}from"./api-82c76902.js";import"./user-12e23a01.js";import"./vendor-3e0baac1.js";import{V as l}from"./extras-7497b851.js";let i;const u=new Promise(t=>i=t);fetch(c+"/static/uplugin-json-schema.json").then(t=>t.json()).then(t=>i(new l(t)));const j=async t=>{const r=await u;try{const a=JSON.parse(t),n=r.validate(a);return n.valid?[]:n.errors.map(e=>{if(e.keyword==="$ref")return;let o="`"+e.instanceLocation+"`";const s=v(a,e.instanceLocation);return typeof s!="object"&&(o+=' **"'+s+'"**'),o+=": "+e.error,o}).filter(e=>!!e)}catch{return["Invalid JSON"]}},v=(t,r)=>{const a=new RegExp("\\['?(.+?)'?\\]|\\.([^\\.\\[\\]]+)","gm");try{let n=t,e=a.exec(r);for(;e!==null;)n=n[e[1]||e[2]],e=a.exec(r);return n}catch{}};export{j as v};
//# sourceMappingURL=uplugin-a4e09df3.js.map