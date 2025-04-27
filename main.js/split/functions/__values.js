export function __values(t) {
  var e = typeof Symbol == 'function' && Symbol.iterator,
    i = e && t[e],
    s = 0;
  if (i) return i.call(t);
  if (t && typeof t.length == 'number')
    return {
      next: function () {
        return t && s >= t.length && (t = void 0), { value: t && t[s++], done: !t };
      },
    };
  throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
}