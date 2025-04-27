
// 模块: y


function y(m) {
  var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (b, A) {
    return b === A;
  };
  var w = arguments.length > 2 ? arguments[2] : undefined;
  var b = !0,
    A;
  return o(m, function (x) {
    var M = b || !g(x, A);
    return b = !1, A = x, M;
  }, w);
}

module.exports = {
  y
};
