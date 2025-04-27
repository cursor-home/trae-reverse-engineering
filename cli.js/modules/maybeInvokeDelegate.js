
// 模块: maybeInvokeDelegate


function maybeInvokeDelegate(e, r) {
  var n = r.method,
    o = e.iterator[n];
  if (o === t) return r.delegate = null, 'throw' === n && e.iterator['return'] && (r.method = 'return', r.arg = t, maybeInvokeDelegate(e, r), 'throw' === r.method) || 'return' !== n && (r.method = 'throw', r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
  var i = tryCatch(o, e.iterator, r.arg);
  if ('throw' === i.type) return r.method = 'throw', r.arg = i.arg, r.delegate = null, y;
  var a = i.arg;
  return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, 'return' !== r.method && (r.method = 'next', r.arg = t), r.delegate = null, y) : a : (r.method = 'throw', r.arg = new TypeError('iterator result is not an object'), r.delegate = null, y);
}

module.exports = {
  maybeInvokeDelegate
};
