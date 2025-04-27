
// 模块: Ye


function Ye(e, t, s) {
  var r = Li(s);
  if (!Xt) return k.writeFileSync(e, t, {
    mode: r.mode,
    flag: r.flag
  });
  var i = k.openSync(e, r.flag, r.mode);
  try {
    k.writeFileSync(i, t);
    try {
      k.fdatasyncSync(i);
    } catch (n) {
      console.warn('[node.js fs] fdatasyncSync is now disabled for this session because it failed: ', n), xi(!1);
    }
  } finally {
    k.closeSync(i);
  }
}

module.exports = {
  Ye
};
