
// 模块: e0


function e0(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) return cs;
  if (typeof e == 'string' || t0(e)) {
    var s = is(e, t);
    if (s === ge) return cs;
    var r = function r(i, n) {
      return !!s(i, n);
    };
    return s.allBasenames && (r.allBasenames = s.allBasenames), s.allPaths && (r.allPaths = s.allPaths), r;
  }
  return s0(e, t);
}

module.exports = {
  e0
};
