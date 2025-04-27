export function __esDecorate(t, e, i, s, r, n) {
  function o(y) {
    if (y !== void 0 && typeof y != 'function') throw new TypeError('Function expected');
    return y;
  }
  for (
    var a = s.kind,
      c = a === 'getter' ? 'get' : a === 'setter' ? 'set' : 'value',
      l = !e && t ? (s.static ? t : t.prototype) : null,
      h = e || (l ? Object.getOwnPropertyDescriptor(l, s.name) : {}),
      d,
      p = !1,
      m = i.length - 1;
    m >= 0;
    m--
  ) {
    var w = {};
    for (var v in s) w[v] = v === 'access' ? {} : s[v];
    for (var v in s.access) w.access[v] = s.access[v];
    w.addInitializer = function (y) {
      if (p) throw new TypeError('Cannot add initializers after decoration has completed');
      n.push(o(y || null));
    };
    var k = (0, i[m])(a === 'accessor' ? { get: h.get, set: h.set } : h[c], w);
    if (a === 'accessor') {
      if (k === void 0) continue;
      if (k === null || typeof k != 'object') throw new TypeError('Object expected');
      (d = o(k.get)) && (h.get = d), (d = o(k.set)) && (h.set = d), (d = o(k.init)) && r.unshift(d);
    } else (d = o(k)) && (a === 'field' ? r.unshift(d) : (h[c] = d));
  }
  l && Object.defineProperty(l, s.name, h), (p = !0);
}