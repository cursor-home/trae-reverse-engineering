export function __classPrivateFieldGet(t, e, i, s) {
  if (i === 'a' && !s) throw new TypeError('Private accessor was defined without a getter');
  if (typeof e == 'function' ? t !== e || !s : !e.has(t))
    throw new TypeError('Cannot read private member from an object whose class did not declare it');
  return i === 'm' ? s : i === 'a' ? s.call(t) : s ? s.value : e.get(t);
}