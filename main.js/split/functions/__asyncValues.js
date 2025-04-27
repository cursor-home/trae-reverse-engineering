export function __asyncValues(t) {
  if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
  var e = t[Symbol.asyncIterator],
    i;
  return e
    ? e.call(t)
    : ((t = typeof __values == 'function' ? __values(t) : t[Symbol.iterator]()),
      (i = {}),
      s('next'),
      s('throw'),
      s('return'),
      (i[Symbol.asyncIterator] = function () {
        return this;
      }),
      i);
  function s(n) {
    i[n] =
      t[n] &&
      function (o) {
        return new Promise(function (a, c) {
          (o = t[n](o)), r(a, c, o.done, o.value);
        });
      };
  }
  function r(n, o, a, c) {
    Promise.resolve(c).then(function (l) {
      n({ value: l, done: a });
    }, o);
  }
}