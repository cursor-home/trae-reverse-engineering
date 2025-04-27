
// 模块: ur


function ur(e, t) {
  var s;
  return t.length === 0 ? s = e : s = e.replace(/\{(\d+)\}/g, function (r, i) {
    var n = i[0],
      a = t[n];
    var o = r;
    return typeof a == 'string' ? o = a : (typeof a == 'number' || typeof a == 'boolean' || a === void 0 || a === null) && (o = String(a)), o;
  }), fr && (s = '\uFF3B' + s.replace(/[aouei]/g, '$&$&') + '\uFF3D'), s;
}

module.exports = {
  ur
};
