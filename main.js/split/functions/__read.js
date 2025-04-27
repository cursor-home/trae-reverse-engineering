export function __read(t, e) {
  var i = typeof Symbol == 'function' && t[Symbol.iterator];
  if (!i) return t;
  var s = i.call(t),
    r,
    n = [],
    o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = s.next()).done; ) n.push(r.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      r && !r.done && (i = s.return) && i.call(s);
    } finally {
      if (o) throw o.error;
    }
  }
  return n;
}