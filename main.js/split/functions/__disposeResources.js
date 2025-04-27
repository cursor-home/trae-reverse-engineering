export function __disposeResources(t) {
  function e(s) {
    (t.error = t.hasError ? new UI(s, t.error, 'An error was suppressed during disposal.') : s),
      (t.hasError = !0);
  }
  function i() {
    for (; t.stack.length; ) {
      var s = t.stack.pop();
      try {
        var r = s.dispose && s.dispose.call(s.value);
        if (s.async)
          return Promise.resolve(r).then(i, function (n) {
            return e(n), i();
          });
      } catch (n) {
        e(n);
      }
    }
    if (t.hasError) throw t.error;
  }
  return i();
}