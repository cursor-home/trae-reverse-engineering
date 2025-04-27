
// 模块: Z2


function Z2(e, t) {
  var s = qi(e.slice(1, -1).split(',').map(function (o) {
      return is(o, t);
    }).filter(function (o) {
      return o !== ge;
    }), e),
    r = s.length;
  if (!r) return ge;
  if (r === 1) return s[0];
  var i = function i(o, c) {
      for (var l = 0, f = s.length; l < f; l++) if (s[l](o, c)) return e;
      return null;
    },
    n = s.find(function (o) {
      return !!o.allBasenames;
    });
  n && (i.allBasenames = n.allBasenames);
  var a = s.reduce(function (o, c) {
    return c.allPaths ? o.concat(c.allPaths) : o;
  }, []);
  return a.length && (i.allPaths = a), i;
}

module.exports = {
  Z2
};
