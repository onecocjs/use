(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{bbyW:function(e,n,t){"use strict";t.r(n);t("+L6B");var r=t("2/Rp"),u=t("ODXe"),c=t("q1tI"),i=t.n(c),a=t("qPJ8");n["default"]=function(){var e=Object(c["useState"])(0),n=Object(u["a"])(e,2),t=n[0],o=n[1],l=Object(a["c"])((()=>{o(t+1)}),{action:"throttle",wait:1e3});return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,t),i.a.createElement(r["a"],{type:"primary",onClick:l},"\u8fde\u7eed\u70b9\u51fb"))}},qPJ8:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return w})),t.d(n,"d",(function(){return h})),t.d(n,"e",(function(){return y}));var r=t("q1tI");function u(e){Object(r["useEffect"])(e,[])}var c=u;function i(e){c((()=>{e()}))}var a=i,o=t("o0o1"),l=t.n(o),v=t("HaE+"),d=(e,n)=>e.every(((t,r)=>Object.is(e[r],n[r])));function f(e,n){var t=Object(r["useRef"])(void 0),u=Object(r["useRef"])(void 0);return u.current&&n&&d(n,u.current)||(t.current=e(),u.current=n),t.current}var s=f;function b(e,n){return s((()=>e),n)}var O=b,j=t("LvDl");function p(e,n){var t,u=Object(r["useRef"])(e),c=Object(r["useRef"])(!1);u.current=e;var i,a,o,d,f=null!==(t=null===n||void 0===n?void 0:n.wait)&&void 0!==t?t:1e3;return console.log(null===n||void 0===n?void 0:n.action),"lock"===(null===n||void 0===n?void 0:n.action)?O((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];Object(v["a"])(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!c.current){e.next=2;break}return e.abrupt("return");case 2:return c.current=!0,e.prev=3,e.next=6,u.current(...n);case 6:c.current=!1,e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](3),c.current=!1,e.t0;case 13:case"end":return e.stop()}}),e,null,[[3,9]])})))()}),[u]):"debounce"===(null===n||void 0===n?void 0:n.action)?O(Object(j["debounce"])((function(){return u.current(...arguments)}),f,{leading:null!==(i=null===n||void 0===n?void 0:n.leading)&&void 0!==i&&i,trailing:null===(a=null===n||void 0===n?void 0:n.leading)||void 0===a||a}),[u]):"throttle"===(null===n||void 0===n?void 0:n.action)?O(Object(j["throttle"])((function(){return u.current(...arguments)}),f,{leading:null===(o=null===n||void 0===n?void 0:n.leading)||void 0===o||o,trailing:null===(d=null===n||void 0===n?void 0:n.trailing)||void 0===d||d}),[u]):O((function(){return u.current(...arguments)}),[u])}var w=p;function g(e,n){var t=Object(r["useRef"])(!1),u=Object(r["useRef"])(),c=Object(r["useRef"])(e);c.current=e;var i=w((()=>t.current)),a=w((()=>{t.current=!1,u.current&&clearTimeout(u.current),u.current=setTimeout((()=>{t.current=!0,c.current()}),n.delay)})),o=w((()=>{t.current=null,u.current&&clearTimeout(u.current),u.current=null}));return Object(r["useEffect"])((()=>{if(!n.manual)return a(),o}),[n.delay]),{isReady:i,cancel:o,run:a}}var h=g,m=t("ODXe");function R(){var e=Object(r["useState"])(0),n=Object(m["a"])(e,2),t=n[1];return w((()=>t((e=>(e+1)%1e6))))}var y=R}}]);