(function(e){function n(n){for(var r,o,a=n[0],i=n[1],f=n[2],l=0,d=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&d.push(u[o][0]),u[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(d.length)d.shift()();return c.push.apply(c,f||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==u[a]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},u={app:0},c=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0a1c37fc":"cd7d2625","chunk-3939f990":"bda79dba","chunk-3bee5d43":"8abfa88b","chunk-5fefb6d7":"b0389947"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0a1c37fc":1,"chunk-3939f990":1,"chunk-3bee5d43":1,"chunk-5fefb6d7":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0a1c37fc":"20cbb276","chunk-3939f990":"a963ff17","chunk-3bee5d43":"31127628","chunk-5fefb6d7":"d6acea97"}[e]+".css",u=i.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var f=c[a],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===u))return n()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){f=d[a],l=f.getAttribute("data-href");if(l===r||l===u)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||u,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],s.parentNode.removeChild(s),t(c)},s.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(s)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=u[e]=[n,t]}));n.push(r[2]=c);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(e);var d=new Error;f=function(n){l.onerror=l.onload=null,clearTimeout(s);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}u[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/tool/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var d=0;d<f.length;d++)n(f[d]);var s=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"017a":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o={class:"body"},u=Object(r["i"])("footer",null,null,-1);function c(e,n,t,c,a,i){var f=Object(r["y"])("router-view");return Object(r["s"])(),Object(r["e"])("div",null,[Object(r["i"])("div",o,[Object(r["i"])("div",null,[Object(r["i"])(f)])]),u])}var a={name:"App"},i=(t("8f3e"),t("6b0d")),f=t.n(i);const l=f()(a,[["render",c]]);var d=l,s=(t("d3b7"),t("954b")),p=[{path:"/",component:function(){return t.e("chunk-3939f990").then(t.bind(null,"31c6"))}},{path:"/fileToBase",component:function(){return t.e("chunk-3bee5d43").then(t.bind(null,"6c95"))}},{path:"/createImgByCanvas",component:function(){return t.e("chunk-5fefb6d7").then(t.bind(null,"3f46"))}},{path:"/manualMarking",component:function(){return t.e("chunk-0a1c37fc").then(t.bind(null,"a271"))}}],h=s["a"]({history:s["b"](),routes:p}),b=h,v=Object(r["d"])(d);v.use(b),v.mount("#app")},"8f3e":function(e,n,t){"use strict";t("017a")}});
//# sourceMappingURL=app.478e57a9.js.map