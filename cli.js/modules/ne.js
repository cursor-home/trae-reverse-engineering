
// 模块: ne


function ne(t, s) {
  var _this27 = this;
  _classCallCheck(this, ne);
  this.a = 0, this.b = [], this.d = null, this.f = s, this.g = new ae(), queueMicrotask(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var r;
    return _regeneratorRuntime().wrap(function _callee6$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          r = {
            emitOne: function emitOne(i) {
              return _this27.h(i);
            },
            emitMany: function emitMany(i) {
              return _this27.j(i);
            },
            reject: function reject(i) {
              return _this27.l(i);
            }
          };
          _context18.prev = 1;
          _context18.next = 4;
          return Promise.resolve(t(r));
        case 4:
          _this27.k();
          _context18.next = 10;
          break;
        case 7:
          _context18.prev = 7;
          _context18.t0 = _context18['catch'](1);
          _this27.l(_context18.t0);
        case 10:
          _context18.prev = 10;
          r.emitOne = void 0, r.emitMany = void 0, r.reject = void 0;
          return _context18.finish(10);
        case 13:
        case 'end':
          return _context18.stop();
      }
    }, _callee6, null, [[1, 7, 10, 13]]);
  })));
}

module.exports = {
  ne
};
