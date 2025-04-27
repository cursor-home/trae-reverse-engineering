
// 模块: define


function define(t, e, r) {
  return Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }), t[e];
}

module.exports = {
  define
};
