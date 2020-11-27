'use strict';
function e(e) {
  return e && 'object' == typeof e && 'default' in e ? e : { default: e };
}
Object.defineProperty(exports, '__esModule', { value: !0 });
var t = e(require('react'));
function r(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var u,
  n,
  o = r(
    ((function(e, r) {
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.default = function(e) {
          t.default.useEffect(e, []);
        });
    })(
      (n = {
        path: u,
        exports: {},
        require: function(e, t) {
          return (function() {
            throw new Error(
              'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
            );
          })(null == t && n.path);
        },
      }),
      n.exports,
    ),
    n.exports),
  );
exports.default = function(e) {
  o(function() {
    return e;
  });
};
//# sourceMappingURL=index.js.map
