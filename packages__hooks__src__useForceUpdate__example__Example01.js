(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{EqIU:function(e,r,t){"use strict";t.r(r);t("+L6B");var n=t("2/Rp"),u=t("q1tI"),c=t.n(u),i=t("qPJ8");r["default"]=()=>{var e=Object(u["useRef"])(!1),r=Object(i["c"])();return c.a.createElement("div",null,c.a.createElement("h1",null,JSON.stringify(e.current)),c.a.createElement(n["a"],{type:"primary",onClick:()=>{e.current=!e.current,r()}},"\u5207\u6362"))}},STjU:function(e,r,t){"use strict";var n=t("q1tI");function u(e,r,t){var u=Object(n["useRef"])(e);u.current=e,Object(n["useEffect"])((()=>{(null===t||void 0===t?void 0:t.immediate)&&u.current();var e=setInterval((()=>{u.current()}),r);return()=>clearInterval(e)}),[r])}r["a"]=u},qPJ8:function(e,r,t){"use strict";t.d(r,"b",(function(){return c})),t.d(r,"d",(function(){return a})),t.d(r,"g",(function(){return l})),t.d(r,"e",(function(){return o})),t.d(r,"f",(function(){return s})),t.d(r,"c",(function(){return O})),t.d(r,"a",(function(){return q}));var n=t("q1tI");function u(e){Object(n["useEffect"])(e,[])}var c=u;t("STjU");function i(e){c((()=>{e()}))}var a=i;function f(e){var r=Object(n["useRef"])(e);r.current=e;var t=Object(n["useRef"])(null);return t.current||(t.current=function(){for(var e,t=arguments.length,n=new Array(t),u=0;u<t;u++)n[u]=arguments[u];return null===(e=r.current)||void 0===e?void 0:e.call(r,...n)}),t.current}var o=f;function v(e){c((()=>e))}var l=v;function d(e,r){var t=Object(n["useRef"])(e);t.current=e,Object(n["useEffect"])((()=>{var e=setTimeout((()=>{t.current()}),r);return()=>{clearTimeout(e)}}),[r])}var s=d,b=t("ODXe");function j(){var e=Object(n["useState"])(0),r=Object(b["a"])(e,2),t=r[1];return o((()=>t((e=>(e+1)%1e6))))}var O=j,p=t("LvDl");function m(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=Object(n["useRef"])({deps:r,obj:void 0,initialized:!1}),u=t.current;return!1!==u.initialized&&R(u.deps,r)||(u.deps=r,u.obj=e(),u.initialized=!0),u.obj}function R(e,r){if(e===r)return!0;for(var t=0;t<r.length;t++){var n=e[t],u=r[t];if(n!==u)return!1}return!0}var w=m;function E(e,r,t){var u=Object(n["useRef"])(e);return u.current=e,w((()=>Object(p["debounce"])((function(){return u.current(...arguments)}),r,t)),[])}var q=E}}]);