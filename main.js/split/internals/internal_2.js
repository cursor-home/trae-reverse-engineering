 s < r; s++) {
          i = arguments[s];
          for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        }
        return e;
      }),
    __assign.apply(this, arguments)
  );
};
