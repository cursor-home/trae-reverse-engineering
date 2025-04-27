
// 模块: invoke


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

module.exports = {
  invoke
};
