export function __asyncGenerator(t, e, i) {
  if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
  var s = i.apply(t, e || []),
    r,
    n = [];
  return (
    (r = {}),
    a('next'),
    a('throw'),
    a('return', o),
    (r[Symbol.asyncIterator] = function () {
      return this;
    }),
    r
  );
  function o(m) {
    return function (w) {
      return Promise.resolve(w).then(m, d);
    };
  }
  function a(m, w) {
    s[m] &&
      ((r[m] = function (v) {
        return new Promise(function (k, y) {
          n.push([m, v, k, y]) > 1 || c(m, v);
        });
      }),
      w && (r[m] = w(r[m])));
  }
  function c(m, w) {
    try {
      l(s[m](w));
    } catch (v) {
      p(n[0][3], v);
    }
  }
  function l(m) {
    m.value instanceof __await ? Promise.resolve(m.value.v).then(h, d) : p(n[0][2], m);
  }
  function h(m) {
    c('next', m);
  }
  function d(m) {
    c('throw', m);
  }
  function p(m, w) {
    m(w), n.shift(), n.length && c(n[0][0], n[0][1]);
  }
}