(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{CV2l:function(e,n,t){"use strict";t.r(n);t("cIOH"),t("OPEp");var r=t("pVnL"),i=t.n(r),c=t("lSNA"),l=t.n(c),a=t("q1tI"),u=t.n(a),o=t("TSYQ"),d=t.n(o),s=t("Zm9Q"),v=t("H84U"),f={small:8,middle:16,large:24};function m(e){var n,t=e.className,r=e.direction,i=e.index,c=e.size,u=e.marginDirection,o=e.children,d=e.split,s=a["useContext"](O);if(null===o||void 0===o)return null;var v=i>=s?{}:l()({},"vertical"===r?"marginBottom":u,(null!==(n="string"===typeof c?f[c]:c)&&void 0!==n?n:0)/(d?2:1));return a["createElement"](a["Fragment"],null,a["createElement"]("div",{className:t,style:v},o),i<s&&d&&a["createElement"]("span",{className:"".concat(t,"-split"),style:v},d))}var p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t},O=a["createContext"](0),b=function(e){var n,t=a["useContext"](v["b"]),r=t.getPrefixCls,c=t.space,u=t.direction,o=e.size,f=void 0===o?(null===c||void 0===c?void 0:c.size)||"small":o,b=e.align,g=e.className,y=e.children,j=e.direction,h=void 0===j?"horizontal":j,E=e.prefixCls,w=e.split,x=p(e,["size","align","className","children","direction","prefixCls","split"]),C=Object(s["a"])(y,{keepEmpty:!0});if(0===C.length)return null;var R=void 0===b&&"horizontal"===h?"center":b,N=r("space",E),P=d()(N,"".concat(N,"-").concat(h),(n={},l()(n,"".concat(N,"-rtl"),"rtl"===u),l()(n,"".concat(N,"-align-").concat(R),R),n),g),z="".concat(N,"-item"),k="rtl"===u?"marginLeft":"marginRight",S=0,q=C.map((function(e,n){return null!==e&&void 0!==e&&(S=n),a["createElement"](m,{className:z,key:"".concat(z,"-").concat(n),direction:h,size:f,index:n,marginDirection:k,split:w},e)}));return a["createElement"]("div",i()({className:P},x),a["createElement"](O.Provider,{value:S},q))},g=b,y=(t("+L6B"),t("2/Rp")),j=t("ODXe"),h=t("qPJ8");n["default"]=()=>{var e=Object(a["useState"])(0),n=Object(j["a"])(e,2),t=n[0],r=n[1],i=Object(h["d"])((()=>{r(t+1)}),{delay:2e3,manual:!0}),c=i.isReady,l=i.run,o=i.cancel;return u.a.createElement("div",null,u.a.createElement("h1",null,JSON.stringify(c())),u.a.createElement(g,{direction:"horizontal"},u.a.createElement(y["a"],{type:"primary",onClick:l},"\u6267\u884c"),u.a.createElement(y["a"],{type:"primary",onClick:o},"\u53d6\u6d88")))}},OPEp:function(e,n,t){},Zm9Q:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("q1tI"),i=t.n(r),c=t("TOwV");function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[];return i.a.Children.forEach(e,(function(e){(void 0!==e&&null!==e||n.keepEmpty)&&(Array.isArray(e)?t=t.concat(l(e)):Object(c["isFragment"])(e)&&e.props?t=t.concat(l(e.props.children,n)):t.push(e))})),t}},qPJ8:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return p})),t.d(n,"d",(function(){return b})),t.d(n,"e",(function(){return j}));var r=t("q1tI");function i(e){Object(r["useEffect"])(e,[])}var c=i;function l(e){c((()=>{e()}))}var a=l,u=(e,n)=>e.every(((t,r)=>Object.is(e[r],n[r])));function o(e,n){var t=Object(r["useRef"])(void 0),i=Object(r["useRef"])(void 0);return i.current&&n&&u(n,i.current)||(t.current=e(),i.current=n),t.current}var d=o;function s(e,n){return d((()=>e),n)}var v=s,f=t("LvDl");function m(e,n){var t,i=Object(r["useRef"])(e);i.current=e;var c,l,a,u,o=null!==(t=null===n||void 0===n?void 0:n.wait)&&void 0!==t?t:1e3;return"debounce"===(null===n||void 0===n?void 0:n.action)?v(Object(f["debounce"])((function(){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return null===(e=i.current)||void 0===e?void 0:e.call(i,...t)}),o,{leading:null!==(c=null===n||void 0===n?void 0:n.leading)&&void 0!==c&&c,trailing:null===(l=null===n||void 0===n?void 0:n.leading)||void 0===l||l}),[i]):"throttle"===(null===n||void 0===n?void 0:n.action)?v(Object(f["throttle"])((function(){return i.current(...arguments)}),o,{leading:null===(a=null===n||void 0===n?void 0:n.leading)||void 0===a||a,trailing:null===(u=null===n||void 0===n?void 0:n.trailing)||void 0===u||u}),[i]):v((function(){return i.current(...arguments)}),[i])}var p=m;function O(e,n){var t=Object(r["useRef"])(!1),i=Object(r["useRef"])(),c=Object(r["useRef"])(e);c.current=e;var l=p((()=>t.current)),a=p((()=>{t.current=!1,i.current&&clearTimeout(i.current),i.current=setTimeout((()=>{t.current=!0,c.current()}),n.delay)})),u=p((()=>{t.current=null,i.current&&clearTimeout(i.current),i.current=null}));return Object(r["useEffect"])((()=>{if(!n.manual)return a(),u}),[n.delay]),{isReady:l,cancel:u,run:a}}var b=O,g=t("ODXe");function y(){var e=Object(r["useState"])(0),n=Object(g["a"])(e,2),t=n[1];return p((()=>t((e=>(e+1)%1e6))))}var j=y}}]);