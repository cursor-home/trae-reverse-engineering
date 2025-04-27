
// 模块: On


function On(e) {
  if (process.platform !== 'win32') return;
  var t = ta();
  if (t) if (typeof e == 'string') t.add(e.toLowerCase());else {
    var _iterator55 = _createForOfIteratorHelper(sa(e)),
      _step55;
    try {
      for (_iterator55.s(); !(_step55 = _iterator55.n()).done;) {
        var s = _step55.value;
        On(s);
      }
    } catch (err) {
      _iterator55.e(err);
    } finally {
      _iterator55.f();
    }
  }
}

module.exports = {
  On
};
