
// 模块: X2


function X2(e) {
  try {
    var t = new RegExp('^'.concat(Ui(e), '$'));
    return function (s) {
      return t.lastIndex = 0, typeof s == 'string' && t.test(s) ? e : null;
    };
  } catch (_unused9) {
    return ge;
  }
}

module.exports = {
  X2
};
