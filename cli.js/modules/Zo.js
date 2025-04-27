
// 模块: Zo


function Zo(e, t) {
  if (!e || !t) return e;
  var s = t.length,
    r = e.length;
  if (s === 0 || r === 0) return e;
  var i = r,
    n = -1;
  for (; n = e.lastIndexOf(t, i - 1), !(n === -1 || n + s !== i);) {
    if (n === 0) return '';
    i = n;
  }
  return e.substring(0, i);
}

module.exports = {
  Zo
};
