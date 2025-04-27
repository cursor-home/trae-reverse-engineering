
// 模块: values


function values(e) {
  if (e || '' === e) {
    var r = e[a];
    if (r) return r.call(e);
    if ('function' == typeof e.next) return e;
    if (!isNaN(e.length)) {
      var o = -1,
        i = function next() {
          for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
          return next.value = t, next.done = !0, next;
        };
      return i.next = i;
    }
  }
  throw new TypeError(_typeof(e) + ' is not iterable');
}

module.exports = {
  values
};
