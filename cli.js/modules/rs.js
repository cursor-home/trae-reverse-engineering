
// 模块: rs


function rs(e, t, s, r) {
  if (t === 0) return r(0);
  var i = new z2.Socket();
  i.once('connect', function () {
    return Ii(i), rs(e + s, t - 1, s, r);
  }), i.once('data', function () {}), i.once('error', function (n) {
    return Ii(i), n.code !== 'ECONNREFUSED' ? rs(e + s, t - 1, s, r) : r(e);
  }), i.connect(e, '127.0.0.1');
}

module.exports = {
  rs
};
