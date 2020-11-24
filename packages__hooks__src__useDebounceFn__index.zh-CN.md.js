(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11,7,8,9,10],{CcKe:function(e,n,t){"use strict";t.r(n);var a=t("wx14"),r=t("q1tI"),c=t.n(r),l=(t("B2uJ"),t("+su7"),t("qOys")),u=t.n(l),o=t("5Yjd"),i=t.n(o),s=c.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("ZCet")),r=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(r)})),m=c.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("Mh9+")),r=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(r)})),d=c.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("kHlh")),r=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(r)})),p=c.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("Sby9")),r=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(r)}));n["default"]=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"usedebouncefn"},c.a.createElement("a",{"aria-hidden":"true",href:"#usedebouncefn"},c.a.createElement("span",{className:"icon icon-link"})),"useDebounceFn"),c.a.createElement("p",null,"\u7528\u6765\u5904\u7406\u9632\u6296\u51fd\u6570\u7684 Hook\u3002"),c.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u4ee3\u7801\u6f14\u793a"},c.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),c.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u7840\u7528\u6cd5"},c.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),c.a.createElement(i.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport { useDebounceFn } from '@onecocjs/use';\nimport { Button } from 'antd';\n\nexport default function() {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(() => {\n    updateCount(count + 1);\n  }, 1000);\n  return (\n    <>\n      <h1>{count}</h1>\n      <Button type=\"primary\" onClick={fn}>\n        \u70b9\u51fb\n      </Button>\n    </>\n  );\n}\n",jsx:"import React, { useState } from 'react';\nimport { useDebounceFn } from '@onecocjs/use';\nimport { Button } from 'antd';\nexport default function () {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(() => {\n    updateCount(count + 1);\n  }, 1000);\n  return (\n    <>\n      <h1>{count}</h1>\n      <Button type=\"primary\" onClick={fn}>\n        \u70b9\u51fb\n      </Button>\n    </>\n  );\n}\n"}},{path:"/_demos/example-basic",title:"Default usage",desc:'<div class="markdown"><p>Default as a switch function, or accept a parameter to change state.</p></div>',"title.zh-CN":"\u57fa\u7840\u7528\u6cd5","desc.zh-CN":'<div class="markdown"><p>\u57fa\u7840\u7684\u9632\u6296\u52a8\u6548\u679c</p></div>',CSSInDependencies:["antd/dist/antd.css"],dependencies:{react:">=16.9.0","react-dom":">=16.9.0",antd:"4.8.4","@onecocjs/use":"0.0.0"},files:{}}),c.a.createElement(s,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("h3",{id:"\u53d6\u6d88\u51fd\u6570"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u53d6\u6d88\u51fd\u6570"},c.a.createElement("span",{className:"icon icon-link"})),"\u53d6\u6d88\u51fd\u6570")),c.a.createElement(i.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport { useDebounceFn } from '@onecocjs/use';\nimport { Button, Space } from 'antd';\n\nexport default function() {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(() => {\n    updateCount(count + 1);\n  }, 1000);\n  return (\n    <>\n      <h1>{count}</h1>\n      <p>\u70b9\u51fb\u6267\u884c\u4e4b\u540e\u4e00\u79d2\u5185\u53ef\u4ee5\u53d6\u6d88</p>\n      <Space>\n        <Button type=\"primary\" onClick={fn}>\n          \u70b9\u51fb\u6267\u884c\n        </Button>\n        <Button type=\"primary\" onClick={fn.cancel}>\n          \u70b9\u51fb\u53d6\u6d88\n        </Button>\n      </Space>\n    </>\n  );\n}\n",jsx:"import React, { useState } from 'react';\nimport { useDebounceFn } from '@onecocjs/use';\nimport { Button, Space } from 'antd';\nexport default function () {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(() => {\n    updateCount(count + 1);\n  }, 1000);\n  return (\n    <>\n      <h1>{count}</h1>\n      <p>\u70b9\u51fb\u6267\u884c\u4e4b\u540e\u4e00\u79d2\u5185\u53ef\u4ee5\u53d6\u6d88</p>\n      <Space>\n        <Button type=\"primary\" onClick={fn}>\n          \u70b9\u51fb\u6267\u884c\n        </Button>\n        <Button type=\"primary\" onClick={fn.cancel}>\n          \u70b9\u51fb\u53d6\u6d88\n        </Button>\n      </Space>\n    </>\n  );\n}\n"}},{path:"/_demos/example-cancel",title:"Default usage",desc:'<div class="markdown"><p>Default as a switch function, or accept a parameter to change state.</p></div>',"title.zh-CN":"\u53d6\u6d88\u9632\u6296\u51fd\u6570\u7684\u6267\u884c","desc.zh-CN":'<div class="markdown"><p>\u624b\u52a8\u8c03\u7528 cancel \u7684\u51fd\u6570\u7528\u4ee5\u53d6\u6d88\u9632\u6296\u51fd\u6570\u7684\u6267\u884c</p></div>',CSSInDependencies:["antd/dist/antd.css"],dependencies:{react:">=16.9.0","react-dom":">=16.9.0",antd:"4.8.4","@onecocjs/use":"0.0.0"},files:{}}),c.a.createElement(m,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("h3",{id:"\u7acb\u5373\u6267\u884c"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u7acb\u5373\u6267\u884c"},c.a.createElement("span",{className:"icon icon-link"})),"\u7acb\u5373\u6267\u884c")),c.a.createElement(i.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport { useDebounceFn } from '@onecocjs/use';\nimport { Button, Space } from 'antd';\n\nexport default function() {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(() => {\n    updateCount(count + 1);\n  }, 1000);\n  return (\n    <>\n      <h1>{count}</h1>\n      <Space>\n        <Button\n          type=\"primary\"\n          onClick={() => {\n            fn();\n            fn.flush();\n          }}\n        >\n          \u70b9\u51fb\u7acb\u5373\u6267\u884c\n        </Button>\n      </Space>\n    </>\n  );\n}\n",jsx:"import React, { useState } from 'react';\nimport { useDebounceFn } from '@onecocjs/use';\nimport { Button, Space } from 'antd';\nexport default function () {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(() => {\n    updateCount(count + 1);\n  }, 1000);\n  return (\n    <>\n      <h1>{count}</h1>\n      <Space>\n        <Button\n          type=\"primary\"\n          onClick={() => {\n            fn();\n            fn.flush();\n          }}\n        >\n          \u70b9\u51fb\u7acb\u5373\u6267\u884c\n        </Button>\n      </Space>\n    </>\n  );\n}\n"}},{path:"/_demos/example-flush",title:"Default usage",desc:'<div class="markdown"><p>Default as a switch function, or accept a parameter to change state.</p></div>',"title.zh-CN":"\u53d6\u6d88\u9632\u6296\u51fd\u6570\u7684\u6267\u884c","desc.zh-CN":'<div class="markdown"><p>\u624b\u52a8\u8c03\u7528 cancel \u7684\u51fd\u6570\u7528\u4ee5\u53d6\u6d88\u9632\u6296\u51fd\u6570\u7684\u6267\u884c</p></div>',CSSInDependencies:["antd/dist/antd.css"],dependencies:{react:">=16.9.0","react-dom":">=16.9.0",antd:"4.8.4","@onecocjs/use":"0.0.0"},files:{}}),c.a.createElement(d,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("h3",{id:"\u6307\u5b9a\u5728\u5ef6\u8fdf\u5f00\u59cb\u524d\u8c03\u7528"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u6307\u5b9a\u5728\u5ef6\u8fdf\u5f00\u59cb\u524d\u8c03\u7528"},c.a.createElement("span",{className:"icon icon-link"})),"\u6307\u5b9a\u5728\u5ef6\u8fdf\u5f00\u59cb\u524d\u8c03\u7528")),c.a.createElement(i.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport { useDebounceFn } from '@onecocjs/use';\nimport { Button, Space } from 'antd';\n\nexport default function() {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(\n    () => {\n      updateCount(count + 1);\n    },\n    1000,\n    {\n      leading: true,\n    },\n  );\n  return (\n    <>\n      <h1>{count}</h1>\n      <Space>\n        <Button\n          type=\"primary\"\n          onClick={() => {\n            fn();\n          }}\n        >\n          \u70b9\u51fb\u6267\u884c\n        </Button>\n      </Space>\n    </>\n  );\n}\n",jsx:"import React, { useState } from 'react';\nimport { useDebounceFn } from '@onecocjs/use';\nimport { Button, Space } from 'antd';\nexport default function () {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(\n    () => {\n      updateCount(count + 1);\n    },\n    1000,\n    {\n      leading: true,\n    },\n  );\n  return (\n    <>\n      <h1>{count}</h1>\n      <Space>\n        <Button\n          type=\"primary\"\n          onClick={() => {\n            fn();\n          }}\n        >\n          \u70b9\u51fb\u6267\u884c\n        </Button>\n      </Space>\n    </>\n  );\n}\n"}},{path:"/_demos/example-leading",title:"Default usage",desc:'<div class="markdown"><p>Default as a switch function, or accept a parameter to change state.</p></div>',"title.zh-CN":"leading","desc.zh-CN":'<div class="markdown"><p>\u901a\u8fc7\u914d\u7f6e leading \u4f7f\u5f97 \u51fd\u6570\u5728 \u6307\u5b9a\u5728\u5ef6\u8fdf\u5f00\u59cb\u524d\u8c03\u7528\u3002</p></div>',CSSInDependencies:["antd/dist/antd.css"],dependencies:{react:">=16.9.0","react-dom":">=16.9.0",antd:"4.8.4","@onecocjs/use":"0.0.0"},files:{}}),c.a.createElement(p,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("h2",{id:"api"},c.a.createElement("a",{"aria-hidden":"true",href:"#api"},c.a.createElement("span",{className:"icon icon-link"})),"API"),c.a.createElement("h3",{id:"\u7b7e\u540d"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u7b7e\u540d"},c.a.createElement("span",{className:"icon icon-link"})),"\u7b7e\u540d"),c.a.createElement(u.a,{code:"interface DebouncedFunc<T extends (...args: any[]) => any> {\n  (...args: Parameters<T>): ReturnType<T> | undefined;\n  cancel(): void;\n  flush(): ReturnType<T> | undefined;\n}\n\ninterface UseDebounceFnOptions {\n  /** \u6307\u5b9a\u5728\u5ef6\u8fdf\u5f00\u59cb\u524d\u8c03\u7528\u3002 */\n  leading?: boolean;\n  /** \u6307\u5b9a\u5728\u5ef6\u8fdf\u7ed3\u675f\u540e\u8c03\u7528\u3002 */\n  trailing?: boolean;\n}\n\nuseDebounceFn<T extends (...args: any) => any>(fn: () => void,wait:number,options?: UseDebounceFnOptions):DebouncedFunc<T>;\n",lang:"typescript"}),c.a.createElement("h3",{id:"\u53c2\u6570"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u53c2\u6570"},c.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"\u53c2\u6570"),c.a.createElement("th",null,"\u8bf4\u660e"),c.a.createElement("th",null,"\u7c7b\u578b"),c.a.createElement("th",null,"\u5fc5\u8981"),c.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"fn"),c.a.createElement("td",null,"\u9700\u8981\u9632\u6296\u7684\u51fd\u6570"),c.a.createElement("td",null,"(...args: any) => any"),c.a.createElement("td",null,"true"),c.a.createElement("td",null,"-")),c.a.createElement("tr",null,c.a.createElement("td",null,"wait"),c.a.createElement("td",null,"\u9700\u8981\u5ef6\u8fdf\u7684\u6beb\u79d2\u6570"),c.a.createElement("td",null,"number"),c.a.createElement("td",null,"true"),c.a.createElement("td",null,"-")),c.a.createElement("tr",null,c.a.createElement("td",null,"options"),c.a.createElement("td",null,"\u5176\u4ed6\u914d\u7f6e\u9879"),c.a.createElement("td",null,c.a.createElement("code",null,"Options")),c.a.createElement("td",null,"false"),c.a.createElement("td",null,"-")))),c.a.createElement("h3",{id:"options"},c.a.createElement("a",{"aria-hidden":"true",href:"#options"},c.a.createElement("span",{className:"icon icon-link"})),"Options"),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"\u53c2\u6570"),c.a.createElement("th",null,"\u8bf4\u660e"),c.a.createElement("th",null,"\u7c7b\u578b"),c.a.createElement("th",null,"\u5fc5\u8981"),c.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"leading"),c.a.createElement("td",null,"\u6307\u5b9a\u5728\u5ef6\u8fdf\u5f00\u59cb\u524d\u8c03\u7528"),c.a.createElement("td",null,"boolean"),c.a.createElement("td",null,"false"),c.a.createElement("td",null,"false")),c.a.createElement("tr",null,c.a.createElement("td",null,"trailing"),c.a.createElement("td",null,"\u6307\u5b9a\u5728\u5ef6\u8fdf\u7ed3\u675f\u540e\u8c03\u7528"),c.a.createElement("td",null,"boolean"),c.a.createElement("td",null,"false"),c.a.createElement("td",null,"true")))),c.a.createElement("h3",{id:"\u7ed3\u679c"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u7ed3\u679c"},c.a.createElement("span",{className:"icon icon-link"})),"\u7ed3\u679c"),c.a.createElement("p",null,"\u4e00\u4e2a\u7ecf\u8fc7",c.a.createElement("code",null,"\u9632\u6296\u5904\u7406"),"\u7684\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u7684\u539f\u578b\u94fe\u4e0a\u4f1a\u6302\u8f7d\u5176\u4ed6\u7684\u8f85\u52a9\u51fd\u6570\u3002"),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"\u53c2\u6570"),c.a.createElement("th",null,"\u8bf4\u660e"),c.a.createElement("th",null,"\u7c7b\u578b"),c.a.createElement("th",null,"\u5fc5\u8981"),c.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"cancel"),c.a.createElement("td",null,"\u53d6\u6d88\u51fd\u6570\u7684\u6267\u884c"),c.a.createElement("td",null,"() => void"),c.a.createElement("td",null,"true"),c.a.createElement("td",null,"-")),c.a.createElement("tr",null,c.a.createElement("td",null,"flush"),c.a.createElement("td",null,"\u4e0d\u7b49\u5f85\uff0c\u7acb\u5373\u6267\u884c"),c.a.createElement("td",null,"() => void"),c.a.createElement("td",null,"true"),c.a.createElement("td",null,"-")))),c.a.createElement(u.a,{code:"",lang:"unknown"})))}},DYRE:function(e,n,t){"use strict";t("cIOH"),t("OPEp")},"Mh9+":function(e,n,t){"use strict";t.r(n);t("DYRE");var a=t("zeV3"),r=(t("+L6B"),t("2/Rp")),c=t("ODXe"),l=t("q1tI"),u=t.n(l),o=t("qPJ8");n["default"]=function(){var e=Object(l["useState"])(0),n=Object(c["a"])(e,2),t=n[0],i=n[1],s=Object(o["a"])((()=>{i(t+1)}),1e3);return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,t),u.a.createElement("p",null,"\u70b9\u51fb\u6267\u884c\u4e4b\u540e\u4e00\u79d2\u5185\u53ef\u4ee5\u53d6\u6d88"),u.a.createElement(a["b"],null,u.a.createElement(r["a"],{type:"primary",onClick:s},"\u70b9\u51fb\u6267\u884c"),u.a.createElement(r["a"],{type:"primary",onClick:s.cancel},"\u70b9\u51fb\u53d6\u6d88")))}},OPEp:function(e,n,t){},STjU:function(e,n,t){"use strict";var a=t("q1tI");function r(e,n,t){var r=Object(a["useRef"])(e);r.current=e,Object(a["useEffect"])((()=>{(null===t||void 0===t?void 0:t.immediate)&&r.current();var e=setInterval((()=>{r.current()}),n);return()=>clearInterval(e)}),[n])}n["a"]=r},Sby9:function(e,n,t){"use strict";t.r(n);t("DYRE");var a=t("zeV3"),r=(t("+L6B"),t("2/Rp")),c=t("ODXe"),l=t("q1tI"),u=t.n(l),o=t("qPJ8");n["default"]=function(){var e=Object(l["useState"])(0),n=Object(c["a"])(e,2),t=n[0],i=n[1],s=Object(o["a"])((()=>{i(t+1)}),1e3,{leading:!0});return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,t),u.a.createElement(a["b"],null,u.a.createElement(r["a"],{type:"primary",onClick:()=>{s()}},"\u70b9\u51fb\u6267\u884c")))}},ZCet:function(e,n,t){"use strict";t.r(n);t("+L6B");var a=t("2/Rp"),r=t("ODXe"),c=t("q1tI"),l=t.n(c),u=t("qPJ8");n["default"]=function(){var e=Object(c["useState"])(0),n=Object(r["a"])(e,2),t=n[0],o=n[1],i=Object(u["a"])((()=>{o(t+1)}),1e3);return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,t),l.a.createElement(a["a"],{type:"primary",onClick:i},"\u70b9\u51fb"))}},Zm9Q:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("q1tI"),r=t.n(a),c=t("TOwV");function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[];return r.a.Children.forEach(e,(function(e){(void 0!==e&&null!==e||n.keepEmpty)&&(Array.isArray(e)?t=t.concat(l(e)):Object(c["isFragment"])(e)&&e.props?t=t.concat(l(e.props.children,n)):t.push(e))})),t}},kHlh:function(e,n,t){"use strict";t.r(n);t("DYRE");var a=t("zeV3"),r=(t("+L6B"),t("2/Rp")),c=t("ODXe"),l=t("q1tI"),u=t.n(l),o=t("qPJ8");n["default"]=function(){var e=Object(l["useState"])(0),n=Object(c["a"])(e,2),t=n[0],i=n[1],s=Object(o["a"])((()=>{i(t+1)}),1e3);return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,t),u.a.createElement(a["b"],null,u.a.createElement(r["a"],{type:"primary",onClick:()=>{s(),s.flush()}},"\u70b9\u51fb\u7acb\u5373\u6267\u884c")))}},qPJ8:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"d",(function(){return u})),t.d(n,"g",(function(){return m})),t.d(n,"e",(function(){return i})),t.d(n,"f",(function(){return p})),t.d(n,"c",(function(){return h})),t.d(n,"a",(function(){return C}));var a=t("q1tI");function r(e){Object(a["useEffect"])(e,[])}var c=r;t("STjU");function l(e){c((()=>{e()}))}var u=l;function o(e){var n=Object(a["useRef"])(e);n.current=e;var t=Object(a["useRef"])(null);return t.current||(t.current=function(){for(var e,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return null===(e=n.current)||void 0===e?void 0:e.call(n,...a)}),t.current}var i=o;function s(e){c((()=>e))}var m=s;function d(e,n){var t=Object(a["useRef"])(e);t.current=e,Object(a["useEffect"])((()=>{var e=setTimeout((()=>{t.current()}),n);return()=>{clearTimeout(e)}}),[n])}var p=d,f=t("ODXe");function E(){var e=Object(a["useState"])(0),n=Object(f["a"])(e,2),t=n[1];return i((()=>t((e=>(e+1)%1e6))))}var h=E,v=t("LvDl");function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=Object(a["useRef"])({deps:n,obj:void 0,initialized:!1}),r=t.current;return!1!==r.initialized&&y(r.deps,n)||(r.deps=n,r.obj=e(),r.initialized=!0),r.obj}function y(e,n){if(e===n)return!0;for(var t=0;t<n.length;t++){var a=e[t],r=n[t];if(a!==r)return!1}return!0}var j=b;function S(e,n,t){var r=Object(a["useRef"])(e);return r.current=e,j((()=>Object(v["debounce"])((function(){return r.current(...arguments)}),n,t)),[])}var C=S},zeV3:function(e,n,t){"use strict";t.d(n,"a",(function(){return E}));var a=t("pVnL"),r=t.n(a),c=t("lSNA"),l=t.n(c),u=t("q1tI"),o=t("TSYQ"),i=t.n(o),s=t("Zm9Q"),m=t("H84U"),d={small:8,middle:16,large:24};function p(e){var n,t=e.className,a=e.direction,r=e.index,c=e.size,o=e.marginDirection,i=e.children,s=e.split,m=u["useContext"](E);if(null===i||void 0===i)return null;var p=r>=m?{}:l()({},"vertical"===a?"marginBottom":o,(null!==(n="string"===typeof c?d[c]:c)&&void 0!==n?n:0)/(s?2:1));return u["createElement"](u["Fragment"],null,u["createElement"]("div",{className:t,style:p},i),r<m&&s&&u["createElement"]("span",{className:"".concat(t,"-split"),style:p},s))}var f=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t},E=u["createContext"](0),h=function(e){var n,t=u["useContext"](m["b"]),a=t.getPrefixCls,c=t.space,o=t.direction,d=e.size,h=void 0===d?(null===c||void 0===c?void 0:c.size)||"small":d,v=e.align,b=e.className,y=e.children,j=e.direction,S=void 0===j?"horizontal":j,C=e.prefixCls,O=e.split,g=f(e,["size","align","className","children","direction","prefixCls","split"]),k=Object(s["a"])(y,{keepEmpty:!0});if(0===k.length)return null;var D=void 0===v&&"horizontal"===S?"center":v,B=a("space",C),x=i()(B,"".concat(B,"-").concat(S),(n={},l()(n,"".concat(B,"-rtl"),"rtl"===o),l()(n,"".concat(B,"-align-").concat(D),D),n),b),w="".concat(B,"-item"),N="rtl"===o?"marginLeft":"marginRight",F=0,R=k.map((function(e,n){return null!==e&&void 0!==e&&(F=n),u["createElement"](p,{className:w,key:"".concat(w,"-").concat(n),direction:S,size:h,index:n,marginDirection:N,split:O},e)}));return u["createElement"]("div",r()({className:x},g),u["createElement"](E.Provider,{value:F},R))};n["b"]=h}}]);