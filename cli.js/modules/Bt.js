
// 模块: Bt


function Bt(e, t, s, r) {
  var i = '',
    n = 0,
    a = -1,
    o = 0,
    c = 0;
  for (var l = 0; l <= e.length; ++l) {
    if (l < e.length) c = e.charCodeAt(l);else {
      if (r(c)) break;
      c = H;
    }
    if (r(c)) {
      if (!(a === l - 1 || o === 1)) if (o === 2) {
        if (i.length < 2 || n !== 2 || i.charCodeAt(i.length - 1) !== Se || i.charCodeAt(i.length - 2) !== Se) {
          if (i.length > 2) {
            var f = i.lastIndexOf(s);
            f === -1 ? (i = '', n = 0) : (i = i.slice(0, f), n = i.length - 1 - i.lastIndexOf(s)), a = l, o = 0;
            continue;
          } else if (i.length !== 0) {
            i = '', n = 0, a = l, o = 0;
            continue;
          }
        }
        t && (i += i.length > 0 ? ''.concat(s, '..') : '..', n = 2);
      } else i.length > 0 ? i += ''.concat(s).concat(e.slice(a + 1, l)) : i = e.slice(a + 1, l), n = l - a - 1;
      a = l, o = 0;
    } else c === Se && o !== -1 ? ++o : o = -1;
  }
  return i;
}

module.exports = {
  Bt
};
