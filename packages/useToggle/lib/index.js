'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var r = require('react');
function e(r) {
  return r && 'object' == typeof r && 'default' in r ? r : { default: r };
}
var t = e(r);
function n(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default')
    ? r.default
    : r;
}
var u,
  o,
  a = n(
    ((function(r, e) {
      Object.defineProperty(e, '__esModule', { value: !0 });
      var n = t.default;
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
***************************************************************************** */ function u() {
        for (var r = 0, e = 0, t = arguments.length; e < t; e++)
          r += arguments[e].length;
        var n = Array(r),
          u = 0;
        for (e = 0; e < t; e++)
          for (var o = arguments[e], a = 0, l = o.length; a < l; a++, u++)
            n[u] = o[a];
        return n;
      }
      e.default = function(r) {
        var e = n.useRef(r);
        e.current = r;
        var t = n.useRef(null);
        return (
          t.current ||
            (t.current = function() {
              for (var r, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return null === (r = e.current) || void 0 === r
                ? void 0
                : r.call.apply(r, u([e], t));
            }),
          t.current
        );
      };
    })(
      (o = {
        path: u,
        exports: {},
        require: function(r, e) {
          return (function() {
            throw new Error(
              'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
            );
          })(null == e && o.path);
        },
      }),
      o.exports,
    ),
    o.exports),
  );
exports.default = function(e, t) {
  var n = r.useState(e),
    u = n[0],
    o = n[1],
    l = a(function(r) {
      o(void 0 === r ? (u === e ? t : e) : r);
    });
  return { state: u, toggle: l };
};
//# sourceMappingURL=index.js.map
