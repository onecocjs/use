'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var e = require('react');
exports.default = function(t, r) {
  var u = e.useRef(t);
  (u.current = t),
    e.useEffect(
      function() {
        var e = setTimeout(function() {
          u.current();
        }, r);
        return function() {
          clearTimeout(e);
        };
      },
      [r],
    );
};
//# sourceMappingURL=index.js.map
