
// 模块: R0


function R0(e) {
  var t = e.findIndex(function (s) {
    return !/^-/.test(s);
  });
  if (t > -1) return [].concat(_toConsumableArray(e.slice(0, t)), _toConsumableArray(e.slice(t + 1)));
}

module.exports = {
  R0
};
