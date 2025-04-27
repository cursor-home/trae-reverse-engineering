export function __runInitializers(t, e, i) {
  for (var s = arguments.length > 2, r = 0; r < e.length; r++)
    i = s ? e[r].call(t, i) : e[r].call(t);
  return s ? i : void 0;
}