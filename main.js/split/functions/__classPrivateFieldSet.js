export function __classPrivateFieldSet(t, e, i, s, r) {
  if (s === 'm') throw new TypeError('Private method is not writable');
  if (s === 'a' && !r) throw new TypeError('Private accessor was defined without a setter');
  if (typeof e == 'function' ? t !== e || !r : !e.has(t))
    throw new TypeError('Cannot write private member to an object whose class did not declare it');
  return s === 'a' ? r.call(t, i) : r ? (r.value = i) : e.set(t, i), i;
}