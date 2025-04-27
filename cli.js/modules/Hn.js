
// 模块: Hn


function Hn(t, s) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (Hn.f++).toString(16).padStart(3, '0');
  _classCallCheck(this, Hn);
  this.j = t, this.threshold = s, this.name = r, this.h = 0;
}

module.exports = {
  Hn
};
