
// 模块: N2


function N2(e, t, s) {
  if (!e) return e;
  var r = s.get(e);
  if (r) return r;
  var i;
  return Oi.test(e) ? i = e.normalize(t) : i = e, s.set(e, i), i;
}

module.exports = {
  N2
};
