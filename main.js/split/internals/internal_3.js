
      var r = Object.getOwnPropertyDescriptor(e, i);
      (!r || ('get' in r ? !e.__esModule : r.writable || r.configurable)) &&
        (r = {
          enumerable: !0,
          get: function () {
            return e[i];
          },
        }),
        Object.defineProperty(t, s, r);
    }
  : function (t, e, i, s) {
      s === void 0 && (s = i), (t[s] = e[i]);
    };
