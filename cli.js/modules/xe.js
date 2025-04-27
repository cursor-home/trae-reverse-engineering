
// 模块: xe


function xe(e) {
  var s = e.indexOf('--');
  for (var _len11 = arguments.length, t = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
    t[_key11 - 1] = arguments[_key11];
  }
  return s === -1 ? e.push.apply(e, t) : e.splice.apply(e, [s, 0].concat(t)), e;
}

module.exports = {
  xe
};
