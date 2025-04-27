
// 模块: Mi


function Mi(e, t) {
  if (!e) return [];
  var s = [];
  var r = !1,
    i = !1,
    n = '';
  var _iterator38 = _createForOfIteratorHelper(e),
    _step38;
  try {
    for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
      var a = _step38.value;
      switch (a) {
        case t:
          if (!r && !i) {
            s.push(n), n = '';
            continue;
          }
          break;
        case '{':
          r = !0;
          break;
        case '}':
          r = !1;
          break;
        case '[':
          i = !0;
          break;
        case ']':
          i = !1;
          break;
      }
      n += a;
    }
  } catch (err) {
    _iterator38.e(err);
  } finally {
    _iterator38.f();
  }
  return n && s.push(n), s;
}

module.exports = {
  Mi
};
