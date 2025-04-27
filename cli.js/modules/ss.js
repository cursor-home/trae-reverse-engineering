
// 模块: ss


function ss(e, t, s) {
  var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var i = !1;
  return new Promise(function (n) {
    var a = setTimeout(function () {
      if (!i) return i = !0, n(0);
    }, s);
    rs(e, t, r, function (o) {
      if (!i) return i = !0, clearTimeout(a), n(o);
    });
  });
}

module.exports = {
  ss
};
