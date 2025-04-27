
// 模块: Q2


function Q2(e, t) {
  return function (s, r) {
    return typeof s == 'string' && s.endsWith(e) ? t : null;
  };
}

module.exports = {
  Q2
};
