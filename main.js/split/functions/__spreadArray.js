export function __spreadArray(t, e, i) {
  if (i || arguments.length === 2)
    for (var s = 0, r = e.length, n; s < r; s++)
      (n || !(s in e)) && (n || (n = Array.prototype.slice.call(e, 0, s)), (n[s] = e[s]));
  return t.concat(n || Array.prototype.slice.call(e));
}