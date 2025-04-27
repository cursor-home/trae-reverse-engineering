
// 模块: bn


function bn(e, t) {
  var r = e.reduce(function (a, o) {
    return Math.max(a, o[0].length);
  }, 12) + 2 + 1;
  if (t - r < 25) return e.reduce(function (a, o) {
    return a.concat(['  '.concat(o[0]), '      '.concat(o[1])]);
  }, []);
  var i = t - r - 1,
    n = [];
  var _iterator53 = _createForOfIteratorHelper(e),
    _step53;
  try {
    for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
      var a = _step53.value;
      var o = a[0],
        c = P0(a[1], i),
        l = wn(r - o.length - 2);
      n.push('  ' + o + l + c[0]);
      for (var f = 1; f < c.length; f++) n.push(wn(r) + c[f]);
    }
  } catch (err) {
    _iterator53.e(err);
  } finally {
    _iterator53.f();
  }
  return n;
}

module.exports = {
  bn
};
