
var UI =
  typeof SuppressedError == 'function'
    ? SuppressedError
    : function (t, e, i) {
        var s = new Error(i);
        return (s.name = 'SuppressedError'), (s.error = t), (s.suppressed = e), s;
      };
