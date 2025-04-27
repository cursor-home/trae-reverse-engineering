
// 模块: pt


function pt(e, t) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : t.length;
  for (; s < r && i < n; s++, i++) {
    var c = e.charCodeAt(s),
      l = t.charCodeAt(i);
    if (c === l) continue;
    if (c >= 128 || l >= 128) return j1(e.toLowerCase(), t.toLowerCase(), s, r, i, n);
    Br(c) && (c -= 32), Br(l) && (l -= 32);
    var f = c - l;
    if (f !== 0) return f;
  }
  var a = r - s,
    o = n - i;
  return a < o ? -1 : a > o ? 1 : 0;
}

module.exports = {
  pt
};
