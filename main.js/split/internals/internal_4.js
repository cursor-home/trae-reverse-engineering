
var BI = Object.create
  ? function (t, e) {
      Object.defineProperty(t, 'default', { enumerable: !0, value: e });
    }
  : function (t, e) {
      t.default = e;
    };
