
// 模块: u


function u(m, g) {
  var w;
  var b = {
    onWillAddFirstListener: function onWillAddFirstListener() {
      w = m(A.fire, A);
    },
    onDidRemoveLastListener: function onDidRemoveLastListener() {
      var _w;
      (_w = w) === null || _w === void 0 || _w.dispose();
    }
  };
  g || t(b);
  var A = new ae(b);
  return g !== null && g !== void 0 && g.add(A), A.event;
}

module.exports = {
  u
};
