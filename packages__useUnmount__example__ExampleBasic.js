(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{"0iNw":function(e,t,n){"use strict";n.r(t);n("DYRE");var r=n("zeV3"),i=(n("+L6B"),n("2/Rp")),c=n("ODXe"),a=(n("miYZ"),n("tsqr")),l=n("q1tI"),o=n.n(l),s=n("LT1p");function u(e){Object(s["a"])((()=>e))}var p=u;function m(){return p((()=>{a["b"].warn("children componet unmount")})),o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Children"))}t["default"]=function(){var e=Object(l["useState"])(!0),t=Object(c["a"])(e,2),n=t[0],a=t[1];return o.a.createElement(r["b"],{direction:"vertical"},o.a.createElement(i["a"],{type:"primary",onClick:()=>a(!n)},"\u5207\u6362"),n?o.a.createElement(m,null):null)}},DYRE:function(e,t,n){"use strict";n("cIOH"),n("OPEp")},LT1p:function(e,t,n){"use strict";var r=n("q1tI");function i(e){Object(r["useEffect"])(e,[])}t["a"]=i},OPEp:function(e,t,n){},Zm9Q:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI"),i=n.n(r),c=n("TOwV");function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];return i.a.Children.forEach(e,(function(e){(void 0!==e&&null!==e||t.keepEmpty)&&(Array.isArray(e)?n=n.concat(a(e)):Object(c["isFragment"])(e)&&e.props?n=n.concat(a(e.props.children,t)):n.push(e))})),n}},bXwC:function(e,t,n){},miYZ:function(e,t,n){"use strict";n("cIOH"),n("bXwC")},zeV3:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("pVnL"),i=n.n(r),c=n("lSNA"),a=n.n(c),l=n("q1tI"),o=n("TSYQ"),s=n.n(o),u=n("Zm9Q"),p=n("H84U"),m={small:8,middle:16,large:24};function f(e){var t,n=e.className,r=e.direction,i=e.index,c=e.size,o=e.marginDirection,s=e.children,u=e.split,p=l["useContext"](v);if(null===s||void 0===s)return null;var f=i>=p?{}:a()({},"vertical"===r?"marginBottom":o,(null!==(t="string"===typeof c?m[c]:c)&&void 0!==t?t:0)/(u?2:1));return l["createElement"](l["Fragment"],null,l["createElement"]("div",{className:n,style:f},s),i<p&&u&&l["createElement"]("span",{className:"".concat(n,"-split"),style:f},u))}var d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},v=l["createContext"](0),b=function(e){var t,n=l["useContext"](p["b"]),r=n.getPrefixCls,c=n.space,o=n.direction,m=e.size,b=void 0===m?(null===c||void 0===c?void 0:c.size)||"small":m,O=e.align,g=e.className,E=e.children,y=e.direction,h=void 0===y?"horizontal":y,w=e.prefixCls,C=e.split,j=d(e,["size","align","className","children","direction","prefixCls","split"]),x=Object(u["a"])(E,{keepEmpty:!0});if(0===x.length)return null;var z=void 0===O&&"horizontal"===h?"center":O,N=r("space",w),I=s()(N,"".concat(N,"-").concat(h),(t={},a()(t,"".concat(N,"-rtl"),"rtl"===o),a()(t,"".concat(N,"-align-").concat(z),z),t),g),P="".concat(N,"-item"),k="rtl"===o?"marginLeft":"marginRight",q=0,D=x.map((function(e,t){return null!==e&&void 0!==e&&(q=t),l["createElement"](f,{className:P,key:"".concat(P,"-").concat(t),direction:h,size:b,index:t,marginDirection:k,split:C},e)}));return l["createElement"]("div",i()({className:I},j),l["createElement"](v.Provider,{value:q},D))};t["b"]=b}}]);