
// 模块: $1


function $1(e) {
  if (C1.is(e)) {
    var t = [];
    var _iterator26 = _createForOfIteratorHelper(e),
      _step26;
    try {
      for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
        var s = _step26.value;
        if (s) try {
          s.dispose();
        } catch (r) {
          t.push(r);
        }
      }
    } catch (err) {
      _iterator26.e(err);
    } finally {
      _iterator26.f();
    }
    if (t.length === 1) throw t[0];
    if (t.length > 1) throw new AggregateError(t, 'Encountered errors while disposing of store');
    return Array.isArray(e) ? [] : e;
  } else if (e) return e.dispose(), e;
}

module.exports = {
  $1
};
