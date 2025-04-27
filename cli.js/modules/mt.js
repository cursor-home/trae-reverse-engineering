
// 模块: mt


function mt(e, t) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8;
  var r = '';
  for (var n = 0; n < s; n++) {
    var a = void 0;
    n === 0 && z && !t && (s === 3 || s === 4) ? a = ei : a = Xr, r += a.charAt(Math.floor(Math.random() * a.length));
  }
  var i;
  return t ? i = ''.concat(t, '-').concat(r) : i = r, e ? re(e, i) : i;
}

module.exports = {
  mt
};
