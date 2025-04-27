
// 模块: V


function V(m, g, w) {
  return g(w), m(function (b) {
    return g(b);
  });
}

module.exports = {
  V
};
