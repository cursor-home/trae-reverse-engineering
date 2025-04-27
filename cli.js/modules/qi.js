
// 模块: qi


function qi(e, t) {
  var s = e.filter(function (o) {
    return !!o.basenames;
  });
  if (s.length < 2) return e;
  var r = s.reduce(function (o, c) {
    var l = c.basenames;
    return l ? o.concat(l) : o;
  }, []);
  var i;
  if (t) {
    i = [];
    for (var o = 0, c = r.length; o < c; o++) i.push(t);
  } else i = s.reduce(function (o, c) {
    var l = c.patterns;
    return l ? o.concat(l) : o;
  }, []);
  var n = function n(o, c) {
    if (typeof o != 'string') return null;
    if (!c) {
      var f;
      for (f = o.length; f > 0; f--) {
        var u = o.charCodeAt(f - 1);
        if (u === 47 || u === 92) break;
      }
      c = o.substr(f);
    }
    var l = r.indexOf(c);
    return l !== -1 ? i[l] : null;
  };
  n.basenames = r, n.patterns = i, n.allBasenames = r;
  var a = e.filter(function (o) {
    return !o.basenames;
  });
  return a.push(n), a;
}

module.exports = {
  qi
};
