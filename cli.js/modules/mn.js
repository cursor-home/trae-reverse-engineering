
// 模块: Mn


function Mn(e) {
  if (!e || _typeof(e) != 'object' || e instanceof RegExp) return e;
  var t = Array.isArray(e) ? [] : {};
  return Object.entries(e).forEach(function (_ref25) {
    var _ref26 = _slicedToArray(_ref25, 2),
      s = _ref26[0],
      r = _ref26[1];
    t[s] = r && _typeof(r) == 'object' ? Mn(r) : r;
  }), t;
}

module.exports = {
  Mn
};
