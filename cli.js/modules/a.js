
// 模块: a


function a(m, g, w) {
  return u(function (b) {
    var A = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var x = arguments.length > 2 ? arguments[2] : undefined;
    return m(function (M) {
      g(M), b.call(A, M);
    }, null, x);
  }, w);
}

module.exports = {
  a
};
