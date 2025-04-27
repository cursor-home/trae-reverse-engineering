
// 模块: Pi


function Pi(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e3;
  return new Promise(function (s) {
    var r = !1;
    var i = setInterval(function () {
      r || (r = !0, k.access(e, function (n) {
        r = !1, n && (clearInterval(i), s(void 0));
      }));
    }, t);
  });
}

module.exports = {
  Pi
};
