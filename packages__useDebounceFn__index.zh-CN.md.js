(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15,11,12,13,14],{"/kP8":function(e,n,t){"use strict";t.r(n);t("DYRE");var a=t("zeV3"),c=(t("+L6B"),t("2/Rp")),l=t("ODXe"),r=t("q1tI"),u=t.n(r),o=t("SKFc");n["default"]=function(){var e=Object(r["useState"])(0),n=Object(l["a"])(e,2),t=n[0],i=n[1],s=Object(o["a"])((()=>{i(t+1)}),1e3);return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,t),u.a.createElement("p",null,"\u70b9\u51fb\u6267\u884c\u4e4b\u540e\u4e00\u79d2\u5185\u53ef\u4ee5\u53d6\u6d88"),u.a.createElement(a["b"],null,u.a.createElement(c["a"],{type:"primary",onClick:s},"\u70b9\u51fb\u6267\u884c"),u.a.createElement(c["a"],{type:"primary",onClick:s.cancel},"\u70b9\u51fb\u53d6\u6d88")))}},"9xSN":function(e,n,t){"use strict";t.r(n);var a=t("wx14"),c=t("q1tI"),l=t.n(c),r=(t("B2uJ"),t("+su7"),t("qOys")),u=t.n(r),o=t("5Yjd"),i=t.n(o),s=l.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("BXu/")),c=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(c)})),m=l.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("/kP8")),c=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(c)})),d=l.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("THpZ")),c=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(c)})),p=l.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("irsJ")),c=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(c)}));n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"usedebouncefn"},l.a.createElement("a",{"aria-hidden":"true",href:"#usedebouncefn"},l.a.createElement("span",{className:"icon icon-link"})),"useDebounceFn"),l.a.createElement("p",null,"\u7528\u6765\u5904\u7406\u9632\u6296\u51fd\u6570\u7684 Hook\u3002"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u4ee3\u7801\u6f14\u793a"},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u7840\u7528\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),l.a.createElement(i.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport useDebounceFn from '@onecocjs/use.debouncefn';\nimport { Button } from 'antd';\n\nexport default function() {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(() => {\n    updateCount(count + 1);\n  }, 1000);\n  return (\n    <>\n      <h1>{count}</h1>\n      <Button type=\"primary\" onClick={fn}>\n        \u70b9\u51fb\n      </Button>\n    </>\n  );\n}\n",jsx:"import React, { useState } from 'react';\nimport useDebounceFn from '@onecocjs/use.debouncefn';\nimport { Button } from 'antd';\nexport default function () {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(() => {\n    updateCount(count + 1);\n  }, 1000);\n  return (\n    <>\n      <h1>{count}</h1>\n      <Button type=\"primary\" onClick={fn}>\n        \u70b9\u51fb\n      </Button>\n    </>\n  );\n}\n"}},{path:"/_demos/example-basic-1",title:"Default usage",desc:'<div class="markdown"><p>Default as a switch function, or accept a parameter to change state.</p></div>',"title.zh-CN":"\u57fa\u7840\u7528\u6cd5","desc.zh-CN":'<div class="markdown"><p>\u57fa\u7840\u7684\u9632\u6296\u52a8\u6548\u679c</p></div>',CSSInDependencies:["antd/dist/antd.css"],dependencies:{react:">=16.9.0","react-dom":">=16.9.0",antd:"4.8.5","@onecocjs/use.debouncefn":"0.0.0"},files:{}}),l.a.createElement(s,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u53d6\u6d88\u51fd\u6570"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u53d6\u6d88\u51fd\u6570"},l.a.createElement("span",{className:"icon icon-link"})),"\u53d6\u6d88\u51fd\u6570")),l.a.createElement(i.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport useDebounceFn from '@onecocjs/use.debouncefn';\nimport { Button, Space } from 'antd';\n\nexport default function() {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(() => {\n    updateCount(count + 1);\n  }, 1000);\n  return (\n    <>\n      <h1>{count}</h1>\n      <p>\u70b9\u51fb\u6267\u884c\u4e4b\u540e\u4e00\u79d2\u5185\u53ef\u4ee5\u53d6\u6d88</p>\n      <Space>\n        <Button type=\"primary\" onClick={fn}>\n          \u70b9\u51fb\u6267\u884c\n        </Button>\n        <Button type=\"primary\" onClick={fn.cancel}>\n          \u70b9\u51fb\u53d6\u6d88\n        </Button>\n      </Space>\n    </>\n  );\n}\n",jsx:"import React, { useState } from 'react';\nimport useDebounceFn from '@onecocjs/use.debouncefn';\nimport { Button, Space } from 'antd';\nexport default function () {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(() => {\n    updateCount(count + 1);\n  }, 1000);\n  return (\n    <>\n      <h1>{count}</h1>\n      <p>\u70b9\u51fb\u6267\u884c\u4e4b\u540e\u4e00\u79d2\u5185\u53ef\u4ee5\u53d6\u6d88</p>\n      <Space>\n        <Button type=\"primary\" onClick={fn}>\n          \u70b9\u51fb\u6267\u884c\n        </Button>\n        <Button type=\"primary\" onClick={fn.cancel}>\n          \u70b9\u51fb\u53d6\u6d88\n        </Button>\n      </Space>\n    </>\n  );\n}\n"}},{path:"/_demos/example-cancel",title:"Default usage",desc:'<div class="markdown"><p>Default as a switch function, or accept a parameter to change state.</p></div>',"title.zh-CN":"\u53d6\u6d88\u9632\u6296\u51fd\u6570\u7684\u6267\u884c","desc.zh-CN":'<div class="markdown"><p>\u624b\u52a8\u8c03\u7528 cancel \u7684\u51fd\u6570\u7528\u4ee5\u53d6\u6d88\u9632\u6296\u51fd\u6570\u7684\u6267\u884c</p></div>',CSSInDependencies:["antd/dist/antd.css"],dependencies:{react:">=16.9.0","react-dom":">=16.9.0",antd:"4.8.5","@onecocjs/use.debouncefn":"0.0.0"},files:{}}),l.a.createElement(m,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u7acb\u5373\u6267\u884c"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7acb\u5373\u6267\u884c"},l.a.createElement("span",{className:"icon icon-link"})),"\u7acb\u5373\u6267\u884c")),l.a.createElement(i.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport useDebounceFn from '@onecocjs/use.debouncefn';\nimport { Button, Space } from 'antd';\n\nexport default function() {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(() => {\n    updateCount(count + 1);\n  }, 1000);\n  return (\n    <>\n      <h1>{count}</h1>\n      <Space>\n        <Button\n          type=\"primary\"\n          onClick={() => {\n            fn();\n            fn.flush();\n          }}\n        >\n          \u70b9\u51fb\u7acb\u5373\u6267\u884c\n        </Button>\n      </Space>\n    </>\n  );\n}\n",jsx:"import React, { useState } from 'react';\nimport useDebounceFn from '@onecocjs/use.debouncefn';\nimport { Button, Space } from 'antd';\nexport default function () {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(() => {\n    updateCount(count + 1);\n  }, 1000);\n  return (\n    <>\n      <h1>{count}</h1>\n      <Space>\n        <Button\n          type=\"primary\"\n          onClick={() => {\n            fn();\n            fn.flush();\n          }}\n        >\n          \u70b9\u51fb\u7acb\u5373\u6267\u884c\n        </Button>\n      </Space>\n    </>\n  );\n}\n"}},{path:"/_demos/example-flush",title:"Default usage",desc:'<div class="markdown"><p>Default as a switch function, or accept a parameter to change state.</p></div>',"title.zh-CN":"\u53d6\u6d88\u9632\u6296\u51fd\u6570\u7684\u6267\u884c","desc.zh-CN":'<div class="markdown"><p>\u624b\u52a8\u8c03\u7528 cancel \u7684\u51fd\u6570\u7528\u4ee5\u53d6\u6d88\u9632\u6296\u51fd\u6570\u7684\u6267\u884c</p></div>',CSSInDependencies:["antd/dist/antd.css"],dependencies:{react:">=16.9.0","react-dom":">=16.9.0",antd:"4.8.5","@onecocjs/use.debouncefn":"0.0.0"},files:{}}),l.a.createElement(d,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u6307\u5b9a\u5728\u5ef6\u8fdf\u5f00\u59cb\u524d\u8c03\u7528"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6307\u5b9a\u5728\u5ef6\u8fdf\u5f00\u59cb\u524d\u8c03\u7528"},l.a.createElement("span",{className:"icon icon-link"})),"\u6307\u5b9a\u5728\u5ef6\u8fdf\u5f00\u59cb\u524d\u8c03\u7528")),l.a.createElement(i.a,Object(a["a"])({source:{tsx:"import React, { useState } from 'react';\nimport useDebounceFn from '@onecocjs/use.debouncefn';\nimport { Button, Space } from 'antd';\n\nexport default function() {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(\n    () => {\n      updateCount(count + 1);\n    },\n    1000,\n    {\n      leading: true,\n    },\n  );\n  return (\n    <>\n      <h1>{count}</h1>\n      <Space>\n        <Button\n          type=\"primary\"\n          onClick={() => {\n            fn();\n          }}\n        >\n          \u70b9\u51fb\u6267\u884c\n        </Button>\n      </Space>\n    </>\n  );\n}\n",jsx:"import React, { useState } from 'react';\nimport useDebounceFn from '@onecocjs/use.debouncefn';\nimport { Button, Space } from 'antd';\nexport default function () {\n  const [count, updateCount] = useState(0);\n  const fn = useDebounceFn(\n    () => {\n      updateCount(count + 1);\n    },\n    1000,\n    {\n      leading: true,\n    },\n  );\n  return (\n    <>\n      <h1>{count}</h1>\n      <Space>\n        <Button\n          type=\"primary\"\n          onClick={() => {\n            fn();\n          }}\n        >\n          \u70b9\u51fb\u6267\u884c\n        </Button>\n      </Space>\n    </>\n  );\n}\n"}},{path:"/_demos/example-leading",title:"Default usage",desc:'<div class="markdown"><p>Default as a switch function, or accept a parameter to change state.</p></div>',"title.zh-CN":"leading","desc.zh-CN":'<div class="markdown"><p>\u901a\u8fc7\u914d\u7f6e leading \u4f7f\u5f97 \u51fd\u6570\u5728 \u6307\u5b9a\u5728\u5ef6\u8fdf\u5f00\u59cb\u524d\u8c03\u7528\u3002</p></div>',CSSInDependencies:["antd/dist/antd.css"],dependencies:{react:">=16.9.0","react-dom":">=16.9.0",antd:"4.8.5","@onecocjs/use.debouncefn":"0.0.0"},files:{}}),l.a.createElement(p,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement("a",{"aria-hidden":"true",href:"#api"},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("h3",{id:"\u7b7e\u540d"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7b7e\u540d"},l.a.createElement("span",{className:"icon icon-link"})),"\u7b7e\u540d"),l.a.createElement(u.a,{code:"interface DebouncedFunc<T extends (...args: any[]) => any> {\n  (...args: Parameters<T>): ReturnType<T> | undefined;\n  cancel(): void;\n  flush(): ReturnType<T> | undefined;\n}\n\ninterface UseDebounceFnOptions {\n  /** \u6307\u5b9a\u5728\u5ef6\u8fdf\u5f00\u59cb\u524d\u8c03\u7528\u3002 */\n  leading?: boolean;\n  /** \u6307\u5b9a\u5728\u5ef6\u8fdf\u7ed3\u675f\u540e\u8c03\u7528\u3002 */\n  trailing?: boolean;\n}\n\nuseDebounceFn<T extends (...args: any) => any>(fn: () => void,wait:number,options?: UseDebounceFnOptions):DebouncedFunc<T>;\n",lang:"typescript"}),l.a.createElement("h3",{id:"\u53c2\u6570"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u53c2\u6570"},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u5fc5\u8981"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"fn"),l.a.createElement("td",null,"\u9700\u8981\u9632\u6296\u7684\u51fd\u6570"),l.a.createElement("td",null,"(...args: any) => any"),l.a.createElement("td",null,"true"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"wait"),l.a.createElement("td",null,"\u9700\u8981\u5ef6\u8fdf\u7684\u6beb\u79d2\u6570"),l.a.createElement("td",null,"number"),l.a.createElement("td",null,"true"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"options"),l.a.createElement("td",null,"\u5176\u4ed6\u914d\u7f6e\u9879"),l.a.createElement("td",null,l.a.createElement("code",null,"Options")),l.a.createElement("td",null,"false"),l.a.createElement("td",null,"-")))),l.a.createElement("h3",{id:"options"},l.a.createElement("a",{"aria-hidden":"true",href:"#options"},l.a.createElement("span",{className:"icon icon-link"})),"Options"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u5fc5\u8981"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"leading"),l.a.createElement("td",null,"\u6307\u5b9a\u5728\u5ef6\u8fdf\u5f00\u59cb\u524d\u8c03\u7528"),l.a.createElement("td",null,"boolean"),l.a.createElement("td",null,"false"),l.a.createElement("td",null,"false")),l.a.createElement("tr",null,l.a.createElement("td",null,"trailing"),l.a.createElement("td",null,"\u6307\u5b9a\u5728\u5ef6\u8fdf\u7ed3\u675f\u540e\u8c03\u7528"),l.a.createElement("td",null,"boolean"),l.a.createElement("td",null,"false"),l.a.createElement("td",null,"true")))),l.a.createElement("h3",{id:"\u7ed3\u679c"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7ed3\u679c"},l.a.createElement("span",{className:"icon icon-link"})),"\u7ed3\u679c"),l.a.createElement("p",null,"\u4e00\u4e2a\u7ecf\u8fc7",l.a.createElement("code",null,"\u9632\u6296\u5904\u7406"),"\u7684\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u7684\u539f\u578b\u94fe\u4e0a\u4f1a\u6302\u8f7d\u5176\u4ed6\u7684\u8f85\u52a9\u51fd\u6570\u3002"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u5fc5\u8981"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"cancel"),l.a.createElement("td",null,"\u53d6\u6d88\u51fd\u6570\u7684\u6267\u884c"),l.a.createElement("td",null,"() => void"),l.a.createElement("td",null,"true"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"flush"),l.a.createElement("td",null,"\u4e0d\u7b49\u5f85\uff0c\u7acb\u5373\u6267\u884c"),l.a.createElement("td",null,"() => void"),l.a.createElement("td",null,"true"),l.a.createElement("td",null,"-")))),l.a.createElement(u.a,{code:"",lang:"unknown"})))}},"BXu/":function(e,n,t){"use strict";t.r(n);t("+L6B");var a=t("2/Rp"),c=t("ODXe"),l=t("q1tI"),r=t.n(l),u=t("SKFc");n["default"]=function(){var e=Object(l["useState"])(0),n=Object(c["a"])(e,2),t=n[0],o=n[1],i=Object(u["a"])((()=>{o(t+1)}),1e3);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,t),r.a.createElement(a["a"],{type:"primary",onClick:i},"\u70b9\u51fb"))}},DYRE:function(e,n,t){"use strict";t("cIOH"),t("OPEp")},OPEp:function(e,n,t){},SKFc:function(e,n,t){"use strict";var a=t("q1tI"),c=t("LvDl"),l=t("XeJd");function r(e,n,t){var r=Object(a["useRef"])(e);return r.current=e,Object(l["a"])((()=>Object(c["debounce"])((function(){return r.current(...arguments)}),n,t)),[])}n["a"]=r},THpZ:function(e,n,t){"use strict";t.r(n);t("DYRE");var a=t("zeV3"),c=(t("+L6B"),t("2/Rp")),l=t("ODXe"),r=t("q1tI"),u=t.n(r),o=t("SKFc");n["default"]=function(){var e=Object(r["useState"])(0),n=Object(l["a"])(e,2),t=n[0],i=n[1],s=Object(o["a"])((()=>{i(t+1)}),1e3);return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,t),u.a.createElement(a["b"],null,u.a.createElement(c["a"],{type:"primary",onClick:()=>{s(),s.flush()}},"\u70b9\u51fb\u7acb\u5373\u6267\u884c")))}},XeJd:function(e,n,t){"use strict";var a=t("q1tI");function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=Object(a["useRef"])({deps:n,obj:void 0,initialized:!1}),c=t.current;return!1!==c.initialized&&l(c.deps,n)||(c.deps=n,c.obj=e(),c.initialized=!0),c.obj}function l(e,n){if(e===n)return!0;for(var t=0;t<n.length;t++){var a=e[t],c=n[t];if(a!==c)return!1}return!0}n["a"]=c},Zm9Q:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),c=t.n(a),l=t("TOwV");function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[];return c.a.Children.forEach(e,(function(e){(void 0!==e&&null!==e||n.keepEmpty)&&(Array.isArray(e)?t=t.concat(r(e)):Object(l["isFragment"])(e)&&e.props?t=t.concat(r(e.props.children,n)):t.push(e))})),t}},irsJ:function(e,n,t){"use strict";t.r(n);t("DYRE");var a=t("zeV3"),c=(t("+L6B"),t("2/Rp")),l=t("ODXe"),r=t("q1tI"),u=t.n(r),o=t("SKFc");n["default"]=function(){var e=Object(r["useState"])(0),n=Object(l["a"])(e,2),t=n[0],i=n[1],s=Object(o["a"])((()=>{i(t+1)}),1e3,{leading:!0});return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,t),u.a.createElement(a["b"],null,u.a.createElement(c["a"],{type:"primary",onClick:()=>{s()}},"\u70b9\u51fb\u6267\u884c")))}},zeV3:function(e,n,t){"use strict";t.d(n,"a",(function(){return E}));var a=t("pVnL"),c=t.n(a),l=t("lSNA"),r=t.n(l),u=t("q1tI"),o=t("TSYQ"),i=t.n(o),s=t("Zm9Q"),m=t("H84U"),d={small:8,middle:16,large:24};function p(e){var n,t=e.className,a=e.direction,c=e.index,l=e.size,o=e.marginDirection,i=e.children,s=e.split,m=u["useContext"](E);if(null===i||void 0===i)return null;var p=c>=m?{}:r()({},"vertical"===a?"marginBottom":o,(null!==(n="string"===typeof l?d[l]:l)&&void 0!==n?n:0)/(s?2:1));return u["createElement"](u["Fragment"],null,u["createElement"]("div",{className:t,style:p},i),c<m&&s&&u["createElement"]("span",{className:"".concat(t,"-split"),style:p},s))}var f=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)n.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(t[a[c]]=e[a[c]])}return t},E=u["createContext"](0),h=function(e){var n,t=u["useContext"](m["b"]),a=t.getPrefixCls,l=t.space,o=t.direction,d=e.size,h=void 0===d?(null===l||void 0===l?void 0:l.size)||"small":d,b=e.align,v=e.className,y=e.children,S=e.direction,g=void 0===S?"horizontal":S,C=e.prefixCls,k=e.split,j=f(e,["size","align","className","children","direction","prefixCls","split"]),D=Object(s["a"])(y,{keepEmpty:!0});if(0===D.length)return null;var O=void 0===b&&"horizontal"===g?"center":b,B=a("space",C),x=i()(B,"".concat(B,"-").concat(g),(n={},r()(n,"".concat(B,"-rtl"),"rtl"===o),r()(n,"".concat(B,"-align-").concat(O),O),n),v),F="".concat(B,"-item"),N="rtl"===o?"marginLeft":"marginRight",w=0,R=D.map((function(e,n){return null!==e&&void 0!==e&&(w=n),u["createElement"](p,{className:F,key:"".concat(F,"-").concat(n),direction:g,size:h,index:n,marginDirection:N,split:k},e)}));return u["createElement"]("div",c()({className:x},j),u["createElement"](E.Provider,{value:w},R))};n["b"]=h}}]);