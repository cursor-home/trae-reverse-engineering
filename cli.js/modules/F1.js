
// 模块: f1


function f1(t, s, r, i, n) {
  var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
  _classCallCheck(this, f1);
  _typeof(t) == 'object' ? (this.scheme = t.scheme || U, this.authority = t.authority || U, this.path = t.path || U, this.query = t.query || U, this.fragment = t.fragment || U) : (this.scheme = l2(t, a), this.authority = s || U, this.path = u2(this.scheme, r || U), this.query = i || U, this.fragment = n || U, c2(this, a));
}

module.exports = {
  f1
};
