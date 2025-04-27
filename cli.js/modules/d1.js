
// 模块: d1


function d1(t, s) {
  var _this29 = this;
  _classCallCheck(this, d1);
  this.c = s, this.b = void 0, this.d = new Ve(function () {
    var r = e1.forUris(function () {
      return _this29.c;
    });
    return r.fill(_this29.rawAdded.map(function (i) {
      return [i, !0];
    })), r;
  }), this.f = new Ve(function () {
    var r = e1.forUris(function () {
      return _this29.c;
    });
    return r.fill(_this29.rawUpdated.map(function (i) {
      return [i, !0];
    })), r;
  }), this.g = new Ve(function () {
    var r = e1.forUris(function () {
      return _this29.c;
    });
    return r.fill(_this29.rawDeleted.map(function (i) {
      return [i, !0];
    })), r;
  }), this.rawAdded = [], this.rawUpdated = [], this.rawDeleted = [];
  var _iterator45 = _createForOfIteratorHelper(t),
    _step45;
  try {
    for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
      var r = _step45.value;
      switch (r.type) {
        case 1:
          this.rawAdded.push(r.resource);
          break;
        case 0:
          this.rawUpdated.push(r.resource);
          break;
        case 2:
          this.rawDeleted.push(r.resource);
          break;
      }
      this.b !== d1.a && (typeof r.cId == 'number' ? this.b === void 0 ? this.b = r.cId : this.b !== r.cId && (this.b = d1.a) : this.b !== void 0 && (this.b = d1.a));
    }
  } catch (err) {
    _iterator45.e(err);
  } finally {
    _iterator45.f();
  }
}

module.exports = {
  d1
};
