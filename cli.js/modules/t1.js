
// 模块: t1


function t1(e) {
  if (Oe.serviceIds.has(e)) return Oe.serviceIds.get(e);
  var _t6 = function t(s, r, i) {
    if (arguments.length !== 3) throw new Error('@IServiceName-decorator can only be used to decorate a parameter');
    c0(_t6, s, i);
  };
  return _t6.toString = function () {
    return e;
  }, Oe.serviceIds.set(e, _t6), _t6;
}

module.exports = {
  t1
};
