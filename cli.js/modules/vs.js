
// 模块: vs


function vs(e, t) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
  return kt(e) ? (kt(t) && Object.keys(t).forEach(function (r) {
    r in e ? s && (kt(e[r]) && kt(t[r]) ? vs(e[r], t[r], s) : e[r] = t[r]) : e[r] = t[r];
  }), e) : t;
}

module.exports = {
  vs
};
