
// 模块: P0


function P0(e, t) {
  var s = [];
  for (; e.length;) {
    var r = e.length < t ? e.length : e.lastIndexOf(' ', t),
      i = e.slice(0, r).trim();
    e = e.slice(r), s.push(i);
  }
  return s;
}

module.exports = {
  P0
};
