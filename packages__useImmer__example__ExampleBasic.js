(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{WfGu:function(t,e,r){"use strict";r.d(e,"a",(function(){return nt})),r.d(e,"b",(function(){return ot}));r("VTBJ");var n=r("ODXe");function o(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(t){return!!t&&!!t[G]}function u(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);return!e||e===Object.prototype}(t)||Array.isArray(t)||!!t[B]||!!t.constructor[B]||y(t)||d(t))}function c(t,e,r){void 0===r&&(r=!1),0===f(t)?(r?Object.keys:X)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function f(t){var e=t[G];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:y(t)?2:d(t)?3:0}function a(t,e){return 2===f(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function s(t,e){return 2===f(t)?t.get(e):t[e]}function l(t,e,r){var n=f(t);2===n?t.set(e,r):3===n?(t["delete"](e),t.add(r)):t[e]=r}function p(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function y(t){return U&&t instanceof Map}function d(t){return T&&t instanceof Set}function v(t){return t.o||t.t}function h(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=L(t);delete e[G];for(var r=X(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function b(t,e){return void 0===e&&(e=!1),m(t)||i(t)||!u(t)||(f(t)>1&&(t.set=t.add=t.clear=t["delete"]=P),Object.freeze(t),e&&c(t,(function(t,e){return b(e,!0)}),!0)),t}function P(){o(2)}function m(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function O(t){var e=V[t];return e||o(18,t),e}function g(){return C}function j(t,e){e&&(O("Patches"),t.u=[],t.s=[],t.v=e)}function w(t){A(t),t.p.forEach(D),t.p=null}function A(t){t===C&&(C=t.l)}function S(t){return C={p:[],l:C,h:t,m:!0,_:0}}function D(t){var e=t[G];0===e.i||1===e.i?e.j():e.g=!0}function k(t,e){e._=e.p.length;var r=e.p[0],n=void 0!==t&&t!==r;return e.h.O||O("ES5").S(e,t,n),n?(r[G].P&&(w(e),o(4)),u(t)&&(t=E(e,t),e.l||_(e,t)),e.u&&O("Patches").M(r[G],t,e.u,e.s)):t=E(e,r,[]),w(e),e.u&&e.v(e.u,e.s),t!==q?t:void 0}function E(t,e,r){if(m(e))return e;var n=e[G];if(!n)return c(e,(function(o,i){return x(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return _(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=h(n.k):n.o;c(3===n.i?new Set(o):o,(function(e,i){return x(t,n,o,e,i,r)})),_(t,o,!1),r&&t.u&&O("Patches").R(n,r,t.u,t.s)}return n.o}function x(t,e,r,n,o,c){if(i(o)){var f=E(t,o,c&&e&&3!==e.i&&!a(e.D,n)?c.concat(n):void 0);if(l(r,n,f),!i(f))return;t.m=!1}if(u(o)&&!m(o)){if(!t.h.N&&t._<1)return;E(t,o),e&&e.A.l||_(t,o)}}function _(t,e,r){void 0===r&&(r=!1),t.h.N&&t.m&&b(e,r)}function F(t,e){var r=t[G];return(r?v(r):t)[e]}function I(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function R(t){t.P||(t.P=!0,t.l&&R(t.l))}function W(t){t.o||(t.o=h(t.t))}function z(t,e,r){var n=y(e)?O("MapSet").T(e,r):d(e)?O("MapSet").F(e,r):t.O?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:g(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=n,i=H;r&&(o=[n],i=Q);var u=Proxy.revocable(o,i),c=u.revoke,f=u.proxy;return n.k=f,n.j=c,f}(e,r):O("ES5").J(e,r);return(r?r.A:g()).p.push(n),n}function M(t){return i(t)||o(22,t),function t(e){if(!u(e))return e;var r,n=e[G],o=f(e);if(n){if(!n.P&&(n.i<4||!O("ES5").K(n)))return n.t;n.I=!0,r=N(e,o),n.I=!1}else r=N(e,o);return c(r,(function(e,o){n&&s(n.t,e)===o||l(r,e,t(o))})),3===o?new Set(r):r}(t)}function N(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return h(t)}var K,C,J="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),U="undefined"!=typeof Map,T="undefined"!=typeof Set,$="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,q=J?Symbol["for"]("immer-nothing"):((K={})["immer-nothing"]=!0,K),B=J?Symbol["for"]("immer-draftable"):"__$immer_draftable",G=J?Symbol["for"]("immer-state"):"__$immer_state",X=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames),L=Object.getOwnPropertyDescriptors||function(t){var e={};return X(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},V={},H={get:function(t,e){if(e===G)return t;var r=v(t);if(!a(r,e))return function(t,e,r){var n,o=I(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!u(n)?n:n===F(t.t,e)?(W(t),t.o[e]=z(t.A.h,n,t)):n},has:function(t,e){return e in v(t)},ownKeys:function(t){return Reflect.ownKeys(v(t))},set:function(t,e,r){var n=I(v(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=F(v(t),e),i=null==o?void 0:o[G];if(i&&i.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(p(r,o)&&(void 0!==r||a(t.t,e)))return!0;W(t),R(t)}return t.o[e]=r,t.D[e]=!0,!0},deleteProperty:function(t,e){return void 0!==F(t.t,e)||e in t.t?(t.D[e]=!1,W(t),R(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=v(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){o(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){o(12)}},Q={};c(H,(function(t,e){Q[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),Q.deleteProperty=function(t,e){return H.deleteProperty.call(this,t[0],e)},Q.set=function(t,e,r){return H.set.call(this,t[0],e,r,t[0])};var Y=function(){function t(t){this.O=$,this.N=!0,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var e=t.prototype;return e.produce=function(t,e,r){if("function"==typeof t&&"function"!=typeof e){var n=e;e=t;var i=this;return function(t){var r=this;void 0===t&&(t=n);for(var o=arguments.length,u=Array(o>1?o-1:0),c=1;c<o;c++)u[c-1]=arguments[c];return i.produce(t,(function(t){var n;return(n=e).call.apply(n,[r,t].concat(u))}))}}var c;if("function"!=typeof e&&o(6),void 0!==r&&"function"!=typeof r&&o(7),u(t)){var f=S(this),a=z(this,t,void 0),s=!0;try{c=e(a),s=!1}finally{s?w(f):A(f)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(t){return j(f,r),k(t,f)}),(function(t){throw w(f),t})):(j(f,r),k(c,f))}if(!t||"object"!=typeof t){if((c=e(t))===q)return;return void 0===c&&(c=t),this.N&&b(c,!0),c}o(21,t)},e.produceWithPatches=function(t,e){var r,n,o=this;return"function"==typeof t?function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return o.produceWithPatches(e,(function(e){return t.apply(void 0,[e].concat(n))}))}:[this.produce(t,e,(function(t,e){r=t,n=e})),r,n]},e.createDraft=function(t){u(t)||o(8),i(t)&&(t=M(t));var e=S(this),r=z(this,t,void 0);return r[G].C=!0,A(e),r},e.finishDraft=function(t,e){var r=t&&t[G],n=r.A;return j(n,e),k(void 0,n)},e.setAutoFreeze=function(t){this.N=t},e.setUseProxies=function(t){t&&!$&&o(20),this.O=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}var o=O("Patches").$;return i(t)?o(t,e):this.produce(t,(function(t){return o(t,e.slice(r+1))}))},t}(),Z=new Y,tt=Z.produce,et=(Z.produceWithPatches.bind(Z),Z.setAutoFreeze.bind(Z),Z.setUseProxies.bind(Z),Z.applyPatches.bind(Z),Z.createDraft.bind(Z),Z.finishDraft.bind(Z),tt),rt=r("q1tI");function nt(t){var e=Object(rt["useState"])(t),r=Object(n["a"])(e,2),o=r[0],i=r[1];return{state:o,update:Object(rt["useCallback"])((t=>{i(et(t))}),[])}}function ot(t,e,r){var o=Object(rt["useMemo"])((()=>et(e)),[e]),i=Object(rt["useReducer"])(o,t,r),u=Object(n["a"])(i,2),c=u[0],f=u[1];return{state:c,dispatch:f}}},eTU1:function(t,e,r){"use strict";r.r(e);r("+L6B");var n=r("2/Rp"),o=r("q1tI"),i=r.n(o),u=r("WfGu");e["default"]=function(){var t=Object(u["a"])({user:{name:"\u5f20\u4e09"}}),e=t.state,r=t.update;return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,e.user.name),i.a.createElement(n["a"],{type:"primary",onClick:()=>{r((t=>{t.user.name="\u674e\u56db"}))}},"\u66f4\u65b0"))}}}]);