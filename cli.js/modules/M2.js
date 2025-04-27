
// 模块: M2


function M2(e, t, s) {
  return Ti.queueFor(K.file(e), function () {
    var r = Li(s);
    return new Promise(function (i, n) {
      return U2(e, t, r, function (a) {
        return a ? n(a) : i();
      });
    });
  }, pi);
}

module.exports = {
  M2
};
