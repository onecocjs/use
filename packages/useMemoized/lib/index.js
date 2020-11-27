'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var e = require('react');
exports.default = function(r, i) {
  void 0 === i && (i = []);
  var t = e.useRef({ deps: i, obj: void 0, initialized: !1 }).current;
  return (
    (!1 !== t.initialized &&
      (function(e, r) {
        if (e === r) return !0;
        for (var i = 0; i < r.length; i++) {
          if (e[i] !== r[i]) return !1;
        }
        return !0;
      })(t.deps, i)) ||
      ((t.deps = i), (t.obj = r()), (t.initialized = !0)),
    t.obj
  );
};
//# sourceMappingURL=index.js.map
