'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var r = require('react');
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
***************************************************************************** */ function e() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  var n = Array(r),
    u = 0;
  for (e = 0; e < t; e++)
    for (var l = arguments[e], a = 0, o = l.length; a < o; a++, u++)
      n[u] = l[a];
  return n;
}
exports.default = function(t) {
  var n = r.useRef(t);
  n.current = t;
  var u = r.useRef(null);
  return (
    u.current ||
      (u.current = function() {
        for (var r, t = [], u = 0; u < arguments.length; u++)
          t[u] = arguments[u];
        return null === (r = n.current) || void 0 === r
          ? void 0
          : r.call.apply(r, e([n], t));
      }),
    u.current
  );
};
//# sourceMappingURL=index.js.map
