(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{STjU:function(e,t,n){"use strict";var r=n("q1tI");function u(e,t,n){var u=Object(r["useRef"])(e);u.current=e,Object(r["useEffect"])((()=>{(null===n||void 0===n?void 0:n.immediate)&&u.current();var e=setInterval((()=>{u.current()}),t);return()=>clearInterval(e)}),[t])}t["a"]=u},Sl5v:function(e,t,n){"use strict";n.r(t);n("+L6B");var r=n("2/Rp"),u=(n("miYZ"),n("tsqr")),c=n("ODXe"),a=n("q1tI"),i=n.n(a),o=n("qPJ8");function l(){var e=Object(a["useState"])(0),t=Object(c["a"])(e,2),n=t[0],l=t[1];return Object(o["a"])((()=>(u["b"].success("running effect once on mount"),()=>{u["b"].warn("running clean-up of effect on unmount")}))),i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"hello world"),i.a.createElement("p",null,"\u8ba1\u6570\uff1a",n),i.a.createElement(r["a"],{onClick:()=>l(n+1)},"\u9012\u589e"))}t["default"]=()=>{var e=Object(a["useState"])(!0),t=Object(c["a"])(e,2),n=t[0],u=t[1];return i.a.createElement("div",null,i.a.createElement(r["a"],{type:"primary",onClick:()=>u(!n)},n?"\u9690\u85cf\u5b50\u7ec4\u4ef6":"\u663e\u793a\u5b50\u7ec4\u4ef6"),n?i.a.createElement(l,null):null)}},bXwC:function(e,t,n){},miYZ:function(e,t,n){"use strict";n("cIOH"),n("bXwC")},qPJ8:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n("q1tI");function u(e){Object(r["useEffect"])(e,[])}var c=u;n("STjU");function a(e){c((()=>{e()}))}var i=a;function o(e){var t=Object(r["useRef"])(e);t.current=e;var n=Object(r["useRef"])(null);return n.current||(n.current=function(){for(var e,n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return null===(e=t.current)||void 0===e?void 0:e.call(t,...r)}),n.current}var l=o;function f(e){c((()=>e))}var s=f;function v(e,t){var n=Object(r["useRef"])(e);n.current=e,Object(r["useEffect"])((()=>{var e=setTimeout((()=>{n.current()}),t);return()=>{clearTimeout(e)}}),[t])}var b=v,d=n("ODXe");function m(){var e=Object(r["useState"])(0),t=Object(d["a"])(e,2),n=t[1];return l((()=>n((e=>(e+1)%1e6))))}var O=m}}]);