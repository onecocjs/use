(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[34,33],{XeJd:function(e,t,n){"use strict";var a=n("q1tI");function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(a["useRef"])({deps:t,obj:void 0,initialized:!1}),l=n.current;return!1!==l.initialized&&r(l.deps,t)||(l.deps=t,l.obj=e(),l.initialized=!0),l.obj}function r(e,t){if(e===t)return!0;for(var n=0;n<t.length;n++){var a=e[n],l=t[n];if(a!==l)return!1}return!0}t["a"]=l},nIGk:function(e,t,n){"use strict";n.r(t);var a=n("wx14"),l=n("q1tI"),r=n.n(l),c=(n("B2uJ"),n("+su7"),n("qOys")),u=n.n(c),m=n("5Yjd"),o=n.n(m),i=r.a.memo((function(){var e=n("TqRt"),t=e(n("q1tI")),a=e(n("wKGB")),l=function(){return t["default"].createElement(a["default"],null)};return t["default"].createElement(l)}));t["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"usethrottlefn"},r.a.createElement("a",{"aria-hidden":"true",href:"#usethrottlefn"},r.a.createElement("span",{className:"icon icon-link"})),"useThrottleFn"),r.a.createElement("p",null,"\u7528\u6765\u5904\u7406\u8282\u6d41\u51fd\u6570\u7684 Hook\u3002"),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u4ee3\u7801\u6f14\u793a"},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u7840\u7528\u6cd5"},r.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),r.a.createElement(o.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport useThrottleFn from '@onecocjs/use.throttlefn';\nimport { Button } from 'antd';\n\nexport default function() {\n  const [count, updateCount] = useState(0);\n  const fn = useThrottleFn(() => {\n    updateCount(count + 1);\n  }, 1000);\n  return (\n    <>\n      <h1>{count}</h1>\n      <Button type=\"primary\" onClick={fn}>\n        \u70b9\u51fb\n      </Button>\n    </>\n  );\n}\n",jsx:"import React, { useState } from 'react';\nimport useThrottleFn from '@onecocjs/use.throttlefn';\nimport { Button } from 'antd';\nexport default function () {\n  const [count, updateCount] = useState(0);\n  const fn = useThrottleFn(() => {\n    updateCount(count + 1);\n  }, 1000);\n  return (\n    <>\n      <h1>{count}</h1>\n      <Button type=\"primary\" onClick={fn}>\n        \u70b9\u51fb\n      </Button>\n    </>\n  );\n}\n"}},{path:"/_demos/example-basic-6",CSSInDependencies:["antd/dist/antd.css"],dependencies:{react:">=16.9.0","react-dom":">=16.9.0",antd:"4.8.5","@onecocjs/use.throttlefn":"0.0.0"},files:{}}),r.a.createElement(i,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement("a",{"aria-hidden":"true",href:"#api"},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement("h3",{id:"\u7b7e\u540d"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7b7e\u540d"},r.a.createElement("span",{className:"icon icon-link"})),"\u7b7e\u540d"),r.a.createElement(u.a,{code:"interface ThrottleFunc<T extends (...args: any[]) => any> {\n  (...args: Parameters<T>): ReturnType<T> | undefined;\n  cancel(): void;\n  flush(): ReturnType<T> | undefined;\n}\n\ninterface UseThrottleOptions {\n  /** \u6307\u5b9a\u8c03\u7528\u5728\u8282\u6d41\u5f00\u59cb\u524d */\n  leading?: boolean;\n  /** \u6307\u5b9a\u8c03\u7528\u5728\u8282\u6d41\u7ed3\u675f\u540e */\n  trailing?: boolean;\n}\n\nuseThrottleFn<T extends (...args: any) => any>(\n  fn: T,\n  wait: number,\n  options?: UseThrottleOptions,\n):ThrottleFunc<T>\n",lang:"typescript"}),r.a.createElement("h3",{id:"\u53c2\u6570"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u53c2\u6570"},r.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u5fc5\u8981"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"fn"),r.a.createElement("td",null,"\u9700\u8981\u8282\u6d41\u7684\u51fd\u6570"),r.a.createElement("td",null,"(...args: any) => any"),r.a.createElement("td",null,"true"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"wait"),r.a.createElement("td",null,"\u9700\u8981\u8282\u6d41\u7684\u6beb\u79d2"),r.a.createElement("td",null,"number"),r.a.createElement("td",null,"true"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"options"),r.a.createElement("td",null,"\u5176\u4ed6\u914d\u7f6e\u9879"),r.a.createElement("td",null,r.a.createElement("code",null,"Options")),r.a.createElement("td",null,"false"),r.a.createElement("td",null,"-")))),r.a.createElement("h3",{id:"options"},r.a.createElement("a",{"aria-hidden":"true",href:"#options"},r.a.createElement("span",{className:"icon icon-link"})),"Options"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u5fc5\u8981"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"leading"),r.a.createElement("td",null,"\u6307\u5b9a\u8c03\u7528\u5728\u8282\u6d41\u5f00\u59cb\u524d"),r.a.createElement("td",null,"boolean"),r.a.createElement("td",null,"false"),r.a.createElement("td",null,"true")),r.a.createElement("tr",null,r.a.createElement("td",null,"trailing"),r.a.createElement("td",null,"\u6307\u5b9a\u8c03\u7528\u5728\u8282\u6d41\u7ed3\u675f\u540e"),r.a.createElement("td",null,"boolean"),r.a.createElement("td",null,"false"),r.a.createElement("td",null,"true")))),r.a.createElement("h3",{id:"\u7ed3\u679c"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7ed3\u679c"},r.a.createElement("span",{className:"icon icon-link"})),"\u7ed3\u679c"),r.a.createElement("p",null,"\u4e00\u4e2a\u7ecf\u8fc7",r.a.createElement("code",null,"\u8282\u6d41\u5904\u7406"),"\u7684\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u7684\u539f\u578b\u94fe\u4e0a\u4f1a\u6302\u8f7d\u5176\u4ed6\u7684\u8f85\u52a9\u51fd\u6570\u3002"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u5fc5\u8981"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"cancel"),r.a.createElement("td",null,"\u53d6\u6d88\u51fd\u6570\u7684\u6267\u884c"),r.a.createElement("td",null,"() => void"),r.a.createElement("td",null,"true"),r.a.createElement("td",null,"-")),r.a.createElement("tr",null,r.a.createElement("td",null,"flush"),r.a.createElement("td",null,"\u4e0d\u7b49\u5f85\uff0c\u7acb\u5373\u6267\u884c"),r.a.createElement("td",null,"() => void"),r.a.createElement("td",null,"true"),r.a.createElement("td",null,"-"))))))}},wKGB:function(e,t,n){"use strict";n.r(t);n("+L6B");var a=n("2/Rp"),l=n("ODXe"),r=n("q1tI"),c=n.n(r),u=n("LvDl"),m=n("XeJd");function o(e,t,n){var a=Object(r["useRef"])(e);return a.current=e,Object(m["a"])((()=>Object(u["throttle"])((function(){return a.current(...arguments)}),t,n)),[])}var i=o;t["default"]=function(){var e=Object(r["useState"])(0),t=Object(l["a"])(e,2),n=t[0],u=t[1],m=i((()=>{u(n+1)}),1e3);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,n),c.a.createElement(a["a"],{type:"primary",onClick:m},"\u70b9\u51fb"))}}}]);