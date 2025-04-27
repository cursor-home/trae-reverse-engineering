
// 模块: ho


function ho(e, t) {
  var s = Object.create(null);
  var _iterator7 = _createForOfIteratorHelper(e),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var r = _step7.value;
      var i = t(r);
      var n = s[i];
      n || (n = s[i] = []), n.push(r);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return s;
}

module.exports = {
  ho
};
