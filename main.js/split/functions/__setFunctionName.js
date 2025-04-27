export function __setFunctionName(t, e, i) {
  return (
    typeof e == 'symbol' && (e = e.description ? '['.concat(e.description, ']') : ''),
    Object.defineProperty(t, 'name', { configurable: !0, value: i ? ''.concat(i, ' ', e) : e })
  );
}