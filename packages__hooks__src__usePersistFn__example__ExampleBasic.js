(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{fQck:function(e,n,t){"use strict";t.r(n);t("+L6B");var r=t("2/Rp"),u=t("ODXe"),c=t("q1tI"),a=t.n(c),i=t("qPJ8"),l=function(e){var n=Object(c["useState"])(null),t=Object(u["a"])(n,2),r=t[0],i=t[1];return Object(c["useEffect"])((()=>{i(Math.random())}),[e.fn]),a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"i'm is children1, this is i random number ",r))};n["default"]=function(){var e=Object(c["useState"])(0),n=Object(u["a"])(e,2),t=n[0],o=n[1],d=Object(i["c"])((()=>{o(t+1)}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,t),a.a.createElement(l,{fn:d}),a.a.createElement("p",null,"\u8fde\u7eed\u70b9\u51fb\u4e4b\u540e\uff0c\u5b50\u7ec4\u4ef6\u5e76\u4e0d\u4f1a\u88ab\u6e32\u67d3"),a.a.createElement(r["a"],{type:"primary",onClick:d},"\u8fde\u7eed\u70b9\u51fb"))}},qPJ8:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return p})),t.d(n,"d",(function(){return w})),t.d(n,"e",(function(){return R}));var r=t("q1tI");function u(e){Object(r["useEffect"])(e,[])}var c=u;function a(e){c((()=>{e()}))}var i=a,l=t("o0o1"),o=t.n(l),d=t("HaE+"),v=(e,n)=>e.every(((t,r)=>Object.is(e[r],n[r])));function f(e,n){var t=Object(r["useRef"])(void 0),u=Object(r["useRef"])(void 0);return u.current&&n&&v(n,u.current)||(t.current=e(),u.current=n),t.current}var s=f;function b(e,n){return s((()=>e),n)}var O=b,j=t("LvDl");function m(e,n){var t,u=Object(r["useRef"])(e),c=Object(r["useRef"])(!1);u.current=e;var a,i,l,v,f=null!==(t=null===n||void 0===n?void 0:n.wait)&&void 0!==t?t:1e3;return"lock"===(null===n||void 0===n?void 0:n.action)?O((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];Object(d["a"])(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!c.current){e.next=2;break}return e.abrupt("return");case 2:return c.current=!0,e.prev=3,e.next=6,u.current(...n);case 6:c.current=!1,e.next=13;break;case 9:throw e.prev=9,e.t0=e["catch"](3),c.current=!1,e.t0;case 13:case"end":return e.stop()}}),e,null,[[3,9]])})))()}),[u]):"debounce"===(null===n||void 0===n?void 0:n.action)?O(Object(j["debounce"])((function(){return u.current(...arguments)}),f,{leading:null!==(a=null===n||void 0===n?void 0:n.leading)&&void 0!==a&&a,trailing:null===(i=null===n||void 0===n?void 0:n.leading)||void 0===i||i}),[u]):"throttle"===(null===n||void 0===n?void 0:n.action)?O(Object(j["throttle"])((function(){return u.current(...arguments)}),f,{leading:null===(l=null===n||void 0===n?void 0:n.leading)||void 0===l||l,trailing:null===(v=null===n||void 0===n?void 0:n.trailing)||void 0===v||v}),[u]):O((function(){return u.current(...arguments)}),[u])}var p=m;function h(e,n){var t=Object(r["useRef"])(!1),u=Object(r["useRef"])(),c=Object(r["useRef"])(e);c.current=e;var a=p((()=>t.current)),i=p((()=>{t.current=!1,u.current&&clearTimeout(u.current),u.current=setTimeout((()=>{t.current=!0,c.current()}),n.delay)})),l=p((()=>{t.current=null,u.current&&clearTimeout(u.current),u.current=null}));return Object(r["useEffect"])((()=>{if(!n.manual)return i(),l}),[n.delay]),{isReady:a,cancel:l,run:i}}var w=h,g=t("ODXe");function E(){var e=Object(r["useState"])(0),n=Object(g["a"])(e,2),t=n[1];return p((()=>t((e=>(e+1)%1e6))))}var R=E}}]);