export function __asyncDelegator(t) {
  var e, i;
  return (
    (e = {}),
    s('next'),
    s('throw', function (r) {
      throw r;
    }),
    s('return'),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function s(r, n) {
    e[r] = t[r]
      ? function (o) {
          return (i = !i) ? { value: __await(t[r](o)), done: !1 } : n ? n(o) : o;
        }
      : n;
  }
}