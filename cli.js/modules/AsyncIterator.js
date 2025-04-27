
// 模块: AsyncIterator


function AsyncIterator(t, e) {
  function invoke(r, o, i, a) {
    var c = tryCatch(t[r], t, o);
    if ('throw' !== c.type) {
      var u = c.arg,
        h = u.value;
      return h && 'object' == _typeof(h) && n.call(h, '__await') ? e.resolve(h.__await).then(function (t) {
        invoke('next', t, i, a);
      }, function (t) {
        invoke('throw', t, i, a);
      }) : e.resolve(h).then(function (t) {
        u.value = t, i(u);
      }, function (t) {
        return invoke('throw', t, i, a);
      });
    }
    a(c.arg);
  }
  var r;
  o(this, '_invoke', {
    value: function value(t, n) {
      function callInvokeWithMethodAndArg() {
        return new e(function (e, r) {
          invoke(t, n, e, r);
        });
      }
      return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }
  });
}

module.exports = {
  AsyncIterator
};
