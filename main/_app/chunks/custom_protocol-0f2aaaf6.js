const a={getUserAgent:function(){return window.navigator.userAgent},userAgentContains:function(e){return e=e.toLowerCase(),this.getUserAgent().toLowerCase().indexOf(e)>-1},isOSX:function(){return this.userAgentContains("Macintosh")},isFirefox:function(){return this.userAgentContains("firefox")},isInternetExplorer:function(){return this.userAgentContains("trident")},isIE:function(){const e=this.getUserAgent().toLowerCase();return e.indexOf("msie")>0||e.indexOf("trident/")>0},isEdge:function(){return this.getUserAgent().toLowerCase().indexOf("edge")>0},isChrome:function(){const e=window.chrome,t=window.navigator,n=t.vendor,r=typeof window.opr!="undefined",o=t.userAgent.indexOf("Edge")>-1,s=t.userAgent.match("CriOS");return e!==null&&typeof e!="undefined"&&n==="Google Inc."&&r===!1&&o===!1||s},isOpera:function(){return this.userAgentContains(" OPR/")}};let c;const u=(e,t,n)=>e.addEventListener?(e.addEventListener(t,n),{remove:function(){e.removeEventListener(t,n)}}):(e.attachEvent(t,n),{remove:function(){e.detachEvent(t,n)}}),l=(e,t)=>{const n=document.createElement("iframe");return n.src=t,n.id="hiddenIframe",n.style.display="none",e.appendChild(n),n},m=(e,t,n)=>{const r=setTimeout(function(){t(),i.remove()},c);let o=document.querySelector("#hiddenIframe");o||(o=l(document.body,"about:blank"));const i=u(window,"blur",()=>{clearTimeout(r),i.remove(),n()});o.contentWindow.location.href=e},g=(e,t,n)=>{const r=setTimeout(function(){t(),i.remove()},c);let o=window;for(;o.parent&&o!=o.parent;)o=o.parent;const i=u(o,"blur",()=>{clearTimeout(r),i.remove(),n()});window.location.href=e},w=(e,t,n)=>{let r=document.querySelector("#hiddenIframe");r||(r=l(document.body,"about:blank"));try{r.contentWindow.location.href=e,n()}catch(o){o.name=="NS_ERROR_UNKNOWN_PROTOCOL"&&t()}},p=(e,t,n)=>{navigator.msLaunchUri(e,n,t)},O=()=>{const e=window.navigator.userAgent;let t,n=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(n[1])?(t=/\brv[ :]+(\d+)/g.exec(e)||[],parseFloat(t[1])||""):n[1]==="Chrome"&&(t=e.match(/\b(OPR|Edge)\/(\d+)/),t!=null)?parseFloat(t[2]):(n=n[2]?[n[1],n[2]]:[window.navigator.appName,window.navigator.appVersion,"-?"],(t=e.match(/version\/(\d+)/i))!=null&&n.splice(1,1,t[1]),parseFloat(n[1]))},v=(e,t,n,r=2e3,o)=>{const s=()=>{t&&t()},i=()=>{n&&n()},h=()=>{o&&o()},d=()=>{a.isFirefox()?O()>=64?m(e,s,i):w(e,s,i):a.isChrome()?g(e,s,i):a.isOSX()?m(e,s,i):h()};if(r&&(c=r),a.isEdge()||a.isIE())p(e,t,n);else if(document.hasFocus())d();else{const f=u(window,"focus",()=>{f.remove(),d()})}};export{v as protocolCheck};
//# sourceMappingURL=custom_protocol-0f2aaaf6.js.map
