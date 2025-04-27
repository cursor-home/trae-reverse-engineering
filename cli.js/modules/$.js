
// 模块: $


function $(m) {
  var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
  var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var b = arguments.length > 3 ? arguments[3] : undefined;
  var A = w.slice(),
    x = m(function (Q) {
      A ? A.push(Q) : G.fire(Q);
    });
  b && b.add(x);
  var M = function M() {
      var _A;
      (_A = A) !== null && _A !== void 0 && _A.forEach(function (Q) {
        return G.fire(Q);
      }), A = null;
    },
    G = new ae({
      onWillAddFirstListener: function onWillAddFirstListener() {
        x || (x = m(function (Q) {
          return G.fire(Q);
        }), b && b.add(x));
      },
      onDidAddFirstListener: function onDidAddFirstListener() {
        A && (g ? setTimeout(M) : M());
      },
      onDidRemoveLastListener: function onDidRemoveLastListener() {
        x && x.dispose(), x = null;
      }
    });
  return b && b.add(G), G.event;
}

module.exports = {
  $
};
