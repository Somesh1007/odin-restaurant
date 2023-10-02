(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(81),a=t.n(o),r=t(645),c=t.n(r),i=t(667),s=t.n(i),d=new URL(t(974),t.b),l=c()(a()),p=s()(d);l.push([e.id,`@font-face {\n    font-family: chineseFont;\n    src: url(${p});\n}\n\n:root {\n    --full-height: 100vh;\n    --full-width: 100vw;\n    --header-height: calc(var(--full-height) / 10);\n    --tabs-header-height: 70px;\n    --content-height: calc(var(--full-height) - var(--header-height) - var(--tabs-header-height));\n    --chinese-red: #aa381e;\n    --shadow-bottom: 3px 1px 20px 8px rgba(0, 0, 0, 0.1)\n}\n\nbody {\n    margin: 0px;\n    padding: 0px;\n    font-family: chineseFont;\n}\n\nbutton {\n    font-family: chineseFont;\n    cursor: pointer;\n}\n\n#content {\n    height: var(--full-height);\n}\n\n.header {\n    height: var(--header-height);\n    background-color: var(--chinese-red);\n    text-align: center;\n    font-size: 3.5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    box-shadow: var(--shadow-bottom);\n}\n\n.tabs {\n    box-sizing: border-box;\n    background-color: #cccccc;\n    text-align: center;\n    padding: 10px;\n    height: var(--tabs-header-height);\n    /* display: flex;\n    align-items: center;\n    justify-content: space-evenly; */\n}\n\n.tabs button {\n    border: 0px;\n    padding: 10px 20px;\n    border-radius: 5px;\n    font-size: 1.5rem;\n    margin-right: 100px;\n\n}\n\n.tabs button:hover,\n.tabs button:active {\n    background-color: green;\n    color: white;\n    /* border-bottom: 5px solid black; */\n    transform: translateY(-10%);\n}\n\n.home,\n.menu,\n.contact,\n.about {\n    height: var(--content-height);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 2rem;\n}\n\n.home,\n.contact,\n.about {\n    flex-direction: column;\n}\n\n.menu {\n    margin-top: 50px;\n    height: auto;\n}\n\n.quote-text {\n    /* margin-top: -50px; */\n    margin-top: 20px;\n    font-size: 2.5rem;\n}\n\n.year-text {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    margin-left: 300px;\n}\n\n.home-image {\n    /* height: 320px;\n    width: 420px; */\n    border-radius: 10px;\n    /* margin-top: 50px; */\n    margin-bottom: 50px;\n}\n\n.menu .menu-container {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(400px, 1fr));\n    justify-items: center;\n    gap: 20px;\n}\n\n.menu .menu-container img {\n    height: 250px;\n    width: 250px;\n    border-radius: 10px;\n}\n\n.menu .menu-item {\n    padding: 10px;\n    width: 350px;\n    border-radius: 10px;\n    border: 3px solid #cccccc;\n    background-color: white;\n    box-shadow: var(--shadow-bottom);\n}\n\n.menu .menu-item,\n.menu .menu-item .menu-item-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.order-button {\n    border-radius: 5px;\n    padding: 10px 20px;\n    font-size: 1rem;\n    background-color: green;\n    color: white;\n}\n\n.item-name,\n.order-button {\n    margin-top: 10px;\n    margin-bottom: 20px;\n    text-align: center;\n}\n\n.icon-image {\n    height: 40px;\n    width: 40px;\n}\n\n.contact-map {\n    margin-top: 30px;\n    border-radius: 5px;\n    height: 400px;\n    width: 500px;\n}\n\n.about {\n    padding-left: 200px;\n    padding-right: 200px;\n}\n\n.about-footer {\n    margin-top: 20px;\n    font-size: 3rem;\n    padding-left: 400px;\n}`,""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,o);o.byIndex=i,n.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=t(r[c]);n[i].references--}for(var s=o(e,a),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},974:(e,n,t)=>{e.exports=t.p+"59287eb584ab9acf3e25.ttf"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"9bb3aa5ac27c2f7b741c.avif";function n(){const n=document.createElement("div");n.classList.add("home");const t=document.createElement("div");t.classList.add("quote-text"),t.textContent="Best Noodles In the Country";const o=document.createElement("div");o.classList.add("year-text"),o.textContent="- Since 1970";const a=new Image;a.src=e,a.alt="Home Noodles Image",a.classList.add("home-image");const r=document.createElement("div");return r.classList.add("home-footer"),r.textContent="Order Online or Visit Us!!!",n.appendChild(t),n.appendChild(o),n.appendChild(a),n.appendChild(r),n}const o=t.p+"5b4a9e958330cc519dd7.webp",a=t.p+"a4c6c9f935a0b8dae40e.webp",r=t.p+"e0376fe1db7b6e758482.webp",c=t.p+"2af7358164dfc1e3d27f.webp",i=t.p+"686c885801b1d17f0c02.webp",s=t.p+"34f41a1b8d9124b25f43.webp",d=t.p+"4665f1ef21b7fea82ae8.webp";function l(e,n){const t=document.createElement("div");t.classList.add("menu-item");const o=new Image;o.src=n,o.alt=e,o.classList.add("item-image");const a=document.createElement("div");a.classList.add("menu-item-content");const r=document.createElement("div");r.classList.add("item-name"),r.textContent=e;const c=document.createElement("button");return c.classList.add("order-button"),c.textContent="Order Now",a.appendChild(r),a.appendChild(c),t.appendChild(o),t.appendChild(a),t}const p=t.p+"3119fe82239e73c8f083.svg",u=t.p+"2f2f0ca42621920bcde3.svg",m=t.p+"eb77368d6a216a4fa78c.jpg";var h=t(379),f=t.n(h),b=t(795),g=t.n(b),v=t(569),x=t.n(v),y=t(565),C=t.n(y),w=t(216),L=t.n(w),E=t(589),k=t.n(E),S=t(28),I={};function N(e){const n=document.createElement("button");return n.classList.add("tab-button"),n.classList.add(`${e.toLowerCase()}-button`),n.textContent=e,n}function q(){!function(){const e=document.querySelector("#content .home");e&&e.remove()}(),function(){const e=document.querySelector("#content .menu");e&&e.remove()}(),function(){const e=document.querySelector("#content .contact");e&&e.remove()}(),function(){const e=document.querySelector("#content .about");e&&e.remove()}()}function M(e){e.style.backgroundColor="green",e.style.borderBottom="5px solid black",e.style.color="white"}function T(e){e.forEach((e=>{e.style.backgroundColor="",e.style.borderBottom="",e.style.color=""}))}I.styleTagTransform=k(),I.setAttributes=C(),I.insert=x().bind(null,"head"),I.domAPI=g(),I.insertStyleElement=L(),f()(S.Z,I),S.Z&&S.Z.locals&&S.Z.locals,function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("header"),t.textContent="Noodles Restaurant";const h=document.createElement("div");h.classList.add("tabs"),h.appendChild(N("Home")),h.appendChild(N("Menu")),h.appendChild(N("Contact")),h.appendChild(N("About")),e.appendChild(t),e.appendChild(h);const f=n(),b=document.querySelector(".home-button");b.style.backgroundColor="green",b.style.borderBottom="5px solid black",b.style.color="white",e.appendChild(f),function(){const e=document.querySelector("#content"),t=document.querySelector(".tab-button.home-button"),h=document.querySelector(".tab-button.menu-button"),f=document.querySelector(".tab-button.contact-button"),b=document.querySelector(".tab-button.about-button"),g=[t,h,f,b];t.addEventListener("click",(function(o){q(),T(g),M(t),e.appendChild(n())})),h.addEventListener("click",(function(n){q(),T(g),M(h),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const n=document.createElement("div");return n.classList.add("menu-container"),n.appendChild(l("Manchurian Noodles",o)),n.appendChild(l("Hakka Noodles",a)),n.appendChild(l("Japanese Pan Noodles",r)),n.appendChild(l("Buttered Noodles",c)),n.appendChild(l("Pasta Fresca",i)),n.appendChild(l("Pad Thai",s)),n.appendChild(l("Spicy Korean Noodles",d)),e.appendChild(n),e}())})),f.addEventListener("click",(function(n){q(),T(g),M(f),e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const n=new Image;n.src=p,n.alt="Phone Icon",n.classList.add("icon-image"),n.classList.add("phone-icon");const t=document.createElement("span");t.classList.add("contact-text"),t.classList.add("phone-text"),t.textContent="123456789";const o=document.createElement("div");o.classList.add("contact-phone"),o.appendChild(n),o.appendChild(t);const a=new Image;a.src=u,a.alt="Office Icon",a.classList.add("icon-image"),a.classList.add("office-icon");const r=document.createElement("span");r.classList.add("contact-text"),r.classList.add("address-text"),r.textContent="2436 Naples Avenue, Panama City FL 32405";const c=document.createElement("div");c.classList.add("contact-address"),c.appendChild(a),c.appendChild(r);const i=new Image;return i.src=m,e.alt="Map Image",i.classList.add("contact-map"),e.appendChild(o),e.appendChild(c),e.appendChild(i),e}())})),b.addEventListener("click",(function(n){q(),T(g),M(b),e.appendChild(function(){const e=document.createElement("div");e.classList.add("about");const n=document.createElement("div");n.classList.add("about-history"),n.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and\n    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap\n    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the\n    release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n    software like Aldus PageMaker including versions of Lorem Ipsum.";const t=document.createElement("div");return t.classList.add("about-footer"),t.textContent="Noodles Restaurant",e.appendChild(n),e.appendChild(t),e}())}))}()}()})()})();