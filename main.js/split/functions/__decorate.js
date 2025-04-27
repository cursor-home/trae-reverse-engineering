export function __decorate(t, e, i, s) {
  var r = arguments.length,
    n = r < 3 ? e : s === null ? (s = Object.getOwnPropertyDescriptor(e, i)) : s,
    o;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
    n = Reflect.decorate(t, e, i, s);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (o = t[a]) && (n = (r < 3 ? o(n) : r > 3 ? o(e, i, n) : o(e, i)) || n);
  return r > 3 && n && Object.defineProperty(e, i, n), n;
}