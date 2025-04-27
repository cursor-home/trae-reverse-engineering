
// 模块: Qr


function Qr(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : T.sep;
  if (!e) return '';
  var s = e.length,
    r = e.charCodeAt(0);
  if (De(r)) {
    if (De(e.charCodeAt(1)) && !De(e.charCodeAt(2))) {
      var n = 3;
      var a = n;
      for (; n < s && !De(e.charCodeAt(n)); n++);
      if (a !== n && !De(e.charCodeAt(n + 1))) {
        for (n += 1; n < s; n++) if (De(e.charCodeAt(n))) return e.slice(0, n + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (Zr(r) && e.charCodeAt(1) === 58) return De(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  var i = e.indexOf('://');
  if (i !== -1) {
    for (i += 3; i < s; i++) if (De(e.charCodeAt(i))) return e.slice(0, i + 1);
  }
  return '';
}

module.exports = {
  Qr
};
