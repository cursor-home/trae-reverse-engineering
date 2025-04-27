
// 模块: ke


function ke(m) {
  return function (g, w, b) {
    var A = 0,
      x = !1;
    var M = {
      beginUpdate: function beginUpdate() {
        A++;
      },
      endUpdate: function endUpdate() {
        A--, A === 0 && (m.reportChanges(), x && (x = !1, g.call(w)));
      },
      handlePossibleChange: function handlePossibleChange() {},
      handleChange: function handleChange() {
        x = !0;
      }
    };
    m.addObserver(M), m.reportChanges();
    var G = {
      dispose: function dispose() {
        m.removeObserver(M);
      }
    };
    return b instanceof Ie ? b.add(G) : Array.isArray(b) && b.push(G), G;
  };
}

module.exports = {
  ke
};
