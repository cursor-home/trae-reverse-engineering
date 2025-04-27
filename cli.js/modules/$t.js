
// 模块: $t


function $t(t, s) {
  _classCallCheck(this, $t);
  if (this[Us] = 'ResourceMap', t instanceof $t) this.d = new Map(t.d), this.e = s !== null && s !== void 0 ? s : $t.c;else if (Eo(t)) {
    this.d = new Map(), this.e = s !== null && s !== void 0 ? s : $t.c;
    var _iterator12 = _createForOfIteratorHelper(t),
      _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
        var _step12$value = _slicedToArray(_step12.value, 2),
          r = _step12$value[0],
          i = _step12$value[1];
        this.set(r, i);
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
  } else this.d = new Map(), this.e = t !== null && t !== void 0 ? t : $t.c;
}

module.exports = {
  $t
};
