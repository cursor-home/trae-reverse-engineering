
// 模块: U2


function U2(e, t, s, r) {
  if (!Xt) return k.writeFile(e, t, {
    mode: s.mode,
    flag: s.flag
  }, r);
  k.open(e, s.flag, s.mode, function (i, n) {
    if (i) return r(i);
    k.writeFile(n, t, function (a) {
      if (a) return k.close(n, function () {
        return r(a);
      });
      k.fdatasync(n, function (o) {
        return o && (console.warn('[node.js fs] fdatasync is now disabled for this session because it failed: ', o), xi(!1)), k.close(n, function (c) {
          return r(c);
        });
      });
    });
  });
}

module.exports = {
  U2
};
