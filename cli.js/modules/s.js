
// 模块: S


function S(m, g) {
  var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (b) {
    return b;
  };
  var b = function b() {
      return M.fire(w.apply(void 0, arguments));
    },
    A = function A() {
      return m.on(g, b);
    },
    x = function x() {
      return m.removeListener(g, b);
    },
    M = new ae({
      onWillAddFirstListener: A,
      onDidRemoveLastListener: x
    });
  return M.event;
}

module.exports = {
  S
};
