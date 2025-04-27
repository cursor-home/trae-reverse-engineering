
// 模块: O


function O(m, g) {
  var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (b) {
    return b;
  };
  var b = function b() {
      return M.fire(w.apply(void 0, arguments));
    },
    A = function A() {
      return m.addEventListener(g, b);
    },
    x = function x() {
      return m.removeEventListener(g, b);
    },
    M = new ae({
      onWillAddFirstListener: A,
      onDidRemoveLastListener: x
    });
  return M.event;
}

module.exports = {
  O
};
