
// 模块: ys


function ys(e) {
  var t = [];
  typeof e == 'number' && t.push('code/timeOrigin', e);
  function s(i, n) {
    var _n$startTime;
    t.push(i, (_n$startTime = n === null || n === void 0 ? void 0 : n.startTime) !== null && _n$startTime !== void 0 ? _n$startTime : Date.now());
  }
  function r() {
    var i = [];
    for (var n = 0; n < t.length; n += 2) i.push({
      name: t[n],
      startTime: t[n + 1]
    });
    return i;
  }
  return {
    mark: s,
    getMarks: r
  };
}

module.exports = {
  ys
};
