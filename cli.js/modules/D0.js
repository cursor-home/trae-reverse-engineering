
// 模块: D0


function D0(e, t) {
  var s = [];
  for (var r in e) {
    var i = e[r],
      n = S0(r, i);
    s.push([n, i.description]);
  }
  return bn(s, t);
}

module.exports = {
  D0
};
