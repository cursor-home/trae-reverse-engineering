
// 模块: wrap


function wrap(t, e, r, n) {
  var i = e && e.prototype instanceof Generator ? e : Generator,
    a = Object.create(i.prototype),
    c = new Context(n || []);
  return o(a, '_invoke', {
    value: makeInvokeMethod(t, r, c)
  }), a;
}

module.exports = {
  wrap
};
