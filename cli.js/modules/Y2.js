
// 模块: Y2


function Y2(e, t) {
  var s = '/'.concat(e),
    r = '\\'.concat(e),
    i = function i(a, o) {
      return typeof a != 'string' ? null : o ? o === e ? t : null : a === e || a.endsWith(s) || a.endsWith(r) ? t : null;
    },
    n = [e];
  return i.basenames = n, i.patterns = [t], i.allBasenames = n, i;
}

module.exports = {
  Y2
};
