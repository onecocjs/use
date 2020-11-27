'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var e = require('react');
function r(e) {
  return e && 'object' == typeof e && 'default' in e ? e : { default: e };
}
var t = r(e),
  n = function() {
    return (n =
      Object.assign ||
      function(e) {
        for (var r, t = 1, n = arguments.length; t < n; t++)
          for (var u in (r = arguments[t]))
            Object.prototype.hasOwnProperty.call(r, u) && (e[u] = r[u]);
        return e;
      }).apply(this, arguments);
  };
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function u(
  e,
) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function o(e, r, t) {
  return (
    e(
      (t = {
        path: r,
        exports: {},
        require: function(e, r) {
          return (function() {
            throw new Error(
              'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
            );
          })(null == r && t.path);
        },
      }),
      t.exports,
    ),
    t.exports
  );
}
var a = u(
    o(function(e, r) {
      Object.defineProperty(r, '__esModule', { value: !0 });
      var n = t.default;
      var u = (function(e) {
        return e && 'object' == typeof e && 'default' in e ? e : { default: e };
      })(n);
      var o,
        a = (function(e) {
          return e &&
            e.__esModule &&
            Object.prototype.hasOwnProperty.call(e, 'default')
            ? e.default
            : e;
        })(
          ((function(e, r) {
            Object.defineProperty(r, '__esModule', { value: !0 });
            var t = u.default;
            /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function n() {
              for (var e = 0, r = 0, t = arguments.length; r < t; r++)
                e += arguments[r].length;
              var n = Array(e),
                u = 0;
              for (r = 0; r < t; r++)
                for (var o = arguments[r], a = 0, i = o.length; a < i; a++, u++)
                  n[u] = o[a];
              return n;
            }
            r.default = function(e) {
              var r = t.useRef(e);
              r.current = e;
              var u = t.useRef(null);
              return (
                u.current ||
                  (u.current = function() {
                    for (var e, t = [], u = 0; u < arguments.length; u++)
                      t[u] = arguments[u];
                    return null === (e = r.current) || void 0 === e
                      ? void 0
                      : e.call.apply(e, n([r], t));
                  }),
                u.current
              );
            };
          })(
            (o = {
              path: undefined,
              exports: {},
              require: function(e, r) {
                return (function() {
                  throw new Error(
                    'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
                  );
                })(null == r && o.path);
              },
            }),
            o.exports,
          ),
          o.exports),
        );
      r.default = function() {
        var e = n.useState(0)[1];
        return a(function() {
          return e(function(e) {
            return (e + 1) % 1e6;
          });
        });
      };
    }),
  ),
  i = u(
    o(function(e, r) {
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.default = function(e, r) {
          void 0 === r && (r = []);
          var n = t.default.useRef({ deps: r, obj: void 0, initialized: !1 })
            .current;
          return (
            (!1 !== n.initialized &&
              (function(e, r) {
                if (e === r) return !0;
                for (var t = 0; t < r.length; t++) if (e[t] !== r[t]) return !1;
                return !0;
              })(n.deps, r)) ||
              ((n.deps = r), (n.obj = e()), (n.initialized = !0)),
            n.obj
          );
        });
    }),
  );
exports.default = function(r) {
  var t = i(function() {
      return r ? new Map(r) : new Map();
    }),
    u = e.useRef(t),
    o = a(),
    c = i(function() {
      return {
        set: function(e, r) {
          return u.current.set(e, r), o(), u.current;
        },
        get: function(e) {
          return u.current.get(e);
        },
        del: function(e) {
          return u.current.delete(e), o(), u.current;
        },
        reset: function() {
          return (u.current = new Map(r)), o(), u.current;
        },
      };
    });
  return n({ mapState: u.current }, c);
};
//# sourceMappingURL=index.js.map
