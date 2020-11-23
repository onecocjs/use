(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10,9],{CRv6:function(e,n,t){"use strict";t.r(n);t("+L6B");var a=t("2/Rp"),u=(t("miYZ"),t("tsqr")),r=t("ODXe"),c=t("q1tI"),l=t.n(c),o=t("qPJ8");function i(){var e=Object(c["useState"])(0),n=Object(r["a"])(e,2),t=n[0],i=n[1];return Object(o["b"])((()=>{u["b"].success("running effect once on mount")})),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"hello world"),l.a.createElement("p",null,"\u8ba1\u6570\uff1a",t),l.a.createElement(a["a"],{onClick:()=>i(t+1)},"\u9012\u589e"))}n["default"]=()=>{var e=Object(c["useState"])(!0),n=Object(r["a"])(e,2),t=n[0],u=n[1];return l.a.createElement("div",null,l.a.createElement(a["a"],{type:"primary",onClick:()=>u(!t)},t?"\u9690\u85cf\u5b50\u7ec4\u4ef6":"\u663e\u793a\u5b50\u7ec4\u4ef6"),t?l.a.createElement(i,null):null)}},PqRc:function(e,n,t){"use strict";t.r(n);var a=t("wx14"),u=t("q1tI"),r=t.n(u),c=(t("B2uJ"),t("+su7"),t("qOys")),l=t.n(c),o=t("5Yjd"),i=t.n(o),d=r.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("CRv6")),u=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(u)}));n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"usemount"},r.a.createElement("a",{"aria-hidden":"true",href:"#usemount"},r.a.createElement("span",{className:"icon icon-link"})),"useMount"),r.a.createElement("p",null,"\u53ea\u5728\u7ec4\u4ef6 mount \u65f6\u6267\u884c"),r.a.createElement("blockquote",null,r.a.createElement("p",null,"\u6ce8\u610f\uff0c\u4e0e",r.a.createElement("code",null,"useEffectOnce"),"\u7684\u533a\u522b\u662f\uff1a\u5728 ",r.a.createElement("code",null,"useMount")," \u7684\u5165\u53c2\u51fd\u6570\u4e2d\uff0c\u5982\u679c\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\u7684\u8bdd\uff0c\u5e76\u4e0d\u4f1a\u5728\u51fd\u6570\u5378\u8f7d\u7684\u65f6\u5019\u53bb\u6267\u884c")),r.a.createElement("h1",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u4ee3\u7801\u6f14\u793a"},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h2",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u7840\u7528\u6cd5"},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(i.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport { Button, message } from 'antd';\nimport { useMount } from '@onecocjs/use';\n\nfunction Children() {\n  const [count, updateCount] = useState(0);\n\n  useMount(() => {\n    message.success('running effect once on mount');\n  });\n\n  return (\n    <>\n      <h1>hello world</h1>\n      <p>\u8ba1\u6570\uff1a{count}</p>\n      <Button onClick={() => updateCount(count + 1)}>\u9012\u589e</Button>\n    </>\n  );\n}\n\nexport default () => {\n  const [value, updateValue] = useState(true);\n\n  return (\n    <div>\n      <Button type=\"primary\" onClick={() => updateValue(!value)}>\n        {value ? '\u9690\u85cf\u5b50\u7ec4\u4ef6' : '\u663e\u793a\u5b50\u7ec4\u4ef6'}\n      </Button>\n      {value ? <Children /> : null}\n    </div>\n  );\n};\n",jsx:"import React, { useState } from 'react';\nimport { Button, message } from 'antd';\nimport { useMount } from '@onecocjs/use';\n\nfunction Children() {\n  const [count, updateCount] = useState(0);\n  useMount(() => {\n    message.success('running effect once on mount');\n  });\n  return (\n    <>\n      <h1>hello world</h1>\n      <p>\u8ba1\u6570\uff1a{count}</p>\n      <Button onClick={() => updateCount(count + 1)}>\u9012\u589e</Button>\n    </>\n  );\n}\n\nexport default () => {\n  const [value, updateValue] = useState(true);\n  return (\n    <div>\n      <Button type=\"primary\" onClick={() => updateValue(!value)}>\n        {value ? '\u9690\u85cf\u5b50\u7ec4\u4ef6' : '\u663e\u793a\u5b50\u7ec4\u4ef6'}\n      </Button>\n      {value ? <Children /> : null}\n    </div>\n  );\n};\n"}},{path:"/_demos/example01-1",title:"Default usage",desc:'<div class="markdown"><p>Default as a switch function, or accept a parameter to change state.</p></div>',"title.zh-CN":"\u57fa\u7840\u7528\u6cd5","desc.zh-CN":'<div class="markdown"><p>\u53ea\u5728\u7ec4\u4ef6 mount \u65f6\u6267\u884c</p></div>',CSSInDependencies:["antd/dist/antd.css"],dependencies:{react:">=16.9.0","react-dom":">=16.9.0",antd:"4.8.5","@onecocjs/use":"0.0.0"},files:{}}),r.a.createElement(d,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u51fd\u6570\u7b7e\u540d"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u51fd\u6570\u7b7e\u540d"},r.a.createElement("span",{className:"icon icon-link"})),"\u51fd\u6570\u7b7e\u540d"),r.a.createElement(l.a,{code:"useMount(fn: () => void);\n",lang:"ts"})))}},qPJ8:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return p})),t.d(n,"d",(function(){return h})),t.d(n,"e",(function(){return O}));var a=t("q1tI");function u(e){Object(a["useEffect"])(e,[])}var r=u;function c(e){r((()=>{e()}))}var l=c,o=(e,n)=>e.every(((t,a)=>Object.is(e[a],n[a])));function i(e,n){var t=Object(a["useRef"])(void 0),u=Object(a["useRef"])(void 0);return u.current&&n&&o(n,u.current)||(t.current=e(),u.current=n),t.current}var d=i;function s(e,n){return d((()=>e),n)}var m=s,v=t("LvDl");function f(e,n){var t,u=Object(a["useRef"])(e);u.current=e;var r,c,l,o,i=null!==(t=null===n||void 0===n?void 0:n.wait)&&void 0!==t?t:1e3;return"debounce"===(null===n||void 0===n?void 0:n.action)?m(Object(v["debounce"])((function(){for(var e,n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];return null===(e=u.current)||void 0===e?void 0:e.call(u,...t)}),i,{leading:null!==(r=null===n||void 0===n?void 0:n.leading)&&void 0!==r&&r,trailing:null===(c=null===n||void 0===n?void 0:n.leading)||void 0===c||c}),[u]):"throttle"===(null===n||void 0===n?void 0:n.action)?m(Object(v["throttle"])((function(){return u.current(...arguments)}),i,{leading:null===(l=null===n||void 0===n?void 0:n.leading)||void 0===l||l,trailing:null===(o=null===n||void 0===n?void 0:n.trailing)||void 0===o||o}),[u]):m((function(){return u.current(...arguments)}),[u])}var p=f;function E(e,n){var t=Object(a["useRef"])(!1),u=Object(a["useRef"])(),r=Object(a["useRef"])(e);r.current=e;var c=p((()=>t.current)),l=p((()=>{t.current=!1,u.current&&clearTimeout(u.current),u.current=setTimeout((()=>{t.current=!0,r.current()}),n.delay)})),o=p((()=>{t.current=null,u.current&&clearTimeout(u.current),u.current=null}));return Object(a["useEffect"])((()=>{if(!n.manual)return l(),o}),[n.delay]),{isReady:c,cancel:o,run:l}}var h=E,b=t("ODXe");function j(){var e=Object(a["useState"])(0),n=Object(b["a"])(e,2),t=n[1];return p((()=>t((e=>(e+1)%1e6))))}var O=j}}]);