
// 模块: mo


function mo(e, t) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length;
  var i = s,
    n = r;
  for (; i < n;) {
    var a = Math.floor((i + n) / 2);
    t(e[a]) ? i = a + 1 : n = a;
  }
  return i - 1;
}

module.exports = {
  mo
};
