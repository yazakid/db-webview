(function(e){function t(t){for(var r,s,a=t[0],c=t[1],u=t[2],d=0,f=[];d<a.length;d++)s=a[d],o[s]&&f.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={index:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;i.push([0,"chunk-common"]),n()})({0:function(e,t,n){e.exports=n("9953")},9953:function(e,t,n){"use strict";n.r(t);var r=n("f712");class o{constructor(e,t,n){this.domElement=t,this.name=n,this.queueIndex=e,this.index=r["b"].CONTAINER}}const i={},s={},a={},c={},u={},l={},d={},f={};let p=null,h=null;function b(e){p=e,h=e.document}function E(e,t,n,s){n=n||r["b"].DEFAULT_NAME;const c=new o(e,t,n);a[e][r["b"].CONTAINER]=t,i[e][n]=c,d[e][n]=s;const u=l[e];return l[e]=[],N(e,u),c}function v(e,t){return t===p?r["b"].WINDOW:t&&t.window===t?null:t===h?r["b"].DOCUMENT:t instanceof p.Node?t[r["b"].QUEUE_INDEX]===e?t[r["b"].NODE_INDEX]:null:t instanceof Array?t.map(t=>v(e,t)):"number"===typeof t||"string"===typeof t||"boolean"===typeof t?t:"function"===typeof t?null:t}function w(e,t,n,o){const i={extraData:{}},a=o.path||r["c"].map(e=>o[e]).filter(e=>e);a.forEach(t=>{i.extraData[v(e,t)]={$value:t.value,type:t.type,checked:t.checked}});for(let r in o)o.hasOwnProperty(r)&&(i[r]=v(e,o[r]));s[e].push([r["b"].EVENT,t,n,i]),"submit"===n&&o.preventDefault()}function m(e){return(t,n)=>{const r=e(t,n);r||l[t].push(n)}}function g(e,t){return Object.keys(e).reduce((n,r)=>{return n[r]=t(e[r]),n},{})}"undefined"!==typeof window&&b(window);const y=g({[r["a"].createContainer]:(e,t)=>{const n=a[e],r=i[e],o=f[e],s=t[2],c=t[1];return o[c]=s,!!r[s]&&(n[c]=r[s].domElement,!0)},[r["a"].createElement]:(e,t)=>{const n=a[e];return n[t[1]]=h.createElement(t[2].toLowerCase()),n[t[1]][r["b"].QUEUE_INDEX]=e,n[t[1]][r["b"].NODE_INDEX]=t[1],!0},[r["a"].createTextNode]:(e,t)=>{const n=a[e];return n[t[1]]=h.createTextNode(t[2]),n[t[1]][r["b"].QUEUE_INDEX]=e,n[t[1]][r["b"].NODE_INDEX]=t[1],!0},[r["a"].createComment]:(e,t)=>{const n=a[e];return n[t[1]]=h.createComment(t[2]),n[t[1]][r["b"].QUEUE_INDEX]=e,n[t[1]][r["b"].NODE_INDEX]=t[1],!0},[r["a"].createDocumentFragment]:(e,t)=>{const n=a[e];return n[t[1]]=h.createDocumentFragment(t[2]),!0},[r["a"].appendChild]:(e,t)=>{const n=a[e],o=t[1],i=t[2];return n[o]?(n[o].appendChild(n[i]),!0):(n[r["b"].CONTAINER].appendChild(n[i]),!0)},[r["a"].insertBefore]:(e,t)=>{const n=a[e],o=t[1],i=t[2],s=t[3];return n[o]?(n[o].insertBefore(n[i],s?n[s]:null),!0):(n[r["b"].CONTAINER].appendChild(n[i]),!0)},[r["a"].removeChild]:(e,t)=>{const n=a[e],o=t[1],i=t[2];return n[o]&&n[i]?(n[o].removeChild(n[i]),!0):(n[r["b"].CONTAINER].removeChild(n[i]),!0)},[r["a"].replaceChild]:(e,t)=>{const n=a[e],o=t[1],i=t[2],s=t[3];return n[o]&&n[i]&&n[s]?(n[o].replaceChild(n[i],n[s]),!0):(n[r["b"].CONTAINER].replaceChild(n[i],n[s]),!0)},[r["a"].setAttribute]:(e,t)=>{const n=a[e];return!!n[t[1]]&&(n[t[1]].setAttribute(t[2],t[3]),!0)},[r["a"].removeAttribute]:(e,t)=>{const n=a[e];return!!n[t[1]]&&(n[t[1]].removeAttribute(t[2]),!0)},[r["a"].setStyles]:(e,t)=>{const n=a[e];return!!n[t[1]]&&(n[t[1]].style=t[2],!0)},[r["a"].setStyle]:(e,t)=>{const n=a[e];return!!n[t[1]]&&(n[t[1]].style[t[2]]=t[3],!0)},[r["a"].innerHTML]:(e,t)=>{const n=a[e];return!!n[t[1]]&&(n[t[1]].innerHTML=t[2],!0)},[r["a"].innerText]:(e,t)=>{const n=a[e];return!!n[t[1]]&&(n[t[1]].innerText=t[2],!0)},[r["a"].textContent]:(e,t)=>{const n=a[e];return!!n[t[1]]&&(n[t[1]].textContent=t[2],t[3]&&(n[t[3]]=n[t[1]].firstChild),!0)},[r["a"].setValue]:(e,t)=>{const n=a[e];return!!n[t[1]]&&(n[t[1]].value=t[2],!0)},[r["a"].pause]:(e,t)=>{const n=a[e];return!!n[t[1]]&&(n[t[1]].pause(),!0)},[r["a"].play]:(e,t)=>{const n=a[e];return!!n[t[1]]&&(n[t[1]].play(),!0)},[r["a"].src]:(e,t)=>{const n=a[e];return!!n[t[1]]&&(n[t[1]].src=t[2],!0)},[r["a"].focus]:(e,t)=>{const n=a[e];return!!n[t[1]]&&(n[t[1]].focus(),!0)},[r["a"].setSelectionRange]:(e,t)=>{const n=a[e];return!!n[t[1]]&&(n[t[1]].setSelectionRange(t[2],t[3],t[4]),!0)},[r["a"].addEventListener]:(e,t)=>{const n=a[e],r=c[e];if(n[t[1]]){const o=w.bind(null,e,t[1],t[2]);return r[t[2]]=r[t[2]]||{},r[t[2]][t[3]]=o,n[t[1]].addEventListener(t[2],o,t[4]),!0}return!1},[r["a"].removeEventListener]:(e,t)=>{const n=a[e],r=c[e];if(n[t[1]]){r[t[2]]=r[t[2]]||{};const e=r[t[2]][t[3]];return n[t[1]].removeEventListener(t[2],e),!0}return!1},[r["a"].dispatchEvent]:(e,t)=>{const n=a[e];if(n[t[1]]){const e=t[4]?new p.CustomEvent(t[2],t[3]):new p.Event(t[2],t[3]);return n[t[1]].dispatchEvent(e),!0}return!1},[r["a"].initiated]:e=>{D(e)},[r["a"].invokeNative]:(e,t)=>{const n=a[e],r=u[e];return!!n[t[1]]&&(r[t[2]]&&r[t[2]](n[t[1]],t[3]),!0)}},m);function N(e,t){const n={};t.forEach(t=>{const r=t[0];y[r](e,t);const o=t[t.length-1];if(o){const t=f[e][o];t&&(n[t]=!0)}}),Object.keys(n).forEach(t=>{const n=d[e][t];n&&n()})}function D(e){O(e),C(()=>O(e))}function O(e){s[e].push([r["b"].INIT,{WINDOW:{screen:{width:p.screen.width,height:p.screen.height,deviceXDPI:p.screen.deviceXDPI,logicalXDPI:p.screen.logicalXDPI,orientation:{angle:p.screen.orientation&&p.screen.orientation.angle,type:p.screen.orientation&&p.screen.orientation.type}},devicePixelRatio:p.devicePixelRatio,innerWidth:p.innerWidth,innerHeight:p.innerHeight},DOCUMENT:{body:{clientWidth:h.body.clientWidth}}}])}function C(e){p.addEventListener("orientationchange",e),p.addEventListener("resize",e)}function I(e,t,n){if(!p)throw new Error("Please setWindow before create message queues");const o=new r["d"],b=o.index;return s[b]=o,i[b]={},d[b]={},f[b]={},a[b]={},u[b]=n||{},l[b]=[],a[b][r["b"].DOCUMENT]=h,a[b][r["b"].WINDOW]=p,a[b][r["b"].HEAD]=h.head,a[b][r["b"].BODY]=h.body,c[b]={},o.setPipe(e,N.bind(null,b),t),b}n("a7f8");class k{constructor(e,t){this.workers=e.map(e=>new Worker(e+"?bom="+btoa(JSON.stringify(t))))}send(e){this.workers[e.pid].postMessage(e.data)}create(e){this.workers.push(new Worker(e))}getWorkerInstance(e){return this.workers[e]}}const x=window.webkit&&window.webkit.messageHandlers.JSBridge;if(true)P={postMessage:function(e,t){window.webkit.messageHandlers.JSBridge.postMessage(e,t)},isBridgeMode:!0,addEventListener:window.addEventListener.bind(window)};else var T=new k(["./js/worker.js"],{url:location.href}),P=T.getWorkerInstance(0);var W=I(P,null,{});E(W,document.getElementById("app"))},a7f8:function(e,t){}});
//# sourceMappingURL=index.js.map