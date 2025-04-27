
// 模块: Yo


function Yo(e, t) {
  if (!e || !t) return e;
  var s = t.length;
  if (s === 0 || e.length === 0) return e;
  var r = 0;
  for (; e.indexOf(t, r) === r;) r = r + s;
  return e.substring(r);
}

module.exports = {
  Yo
};
