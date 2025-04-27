
// 模块: is


function is(e, t) {
  if (!e) return ge;
  var s;
  typeof e != 'string' ? s = e.pattern : s = e, s = s.trim();
  var r = ''.concat(s, '_').concat(!!t.trimForExclusions);
  var i = as.get(r);
  if (i) return Vi(i, e);
  var n;
  return zi.test(s) ? i = Q2(s.substr(4), s) : (n = Hi.exec(ns(s, t))) ? i = Y2(n[1], s) : (t.trimForExclusions ? Ji : Gi).test(s) ? i = Z2(s, t) : (n = Ki.exec(ns(s, t))) ? i = Wi(n[1].substr(1), s, !0) : (n = Qi.exec(ns(s, t))) ? i = Wi(n[1], s, !1) : i = X2(s), as.set(r, i), Vi(i, e);
}

module.exports = {
  is
};
