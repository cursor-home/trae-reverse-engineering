
// 模块: gt


function gt(e, t, s) {
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ce;
  if (e === t) return !0;
  if (!e || !t || t.length > e.length) return !1;
  if (s) {
    if (!Hr(e, t)) return !1;
    if (t.length === e.length) return !0;
    var n = t.length;
    return t.charAt(t.length - 1) === r && n--, e.charAt(n) === r;
  }
  return t.charAt(t.length - 1) !== r && (t += r), e.indexOf(t) === 0;
}

module.exports = {
  gt
};
