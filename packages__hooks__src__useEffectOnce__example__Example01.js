(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{STjU:function(e,n,t){"use strict";var r=t("q1tI");function u(e,n,t){var u=Object(r["useRef"])(e);u.current=e,Object(r["useEffect"])((()=>{(null===t||void 0===t?void 0:t.immediate)&&u.current();var e=setInterval((()=>{u.current()}),n);return()=>clearInterval(e)}),[n])}n["a"]=u},Sl5v:function(e,n,t){"use strict";t.r(n);t("+L6B");var r=t("2/Rp"),u=(t("miYZ"),t("tsqr")),c=t("ODXe"),a=t("q1tI"),i=t.n(a),o=t("qPJ8");function f(){var e=Object(a["useState"])(0),n=Object(c["a"])(e,2),t=n[0],f=n[1];return Object(o["b"])((()=>(u["b"].success("running effect once on mount"),()=>{u["b"].warn("running clean-up of effect on unmount")}))),i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"hello world"),i.a.createElement("p",null,"\u8ba1\u6570\uff1a",t),i.a.createElement(r["a"],{onClick:()=>f(t+1)},"\u9012\u589e"))}n["default"]=()=>{var e=Object(a["useState"])(!0),n=Object(c["a"])(e,2),t=n[0],u=n[1];return i.a.createElement("div",null,i.a.createElement(r["a"],{type:"primary",onClick:()=>u(!t)},t?"\u9690\u85cf\u5b50\u7ec4\u4ef6":"\u663e\u793a\u5b50\u7ec4\u4ef6"),t?i.a.createElement(f,null):null)}},bXwC:function(e,n,t){},miYZ:function(e,n,t){"use strict";t("cIOH"),t("bXwC")},qPJ8:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"d",(function(){return i})),t.d(n,"g",(function(){return v})),t.d(n,"e",(function(){return f})),t.d(n,"f",(function(){return b})),t.d(n,"c",(function(){return O})),t.d(n,"a",(function(){return R}));var r=t("q1tI");function u(e){Object(r["useEffect"])(e,[])}var c=u;t("STjU");function a(e){c((()=>{e()}))}var i=a;function o(e){var n=Object(r["useRef"])(e);n.current=e;var t=Object(r["useRef"])(null);return t.current||(t.current=function(){for(var e,t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u];return null===(e=n.current)||void 0===e?void 0:e.call(n,...r)}),t.current}var f=o;function l(e){c((()=>e))}var v=l;function s(e,n){var t=Object(r["useRef"])(e);t.current=e,Object(r["useEffect"])((()=>{var e=setTimeout((()=>{t.current()}),n);return()=>{clearTimeout(e)}}),[n])}var b=s,d=t("ODXe");function j(){var e=Object(r["useState"])(0),n=Object(d["a"])(e,2),t=n[1];return f((()=>t((e=>(e+1)%1e6))))}var O=j,m=t("LvDl");function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=Object(r["useRef"])({deps:n,obj:void 0,initialized:!1}),u=t.current;return!1!==u.initialized&&w(u.deps,n)||(u.deps=n,u.obj=e(),u.initialized=!0),u.obj}function w(e,n){if(e===n)return!0;for(var t=0;t<n.length;t++){var r=e[t],u=n[t];if(r!==u)return!1}return!0}var E=p;function g(e,n,t){var u=Object(r["useRef"])(e);return u.current=e,E((()=>Object(m["debounce"])((function(){return u.current(...arguments)}),n,t)),[])}var R=g}}]);