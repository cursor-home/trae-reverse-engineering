
// 模块: To


function To(e, t) {
  var _Ro;
  var s = (_Ro = Ro()) === null || _Ro === void 0 ? void 0 : _Ro[e];
  if (typeof s != 'string') {
    if (typeof t == 'string') return t;
    throw new Error('!!! NLS MISSING: '.concat(e, ' !!!'));
  }
  return s;
}

module.exports = {
  To
};
