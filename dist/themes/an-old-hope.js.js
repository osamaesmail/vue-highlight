!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}("undefined"!=typeof self?self:this,function(){return function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/dist/",n(n.s=388)}({0:function(e,n){function t(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=o(r);return[t].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[t].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var o=t(n,e);return n[2]?"@media "+n[2]+"{"+o+"}":o}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},1:function(e,n,t){function o(e,n){for(var t=0;t<e.length;t++){var o=e[t],r=v[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(f(o.parts[i],n))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(f(o.parts[i],n));v[o.id]={id:o.id,refs:1,parts:a}}}}function r(e,n){for(var t=[],o={},r=0;r<e.length;r++){var i=e[r],a=n.base?i[0]+n.base:i[0],s=i[1],l=i[2],c=i[3],u={css:s,media:l,sourceMap:c};o[a]?o[a].parts.push(u):t.push(o[a]={id:a,parts:[u]})}return t}function i(e,n){var t=y(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=x[x.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),x.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=y(e.insertAt.before,t);t.insertBefore(n,r)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=x.indexOf(e);n>=0&&x.splice(n,1)}function s(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var t=u();t&&(e.attrs.nonce=t)}return c(n,e.attrs),i(e,n),n}function l(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",c(n,e.attrs),i(e,n),n}function c(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function u(){return t.nc}function f(e,n){var t,o,r,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var c=g++;t=j||(j=s(n)),o=p.bind(null,t,c,!1),r=p.bind(null,t,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=l(n),o=h.bind(null,t,n),r=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(n),o=d.bind(null,t),r=function(){a(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}function p(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=O(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function d(e,n){var t=n.css,o=n.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function h(e,n,t){var o=t.css,r=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||i)&&(o=w(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var v={},m=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),b=function(e,n){return n?n.querySelector(e):document.querySelector(e)},y=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var o=b.call(this,e,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}n[e]=o}return n[e]}}(),j=null,g=0,x=[],w=t(2);e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},n.attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=m()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=r(e,n);return o(t,n),function(e){for(var i=[],a=0;a<t.length;a++){var s=t[a],l=v[s.id];l.refs--,i.push(l)}if(e){o(r(e,n),n)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete v[l.id]}}}};var O=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},2:function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,o=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var r=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r))return e;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},21:function(e,n,t){var o=t(22);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0};r.transform=void 0,r.insertInto=void 0;t(1)(o,r);o.locals&&(e.exports=o.locals)},22:function(e,n,t){n=e.exports=t(0)(!1),n.push([e.i,"@charset \"UTF-8\";\n.an-old-hope {\n  /* \n\nAn Old Hope – Star Wars Syntax (c) Gustavo Costa <gusbemacbe@gmail.com>\nOriginal theme - Ocean Dark Theme – by https://github.com/gavsiu\nBased on Jesse Leite's Atom syntax theme 'An Old Hope' – https://github.com/JesseLeite/an-old-hope-syntax-atom\n\n*/\n  /* Death Star Comment */\n  /* Darth Vader */\n  /* Threepio */\n  /* Luke Skywalker */\n  /* Obi Wan Kenobi */\n  /* Yoda */\n  /* Mace Windu */\n  /* Millenium Falcon */ }\n  .an-old-hope .hljs-comment,\n  .an-old-hope .hljs-quote {\n    color: #B6B18B; }\n  .an-old-hope .hljs-variable,\n  .an-old-hope .hljs-template-variable,\n  .an-old-hope .hljs-tag,\n  .an-old-hope .hljs-name,\n  .an-old-hope .hljs-selector-id,\n  .an-old-hope .hljs-selector-class,\n  .an-old-hope .hljs-regexp,\n  .an-old-hope .hljs-deletion {\n    color: #EB3C54; }\n  .an-old-hope .hljs-number,\n  .an-old-hope .hljs-built_in,\n  .an-old-hope .hljs-builtin-name,\n  .an-old-hope .hljs-literal,\n  .an-old-hope .hljs-type,\n  .an-old-hope .hljs-params,\n  .an-old-hope .hljs-meta,\n  .an-old-hope .hljs-link {\n    color: #E7CE56; }\n  .an-old-hope .hljs-attribute {\n    color: #EE7C2B; }\n  .an-old-hope .hljs-string,\n  .an-old-hope .hljs-symbol,\n  .an-old-hope .hljs-bullet,\n  .an-old-hope .hljs-addition {\n    color: #4FB4D7; }\n  .an-old-hope .hljs-title,\n  .an-old-hope .hljs-section {\n    color: #78BB65; }\n  .an-old-hope .hljs-keyword,\n  .an-old-hope .hljs-selector-tag {\n    color: #B45EA4; }\n  .an-old-hope .hljs {\n    display: block;\n    overflow-x: auto;\n    background: #1C1D21;\n    color: #c0c5ce;\n    padding: 0.5em; }\n  .an-old-hope .hljs-emphasis {\n    font-style: italic; }\n  .an-old-hope .hljs-strong {\n    font-weight: bold; }\n",""])},388:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=t(21)}})});
//# sourceMappingURL=an-old-hope.js.js.map