
// 模块: x0


function x0(e, t, s, r, i) {
  var n = process.stdout.isTTY && process.stdout.columns || 80,
    a = (i === null || i === void 0 ? void 0 : i.noInputFiles) !== !0 ? '['.concat(E(1866, null), '...]') : '',
    o = [''.concat(e, ' ').concat(s)];
  o.push(''), o.push(''.concat(E(1867, null), ': ').concat(t, ' [').concat(E(1868, null), ']').concat(a)), o.push(''), (i === null || i === void 0 ? void 0 : i.noPipe) !== !0 && (z ? o.push(E(1869, null, t)) : o.push(E(1870, null, t)), o.push(''));
  var c = {},
    l = [];
  for (var f in r) {
    var u = r[f];
    if (u.type === 'subcommand') u.description && l.push({
      command: f,
      description: u.description
    });else if (u.description && u.cat) {
      var h = c[u.cat];
      h || (c[u.cat] = h = {}), h[f] = u;
    }
  }
  for (var _f4 in c) {
    var _u3 = _f4,
      _h6 = c[_u3];
    _h6 && (o.push(vn[_u3]), o.push.apply(o, _toConsumableArray(D0(_h6, n))), o.push(''));
  }
  return l.length && (o.push(E(1871, null)), o.push.apply(o, _toConsumableArray(bn(l.map(function (f) {
    return [f.command, f.description];
  }), n))), o.push('')), o.join('\n');
}

module.exports = {
  x0
};
