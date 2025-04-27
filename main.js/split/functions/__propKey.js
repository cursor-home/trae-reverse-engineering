export function __propKey(t) {
  return typeof t == 'symbol' ? t : ''.concat(t);
}