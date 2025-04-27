
// 模块: W0


function W0(e) {
  return new Promise(function (t) {
    var s = function s() {
      return t(!0);
    };
    setTimeout(function () {
      process.stdin.removeListener('data', s), t(!1);
    }, e), process.stdin.once('data', s);
  });
}

module.exports = {
  W0
};
