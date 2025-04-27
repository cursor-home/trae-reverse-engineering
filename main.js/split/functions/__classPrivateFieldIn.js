export function __classPrivateFieldIn(t, e) {
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof t == 'function' ? e === t : t.has(e);
}