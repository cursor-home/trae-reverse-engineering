export function __addDisposableResource(t, e, i) {
  if (e != null) {
    if (typeof e != 'object' && typeof e != 'function') throw new TypeError('Object expected.');
    var s, r;
    if (i) {
      if (!Symbol.asyncDispose) throw new TypeError('Symbol.asyncDispose is not defined.');
      s = e[Symbol.asyncDispose];
    }
    if (s === void 0) {
      if (!Symbol.dispose) throw new TypeError('Symbol.dispose is not defined.');
      (s = e[Symbol.dispose]), i && (r = s);
    }
    if (typeof s != 'function') throw new TypeError('Object not disposable.');
    r &&
      (s = function () {
        try {
          r.call(this);
        } catch (n) {
          return Promise.reject(n);
        }
      }),
      t.stack.push({ value: e, dispose: s, async: i });
  } else i && t.stack.push({ async: !0 });
  return e;
}