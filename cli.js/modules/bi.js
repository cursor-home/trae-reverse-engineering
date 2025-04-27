
// 模块: bi


function bi(e, t) {
  return t ? new Promise(function (s, r) {
    var i = setTimeout(function () {
        n.dispose(), s();
      }, e),
      n = t.onCancellationRequested(function () {
        clearTimeout(i), n.dispose(), r(new st());
      });
  }) : P2(function (s) {
    return bi(e, s);
  });
}

module.exports = {
  bi
};
