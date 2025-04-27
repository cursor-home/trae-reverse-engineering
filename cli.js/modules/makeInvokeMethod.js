
// 模块: makeInvokeMethod


function makeInvokeMethod(e, r, n) {
  var o = h;
  return function (i, a) {
    if (o === f) throw Error('Generator is already running');
    if (o === s) {
      if ('throw' === i) throw a;
      return {
        value: t,
        done: !0
      };
    }
    for (n.method = i, n.arg = a;;) {
      var c = n.delegate;
      if (c) {
        var u = maybeInvokeDelegate(c, n);
        if (u) {
          if (u === y) continue;
          return u;
        }
      }
      if ('next' === n.method) n.sent = n._sent = n.arg;else if ('throw' === n.method) {
        if (o === h) throw o = s, n.arg;
        n.dispatchException(n.arg);
      } else 'return' === n.method && n.abrupt('return', n.arg);
      o = f;
      var p = tryCatch(e, r, n);
      if ('normal' === p.type) {
        if (o = n.done ? s : l, p.arg === y) continue;
        return {
          value: p.arg,
          done: n.done
        };
      }
      'throw' === p.type && (o = s, n.method = 'throw', n.arg = p.arg);
    }
  };
}

module.exports = {
  makeInvokeMethod
};
