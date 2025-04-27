export function __rest(t, e) {
  var i = {};
  for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && e.indexOf(s) < 0 && (i[s] = t[s]);
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var r = 0, s = Object.getOwnPropertySymbols(t); r < s.length; r++)
      e.indexOf(s[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, s[r]) &&
        (i[s[r]] = t[s[r]]);
  return i;
}