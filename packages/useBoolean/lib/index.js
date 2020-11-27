'use strict';
function e(e) {
  return e && 'object' == typeof e && 'default' in e ? e : { default: e };
}
Object.defineProperty(exports, '__esModule', { value: !0 });
var r = e(require('react'));
function t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var n,
  u,
  o = t(
    ((function(e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n,
        u = r.default,
        o = (function(e) {
          return e && 'object' == typeof e && 'default' in e
            ? e
            : { default: e };
        })(u),
        l = (function(e) {
          return e &&
            e.__esModule &&
            Object.prototype.hasOwnProperty.call(e, 'default')
            ? e.default
            : e;
        })(
          ((function(e, r) {
            Object.defineProperty(r, '__esModule', { value: !0 });
            var t = o.default;
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
                for (var o = arguments[r], l = 0, a = o.length; l < a; l++, u++)
                  n[u] = o[l];
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
            (n = {
              path: void 0,
              exports: {},
              require: function(e, r) {
                return (function() {
                  throw new Error(
                    'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
                  );
                })(null == r && n.path);
              },
            }),
            n.exports,
          ),
          n.exports),
        );
      t.default = function(e, r) {
        var t = u.useState(e),
          n = t[0],
          o = t[1],
          a = l(function(t) {
            o(void 0 === t ? (n === e ? r : e) : t);
          });
        return { state: n, toggle: a };
      };
    })(
      (u = {
        path: n,
        exports: {},
        require: function(e, r) {
          return (function() {
            throw new Error(
              'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
            );
          })(null == r && u.path);
        },
      }),
      u.exports,
    ),
    u.exports),
  );
exports.default = function() {
  return o(!1, !0);
};
//# sourceMappingURL=index.js.map
