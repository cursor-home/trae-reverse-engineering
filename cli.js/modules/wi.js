
// 模块: Wi


function Wi(e, t, s) {
  var r = ce === T.sep,
    i = r ? e : e.replace(Bi, ce),
    n = ce + i,
    a = T.sep + e;
  var o;
  return s ? o = function o(c, l) {
    return typeof c == 'string' && (c === i || c.endsWith(n) || !r && (c === e || c.endsWith(a))) ? t : null;
  } : o = function o(c, l) {
    return typeof c == 'string' && (c === i || !r && c === e) ? t : null;
  }, o.allPaths = [(s ? '*/' : './') + e], o;
}

module.exports = {
  Wi
};
